import { StatusCodes } from "http-status-codes";

class CustomAPIError extends Error {
    /**
     * Build a new instance
     * @param {string} message
     * @param {number} status
     * @returns {void}
     */
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

class UnauthenticatedAPIError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.status = StatusCodes.UNAUTHORIZED;
    }
}

/**
 * @function
 * Create a new CustomAPIError Instance 
 * @param {String} message
 * @param {Number} status
 * @returns {CustomAPIError}
 */
const createCustomAPIError = (message, status) => {
    return new CustomAPIError(message, status);
}

export {createCustomAPIError, CustomAPIError, UnauthenticatedAPIError}