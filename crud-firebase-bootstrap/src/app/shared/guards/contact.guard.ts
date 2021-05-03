import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import Swal, { SweetAlertOptions } from "sweetalert2";

// Comprobar si un usuario puede acceder a una determinada URL y 
// comprobar si un usuario puede salir de una determinada URL *

@Injectable({
  providedIn: 'root'
})
export class ContactGuard implements CanDeactivate<ContactComponent> {
  // comprobar si un usuario puede salir de una determinada URL *
  canDeactivate(component: ContactComponent): Observable<boolean> | Promise<boolean> | boolean {
    if (component.myForm.dirty) {
      const name = component.myForm.get('name').value || 'Dear user';
      // CONFIGURACIÓN - OPCIONES SWEETALERT2
      const options: SweetAlertOptions = {
        title: `${name}, ¿Está seguro de querer salir sin guardar?`,
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, salir!',
        cancelButtonText: 'Cancelar',
      }
      return Swal.fire(options).then(result => {
        return result.isConfirmed ? true : false;
      });
    }
    return true;
  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

}
