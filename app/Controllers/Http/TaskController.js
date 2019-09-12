'use strict'

const Schema = use('Schema')

class TaskController {
  up(){
    this.create('task',(table)=>{

      table.increst()
      table.string('title',30),notNullable()
      table.string('body',250),notNullable()
      table.timestaps()
    })
  }
  down(){
    this.drop('task')
  }
}

module.exports = TaskController
