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
        title: request.payload.title,
      };
      await db.venueStore.addVenue(newVenue);
      return h.redirect("/dashboard");
    },
  },
};
