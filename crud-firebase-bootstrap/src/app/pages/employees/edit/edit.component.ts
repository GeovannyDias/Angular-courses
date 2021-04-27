import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  dataEmployee: any;

  constructor(
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.dataEmployee = navigation.extras.state;
    console.log('this.dataEmployee', this.dataEmployee);
  }

  ngOnInit(): void {
  }

}
