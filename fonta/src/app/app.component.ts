import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 vettore = new Array<string>();
 Spammer(label1: HTMLInputElement, spam: HTMLInputElement): boolean{
    let cont = Number(spam.value);
    for (let i:number = 0; i< cont; i ++)
    {
      this.vettore.push(label1.value)
    }
    return false
  }
}

