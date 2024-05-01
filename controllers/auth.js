const { response } = require("express");
const bcrypt = require("bcryptjs");

const generateJWT = require("../helpers/jwt");

const { pool, mysql } = require("../config/database");

const signUp = async (req, res = response) => {
  const { username, password } = req.body;

  try {
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);
    let query = `INSERT INTO user (username, password) VALUES (?, ?)`;
    let values = [username, hashedPassword];
    query = mysql.format(query, values);
    pool.query(query, (error, results) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: error,
        });
      }
      return res.status(201).json({
        success: true,
        message: "User created",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

const signIn = async (req, res = response) => {
  const { username, password } = req.body;

  try {
    let query = `SELECT * FROM user WHERE username = ?`;
    let values = [username];
    query = mysql.format(query, values);

    pool.query(query, async (error, results) => {
      if (error) {
        return res.status(500).json({
          success: false,
          error,
        });
      }

      if (results.length === 0) {
        return res.status(401).json({
          success: false,
          message: "Invalid username or password",
        });
      }

      const user = results[0];

      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(400).send({
          success: false,
          message: "Invalid username or password",
        });
      }

      const token = await generateJWT(user.user_id);

      return res.status(200).json({
        success: true,
        token,
        user_id: user.user_id,
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

module.exports = {
  signIn,
  signUp,
};
