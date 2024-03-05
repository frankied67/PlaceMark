// import { userMemStore } from "./mem/user-mem-store.js";
// import { locationMemStore } from "./mem/location-mem-store.js";
// import { monumentMemStore } from "./mem/monument-mem-store.js";

import { userJsonStore } from "./json/user-json-store.js";
import { locationJsonStore } from "./json/location-json-store.js";
import { monumentJsonStore } from "./json/monument-json-store.js";

export const db = {
  userStore: null,
  locationStore: null,
  monumentStore: null,

  init() {
    this.userStore = userJsonStore;
    this.locationStore = locationJsonStore;
    this.monumentStore = monumentJsonStore;
  },
};
