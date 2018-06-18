import mongoose from 'mongoose';
const Schema = mongoose.Schema; // ?? import mongoose, {Schema} from 'mongoose'

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    priority: {
        type: String,
        enum: ['high', 'medium', 'low'],
        default: 'low'
    }
});

export default mongoose.model('Todo', todoSchema);
