import multer from "multer";

const storage = multer.memoryStorage(); // or use diskStorage if you want to save files locally
export const upload = multer({ storage }).single("file"); //file name will same as used in the frontend post/append
