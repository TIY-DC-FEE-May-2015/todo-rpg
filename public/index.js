var tasks 
//var activeTask
var dispatcher = _.clone(Backbone.Events)
//var ENTER_KEY = 13;

var Router = Backbone.Router.extend({

  /*routes: {
  	 "*filter": "setFilter"
  },


  setFilter: function( param ) {
      // Set the current filter to be used
      if (param) {
        param = param.trim();
      }
      TaskFilter = param || '';

      // Trigger a collection filter event, causing hiding/unhiding
      // of Todo view items
      Task.trigger('filter');
    }*/
})


$(document).on("ready", function() {

tasks = new TodoList(); 

tasks.on("add", function(taskModel){
  var view = new TaskView({
       model: taskModel
      })
  $("#todo-list").append( view.$el );
}),

tasks.fetch()

    var router = new Router()
  	Backbone.history.start()



})