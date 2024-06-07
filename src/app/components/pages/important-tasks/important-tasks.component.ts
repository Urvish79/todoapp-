import { Component, OnInit, inject } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-important-tasks',
  templateUrl: './important-tasks.component.html',
  styleUrls: ['./important-tasks.component.scss']
})
export class ImportantTasksComponent implements OnInit {
  taskList: any;
  constructor() { }

  ngOnInit() {
    
    this.getAllTasks();
  }

  
  newTask="";

  httpService=inject(HttpService);
 
  
  getAllTasks(){
    this.httpService.getAllTasks().subscribe( (result:any)=>{
      this.taskList=result.filter((x: { important: boolean; })=>x.important==true);
    })
  }

  onComplete(task:any){
        task.completed=true;
       console.log("completed",task);
       this.httpService.updateTask(task).subscribe(()=> {
                    this.getAllTasks(); 
       })

  }
  onImportant(task:any){
         task.important=true;
        
          this.httpService.updateTask(task).subscribe(()=> {
                      this.getAllTasks();
          })
  }
  

}
