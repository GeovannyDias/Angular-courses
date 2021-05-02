import { Component, OnInit } from '@angular/core';

// @Component({
//   template: `<app-employee-form></app-employee-form>`,
// })
/*
se puede eliminar los ficheros que no se necesita:

edit.component.html
edit.component.scss

este ts sirve solo como contenedor ya que solo se le llama
a través de la ruta
*/

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }


}
