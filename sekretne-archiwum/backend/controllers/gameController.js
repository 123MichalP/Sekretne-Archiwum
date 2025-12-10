import User from "../models/User.js";

export const getGameState = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ message: "Nie znaleziono użytkownika" });
    const gameState = user.gameState || {};
    const currentTime = gameState.timeElapsed !== undefined ? gameState.timeElapsed : (user.currentTime || 0);
    res.json({ state: gameState, currentTime });
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
    if (req.body.currentTime !== undefined) {
      user.currentTime = req.body.currentTime;
    }
    user.lastSavedAt = new Date();
    await user.save();

    res.json({ message: "Stan gry zapisany", gameState: user.gameState, currentTime: user.currentTime });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Błąd zapisu stanu gry" });
  }
};

export const endGame = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ message: "Nie znaleziono użytkownika" });

    const { time } = req.body;
    if (typeof time !== 'number' || time <= 0) return res.status(400).json({ message: "Nieprawidłowy czas" });

    if (!user.bestTime || time < user.bestTime) {
      user.bestTime = time;
      await user.save();
      res.json({ message: "Nowy najlepszy czas zapisany", bestTime: user.bestTime });
    } else {
      res.json({ message: "Czas nie jest lepszy od najlepszego", bestTime: user.bestTime });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Błąd zakończenia gry" });
  }
};

export const getBestTime = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ message: "Nie znaleziono użytkownika" });
    res.json({ bestTime: user.bestTime });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Błąd pobierania najlepszego czasu" });
  }
};


