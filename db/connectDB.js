import {connect} from "mongoose";

const conenctDB = async (uri) => {
    try {
        await connect(uri)
        console.log('MongoDB connected...');
    } catch (error) {
        throw new Error(error);
    }
}

export default conenctDB;