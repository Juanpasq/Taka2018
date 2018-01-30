import { Component } from '@angular/core';

/**
 * Generated class for the NewuserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'newuser',
  templateUrl: 'newuser.html'
})
export class NewuserComponent {

  text: string;
  usuario: string;
  email: string;
  /*passw;
  rePassw;*/

  constructor() {
    
    console.log(this.usuario = "juan");
    console.log('Hello NewuserComponent Component');
    this.text = 'Hello World';
  }

}
