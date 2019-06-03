CREATE TABLE users(
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  role TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT UNIQUE,
  password TEXT NOT NULL,
  FOREIGN KEY(id_role) REFERENCES roles(id_role)
);