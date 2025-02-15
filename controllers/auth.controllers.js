import { StatusCodes } from "http-status-codes";
import { createCustomAPIError } from "../errors/custom-error.js";
import jwt from "jsonwebtoken";
class AuthController {
  /**
   * Description
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @returns {import("express").Response}
   */
  static async login(request, response) {
    const { username, password } = request.body;

    if (!username?.trim() || !password?.trim()) {
      throw createCustomAPIError(
        "Username & Password is REQUIRED...",
        StatusCodes.BAD_REQUEST
      );
    }

    const id = new Date().getDate();
    const secret_key = process.env.JWT_KEY;
    //create token
    const token = jwt.sign({ id, username }, secret_key, { expiresIn: "30d" });
    console.log(token);

    return response
      .status(StatusCodes.OK)
      .json({ msg: "Login Successfully...", token });
  }

  /**
   * Description
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @returns {import("express").Response}
   */
  static async dashboard(request, response) {
    return response
      .status(StatusCodes.OK)
      .json({
        msg: `Hello ${request.user?.username}`,
        secret: Math.floor(Math.random() * 100),
      });
  }
}

export default AuthController;
