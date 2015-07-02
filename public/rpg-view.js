var rpgView = Backbone.View.extend({


	events:{
		
		//"click": "displayInformation",
		"click .done": "displayComplete",
		"click .notDone": "displayNotComplete",
	},

	className: "tasks",
 
	initialize: function() {
		this.render()
		
	}, 
	

	render: function(){
		var attrs = this.model.toJSON()
		var htmlString = this.template(attrs)
		this.$el.html( htmlString )


	},


	//this will switch the div class "tasks" to "tasks open"
	/*displayInformation:function(){
		this.$el.toggleClass("open")
	},*/

	displayComplete:function(){
		this.$el.toggleClass("open")
		console.log("hello")

		this.model.set("complete", true)
		this.model.save()

	},

	displayNotComplete:function(){
		this.$el.toggleClass("open")
		this.model.set("complete",false)

		this.model.save()
		console.log("hi")
	},


	template: Handlebars.compile( $("#rpg-template").html() )
	


})