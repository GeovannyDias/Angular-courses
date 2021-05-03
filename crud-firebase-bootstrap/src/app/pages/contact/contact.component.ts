import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/shared/services/contact.service';
import Swal, { SweetAlertOptions } from "sweetalert2";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  /*
  No mezclar comillas ' con delimitadores /. O se usa comillas o usa delimitadores.
  Además, con [1-9] no se está tomando en cuenta el 0.
  Una expresión regular más sencilla es ^\d+$. Con \d tomás todos los dígitos, 
  y no tomás las longitudes porque de todos modos ya estás validando el mínimo y el máximo
   con los otros validadores y te dan los mensajes correspondientes.

   /^\d+$/
   /^[0-9]\d+$/

  */

  private isEmail = /\S+@\S+\.\S+/; // Expresión regular para validar email
  private isNumber = '[0-9]{10}'; // Expresión regular para ingresar solo números hasta 10 caracteres
  private isNumber2 = /^\d+$/;
  myForm: FormGroup;
  private initForm() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.isEmail)]],
      phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern(this.isNumber2)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(700)]],
      time: [Date.now()],
    });
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private contactService: ContactService,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  // VALIDA LOS CAMPOS DEL FORMULARIO
  isValidField(field: string) {
    const validatedField = this.myForm.get(field);
    return (!validatedField.valid && validatedField.touched) ? 'is-invalid' :
      validatedField.touched ? 'is-valid' : '';
  }

  // PARA UN CAMPO QUE NO ES REQUERIDO
  // VALIDA SI TIENE UN VALOR PARA QUE SE PINTE SUCCESSFUL → is-valid
  // NO UTILIZADO
  notRequeriedHasValue(field: string) {
    const valueField = this.myForm.get(field).value;
    return valueField ? 'is-valid' : '';
  }

  async onSave() {
    // console.log('Saved...', this.myForm.value);
    if (this.myForm.valid) {
      this.postContact();
    } else {
      console.log('Data My Form not valid...');
    }
  }

  // CONFIGURACIÓN - OPCIONES SWEETALERT2
  sweetAlertOptions() {
    const options: SweetAlertOptions = {
      title: '¿Está seguro?',
      text: "¡Se enviará esta información!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, enviar!',
      cancelButtonText: 'Cancelar',
    }
    return options;
  }

  async postContact() {
    const data = this.myForm.value;
    const options = this.sweetAlertOptions();
    await Swal.fire(options).then(async result => {
      if (result.isConfirmed) {
        await this.contactService.postContact(data).then(() => {
          console.log('Post Successfuly...');
          // this.router.navigate(['list']);
          this.resetForm();
          Swal.fire(
            '¡Enviado!',
            'La información ha sido enviada.',
            'success',
          );
        }).catch(error => console.log('Error post...', error));
      }
    });
  }

  resetForm() {
    this.myForm.reset();
  }





}
