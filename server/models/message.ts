import * as mongoose from 'mongoose';

const Message = mongoose.model("message", new mongoose.Schema({
    message: {type: String}
}));

export { Message };