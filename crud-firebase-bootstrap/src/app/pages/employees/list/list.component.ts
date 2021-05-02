import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeI } from 'src/app/shared/models/employee.interface';
import { EmployeesService } from 'src/app/shared/services/employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // Enviar data (objetos) por rutas
  navigationExtra: NavigationExtras = {
    state: {
      data: null // employee
    }
  }

  dataEmployees$: EmployeeI[];
  emp_subs: Subscription;

  constructor(
    private router: Router,
    private employeesService: EmployeesService,
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    if (this.emp_subs) this.emp_subs.unsubscribe();
    this.emp_subs = this.employeesService.getEmployees().subscribe(data => {
      this.dataEmployees$ = data;
    });
  }

  async deleteEmployee(id: string) {
    await this.employeesService.deleteEmployee(id).then(() => {
      console.log('Deleted employee...');
    }).catch(error => console.log('Error delete...', error));
  }

  onGoToEdit(employee: any) {
    this.navigationExtra.state.data = employee;
    this.router.navigate(['edit'], this.navigationExtra);
    // console.log('employee', employee);
  }

  onGoToDetails(employee: any) {
    this.navigationExtra.state.data = { ...employee };
    this.router.navigate(['details'], this.navigationExtra);
  }


}
