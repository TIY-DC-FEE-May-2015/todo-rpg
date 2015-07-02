TaskView = Backbone.View.extend({

	className: "task-item",

	events:{
		"click .check-button": "completeTask",
		"click .delete-button": "deleteTask",
		"click .edit-button": "editTask",
		"click .more-button": "showMore",
	},

	initialize: function() {

		this.render()
	},

	render: function(model) {
		this.$el.html( this.template(this.model.toJSON() ) )

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
		this.$el.find(".single-view-container").toggleClass("hidden")
		dispatcher.trigger("singleview", this)
	},

	editTask: function(){
		/*this.$el.find(".task" ).toggleClass("hidden")
		this.$el.find(".value" ).toggleClass("hidden")
		this.$el.find(".notes" ).toggleClass("hidden")

		this.$el.find(".more-button").toggleClass("hidden")
		this.$el.find(".check-button").toggleClass("hidden")*/
		dispatcher.trigger("editing", this)
	},

	template: Handlebars.compile( $("#task-template").html() ),

})