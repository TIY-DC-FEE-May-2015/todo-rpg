var App = {
	Model: {},	
	Collection: {},
	View: {},
	CompleteModel: {},
	IncompleteModel: {},
	CompleteCollection: {},
	IncompleteCollection: {},
	TaskView: {}
}


$(document).on("ready", function(){

	App.tasks = new App.Collection.TaskList()

	App.tasks.each(function(taskModel){

		 App.view = new App.View.TaskView({
			model: taskModel
		})

		$("#task").append(view.$el)
	})

	App.tasks.fetch()


})