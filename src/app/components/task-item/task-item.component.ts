import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task : Task;
  @Output() onEventDelete : EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes


  deleteItem(task : Task) : void{
    this.onEventDelete.emit(task)
  }

  toggleTaskReminder(task : Task) {
    this.onToggleReminder.emit(task)
  }
}
