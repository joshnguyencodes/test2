const express = require('express')
const {createRun, getRun, getRuns, deleteRun, updateRun} = require('../controllers/runController')

const router = express.Router()

// get all runs
router.get('/', getRuns)

// get a specific run
router.get('/:id', getRun)

// post a new run
router.post('/', createRun)

// delete a new run
router.delete('/:id', deleteRun)

// update a new run
router.patch('/:id', updateRun)

module.exports = router