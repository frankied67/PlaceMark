import { v4 } from "uuid";

let events = [];

export const eventMemStore = {
  async getAllEvents() {
    return events;
  },

  async addEvent(venueId, event) {
    event._id = v4();
    event.venueid = venueId;
    events.push(event);
    return event;
  },

  async getEventsByVenueId(id) {
    return events.filter((event) => event.venueid === id);
  },

  async getEventById(id) {
    return events.find((event) => event._id === id);
  },

  async getVenueEvents(venueId) {
    return events.filter((event) => event.venueid === venueId);
  },

  async deleteEvent(id) {
    const index = events.findIndex((event) => event._id === id);
    events.splice(index, 1);
  },

  async deleteAllEvents() {
    events = [];
  },

  async updateEvent(event, updatedEvent) {
    event.event = updatedEvent.event;
    event.artist = updatedEvent.artist;
    event.date = updatedEvent.date;
    event.time = updatedEvent.time;
  },
};