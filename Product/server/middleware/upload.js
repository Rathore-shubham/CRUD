import multer from "multer";

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => cb(null, Date.now() + "_" + file.originalname)
});

const Upload = multer({ storage });

export default Upload