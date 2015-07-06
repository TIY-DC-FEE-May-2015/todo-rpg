
var TodoList = Backbone.Collection.extend({

  model: Task,

  url: "/tasks",

 
//filter completed functions
  completed: function() {
   return this.filter(function( task ) {
      return task.get("complete");
      })
    },

   remaining: function() {
      return this.without.apply( this, this.complete() );
    },


})