const express = require("express");
const cors = require("cors");
const app = express();
const port = 8001;

const userRoutes = require("./router/userData");
const handymanRoutes = require("./router/handymanData");
const servicesRoutes = require("./router/servicesData");
const jobsRoutes = require("./router/jobsData");
const reviewsRoutes = require("./router/reviewsData");

//middleware to allow us to POST and get JSON from our endpoints.
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/user", userRoutes);
app.use("/handyman", handymanRoutes);
app.use("/services", servicesRoutes);
app.use("/jobs", jobsRoutes);
app.use("/reviews", reviewsRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
