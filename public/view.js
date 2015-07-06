var TaskView = Backbone.View.extend({

  events: {
    "click .check-complete": "checkOffTask",
    "click .check-incomplete": "uncheckTask",
  },

  className: "task",

  initialize: function() {
    this.render()

    this.listenTo(this.model, "change", this.render)
  },

  render: function() {
    this.$el.html( this.template( this.model.getDataForDisplay() ) )
  },

  checkOffTask: function(data) {
    this.model.set("complete", true)
    this.model.save()
  },

  uncheckTask: function(data) {
    this.model.set("complete", false)
    this.model.save()
  },

  template: Handlebars.compile( $("#task-template").html() )

})