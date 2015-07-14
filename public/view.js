//view to create new instances and render initial list
var TaskView = Backbone.View.extend({


	
  tagName: 'li',

  events: {
      "click": "strikethrough",
      "click": 
      //"dblclick label": "edit",
      "keypress ": "updateOnEnter",
      //"click .delete": "clear",
      
    },


	initialize: function(){

		this.render()
		this.listenTo(this.model, "change", this.render)
	},

	render: function(){
		var attrs = this.model.toJSON()
		var htmlString = this.template(attrs)
    this.$el.html( htmlString )

    this.$el.toggleClass( 'completed', this.model.get("complete") );
	},

  template: Handlebars.compile( $("#task-info").html() ),

  editInformation: function() {
    dispatcher.trigger("editing", this.model)
    //put info into input field 
  },

  strikethrough: function() {
    console.log("you clicked me ")
    this.$el.toggleClass( 'toggle', this.model.set({complete: true}) );
    this.model.save()

  },

  toggleComplete: function(){
    this.$el.addClass("complete")
  }
	/*


    newAttrs: function() {
      return {
        task: this.$input.val().trim(),
       	value: 0,
        complete: false
      };
    },


    createOnEnter: function( event ) {
      if ( event.which !== ENTER_KEY || !this.$input.val().trim() ) {
        return;
      }

      TaskView.create( this.newAttrs() );
      this.$input.val('');
    },

    filterOne : function (task) {
      task.trigger('visible');
    },

    filterAll : function () {
      TaskView.each(this.filterOne, this);
    },

    clearCompleted: function() {
      _.invoke(TaskView.completed(), 'destroy');
      return false;
    },
	
	toggleAllComplete: function() {
      var completed = this.allCheckbox.checked;

      TaskView.each(function( task ) {
        task.save({
          'complete': completed
        });
      });
    }*/
})
