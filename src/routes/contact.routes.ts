import { Router, RequestHandler} from "express";
import { sendContactEmail } from "../controllers/contact.controller";

const router = Router();

router.post("/", sendContactEmail as RequestHandler);


export default router;
