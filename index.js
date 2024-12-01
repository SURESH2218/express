import express from "express";
const app = express();

const users = [
  {
    name: "suresh",
    kidneys: [
      {
        helathy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(3000);
