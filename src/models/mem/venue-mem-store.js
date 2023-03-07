import { v4 } from "uuid";

let venues = [];

export const venueMemStore = {
  async getAllVenuess() {
    return venues;
  },

  async addVenue(venue) {
    venue._id = v4();
    venues.push(venue);
    return venue;
  },

  async getVenueById(id) {
    return venues.find((venue) => venue._id === id);
  },

  async deleteVenueById(id) {
    const index = venues.findIndex((venue) => venue._id === id);
    venues.splice(index, 1);
  },

  async deleteAllVenues() {
    venues = [];
  },
};
