import { userMemStore } from "./mem/user-mem-store.js";
import { venueMemStore } from "./mem/venue-mem-store.js";
import { eventMemStore } from "./mem/event-mem-store.js";

export const db = {
  userStore: null,
  venueStore: null,
  eventStore: null,

  init() {
    this.userStore = userMemStore;
    this.venueStore = venueMemStore;
    this.eventStore = eventMemStore;
  },
};
