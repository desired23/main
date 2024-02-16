import { Router } from "express";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../connect/clodynary.js";
import multer from "multer";
import { uploadImages } from "../controllers/upload.js";

const routerImages = Router();

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "comic",
    },
});

const upload = multer({ storage: storage })
routerImages.post("/upload", upload.array("images", 10), uploadImages);
// routerImages.delete("/remove/:publicId", removeImages);


export default routerImages;
