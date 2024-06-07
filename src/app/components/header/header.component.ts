import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  
})
export class HeaderComponent implements OnInit {
  search: any;
  stateservice=inject(StateService);
  searchControl=new FormControl();

  constructor() { }

  ngOnInit() {
   this.searchControl.valueChanges.pipe(debounceTime(250)).subscribe((value)=>{
    
    this.stateservice.searchSubject.next(value || " ");
   }
  )
  }
  

}
