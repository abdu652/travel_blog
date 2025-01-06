import { Router } from "express";
import getAllposts, {addPost, getPostById, updatePost, deletePost} from '../controllers/post.controller.js'
const router = Router();
router.get('/',getAllposts);
router.post('',addPost);
router.get('/:id',getPostById);
router.put('/:id',updatePost);
router.delete('/:id',deletePost);

export default router;