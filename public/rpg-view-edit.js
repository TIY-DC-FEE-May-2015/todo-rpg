var EditTaskView = Backbone.View.extend({

	events: {
		"click #save-task": "saveButton"
	},

	updateInputFields: function(data) {
		data = data || {}

		$("#input-task").val( data.task )
		$("#input-value").val( data.value )
	},

	saveButton: function() {
		if (clickedTask) {
			clickedTask.set({
				task: $("#input-task").val(),
				value: $("#input-value").val()
			})
			clickedTask.save()
		}
		else {
			tasks.create({
				task: $("#input-task").val(),
				value: $("#input-value").val()
			})
		}
		dispatcher.trigger("toggle:hidden")
	}

})