import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stampa',
  templateUrl: './stampa.component.html',
  styleUrls: ['./stampa.component.css']
})
export class StampaComponent implements OnInit{
@Input() x : string;
constructor(){

}
ngOnInit(): void {
  
}
}
