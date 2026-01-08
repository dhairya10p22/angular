import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('january3');
   name:string ='dhairya';
   num:number=22;
   data:number|string='22';
   obj:any;
   count:number=0;
   increment (){
    this.count+=1;
   }
   decrement (){
    if(this.count>0){
    this.count=this.count-1;}

   }
   reset (){
    this.count=0;

   }



  
  hello(){
    this.otherFunction();
    alert('function called');
    this.obj=22;
    
    
  }

  otherFunction(){
    console.log('other function');
  }
  turnoff(){
    this.num=20;

  }
}
