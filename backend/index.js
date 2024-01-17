const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require("dotenv");
const database = require("./config/database");
const cartRoutes = require("./routes/ViewCart");
const userRoutes = require("./routes/user");
const sellerRoutes = require("./routes/Seller");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const contactusRoutes = require("./routes/contactUs");
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/files", express.static("files"));
dotenv.config();
database.connect();

app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/contact", contactusRoutes);
app.use("/api/v1/seller", sellerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
