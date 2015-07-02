var dispatcher = _.clone(Backbone.Events)

var myTasks = new TaskList

var viewArray = []

var currentTask

stopEditing = function(){
	$(".location").toggleClass("hidden")
	$(".task-item").removeClass("hidden")
	currentTask = false
}

toggleViews = function(){
	$(".location").toggleClass("hidden")
	$("#create-new").toggleClass("hidden")
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

	

	myTasks.on("add", function(model){		
		var view = new TaskView({model})
		viewArray.push(view)
		view.render()
	})

	myTasks.fetch()

	$("#save-button").on("click", function(){
		if (currentTask) {
			currentTask.set({
				task: $(".task.edit").val(),
				notes: $(".notes.edit").val(),
				value: $(".value.edit").val(),
			})
			console.log(currentTask.toJSON())
			currentTask.save()
		} else {
			myTasks.create({
				task: $(".task.edit").val(),
				notes: $(".notes.edit").val(),
				value: $(".value.edit").val(),
				date: new Date(),
			})
		}

		stopEditing()
	})

	$("#discard-button").on("click", function(){
		stopEditing()
	})

	dispatcher.on("editing", function(aTaskView){
		currentTask = aTaskView.model
		
		$(".task.edit").val( currentTask.get("task") )
		$(".value.edit").val( currentTask.get("value") )
		$("#task-edit-container").find(".date").text( currentTask.get("date") )
		if (currentTask.get("notes") ){
			$(".notes.edit").val( currentTask.get("notes") )
		}
		
		toggleViews()

	})

	dispatcher.on("singleview", function(aTaskView){
		//prefer toggle class hidden, to toggle, but the filter is messing with it
		$(".task-item").toggleClass("hidden")
		aTaskView.$el.removeClass("hidden")
	})

	dispatcher.on("task:complete", function(aTaskView){
		aTaskView.$el.find(".task").toggleClass("complete")
		var completeCheck = aTaskView.model.get("complete")
		aTaskView.model.set("complete", !completeCheck)
		aTaskView.model.save()
	})

	$("#show-complete").on("click", function(){
		listFilter(true)
	})

	$("#show-incomplete").on("click", function(){
		listFilter(false)
	})

	$("#show-all").on("click", function(){
		listAll()
	})

	$("#create-new").on("click", function(){
		toggleViews()
	})

})