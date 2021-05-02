import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { EmployeeI } from 'src/app/shared/models/employee.interface';
import { EmployeesService } from 'src/app/shared/services/employees.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  navigationExtra: NavigationExtras = {
    state: {
      data: null // employee
    }
  }
  dataEmployee: EmployeeI;

  constructor(
    private router: Router,
    private employeesService: EmployeesService,
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.dataEmployee = navigation?.extras?.state?.data;
    // console.log('this.dataEmployee', this.dataEmployee);
  }

  ngOnInit(): void {
    this.validateData();
  }

  validateData() {
    if (!this.dataEmployee) {
      this.router.navigate(['list']);
    }
  }

  onGoToEdit() {
    this.navigationExtra.state.data = this.dataEmployee;
    this.router.navigate(['edit'], this.navigationExtra);
    // console.log('employee', employee);
  }

  async deleteEmployee(id: string) {
    await this.employeesService.deleteEmployee(id).then(() => {
      console.log('Deleted employee...');
      this.onGoToBack();
    }).catch(error => console.log('Error delete...', error));
  }


  onGoToBack() {
    this.router.navigate(['list']);
  }

}
