//view to add,delete, edit 

var AddView = Backbone.View.extend({

   

    
    template: Handlebars.compile( $("#task-info").html() ),

    
    
    
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
      this.$el.html( this.template( this.model.attributes ) );
      
      this.toggleVisible();  

      this.$input = this.$(".edit");
      return this;
    },

    toggleVisible : function () {
      this.$el.toggleClass( "hidden",  this.isHidden());
    },

   
    isHidden : function () {
      var isCompleted = this.model.get('completed');
      return ( // hidden cases only
        (!isCompleted && TaskFilter === 'completed')
        || (isCompleted && TaskFilter === 'active')
      );
    },

    // NEW - Toggle the `"completed"` state of the model.
    


    edit: function() {
      this.$el.addClass('editing');
      this.$input.focus();
    },

     close: function() {
      var value = this.$input.val().trim();

      if ( value ) {
        this.model.save({ title: value });
      }

      this.$el.removeClass('editing');
    },

     updateOnEnter: function( evt ) {
      if ( evt.which === ENTER_KEY ) {
        this.close();
      }
    }

})*/

  