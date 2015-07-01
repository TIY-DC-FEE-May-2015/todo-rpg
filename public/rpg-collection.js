var taskList = Backbone.Collection.extend({

	model: Task,

	url: "/tasks",

	initialize: function() {

	}

})

var taskCompleteList = Backbone.Collection.extend({

	model: Task,

	url: "/tasks/complete"
})

var taskIncompleteList = Backbone.Collection.extend({

	model: Task,

	url: "/tasks/incomplete"
})

