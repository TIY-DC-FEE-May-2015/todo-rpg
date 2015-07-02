var taskView = Backbone.View.extend({

	className: "task",

	events: {
		"click .checkBox": "checkBox",
		"click .delete-button": "deleteButton",
		"click .edit-button": "editButton"
	},

	initialize: function() {
		this.render()

	},

	render: function() {
		var attrs = this.model.toJSON()

		attrs.createdAt = moment(attrs.createdAt).fromNow()
		
		var htmlString = this.template( attrs )
		this.$el.html( htmlString )

	},

	checkBox: function() {
		this.$(".checkBox").toggleClass("check")
		this.$(".taskLine").toggleClass("lineThrough")
		this.model.set("complete", true)
		this.model.save()
	},

	deleteButton: function() {
		$(this.$el).remove()
	},

	editButton: function() {
		dispatcher.trigger('edit', this.model)
	},

	template: Handlebars.compile( $("#task-template").html() )
 
})