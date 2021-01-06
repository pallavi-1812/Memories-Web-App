import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    creationDate: {
        type: Date,
        default: new Date()
    }
});

const PostModel = mongoose.model('PostModel', postSchema);

export default PostModel;