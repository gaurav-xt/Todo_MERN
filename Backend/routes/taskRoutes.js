import express from "express";
import {getTasks ,createTasks,updateTasks ,updateTasks,deleteTasks , toggleComplete} from "../controllers/taskControllers.js"

const router = express.Router();

router.get("/", getTasks);

router.post("/", createTasks);

router.put("/:id", updateTasks);

router.delete("/:id", deleteTasks);

router.patch("/:id/toggle", toggleComplete);

export default router;
