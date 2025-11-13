import User from "../models/User.js";

export const getGameState = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ message: "Nie znaleziono użytkownika" });
    res.json({ state: user.gameState || {} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Błąd pobierania stanu gry" });
  }
};

export const saveGameState = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ message: "Nie znaleziono użytkownika" });

    user.gameState = req.body.gameState || {};
    user.lastSavedAt = new Date();
    await user.save();

    res.json({ message: "Stan gry zapisany", gameState: user.gameState });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Błąd zapisu stanu gry" });
  }
};
