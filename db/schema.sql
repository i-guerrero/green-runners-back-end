DROP DATABASE IF EXISTS greenrunners_dev;
CREATE DATABASE greenrunners_dev;

\c greenrunners_dev;

CREATE TABLE greenscores (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    city TEXT,
    electric INT,
    gas INT,
    oil INT,
    car_mileage INT,
    short_flights INT,
    long_flights INT,
    recycle_newspaper BOOLEAN,
    recycle_aluminum BOOLEAN
);