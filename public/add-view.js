var AddView = Backbone.View.extend({

    tagName: 'li',

    // Cache the template function for a single item.
    template: Handlebars.compile( $("#task-info").html() ),

    // The DOM events specific to an item.
    events: {
      "click .toggle": "togglecompleted",
      "dblclick label": "edit",
      "keypress .edit": "updateOnEnter",
      "click .delete": "clear",
      
    },

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
      this.$el.html( this.template( this.model.attributes ) );
      this.$el.toggleClass( 'completed', this.model.get("complete") );
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
    togglecompleted: function() {
      this.model.toggle();
    },

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

})

  