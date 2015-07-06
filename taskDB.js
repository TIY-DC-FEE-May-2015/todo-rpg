/*
  So, obviously this isn't actually a real database.

  But see if you can follow along with what's going on.
*/

var u = require("underscore")

var tasks = []
var taskCounter = 0

var createTask = function(data) {
  var d = new Date()
  var h = d.getHours()
  var m = d.getMinutes()
  var day = d.getDate()
  var month 
  var year = d.getFullYear()

  if (day.length < 2) {
    day = "0"+day
  }

  switch(d.getMonth() ) {
    case 0: 
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sep";
      break;
    case 9: 
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
  }

  var date = h+":"+m+" on "+day+" "+month+", "+year

  var newTask = {
    task: data.task,
    value: data.value,
    complete: false,
    createdAt: date,
  }

  taskCounter++

  newTask.id = (taskCounter).toString()

  tasks.push(newTask)

  return newTask
}

exports = module.exports = {

  all: function() {
    return tasks
  },

  complete: function() {
    return u.filter(tasks, function(task){
      return (task.complete === true)
    })
  },

  incomplete: function() {
    return u.filter(tasks, function(task){
      return (task.complete === false)
    })
  },

  create: function(data) {
    return createTask(data)
  },

  find: function(id) {
    return u.find(tasks, function(task){
      return (task.id === id)
    })
  },

  edit: function(id, data) {
    var task = u.find(tasks, function(task){
      return (task.id === id)
    })

    task = u.extend(task, data, { id: id })

    return task
  },

  reopen: function(id) {
    var task = u.find(tasks, function(task){
      return (task.id === id)
    })

    task.complete = false
    task.reopenedAt = new Date()

    return task
  },

  init: function() {
    createTask({
      task: "Display all tasks on a page",
      value: 3
    })

    createTask({
      task: "Have a view that only displays completed or incompleted tasks",
      value: 5
    })

    createTask({
      task: "Have a view that only displays a specific task",
      value: 2
    })

    createTask({
      task: "Be able to finish tasks",
      value: 5
    })

    createTask({
      task: "Be able to reopen tasks",
      value: 2
    })

    createTask({
      task: "Be able to create new tasks",
      value: 7
    })

    createTask({
      task: "[Hard Mode] Have a view that provides statistics",
      value: 4
    })
  }

}