'use strict';
// Tasks Controller
class TasksController{
  constructor (){
  this.$addTaskForm = $('#add_task')
  this.$taskDescriptionInput = $('#task_description')
  this.$selectListMenu = $('#select_list')
  this.$taskPriorityInput = $('#task_priority')
  this.$wrapper = $('#wrapper')
};

init () {
  this.$addTaskForm.on("submit", function(){
          var currentListId = $('#select_list').val()
          var currentList = List.all[currentListId]
          var newDescription = $('#task_description').val()
          var newPriority = $('#task_priority').val()
          var newTask = new Task(newDescription, newPriority, currentList)
          $(`ul#list-${currentListId}`).append(newTask.liEl())

      });

      $("#lists").on("click", ".list .destroy-task", function () {
          var listId = $(this).closest('ul').data('id')
          var taskId = $(this).closest('li').data('id')
          $(this).closest("li").remove();
          List.all[listId]['tasks'].splice(taskId)
          if (List.all[listId]['tasks'].length === 0) {
            List.all[listId]['tasks'] = [null]
          }
      });


}
}
