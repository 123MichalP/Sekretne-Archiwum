import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    if(!username || !password) return res.status(400).json({ message: "Brakuje danych" });

    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) return res.status(400).json({ message: "Użytkownik już istnieje" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });

    res.status(201).json({ message: "Użytkownik zarejestrowany", username: user.username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Błąd serwera" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if(!username || !password) return res.status(400).json({ message: "Brakuje danych" });

    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ message: "Nie znaleziono użytkownika" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Nieprawidłowe hasło" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "2h" });

    res.json({ token, username: user.username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Błąd logowania" });
  }
};
