export class Project {

  constructor(projName) {
    this.projName = projName;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

}