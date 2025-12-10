import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import gameRoutes from "./routes/gameRoutes.js";
import User from "./models/User.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/game", gameRoutes);

const port = process.env.PORT || 5002;

sequelize.sync({ alter: true })
  .then(() => {
    console.log(" Połączono z bazą danych");
    app.listen(port, () => {
      console.log(`Server działa na porcie ${port}`);
    });
  })
  .catch(err => console.error(" Błąd połączenia z bazą:", err));
