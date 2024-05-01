const { Router } = require("express");

const { verifyToken } = require("../middlewares/auth");
const {
  createComment,
  getCommentById,
  getAllCommentsByPost,
  updateCommentById,
  deleteCommentById,
} = require("../controllers/comment");

const router = Router();

router.post("/comment", verifyToken, createComment);
router.get("/comment/:id", verifyToken, getCommentById);
router.get("/comment/post/:id", verifyToken, getAllCommentsByPost);
router.put("/comment/:id", verifyToken, updateCommentById);
router.delete("/comment/:id", verifyToken, deleteCommentById);

module.exports = router;
