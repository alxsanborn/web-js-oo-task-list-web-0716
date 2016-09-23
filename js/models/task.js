'use strict';
function Task(description, priority, list) {
  this.description = description;
  this.priority = priority;
  this.list = list
    list.tasks.push(this);
  this.id = (list.tasks.length) - 1;
  this.liEl = function () {
        return `<li data-id="${this.id}"><button class="destroy-task">x</button> ${this.description}, ${this.priority}</li>`
  };
  this.build = function () {
    $(`ul#list-${this.list.id}`).append(this['liEl'])
  };
};
