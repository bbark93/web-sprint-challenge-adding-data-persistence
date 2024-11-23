// build your `/api/tasks` router here
const router = require("express").Router();
const Task = require("./model");

router.get("/", (req, res, next) => {
  Task.getTasks()
    .then((tasks) => {
      let num = 0;
      tasks.map((t) => {
        if (t.task_completed == 0) tasks[num].task_completed = false;
        if (t.task_completed == 1) tasks[num].task_completed = true;
        num++;
      });
      res.json(tasks);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const newTask = req.body;

  Task.addTask(newTask)
    .then((newTask) => {
        if (newTask.task_completed == 0) newTask.task_completed = false;
        if (newTask.task_completed == 1) newTask.task_completed = true;
      res.status(201).json(newTask);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong inside the tasks router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
