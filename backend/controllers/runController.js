const { default: mongoose } = require('mongoose')
const Run = require('../models/run_model')

// get all runs
const getRuns = async(req, res) => {
    const runs = await Run.find({}).sort({date: -1})
    res.status(200).json(runs)
}

// get a specific run
const getRun = async(req, res) => {
    const {id} = req.params

    // check for valid id
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Run doesn't exist"})
    }

    const run = await Run.findById(id)

    if (!run) {
        return res.status(404).json({error: "Run doesn't exist"})
    }

    res.status(200).json(run)
}


// create a new run
const createRun = async(req, res) => {
    const {date, distance, speed, time}  = req.body  

    try{
    const run = await Run.create({date, distance, speed, time})
    res.status(200).json(run)
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

// delete a run
const deleteRun = async(req, res) => {
    const {id} = req.params

     // check for valid id
     if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Run doesn't exist"})
    }

    const run = await Run.findOneAndDelete({_id: id})

    if (!run) {
        return res.status(404).json({error:"Run doesn't exist"})
    }

    res.status(200).json(run)
}

// update a run
const updateRun = async (req, res) => {
    const {id} = req.params

     // check for valid id
     if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Run doesn't exist"})
    }

    const run = await Run.findOneAndUpdate({_id: id}, {...req.body})

    if (!run) {
        return res.status(404).json({error:"Run doesn't exist"})
    }

    res.status(200).json(run)
}



module.exports = {createRun, getRuns, getRun, deleteRun, updateRun, deleteRun}