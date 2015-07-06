var tasks, attrs, completeTask, incompleteTask, router 
var clickedTask
var getVal
var score = 0
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
	completeTasks = new taskCompleteList()
	incompleteTasks = new taskIncompleteList()

	tasks.fetch({

		success: function() {
			router = new taskRouter()
			Backbone.history.start()
		}
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