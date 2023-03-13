import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const venues = await db.venueStore.getUserVenues(loggedInUser._id);
      const viewData = {
        title: "PlaceMark Dashboard",
        user: loggedInUser,
        venues: venues,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addVenue: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const newVenue = {
        userid: loggedInUser._id,
        name: request.payload.name,
      };
      await db.venueStore.addVenue(newVenue);
      return h.redirect("/dashboard");
    },
  },

  deleteVenue: {
    handler: async function(request, h) {
      const venue = await db.venueStore.getVenueById(request.params.id);
      await db.venueStore.deleteVenueById(venue._id);
      return h.redirect("/dashboard");
    },
  },
};
