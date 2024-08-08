import express from 'express'
import { getPosts, createPost } from '../controllers/post.js';
// import { createPost } from '../controllers/post.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/yes', createPost)
export default router;