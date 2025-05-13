const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Endpoint to save location data
app.post("/save-location", (req, res) => {
  const { latitude, longitude } = req.body;

  // Format the data and append to file
  const data = `Latitude: ${latitude}, Longitude: ${longitude}\n`;
  fs.appendFile("locations.txt", data, (err) => {
    if (err) {
      console.error("Failed to save location:", err);
      res.status(500).send("Ok.");
    } else {
      console.log("Location saved:", data);
      res.send("Ok.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});