DROP TABLE IF EXISTS users;
CREATE TABLE users(
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  role TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT UNIQUE,
  password TEXT NOT NULL
);

INSERT INTO users(name, role, email, password)
VALUES('Admin', 'admin', 'admin@gmail.com', 'admin');

INSERT INTO users(name, role, email, password)
VALUES('Usuario01', 'user', 'usuario01@gmail.com', 'password01');

INSERT INTO users(name, role, email, password)
VALUES('Usuario02', 'user', 'usuario02@gmail.com', 'password02');

INSERT INTO users(name, role, email, password)
VALUES('Usuario03', 'user', 'usuario03@gmail.com', 'password03');

INSERT INTO users(name, role, email, password)
VALUES('Usuario04', 'user', 'usuario04@gmail.com', 'password04');

INSERT INTO users(name, role, email, password)
VALUES('Usuario05', 'user', 'usuario05@gmail.com', 'password05');
