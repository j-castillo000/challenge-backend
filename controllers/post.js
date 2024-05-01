const { response } = require("express");

const { pool, mysql } = require("../config/database");

const createPost = async (req, res = response) => {
  const { user_id, title, content, category_id, tag_id } = req.body;
  try {
    let query = `INSERT INTO post (user_id, title, content, category_id, tag_id) VALUES (?, ?, ?, ?, ?)`;
    let values = [user_id, title, content, category_id, tag_id];
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
        message: "Post created",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

const getAllPosts = async (req, res = response) => {
  try {
    let query = `SELECT * FROM post`;
    pool.query(query, (error, results) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: error,
        });
      }
      return res.json({
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

const getAllPostsByUser = async (req, res = response) => {
  const { id } = req.params;
  try {
    let query = `SELECT * FROM post WHERE user_id = ?`;
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

const getPostById = async (req, res = response) => {
  const { id } = req.params;
  try {
    let query = `SELECT * FROM post WHERE post_id = ?`;
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

const updatePostById = async (req, res = response) => {
  const { title, content, category_id, tag_id } = req.body;
  try {
    let query = `UPDATE post SET title = ?, content = ?, category_id = ?, tag_id = ? WHERE post_id = ?`;
    let values = [title, content, category_id, tag_id, req.params.id];
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
        message: "Post updated",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

const deletePostById = async (req, res = response) => {
  const id = req.params.id;
  try {
    let query = `DELETE FROM post WHERE post_id = ?`;
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
        message: "Post deleted",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

const filterPostByCategoryId = async (req, res = response) => {
  const { id } = req.params;
  try {
    let query = `SELECT * FROM post WHERE category_id = ?`;
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

const filterPostByTagId = async (req, res = response) => {
  const { id } = req.params;
  try {
    let query = `SELECT * FROM post WHERE tag_id = ?`;
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

module.exports = {
  createPost,
  getPostById,
  getAllPosts,
  getAllPostsByUser,
  updatePostById,
  deletePostById,
  filterPostByCategoryId,
  filterPostByTagId,
};
