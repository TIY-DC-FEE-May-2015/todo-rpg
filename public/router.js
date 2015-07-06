Router = Backbone.Router.extend({

	routes: {
		"": "viewTaskList",
		"edit/:taskId": "editTask",
		"create": "editTask",
		"view/:taskId":"singleView",
	},

//switches back to the default view
	viewTaskList: function(){
		$("#task-list-location").removeClass("hidden")
		$(".task-item").removeClass("hidden")
		$(".row").removeClass("hidden")
		$("#task-edit-container").addClass("hidden")

		$(".single-view-container").addClass("hidden")
		$(".edit").val("")
		
	},

//switches to edit view - and takes in the url for a specific task
	editTask: function(){
		console.log("edit")
		$("#task-list-location").addClass("hidden")
		$("#task-edit-container").removeClass("hidden")
		$(".row").addClass("hidden")
	},

	singleView: function(taskId) {
		//this may not be necessary
			//router has effected live updates of edits,
			//so could write singleview that calls on the server by taskId
	},

	//another option: the completed views calling on server


})