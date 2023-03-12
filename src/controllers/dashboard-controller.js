import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const venues = await db.venueStore.getAllVenues();
      const viewData = {
        title: "PlaceMark Dashboard",
        venues: venues,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addVenue: {
    handler: async function (request, h) {
      const newVenue = {
        name: request.payload.name,
      };
      await db.venueStore.addVenue(newVenue);
      return h.redirect("/dashboard");
    },
  },
};
