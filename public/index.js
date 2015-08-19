var tasks, attrs 
var clickedTask
var getVal
var score = 0
var dispatcher = _.clone(Backbone.Events)

var toggleHidden = function() {
	$(".container").toggleClass("hidden")
	$(".buttons").toggleClass("hidden")
}

$(document).on('ready', function() {
	$(".view").hide()
	$("#task-list").show()

	tasks = new taskList()

	tasks.on("add", function(taskModel){
		var view = new taskView({
			model: taskModel
		})
		
		var isComplete = view.model.toJSON().complete

		if (isComplete === true) {
			isComplete === false
		}

		$("#task-container").append(view.$el)
	})

	tasks.fetch()

	$("#complete").on("click", function() {

		$(".view").hide()
		$("#complete-container").empty()
		$("#complete-list").show()

		tasks = new taskCompleteList()

		tasks.on("add", function(taskModel){
			var view = new taskView({
				model: taskModel
			})

			var viewModel = view.model.toJSON()

			if (viewModel.complete === true) {
				view.$(".checkBox").addClass("check")
				view.$(".taskLine").addClass("lineThrough")
			}

			$("#complete-container").append(view.$el)
		})
		tasks.fetch() 

	})

	$("#incomplete").on("click", function() {
		$(".view").hide()
		$("#incomplete-container").empty()
		$("#incomplete-list").show()

		tasks = new taskIncompleteList()

		tasks.on("add", function(taskModel){
			var view = new taskView({
				model: taskModel
			})
			$("#incomplete-container").append(view.$el)
		})
		tasks.fetch()
	})

	$("#all").on("click", function() {
		$(".view").hide()
		$("#task-list").show()

	})

// Add New Tasks
	var editView = new EditTaskView({
		el: $("#edit-container")
	})

	$("#newTask").on("click", function() {
		$(".view").hide()
		$("#edit-container").show()

		editView.updateInputFields()

		clickedTask = false
	})

	$("#cancel").on("click", function() {
		$("#edit-container").hide()
		$("#task-list").show()
	})

	dispatcher.on("toggle:hidden", function() {
		$("#edit-container").hide()
		$("#task-list").show()
	})

	dispatcher.on('edit', function(taskModel) {
		$(".view").hide()
		$("#edit-container").show()
		editView.updateInputFields(taskModel.toJSON())
		clickedTask = taskModel

	})

	dispatcher.on('addScore', function() {
		score += getVal
		$(".score").text(score)
	})

	dispatcher.on('removeScore', function() {
		score -= getVal
		$(".score").text(score)
		console.log(getVal, score)
	})


})