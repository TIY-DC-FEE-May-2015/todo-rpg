var Task = Backbone.Model.extend({

  defaults: {
    task: "Untitled task",
    value: 0,
    complete: false,
    createdAt: moment().calendar(),
    id: "none"
  },

  initialize: function() {

  },

  getDataForDisplay: function() {
  	var data = this.toJSON()

  	data.createdAt = moment(data.createdAt).calendar()

  	data.complete = data.complete ? "completed" : "incomplete"

  	return data
  }

})