import { StatusCodes } from "http-status-codes";

/**
 * Description
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 * @returns {Response}
 */
const notFound = (req, res, next) => {
    const route = `'${req.url}'` || '';
    return res.status(StatusCodes.NOT_FOUND).json({
        message: `Route ${route} not found`,
        timestamp: new Date().toISOString()
    })
}

export default notFound;