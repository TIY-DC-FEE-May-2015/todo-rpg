var tasks
var activeTask
var dispatcher = _.clone(Backbone.Events)

var toggleContainerView = function() {
  $(".task-container").toggleClass("active")
}

$(document).on("ready", function(){

  tasks = new TaskList()

  tasks.on("add", function(taskModel){

    var view = new TaskView({
      model: taskModel
    })

    $("#task-list-container").append(view.$el)

  })

  tasks.fetch()

  $("#add-button").on("click", function() {
    $(".task").hide();
    $("#add-task").removeClass("hidden");
  })

  $("#completed-button").on("click", function() {
    $(".completed").parent().show();
    $(".incomplete").parent().hide();
    $("#add-task").addClass("hidden");
  })

  $("#incomplete-button").on("click", function() {
    $(".completed").parent().hide();
    $(".incomplete").parent().show();
    $("#add-task").addClass("hidden");
  })

  $("#save-button").on("click", function() {
    tasks.create({
        task: $("#add-title").val(),
        value: $("#add-points").val(),
        id: (tasks.length + 1)
      });
    $("#add-title").val("");
    $("#add-points").val("");
    $("#add-task").addClass("hidden");
    $(".task").show();
  })

  $("#cancel-button").on("click", function() {
    $("#add-title").val("");
    $("#add-points").val("");
    $("#add-task").addClass("hidden");
    $(".task").show();
  })


})

