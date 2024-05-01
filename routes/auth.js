const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validate_requests");
const { signIn, signUp } = require("../controllers/auth");

const router = Router();

router.post(
  "/auth/signin",
  [
    check("username", "Username required").not().isEmpty(),
    check("password", "Password required").not().isEmpty(),
    validarCampos,
  ],
  signIn
);
router.post(
  "/auth/signup",
  [
    check("username", "Username required").not().isEmpty(),
    check("password", "Password required").not().isEmpty(),
    validarCampos,
  ],
  signUp
);

module.exports = router;
