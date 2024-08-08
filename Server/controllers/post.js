import postMessage from "../models/postMessage.js"

export const getPosts = async (req, res)=>{
    try {
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({msg : error.message})
    }

}
export const createPost = async (req, res)=>{
    const post = req.body;

    // newPost is an object created from the postMessage model, and it represents a single document that will be saved to the MongoDB collection defined by the postMessage model.
    const newPost = new postMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(404).json({msg : error.message})
        
    }
}