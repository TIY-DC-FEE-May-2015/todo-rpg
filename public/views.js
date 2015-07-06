TaskView = Backbone.View.extend({

	className: "task-item",

	events:{
		"click .check-button": "completeTask",
		"click .delete-button": "deleteTask", //this should be in edit view
		"click .edit-button": "editTask",
		"click .more-button": "showMore",
	},

	initialize: function() {

		this.render()
	},

	render: function(model) {
		var modelData = this.model.toJSON() 
		//modelData.createdAt = modelData.date.getDate()
		var date = modelData.createdAt
		console.log()
		this.$el.html( this.template(modelData) )
		//update view to match a completed model
		if ( this.model.get("complete") ) {
			this.$el.find(".task").addClass("complete")
		}

		$("#task-list-location").append( this.$el )
	},

	completeTask: function(){
		dispatcher.trigger("task:complete", this)
	},

	deleteTask: function(){
		this.model.destroy()	
	},

	showMore: function(){
		dispatcher.trigger("singleview", this)
	},

	editTask: function(){
		dispatcher.trigger("editing", this)
	},

	template: Handlebars.compile( $("#task-template").html() ),

})

var EditView = Backbone.View.extend({
	el: document.getElementById("task-edit-container"),

	events: {
		"click #save-button": "saveTask",
		"click #discard-button": "discardTask",
	},

	updateFields: function(data){
		$(".task.edit").val( currentTask.get("task") )
		$(".value.edit").val( currentTask.get("value") )
		$("#task-edit-container").find(".date").text( currentTask.get("date") )
		if (currentTask.get("notes") ){
			$(".notes.edit").val( currentTask.get("notes") )
		}
	},

	saveTask: function(){
		if (currentTask) {
			currentTask.set({
				task: $(".task.edit").val(),
				notes: $(".notes.edit").val(),
				value: $(".value.edit").val(),
			})
			currentTask.save()
		} else {
			myTasks.create({
				task: $(".task.edit").val(),
				notes: $(".notes.edit").val(),
				value: $(".value.edit").val(),
			})
			console.log(myTasks)
		}
		router.navigate("", {trigger: true})
		//stopEditing()
	},

	discardTask: function(){
		router.navigate("", {trigger: true})
		//stopEditing(this)
	},

})