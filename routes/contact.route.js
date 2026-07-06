import express from "express";
import {
  createContact,
  getAllContacts,
  deleteContact,
} from "../controllers/contact.controller.js";

const router = express.Router();

// Create a new contact message
router.post("/", createContact);

// Get all contact messages
router.get("/", getAllContacts);

// Delete a contact message
router.delete("/:id", deleteContact);

export default router;