'use strict';
// List Model
List.all = []
function List(title){
  this.title = title
  this.tasks = []
  List.all.push(this)
  this.id = List.all.length - 1
  this.listEl = function () {
    return `<div class="list"><h2><button class="destroy-list">x</button> ${this.title}</h2><ul id="list-${this.id}" data-id="${this.id}"></ul></div>`};
  this.optionEl = function () {
    return `<option value="${this.id}">${this.title}</option>`
  };
  this.build = function () {
      $("#select_list").append(this['optionEl'])
      $("#lists").append(this['listEl'])
  };
}
