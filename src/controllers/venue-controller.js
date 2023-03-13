import { db } from "../models/db.js";

export const venueController = {
  index: {
    handler: async function (request, h) {
      const venue = await db.venueStore.getVenueById(request.params.id);
      const viewData = {
        name: "Venue",
        venue: venue,
      };
      return h.view("venue-view", viewData);
    },
  },

  addEvent: {
    handler: async function (request, h) {
      const venue = await db.venueStore.getVenueById(request.params.id);
      const newEvent = {
        event: request.payload.event,
        artist: request.payload.artist,
        date: request.payload.date,
        time: request.payload.time,
      };
      await db.eventStore.addEvent(venue._id, newEvent);
      return h.redirect(`/venue/${venue._id}`);
    },
  },

  deleteEvent: {
    handler: async function(request, h) {
      const venue = await db.venueStore.getVenueById(request.params.id);
      await db.eventStore.deleteEvent(request.params.eventid);
      return h.redirect(`/venue/${venue._id}`);
    },
  },
};