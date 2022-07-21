const model = require("../model/user");

const create = (req, res) => {
  const user = req.body;
  const result = model.createUser(user);
  if (result) {
    res.status(201).json({ msg: ` creade user ${result.name}` });
  } else {
    res.status(404).json("not create");
  }
};
const update = (req, res) => {
  const user = req.body;
  const id = req.params.id;
  const result = model.updateUser(id, user);
  if (result) {
    res.status(201).json({ msg: ` update user ${result.name}` });
  } else {
    res.status(404).json({ msg: `not update ${user.name}` });
  }
};
const deleted = (req, res) => {
  const id = req.params.id;
  const result = model.deleteUser(id);
  if (result) {
    res.status(201).json({ msg: ` delete user ${result.name}` });
  } else {
    res.status(404).json({ msg: `not delete user by id : ${id}` });
  }
};
const find = (req, res) => {
  res.json(model.getAllUsers());
};
const finOne = (req, res) => {
  const data = model.getUser(req.params.id);
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ msg: `user not found` });
  }
};

const login = (req, res) => {
  const user = req.body;
  const result = model.login(user.user_name, user.password);
  if (result) {
    res.status(201).json({ msg: ` Bienvenido ${result.name}` });
  } else {
    res.status(401).json({ msg: `mail or password incorrect` });
  }
};

module.exports = {
  create,
  update,
  deleted,
  find,
  finOne,
  login,
};
