const router = require("express").Router();
const connection = require("../db");

const databaseName = "users";

router.post("/:userType", (req, res) => {
  console.log(req.body);
  try {
    const user_id = req.body.email,
      password = req.body.password;
    connection.query(
      "select * from " + databaseName + " where user_id=?",
      [user_id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(400).send(err.message);
          return;
        }
        console.log("result", result);
        if (result) {
          if (result.length == 0)
            res.status(400).send({ message: "Username does not exists" });
          else {
            if ( result[0].password === password.trim()){
              res.status(200).send({ loggedIn: true, role: result[0].role });
            }
            else
              res
                .status(400)
                .send({ message: "Username and password does not match" });
          }
        }
      }
    );
  } catch (err) {
    console.log("e", err);
    res.status(400).send(err.message);
  }
});

module.exports = router;
