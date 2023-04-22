const db = require("../db/dbConfig");

const getAllGreenscores = async () => {
  try {
    const allGreenscores = await db.any("SELECT * FROM Greenscores");
    return allGreenscores;
  } catch (error) {
    return error;
  }
};

const getGreenscore = async (id) => {
  try {
    const oneGreenscore = await db.oneOrNone(
      "SELECT * FROM greenscores WHERE id = $1",
      id
    );
    return oneGreenscore;
  } catch (error) {
    return error;
  }
};

const createGreenscore = async (greenscore) => {
  try {
    const newGreenscore = db.one(
      "INSERT INTO greenscores (name, date, person, place, thing, mood, is_favorite, notes, photo_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        greenscore.name,
        greenscore.date,
        greenscore.person,
        greenscore.place,
        greenscore.thing,
        greenscore.mood,
        greenscore.is_favorite,
        greenscore.notes,
        greenscore.photo_url,
      ]
    );
    return newGreenscore;
  } catch (error) {
    return error;
  }
};

const deleteGreenscore = async (id) => {
  try {
    const deletedGreenscore = await db.one(
      "DELETE FROM greenscores WHERE id = $1 RETURNING *",
      id
    );
    return deletedGreenscore;
  } catch (error) {
    return error;
  }
};

const updateGreenscore = async (id, Greenscore) => {
  try {
    const updatedGreenscore = await db.one(
      "UPDATE greenscores SET name=$1, date=$2, person=$3, place=$4, thing=$5, mood=$6, is_favorite=$7, notes=$8, photo_url=$9 WHERE id=$10 RETURNING *",
      [
        Greenscore.name,
        Greenscore.date,
        Greenscore.person,
        Greenscore.place,
        Greenscore.thing,
        Greenscore.mood,
        Greenscore.is_favorite,
        Greenscore.notes,
        Greenscore.photo_url,
        id,
      ]
    );
    return updatedGreenscore;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllGreenscores,
  getGreenscore,
  createGreenscore,
  deleteGreenscore,
  updateGreenscore,
};
