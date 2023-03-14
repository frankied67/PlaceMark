import { v4 } from "uuid";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { eventJsonStore } from "./event-json-store.js";

const db = new Low(new JSONFile("./src/models/json/venues.json"));
db.data = { venues: [] };

export const venueJsonStore = {
  async getAllVenues() {
    await db.read();
    return db.data.venues;
  },

  async addVenue(venue) {
    await db.read();
    venue._id = v4();
    db.data.venues.push(venue);
    await db.write();
    return venue;
  },

  async getVenueById(id) {
    await db.read();
    const list = db.data.venues.find((venue) => venue._id === id);
    list.events = await eventJsonStore.getEventsByVenueId(list._id);
    return list;
  },

  async getUserVenues(userid) {
    await db.read();
    return db.data.venues.filter((venue) => venue.userid === userid);
  },

  async deleteVenueById(id) {
    await db.read();
    const index = db.data.venues.findIndex((venue) => venue._id === id);
    db.data.venues.splice(index, 1);
    await db.write();
  },

  async deleteAllVenues() {
    db.data.venues = [];
    await db.write();
  },
};