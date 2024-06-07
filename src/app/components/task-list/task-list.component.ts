import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Task} from './task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }
  @Input() taskList:Task[]=[];
  @Output() complete= new EventEmitter<any>();
  @Output() important= new EventEmitter<any>();
 
 
  markImportant(task:any){
         this.important.emit(task);
  }
  markCompleted(task:any){
           this.complete.emit(task);
  }
 
  
  

  
      
}
