import { Task } from '../models/Task.js'

export const getTasks = async (req,res) =>{
    try {
        const task = await Task.find() // find the task in database
        res.json(task) // send those task back to frontend
        
    } catch (error) {
        console.log(error)
        
    }
}

export const createTasks = async (req,res)=>{
    try {
        const task = new Task(req.body)
        await task.save()
        res.status(201).json(task)
    } catch (error) {
        console.log(error)
        
    }
}


export const updateTasks = async (req,res)=>{
    try {
       const task = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
       ) 
    } catch (error) {
        console.log(error)
        
    }
}

export const deleteTasks = async (req,res) =>{
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.json({message: "Task deleted"})
    } catch (error) {
        console.log(error)
        
    }
}


export const toggleComplete = async (req , res) =>{
    try {
       const task = await Task.findById(req.params.id) 
       task.completed = !task.completed
       task.save()
       res.json(task)
    } catch (error) {
        console.log(error)
        
    }
}