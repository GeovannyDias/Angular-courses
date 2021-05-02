import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeI } from 'src/app/shared/models/employee.interface';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  private isEmail = /\S+@\S+\.\S+/; // Expresión regular para validar email
  myForm: FormGroup;
  private initForm() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.isEmail)]],
      start_date: ['', [Validators.required]],
    });
  }

  dataEmployee: EmployeeI;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private employeesService: EmployeesService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.dataEmployee = navigation.extras.state?.data;
    // console.log('this.dataEmployee', this.dataEmployee);
    this.initForm();
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    if (!this.dataEmployee) {
      this.router.navigate(['new']);
    } else {
      this.myForm.patchValue(this.dataEmployee);
    }
  }

  // VALIDA LOS CAMPOS DEL FORMULARIO
  isValidField(field: string) {
    const validatedField = this.myForm.get(field);
    return (!validatedField.valid && validatedField.touched) ? 'is-invalid' :
      validatedField.touched ? 'is-valid' : '';
  }

  async onSave() {
    // console.log('Saved...', this.myForm.value);
    if (this.dataEmployee) {
      this.updateEmployee();
    } else {
      this.postEmployee();
    }
  }

  resetForm() {
    this.myForm.reset();
  }

  onGoToBack() {
    this.router.navigate(['list']);
  }


  async postEmployee() {
    if (this.myForm.valid) {
      const data = this.myForm.value;
      await this.employeesService.postEmployee(data).then(() => {
        console.log('Post Successfuly...');
        this.router.navigate(['list']);
        this.resetForm();
      }).catch(error => console.log('Error post...', error));
    } else {
      console.log('Data My Form not valid...');
    }
  }

  async updateEmployee() {
    if (this.myForm.valid) {
      const id = this.dataEmployee.id;
      const data = this.myForm.value;
      await this.employeesService.updateEmployee(id, data).then(() => {
        console.log('Update Successfuly...');
        this.router.navigate(['list']);
        this.resetForm();
      }).catch(error => console.log('Error update...', error));
    } else {
      console.log('Data My Form not valid...');
    }
  }

}
