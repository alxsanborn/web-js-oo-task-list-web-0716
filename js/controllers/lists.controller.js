'use strict';
// Lists Controller
class ListsController{
  constructor () {
  this.$addListForm = $('#add_list')
  this.$listTitleInput = $('#list_title')
  this.$selectListMenu = $('#select_list')
  this.$addTaskForm = $('#add_task')
  this.$wrapper = $('#wrapper')
}
 init(){
   this.$addTaskForm.hide();
   this.$addListForm.on("submit", function(){
           var newTitle = $('#list_title').val()
           var newList = new List(newTitle)
            $('#lists').append(newList.listEl())
            $('#select_list').append(newList.optionEl())
            //newList.build()
           $('#add_task').show()
       });
      $("#lists").on("click", ".list .destroy-list", function () {
          $(this).closest("div").remove();
      });
 }
 }
