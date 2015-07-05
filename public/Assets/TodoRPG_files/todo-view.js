App.View.TaskView = Backbone.View.extend({

	ClassName: "task",

	initialize: function(){

		this.render()
	},

	render: function(){

		var atttributes =this.model.toJSON()
		var htmlString = this.template(atttributes)
		this.$el.html(htmlString)
	},

	template: Handlebars.compile( $("#task-template").html() )
})