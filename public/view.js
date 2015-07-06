//view to create new instances and render initial list
var TaskView = Backbone.View.extend({

  	el: "#task-app",

	StatsTemplate: Handlebars.compile( $("#stats").html() ),

	initialize: function(){
		this.allCheckbox = this.$('#toggle-all')[0];
		this.$input = this.$('#new-todo');
		this.$footer = this.$('#footer');


		this.render()
		this.listenTo(this.model, "add", this.addTask)
	},

	render: function(){
		var attrs = this.model.toJSON()

		var htmlString = this.template(attrs)
    	this.$el.html( htmlString )
	},

	addTask: function( taskModel ) {
      var view = new TaskView({
       model: taskModel
   		})
      $("#todo-list").append( view.$el );
    },

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
    }
})
