import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  taskTitle = '';
  @Output() taskCreated = new EventEmitter<string>();

  addTask() {
    if (this.taskTitle.trim()) {
      this.taskCreated.emit(this.taskTitle);
      this.taskTitle = '';
    }
  }

}
