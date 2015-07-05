App.Collection.TaskList = Backbone.Collection.extend({

	model: App.Model.Task,

	url: "/tasks"
})


App.CompleteCollection.CompleteTaskList = Backbone.Collection.extend({

	model: App.CompleteModel.CompleteTask,

	url: "/tasks/complete"
})

App.IncompleteCollection.IncompleteTaskList = Backbone.Collection.extend({

	model: App.IncompleteModel.IncompleteTask,

	url:"/tasks/incomplete"
})

App.statCollection.StatList = Backbone.Collection.extend({

	model: App.StatModel.stat,

	url:"/stats"
})