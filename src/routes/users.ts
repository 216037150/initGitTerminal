import { Router } from "express";
import { getAll , getUsers} from "../controllers/userControllers";

const router = Router();

router.get('/', getAll);
router.get('/:id', getUsers)

export default router;