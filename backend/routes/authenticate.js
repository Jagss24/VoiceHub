import express from "express";
import {
  authentiCateOtpMobile,
  verifyOtpMobile,
  getUser,
  activateUser,
  autoReLoginFunctionality,
} from "../controllers/auth-controller.js";
import { authMiddleWarefunc } from "../middlewares/authMiddleWare.js";

const router = express.Router();

router.post("/sendOtp", authentiCateOtpMobile);

router.post("/verifyOtp", verifyOtpMobile);

router.get("/getUser", getUser);

router.post("/activate", authMiddleWarefunc, activateUser);

router.get("/autoReLogin", autoReLoginFunctionality);

export default router;
