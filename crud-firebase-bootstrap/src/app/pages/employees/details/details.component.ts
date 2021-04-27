import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

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
  dataEmployee: any;

  constructor(
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.dataEmployee = navigation?.extras?.state?.data;
    console.log('this.dataEmployee', this.dataEmployee);
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

  onGoToDelete() {
    // this.router.navigate(['/delete']);
    console.log('Delete');
  }

  onGoToBack() {
    this.router.navigate(['list']);
  }

}
