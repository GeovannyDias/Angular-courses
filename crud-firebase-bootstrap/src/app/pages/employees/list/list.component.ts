import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

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

  dataEmployees$: any = [
    {
      id: '1',
      name: 'Geovanny1',
      email: 'geo@geo.com',
      start_date: '01/02/2021'
    },
    {
      id: '2',
      name: 'Geovanny2',
      email: 'geo@geo.com',
      start_date: '01/02/2021'
    },
    {
      id: '3',
      name: 'Geovanny3',
      email: 'geo@geo.com',
      start_date: '01/02/2021'
    },
    {
      id: '4',
      name: 'Geovanny4',
      email: 'geo@geo.com',
      start_date: '01/02/2021'
    },
    {
      id: '5',
      name: 'Geovanny5',
      email: 'geo@geo.com',
      start_date: '01/02/2021'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
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

  onGoToDelete(employee: any) {
    // this.router.navigate(['/delete']);
    console.log('Delete');
  }

}
