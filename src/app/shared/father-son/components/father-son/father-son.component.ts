import { Component, Input } from '@angular/core';
import { Client } from '@father/shared/model/client';

@Component({
  selector: 'app-father-son',
  templateUrl: './father-son.component.html',
  styleUrls: ['./father-son.component.css']
})
export class FatherSonComponent{

  @Input() client?: Client;
  

}
