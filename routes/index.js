var express = require('express');
var router = express.Router();

var task = require('../model/task');

/* GET ALL tasks */
router.get('/tasks', function(req, res, next) {
    task.find(function (err, tasks) {
        if (err) return next(err);
        res.json(tasks);
    });
});


/* SAVE  tasks */
router.get('/task/add', function(req, res, next) {
    var newTask  = {
        title : 'Go to somewhere',
        description : 'Let us tell this is desc of the task',
        isDone : false,
        priority : 2
    };
    task.create(newTask, function (err, doc) {
        if (err) return next(err);
        res.json(doc);
    });
});

/* UPDATE  tasks */
router.put('/task/update/:id', function(req, res, next) {
    task.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET SINGLE  tasks BY ID */
router.get('/task/detail/:id', function(req, res, next) {
    task.findById(req.params.id, function (err, doc) {
        if (err) return next(err);
        res.json(doc);
    });
});
/* DELETE  tasks */
router.delete('/delete/:id', function(req, res, next) {
    task.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


module.exports = router;
