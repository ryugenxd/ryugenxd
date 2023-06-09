import mongoose from "mongoose";
import Workout from "../models/workoutModel.js";

export const getWorkouts = async (req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt:-1});
    res.status(200).json(workouts);
}

export const getWorkout = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Not Such Workout'});
    }
    const workout = await Workout.findById(id);
    if(!workout) return res.status(404).json({error:'Not Such Workout'});
    res.status(200).json(workout);
}

export const createWorkout = async (req,res)=>{
    const {title,load,reps} = req.body;
    let emptyFields = [];
    if(!title) {
        emptyFields.push('title');
    }
    if(!load){
        emptyFields.push('load');
    }
    if(!reps){
        emptyFields.push('reps');
    }
    if(emptyFields.length>0){
        return res.status(400).json({error:'please fill in all the fields',emptyFields});
    }

    try{
        const workout = await Workout.create({title,load,reps});
        res.status(201).json(workout);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}


export const deleteWorkout = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error:'not such workout'});
    const workout =  await Workout.findOneAndDelete({_id:id});
    if(!workout) return res.status(400).json({error:'not such workout'});
    res.status(201).json(workout);
}

export const updateWorkout = async (req,res)=>{
    const {id}  = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error:'not such workout'});
    const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    });
    if(!workout) return  res.status(400).json({error:'not such workout'});
    res.status(201).json(workout);
}