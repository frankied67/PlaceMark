import { v4 } from "uuid";
import { eventMemStore } from "./event-mem-store.js";

let venues = [];

export const venueMemStore = {
  async getAllVenues() {
    return venues;
  },

  async addVenue(venue) {
    venue._id = v4();
    venues.push(venue);
    return venue;
  },

  async getVenueById(id) {
    const list = venues.find((venue) => venue._id === id);
    list.events = await eventMemStore.getEventsByVenueId(list._id);
    return list;
  },

  async deleteVenueById(id) {
    const index = venues.findIndex((venue) => venue._id === id);
    venues.splice(index, 1);
  },

  async deleteAllVenues() {
    venues = [];
  },
};
