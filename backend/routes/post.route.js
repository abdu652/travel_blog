import { Router } from "express";
import getAllposts, {addPost} from '../controllers/post.controller.js'
const router = Router();
router.get('/',getAllposts);
router.post('/',addPost);

export default router;