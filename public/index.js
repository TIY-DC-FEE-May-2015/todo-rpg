var tasks

var dispatcher =_.clone(Backbone.Events)

$(document).on("ready", function(){

	tasks = new taskList()

	tasks.on("add",function(taskModel){

		var view = new rpgView({
			model: taskModel
		})


	
	$("#rpg-list-container").append(view.$el)
	}),

	tasks.fetch()


})

