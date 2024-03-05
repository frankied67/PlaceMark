import { db } from "../models/db.js";

export const locationController = {
  index: {
    handler: async function (request, h) {
      const location = await db.locationStore.getLocationById(request.params.id);
      const viewData = {
        title: "Location",
        location: location,
      };
      return h.view("location-view", viewData);
    },
  },

  addMonument: {
    handler: async function (request, h) {
      const location = await db.locationStore.getLocationById(request.params.id);
      const newMonument = {
        title: request.payload.title,
        latitude: Number(request.payload.latitude),
        longitude: Number(request.payload.longitude),
        category: request.payload.category,
      };
      await db.monumentStore.addMonument(location._id, newMonument);
      return h.redirect(`/location/${location._id}`);
    },
  },
};
