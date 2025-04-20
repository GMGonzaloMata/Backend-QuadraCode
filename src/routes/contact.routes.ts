import { Router, RequestHandler } from "express";
import { sendContactEmail, ping } from "../controllers/contact.controller";

const router = Router();

router.post("/", sendContactEmail as RequestHandler);
router.get("/ping", ping);

export default router;
