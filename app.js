import "express-async-errors";
import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from "morgan";
import notFound from "./middlewares/not-found.js";
import errorHandler from "./middlewares/error-handler.js";
import authRoutes from "./routes/auth.routes.js";
import path from 'path'
const app = express()

app.use(express.static(path.resolve('public')));

// Middleware setup
app.use(express.json())
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth/', authRoutes)


//custom middlewares
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8000;

(async () => {
    try {
        // await conenctDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`server listening on port ${PORT}...`))
    } catch (error) {
        console.error(error);
        
    }
})()