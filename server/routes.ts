import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { subscribeSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Email subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const validatedData = subscribeSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscriber = await storage.getSubscriberByEmail(validatedData.email);
      if (existingSubscriber) {
        return res.status(409).json({
          message: "This email is already subscribed to our newsletter."
        });
      }
      
      // Save new subscriber
      const subscriber = await storage.createSubscriber(validatedData);
      
      return res.status(201).json({
        message: "Successfully subscribed to the newsletter",
        data: subscriber
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Invalid data provided",
          errors: error.errors
        });
      }
      
      // Handle other errors
      console.error("Error subscribing email:", error);
      return res.status(500).json({
        message: "An error occurred while processing your subscription"
      });
    }
  });

  // Get subscriber count (for potential display on frontend)
  app.get("/api/subscribers/count", async (req, res) => {
    try {
      const count = await storage.getSubscriberCount();
      return res.status(200).json({ count });
    } catch (error) {
      console.error("Error getting subscriber count:", error);
      return res.status(500).json({
        message: "An error occurred while fetching subscriber count"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
