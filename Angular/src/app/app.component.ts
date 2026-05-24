import { Component } from '@angular/core';
import { DxCardViewTypes } from 'devextreme-angular/ui/card-view';
import { Employee, Service } from './app.service';

import { DxCardViewModule } from 'devextreme-angular/ui/card-view';

@Component({
    selector: 'app-root',
    imports: [DxCardViewModule],
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
