const Exercise = require('../models/exercises');
const exercisecontroller = {};

exercisecontroller.getExercises = async (req,res)=>{
    const exercises = await Exercise.find();
    res.json(exercises);
}

exercisecontroller.getExercise = async (req, res)=>{
    const exercise = await Exercise.findById(req.params.id);
    res.json(exercise);
}

exercisecontroller.createExercise = async (req, res)=>{
    const exercise = new Exercise(req.body);
    await exercise.save();
}

exercisecontroller.editExercise = async (req, res) =>{
    const {id} = req.params;
    const exercise = {
        name: req.body.name,
        repetitions: req.body.repetitions,
        series: req.body.series,
        duration: req.body.duration
    };
    await Exercise.findByIdAndUpdate(id,{$set: exercise},{new: true});
    res.json({status:' Exercise Updated'});
}

exercisecontroller.deleteExercise = async(req, res)=>{
    await Exercise.findByIdAndRemove(req.params.id);
    res.json({status:'Exercise Removed'});
}

module.exports = exercisecontroller;