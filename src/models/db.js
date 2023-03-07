import { userMemStore } from "./mem/user-mem-store.js";
import { venueMemStore } from "./mem/venue-mem-store.js";

export const db = {
  userStore: null,
  venueStore: null,

  init() {
    this.userStore = userMemStore;
    this.venueStore = venueMemStore;
  },
};
