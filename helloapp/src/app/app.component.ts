import { Component } from '@angular/core';
       
@Component({
    selector: 'my-app',
    template: `<h2>Количество кликов: {{clicks}}</h2>
              <child-comp (onChanged)="onChanged($event)"></child-comp>`
})
export class AppComponent { 
     
    clicks:number = 0;
    onChanged(increased_0:any){
        increased_0==true ? this.clicks++ : this.clicks--;
    }
}