import { StatusCodes } from "http-status-codes";
import { createCustomAPIError, UnauthenticatedAPIError } from "../errors/custom-error.js";
import jwt from 'jsonwebtoken'
/**
 * Description
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 * @returns {import("express").Response}
 */
const authMiddleware = (request, response, next) => {
    const authHeader = request.headers['authorization'];

    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthenticatedAPIError('Invalid Token')
    }

    const token = authHeader.split(' ').at(1);

    try {
        const decode = jwt.verify(token, process.env.JWT_KEY);
        const {id, username} = decode;
        request.user = {id, username};
        next();
    } catch (error) {
        throw new UnauthenticatedAPIError(error.message);
    }
}
export default authMiddleware;