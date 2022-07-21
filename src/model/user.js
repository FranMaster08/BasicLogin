const fs = require("fs");
const path = require("path");
const fp = path.join(__dirname, "../db/user.json");

const createUser = (user) => {
  const data = getAllUsers();
  data.push(user);
  fs.writeFileSync(fp, JSON.stringify(data, null, 2), "utf-8");
  return user;
};
const updateUser = (id, user) => {
  const data = getUser(id);
  if (data) {
    const filtro = getAllUsers().filter((user) => user.id != id);
    filtro.push(user);
    fs.writeFileSync(fp, JSON.stringify(filtro, null, 2), "utf-8");
    return user;
  } else {
    return false;
  }
};
const deleteUser = (id) => {
  const data = getUser(id);
  if (data) {
    const filtro = getAllUsers().filter((user) => user.id != id);
    fs.writeFileSync(fp, JSON.stringify(filtro, null, 2), "utf-8");
    return data;
  } else {
    return false;
  }
};
const getUser = (id) => {
  return getAllUsers().find((user) => user.id == id);
};
const getAllUsers = () => {
  return JSON.parse(fs.readFileSync(fp, "utf8"));
};

const login = (user, password) => {
  const usuario = getAllUsers().find(
    item=> item.user_name == user && item.password == password
  );
  console.log("Probando login", password);
  if (usuario) {
    return usuario;
  } else {
    return false;
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  login,
};
