import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  enterText ='';
  outputText = '';

  enterInputHeader=( event: Event)=>{
    const value=((<HTMLInputElement>event.target).value);
      this.enterText=value}
  
  enterInputBody=( event: Event)=>{
    const value=((<HTMLInputElement>event.target).value);
      this.outputText=value}    
  
  onButtonClick(){
    return alert("OK pressed")
  }
}