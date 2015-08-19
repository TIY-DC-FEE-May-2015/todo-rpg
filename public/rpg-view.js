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
		if (this.$(".checkBox").hasClass("check")) {

			this.$(".checkBox").removeClass("check")
			this.$(".taskLine").removeClass("lineThrough")
			this.model.set("complete", false)
			this.model.save()

			getVal = (this.model.toJSON()).value

			dispatcher.trigger('removeScore', getVal)
		}

		else {
			this.$(".checkBox").addClass("check")
			this.$(".taskLine").addClass("lineThrough")
			this.model.set("complete", true)
			this.model.save()

			getVal = (this.model.toJSON()).value

			dispatcher.trigger('addScore', getVal)
			console.log(getVal)
		}
	},

	deleteButton: function() {
		$(this.$el).remove()
	},

	editButton: function() {
		dispatcher.trigger('edit', this.model)
	},

	template: Handlebars.compile( $("#task-template").html() )
 
})