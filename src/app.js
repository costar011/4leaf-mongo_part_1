import express from "express";
import dotenv from "dotenv";
import connect from "../db/mongo";
import Student from "../models/Student";

dotenv.config();

const app = express();

connect();
app.set(`PORT`, process.env.PORT);

app.get("/", async (req, res) => {
  const result = await Student.find(
    {
      age: { $lte: 15 },
    },
    {}
  );
  res.send(result);
});

app.get("/middleSchool", async (req, res) => {
  const result = await Student.find(
    {
      age: { $lte: 16, $gte: 14 },
    },
    {}
  );
  res.send(result);
});

app.get("/highSchool", async (req, res) => {
  const result = await Student.find(
    {
      age: { $lte: 19, $gte: 17 },
    },
    {}
  );
  res.send(result);
});

app.listen(app.get(`PORT`), () => {
  console.log(`Server Start ::`, app.get(`PORT`));
});
