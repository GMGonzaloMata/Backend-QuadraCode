import { Router, RequestHandler } from "express";
import {
  sendContactEmail,
  sendContactSimpleEmail,
  ping,
} from "../controllers/contact.controller";

const router = Router();

router.post("/Lossa", sendContactSimpleEmail as RequestHandler);
router.post("/", sendContactEmail as RequestHandler);
router.get("/ping", ping);

export default router;
