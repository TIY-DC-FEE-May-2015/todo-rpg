var dispatcher = _.clone(Backbone.Events)

var myTasks = new TaskList

var viewArray = []

var currentTask

var router

toggleSingleView = function(view){
	$(".task-item").toggleClass("hidden")
	$(".row").toggleClass("hidden")
	view.removeClass("hidden")
	view.find(".single-view-container").toggleClass("hidden")
}

stopEditing = function(aTaskView){
	toggleViews()
	$(".row").removeClass("hidden")
	$(".task-item").removeClass("hidden")
	$(".single-view-container").addClass("hidden")
	$(".edit").val("")
	currentTask = false
}

toggleViews = function(){
	$(".location").toggleClass("hidden")	
}

listFilter = function(bool){
	_.each(viewArray, function(view){
		if ( view.model.get("complete") === bool ){
			view.$el.show()
		} else {
			view.$el.hide()
		}
	}) 
}

listAll = function(){
	_.each(viewArray, function(view){
		view.$el.show()
	})
}

$(document).on("ready", function(){

	var taskEdit = new EditView()	

	myTasks.on("add", function(model){		
		var view = new TaskView({model})
		viewArray.push(view)
		view.render()
	})


	//this goes to router?
	dispatcher.on("editing", function(aTaskView){
		currentTask = aTaskView.model
		taskEdit.updateFields(currentTask.toJSON() )
		
//		toggleViews()

	})


	dispatcher.on("singleview", function(aTaskView){
		toggleSingleView(aTaskView.$el)
	})

	dispatcher.on("task:complete", function(aTaskView){
		aTaskView.$el.find(".task").toggleClass("complete")
		var completeCheck = aTaskView.model.get("complete")
		aTaskView.model.set("complete", !completeCheck)
		aTaskView.model.save()
	})

//these will go to routers
	$("#show-complete").on("click", function(){
		listFilter(true)
	})

	$("#show-incomplete").on("click", function(){
		listFilter(false)
	})

	$("#show-all").on("click", function(){
		listAll()
	})
/*
	$("#create-new").on("click", function(){
		toggleViews()
		$(".row").addClass("hidden")
	})
	*/

	myTasks.fetch()

	router = new Router()
	Backbone.history.start()
	

})