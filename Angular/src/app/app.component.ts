import { Component } from '@angular/core';
import { DxCardViewTypes } from 'devextreme-angular/ui/card-view';
import { Employee, Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service],
})
export class AppComponent {
  title = 'Angular';

  employees: Employee[];

  constructor(service: Service) {
    this.employees = service.getEmployees();
  }
}
