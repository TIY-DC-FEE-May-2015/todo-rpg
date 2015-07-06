var TaskList = Backbone.Collection.extend({

	model: TaskItem,

	url: "/tasks",

})