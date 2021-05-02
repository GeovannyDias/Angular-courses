import { Component, OnInit } from '@angular/core';

// @Component({
//   template: `<app-employee-form></app-employee-form>`,
// })
/*
se puede eliminar los ficheros que no se necesita:

new.component.html
new.component.scss

este ts sirve solo como contenedor ya que solo se le llama
a través de la ruta
*/

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
