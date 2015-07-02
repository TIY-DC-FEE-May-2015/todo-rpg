var tasks
var clickedTask
var dispatcher = _.clone(Backbone.Events)

var toggleHidden = function() {
	$(".container").toggleClass("hidden")
	$(".buttons").toggleClass("hidden")
}

var empty = function() {
	$("#task-container").empty()
}

$(document).on('ready', function() {

	tasks = new taskList()

	tasks.on("add", function(taskModel){
		var view = new taskView({
			model: taskModel
		})

		$("#task-container").append(view.$el)
	})

	tasks.fetch()

	$("#complete").on("click", function() {

		empty()

		tasks = new taskCompleteList()

		tasks.on("add", function(taskModel){
			var view = new taskView({
				model: taskModel
			})
			$("#task-container").append(view.$el)
		})
		tasks.fetch()
	})

	$("#incomplete").on("click", function() {
		empty()

		tasks = new taskIncompleteList()

		tasks.on("add", function(taskModel){
			var view = new taskView({
				model: taskModel
			})
			$("#task-container").append(view.$el)
		})
		tasks.fetch()
	})

	$("#all").on("click", function() {
		empty()

		tasks = new taskList()

		tasks.on("add", function(taskModel){
			var view = new taskView({
				model: taskModel
			})

			$("#task-container").append(view.$el)
		})

		tasks.fetch()

	})

// Add New Tasks
	var editView = new EditTaskView({
		el: $("#edit-container")
	})

	$("#newTask").on("click", function() {
		toggleHidden()

		editView.updateInputFields()

		clickedTask = false
	})

	$("#cancel").on("click", function() {
		toggleHidden()
	})

	dispatcher.on("toggle:hidden", toggleHidden)

	dispatcher.on('edit', function(taskModel) {
		toggleHidden()
		editView.updateInputFields(taskModel.toJSON())
		clickedTask = taskModel

	})


})