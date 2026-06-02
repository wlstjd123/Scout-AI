require("dotenv").config();

const express = require("express");
const cors = require("cors");

const summonerRoutes = require("./routes/summonerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", summonerRoutes);

app.get("/", (req, res) => {
    res.send("Scout.AI Server Running");
});

const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});