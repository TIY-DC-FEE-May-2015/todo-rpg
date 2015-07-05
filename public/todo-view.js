App.View.TaskView = Backbone.View.extend({

	events:{

		"click #taskStatus": "ChangeValueComplete"
	},

	ClassName: "task",

	initialize: function(){

		this.render() 

		this.listenTo(this.model, "change", this.render)
	},

	render: function(){

		var atttributes = this.model.toJSON()
		var $htmlString = $( this.template(atttributes))
		$("#taskStatus").prop("checked", atttributes.complete)
		console.log(atttributes.complete)
		this.$el.html($htmlString)
	},

	ChangeValueComplete: function(){

		this.model.set("complete", true)
		this.model.save()
		
	},

	template: Handlebars.compile( $("#task-template").html() )
})



App.View.CompleteTaskView = Backbone.View.extend({

	//el: document.getElementById("complete"),

	events: {
		"click #complete": "displayComplete",
		"click #taskStatus": "ChangeValueComplete"
	},

	initialize: function(){

		this.render()

		this.listenTo(this.model, "change", this.render)
	},

	render: function(){

		var atttributes = this.model.toJSON()
		var $htmlString = $( this.template(atttributes))
		$htmlString.prop("checked", atttributes.complete)
		this.$el.html($htmlString)
	},

	displayComplete: function(){
		$(".incomplete").hide()
		$(".complete").show()
	},

	ChangeValueComplete: function(){

		this.model.set("complete", false)
		this.model.save()
	},

	template: Handlebars.compile( $("#task-template").html() )
})



	
App.View.IncompleteTaskView = Backbone.View.extend({

	//el: document.getElementById("incomplete"),

	events: {
		"click #incomplete": "displayIncomplete",
		"click #taskStatus": "ChangeValueComplete"
	},

	initialize: function(){

		this.render()

		this.listenTo(this.model, "change", this.render)
	},

	render: function(){

		var atttributes = this.model.toJSON()
		var $htmlString = $( this.template(atttributes))
		$htmlString.prop("checked", atttributes.complete)
		this.$el.html($htmlString)
	},

	displayIncomplete: function(){
		console.log("hi")
		$(".incomplete").hide()
		$(".complete").show()
	},

	ChangeValueComplete: function(){

		this.model.set("complete", true)
		this.model.save()
	},

	template: Handlebars.compile( $("#task-template").html() )
})

App.View.AddTask = Backbone.View.extend({

	events: {
    	"click #addTaskButton": "saveTask"
  	},

	saveTask: function() {
		console.log($("#new-task").val())
      App.tasks.create({

        task: $("#new-task").val(),
        value: $("#new-value").val()
      })

    }



})


App.View.Stats = Backbone.View.extend({


	initialize: function(){

		this.render()

		this.listenTo(this.model, "change", this.render)
	},

	render: function(){

		var atttributes = this.model.toJSON()
		var $htmlString = $( this.template(atttributes))
		$htmlString.prop("checked", atttributes.complete)
		this.$el.html($htmlString)
	},

	template: Handlebars.compile( $("#stat-template").html() )

})



