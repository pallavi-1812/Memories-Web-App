import PostModel from "../models/postModel.js";
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostModel.find(); //since find() will take time, we use await and hence we make function async
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostModel(post);
    try {
        await newPost.save();//since an asyncrnous action, therefore we use async and await 
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No Post with that id");
    };
    const updatedPost = await PostModel.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    res.json(updatedPost);
};

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No Post with that id");
    };
    await PostModel.findByIdAndRemove(_id);
    res.json({ message: "Post deleted successfully" });
}

export const likePost = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No Post with that id");
    };
    const post = await PostModel.findById(_id);
    const updatedPost = await PostModel.findByIdAndUpdate(_id, { likeCount: post.likeCount + 1 }, { new: true });
    res.json(updatedPost);
};