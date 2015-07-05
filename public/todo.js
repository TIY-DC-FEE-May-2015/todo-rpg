var App = {
	Model: {},	
	Collection: {},
	View: {},
	CompleteModel: {},
	IncompleteModel: {},
	CompleteCollection: {},
	IncompleteCollection: {},
	TaskView: {},
	StatModel: {},
	statCollection: {},

}

$(document).on("ready", function(){

	App.tasks = new App.Collection.TaskList()

	App.tasks.on("add", function(taskModel){

		 App.view = new App.View.TaskView({
			model: taskModel
		})

		$("#task").append(App.view.$el)
		taskLength = App.tasks.length
	})

	App.tasks.fetch()



	App.completeTasks = new App.CompleteCollection.CompleteTaskList()

	App.completeTasks.on("add", function(taskModel){

		 App.view = new App.View.CompleteTaskView({
			model: taskModel
		})
		 console.log(App.view.$el)
		$(".complete").append(App.view.$el)
		//$(".NumberOfTasks").text("Completed tasks:" + " " + App.completeTasks.length)
		//$(".PercentageOfTasksCompleted").text("Percentage of tasks completed:" + " " + ((App.completeTasks.length * 100)/App.tasks.length) + "%")
	})

	App.completeTasks.fetch()


	App.incompleteTasks = new App.IncompleteCollection.IncompleteTaskList()

	App.incompleteTasks.on("add", function(taskModel){

		 App.view = new App.View.IncompleteTaskView({
			model: taskModel
		})

		$(".incomplete").append(App.view.$el)
	})

	App.incompleteTasks.fetch()



	App.Stats = new App.statCollection.StatList()

	App.Stats.on("add", function(statModel){

		 App.view = new App.View.Stats({
			model: statModel
		})

		$(".stats").append(App.view.$el)
		$(".experienceHeader").text(App.Stats.models[0].attributes.experience)
	})

	App.Stats.fetch()


	App.AddTaskView = new App.View.AddTask({
		el: document.getElementById("add-task")
	})

	
	
})










