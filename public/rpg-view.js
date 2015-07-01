var taskView = Backbone.View.extend({

	className: "task",

	events: {
		"click .checkBox": "checkBox"
	},

	initialize: function() {
		this.render()

	},

	render: function() {
		var attrs = this.model.toJSON()
		
		var htmlString = this.template( attrs )
		//console.log(attrs, htmlString)
		this.$el.html( htmlString )

	},

	viewCompleted: function() {
		console.log("complete")
		dispatcher.on("toggle:")
	},

	viewIncomplete: function() {
		console.log("incomplete")
	},

	checkBox: function() {
		this.$el.find(".checkBox").toggleClass("check")
		this.$el.find(".taskLine").toggleClass("lineThrough")
		this.model.set("complete", true)
		this.model.save()
		console.log(this.model)
	},

	template: Handlebars.compile( $("#task-template").html() )
 
})