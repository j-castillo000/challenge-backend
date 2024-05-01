const { Router } = require("express");

const { validateToken } = require("../middlewares/jwt");
const {
  createComment,
  getCommentById,
  getAllCommentsByPost,
  updateCommentById,
  deleteCommentById,
} = require("../controllers/comment");

const router = Router();

router.post("/comment", validateToken, createComment);
router.get("/comment/:id", validateToken, getCommentById);
router.get("/comment/post/:id", validateToken, getAllCommentsByPost);
router.put("/comment/:id", validateToken, updateCommentById);
router.delete("/comment/:id", validateToken, deleteCommentById);

module.exports = router;
