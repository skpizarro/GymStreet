const express = require('express');
router = express.Router();

const exercise = require('../controllers/exercise.controller');

router.get('/',exercise.getExercises);
router.get('/:id',exercise.getExercise);
router.post('/',exercise.createExercise);
router.put('/:id',exercise.editExercise);
router.delete('/:id',exercise.deleteExercise);

module.exports = router;