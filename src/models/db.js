import { userMemStore } from "./mem/user-mem-store.js";
import { locationMemStore } from "./mem/location-mem-store.js";
import { monumentMemStore } from "./mem/monument-mem-store.js";

export const db = {
  userStore: null,
  locationStore: null,
  monumentStore: null,

  init() {
    this.userStore = userMemStore;
    this.locationStore = locationMemStore;
    this.monumentStore = monumentMemStore;
  },
};
