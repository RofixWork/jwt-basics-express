import { StatusCodes } from "http-status-codes"
import { CustomAPIError } from "../errors/custom-error.js";
const errorHandler = (err, req, res, next) => {
    if(err instanceof CustomAPIError) {
        return res.status(err.status || 500).json({
            message: err.message,
            timestamp: new Date().toISOString()
        })
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Something went wrong, please try again...',
        timestamp: new Date().toISOString()
    })
}
export default errorHandler;