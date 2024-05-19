const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const PORT = process.env.PORT || 7000;

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.get("/api/scenarios", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const scenarios = JSON.parse(data).scenarios;

    res.json(scenarios);
  });
});

app.post("/api/scenarios", (req, res) => {
  const newScenario = req.body;
  newScenario.id = uuidv4();

  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    const jsonData = JSON.parse(data);
    jsonData.scenarios.push(newScenario);

    console.log(newScenario, "kishoooo");
    fs.writeFile("data.json", JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      const response = {
        data: newScenario,
        status: 200,
        statusText: "OK",
        message: "Scenario Added Successfully",
      };

      res.json(response);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
