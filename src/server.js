const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { connectDB } = require("./config/db.js");
const userRouter=require("./routes/userRoutes.js");
const noteRouter=require("./routes/noteRoutes.js");

const app = express();
app.use(cors());
connectDB();
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Hello from server");
});

app.use("/api/user", userRouter);
app.use("/api/note", noteRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
