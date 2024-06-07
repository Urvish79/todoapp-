import { Component, OnInit, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { StateService } from 'src/app/services/state.service';


@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit {
search($event: Event) {
throw new Error('Method not implemented.');
}
    
  isLoading: boolean = false;
  http: any;
  initialTaskList: any[]=[];
  taskList: any[]=[];

  constructor() { }

  ngOnInit() {

    this.stateService.searchSubject.subscribe((value)=>{
      console.log("search",value)
      if(value){
        this.taskList=this.initialTaskList.filter(x=>x.title.toLowerCase().includes(value.toLowerCase()))
      }else{
        this.taskList=this.initialTaskList;
      }
    })
    
    this.getAllTasks();
  }
 
  newTask="";

  httpService=inject(HttpService);
  stateService = inject(StateService);
 
  addTask(){
    console.log("added", this.newTask)
    this.httpService.addTask(this.newTask).subscribe(()=>{
      this.newTask="";
      this.getAllTasks();
    })
  }
  getAllTasks(){
    this.httpService.getAllTasks().subscribe( (result:any)=>{
      this.initialTaskList=this.taskList=result;
    })
  }

  onComplete(task:any){
        task.completed=!task.completed;
      console.log("complete",task);
       this.httpService.updateTask(task).subscribe(()=> {
                    this.getAllTasks(); 
       })

  }
  onImportant(task:any){
         task.important=!task.important;
        
          this.httpService.updateTask(task).subscribe(()=> {
                      this.getAllTasks();
          })
  }
 




}
function newdate() {
  throw new Error('Function not implemented.');
}

