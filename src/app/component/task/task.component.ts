import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) {}

  newTaskControl = new FormControl('');

  ngOnInit(): void {
  }

  panelOpenState = false;

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  addTask(): void {
    if (this.newTaskControl.value) {
      this.typesOfShoes.push(this.newTaskControl.value)
      this.newTaskControl.reset();
    }
  }

}
