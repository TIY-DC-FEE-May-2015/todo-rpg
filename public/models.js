var TaskItem = Backbone.Model.extend({

	defaults: {
		task: "A whole lot of nothing",
		value: 0,
		complete: false,
	},

	validate: function(attrs){
//should check if has value and task
		if (attrs.task.length === 0) {
			return alert("You need to enter a task!")
		}

		if (attrs.value < 1) {
			return alert("It's gotta be worth something...")
		}
	},



})