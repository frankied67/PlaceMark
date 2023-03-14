// import { userMemStore } from "./mem/user-mem-store.js";
// import { venueMemStore } from "./mem/venue-mem-store.js";
// import { eventMemStore } from "./mem/event-mem-store.js";

import { userJsonStore } from "./json/user-json-store.js";
import { venueJsonStore } from "./json/venue-json-store.js";
import { eventJsonStore } from "./json/event-json-store.js";

export const db = {
  userStore: null,
  venueStore: null,
  eventStore: null,

  init() {
    this.userStore = userJsonStore;
    this.venueStore = venueJsonStore;
    this.eventStore = eventJsonStore;
  },
};
