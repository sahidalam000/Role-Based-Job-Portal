// import app from "./app.js";
// import cloudinary from "cloudinary";
// import { dbConnection } from "./database/dbConnection.js";

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
//   api_key: process.env.CLOUDINARY_CLIENT_API,
//   api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
// });


// const PORT = 9000;

// dbConnection().then(() => {
//   app.listen(PORT, () => {
//       console.log(`server running at port: ${PORT} `)
//     });
//   });


//   (async () => {
//     await dbConnection(); // Ensure DB connection is established first
//     app.listen(PORT, () => {
//       console.log(`Server running at port: ${PORT}`);
//     });
//   })();



import dotenv from "dotenv";
dotenv.config(); // Load environment variables

import app from "./app.js";
import cloudinary from "cloudinary";
import { dbConnection } from "./database/dbConnection.js";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

const PORT = process.env.PORT || 9000;

(async () => {
  await dbConnection(); // Ensure DB connection is established first
  app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
  });
})();
