import express from "express";
import { addcastcrew } from "../controllers/castcrew.controllers.js";
import multer from "multer";
import { getallcastcrew } from "../controllers/castcrew.controllers.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

const router = express.Router();

// router.post("/castcrew", upload.single("image"), addcastcrew);
router.post("/castcrew", addcastcrew);
router.get("/castcrew", getallcastcrew);

export default router;
