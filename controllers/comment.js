const { response } = require("express");

const { pool, mysql } = require("../config/database");

const createComment = async (req, res = response) => {
  const { user_id, post_id, content } = req.body;
  try {
    let query = `INSERT INTO comment (user_id, post_id, content) VALUES (?, ?, ?)`;
    let values = [user_id, post_id, content];
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
        message: "Comment created",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

const getAllCommentsByPost = async (req, res = response) => {
  const { id } = req.params;
  try {
    let query = `SELECT * FROM Comment WHERE post_id = ?`;
    let values = [id];
    query = mysql.format(query, values);
    pool.query(query, (error, results) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: error,
        });
      }
      return res.json({
        success: true,
        data: results,
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

const getCommentById = async (req, res = response) => {
  const { id } = req.params;
  try {
    let query = `SELECT * FROM comment WHERE comment_id = ?`;
    let values = [id];
    query = mysql.format(query, values);
    pool.query(query, (error, results) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: error,
        });
      }
      return res.json({
        success: true,
        data: results.length === 0 ? {} : results[0],
      });
    });
  } catch (error) {
    res.status(500).send(response);
  }
};

const updateCommentById = async (req, res = response) => {
  const { content } = req.body;
  try {
    let query = `UPDATE Comment SET content = ? WHERE Comment_id = ?`;
    let values = [content, req.params.id];
    query = mysql.format(query, values);
    pool.query(query, (error, results) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: error,
        });
      }
      return res.json({
        success: true,
        message: "Comment updated",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

const deleteCommentById = async (req, res = response) => {
  const { id } = req.params;
  try {
    let query = `DELETE FROM comment WHERE Comment_id = ?`;
    let values = [id];
    query = mysql.format(query, values);
    pool.query(query, (error, results) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: error,
        });
      }
      return res.json({
        success: true,
        message: "Comment deleted",
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
  createComment,
  getCommentById,
  getAllCommentsByPost,
  updateCommentById,
  deleteCommentById,
};
