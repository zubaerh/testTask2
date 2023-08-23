import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kgTechExam2';
  enterNumber = 0;


  onInput=( event: Event)=>{
    const value=parseInt((<HTMLInputElement>event.target).value);
      this.enterNumber=value
      
  } 
}
