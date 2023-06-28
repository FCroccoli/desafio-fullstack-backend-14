import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.middleware";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import { verifyUserIsActive } from "../middlewares/verifyUserIsActive.middleware";
import {
  createContactSerializer,
  updateContactSerializer,
} from "../serializers/contact";
import { createContactController } from "../controllers/contact/createContact.controller";
import { getContactsController } from "../controllers/contact/getContacts.controller";
import { verifyContactExists } from "../middlewares/verifyContactExists";
import { deleteContactController } from "../controllers/contact/deleteContact.controller";
import { updateContactController } from "../controllers/contact/updateContact.controller";

const contactRoutes = Router();

contactRoutes.post(
  "",
  validateToken,
  verifyUserIsActive,
  validateSchema(createContactSerializer),
  createContactController
);

contactRoutes.get("", validateToken, verifyUserIsActive, getContactsController);

contactRoutes.delete(
  "/:id",
  validateToken,
  verifyUserIsActive,
  verifyContactExists,
  deleteContactController
);

contactRoutes.patch(
  "/:id",
  validateToken,
  verifyUserIsActive,
  verifyContactExists,
  validateSchema(updateContactSerializer),
  updateContactController
);

export default contactRoutes;
