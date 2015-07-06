var Task = Backbone.Model.extend({


	defaults: {
		"task": "Unknown",
		"value": 0,
		"complete": false,
		"createdAt": new Date(),
    
	},

	toggle: function() {
      this.save({
        complete: !this.get("complete")
      })
    }


})