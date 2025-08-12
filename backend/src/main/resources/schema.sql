CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS quotes (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    category_id INTEGER NOT NULL,
    image_url TEXT
);