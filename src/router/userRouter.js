import { Router } from "express";
import UserController from "../controller/userController.js";

const router = Router();

router.get("/", UserController.obtenerUsuarios);

export default router;