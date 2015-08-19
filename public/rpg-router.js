var taskRouter = Backbone.Router.extend({

	routes: {
		"tasks": "taskList",
		"tasks/complete": "taskComplete",
		"tasks/incomplete": "taskIncomplete",
		"tasks/:taskId": "singleTask",
		"": "taskList"
	},

	taskList: function() {
		$(".view").hide()
		$("#task-list").show()
		
		tasks.each(function(taskModel){
			var view = new taskView({
				model: taskModel
		})

		$("#task-container").append(view.$el)
		})
	},

	taskComplete: function() {
		console.log("complete")
		$(".view").hide()
		$("#complete-list").show()

		completeTasks.each(function(taskModel){
			var view = new taskView({
				model: taskModel
			})
			$("#complete-container").append(view.$el)
		})
		tasks.fetch() 
	},

	taskIncomplete: function() {
		$(".view").hide()
		$("#incomplete-list").show()

		incompleteTasks.each(function(taskModel){
			var view = new taskView({
				model: taskModel
			})
			$("#incomplete-container").append(view.$el)
		})
		tasks.fetch()
	}


})