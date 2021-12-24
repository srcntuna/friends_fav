const express = require("express");
const db = require("../db/usersDb");
const appController = require("../controllers/controller");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const router = express.Router();

// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname));
// });
router.get("/customers", appController.getAllUsers, (req, res) => {
  //it is coming from Database
  res.json(res.locals.users);
});

router.post("/login", appController.checkUserLogin, (req, res) => {
  if (res.locals.error) {
    res.json(res.locals.error);
  } else {
    res.status(200).json("LOGIN SUCCESSFULL!");
  }
});

router.post("/insert", appController.checkUserSignUp, (req, res) => {
  if (res.locals.error) {
    res.json(res.locals.error);
  } else {
    const { fullname, username, email, password } = res.locals.users;

    bcrypt.hash(password, saltRounds, (err, hashed) => {
      if (err) console.log(err);

      console.log(hashed);

      const sqlInsert =
        "INSERT INTO users (fullname,username,email,password) VALUES(?,?,?,?)";

      db.query(
        sqlInsert,
        [fullname, username, email, hashed],
        (err, result) => {
          console.log(result);
        }
      );
    });
  }
});

router.use((err, req, res, next) => {
  console.log(err);
});

module.exports = router;
