const { Router } = require("express");

const { validateToken } = require("../middlewares/jwt");
const {
  createPost,
  getPostById,
  getAllPosts,
  getAllPostsByUser,
  updatePostById,
  deletePostById,
} = require("../controllers/post");

const router = Router();

router.post("/post", validateToken, createPost);
router.get("/post/:id", validateToken, getPostById);
router.get("/post", validateToken, getAllPosts);
router.get("/post/user/:id", validateToken, getAllPostsByUser);
router.put("/post/:id", validateToken, updatePostById);
router.delete("/post/:id", validateToken, deletePostById);

module.exports = router;
