import { v4 } from "uuid";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const db = new Low(new JSONFile("./src/models/json/events.json"));
db.data = { events: [] };

export const eventJsonStore = {
  async getAllEvents() {
    await db.read();
    return db.data.events;
  },

  async addEvent(venueId, event) {
    await db.read();
    event._id = v4();
    event.venueid = venueId;
    db.data.events.push(event);
    await db.write();
    return event;
  },

  async getEventsByVenueId(id) {
    await db.read();
    return db.data.events.filter((event) => event.venueid === id);
  },

  async getEventById(id) {
    await db.read();
    return db.data.events.find((event) => event._id === id);
  },

  async deleteEvent(id) {
    await db.read();
    const index = db.data.events.findIndex((event) => event._id === id);
    db.data.events.splice(index, 1);
    await db.write();
  },

  async deleteAllEvents() {
    db.data.events = [];
    await db.write();
  },

  async updateEvent(event, updatedEvent) {
    event.event = updatedEvent.event;
    event.artist = updatedEvent.artist;
    event.date = updatedEvent.date;
    event.time = updatedEvent.time;
    await db.write();
  },
};