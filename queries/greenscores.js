const db = require("../db/dbConfig");

const getAllGreenscores = async () => {
  try {
    const allGreenscores = await db.any("SELECT * FROM greenscores");
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
      "INSERT INTO greenscores (name, city, electric, gas, oil, car_mileage, short_flights, long_flights, recycle_newspaper, recycle_aluminum) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        greenscore.name,
        greenscore.city,
        greenscore.electric,
        greenscore.gas,
        greenscore.oil,
        greenscore.car_mileage,
        greenscore.short_flights,
        greenscore.long_flights,
        greenscore.recycle_newspaper,
        greenscore.recycle_aluminum,
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

const updateGreenscore = async (id, greenscore) => {
  try {
    const updatedGreenscore = await db.one(
      "UPDATE greenscores SET name=$1, city=$2, electric=$3, gas=$4, oil=$5, car_mileage=$6, short_flights=$7, long_flights=$8, recycle_newspaper=$9, recycle_aluminum=$10 WHERE id=$11 RETURNING *",
      [
        greenscore.name,
        greenscore.city,
        greenscore.electric,
        greenscore.gas,
        greenscore.oil,
        greenscore.car_mileage,
        greenscore.short_flights,
        greenscore.long_flights,
        greenscore.recycle_newspaper,
        greenscore.recycle_aluminum,
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
