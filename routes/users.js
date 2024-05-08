const usersRouter = require('express').Router();
const findAllUsers = require('../middlewares/users');
const sendAllUsers = require('../controllers/users');
const createUser = require('../middlewares/users');
const sendUserCreated = require('../controllers/users');
const findUserById = require('../middlewares/users');
const sendUserById = require('../controllers/users');
const updateUser = require('../middlewares/users');
const sendUserUpdated = require('../controllers/users');
const deleteUser = require('../middlewares/users');
const sendUserDeleted = require('../controllers/users');
const checkIsUserExists = require('../middlewares/users');
const checkEmptyNameAndEmailAndPassword = require('../middlewares/users');
const checkEmptyNameAndEmail = require('../middlewares/users');

usersRouter.get('/categories', findAllUsers, sendAllUsers);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    createUser,
    sendUserCreated
);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    updateUser,
    sendUserUpdated
);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;