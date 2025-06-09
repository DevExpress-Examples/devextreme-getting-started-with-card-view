import { Component } from '@angular/core';
import { ClickEvent } from 'devextreme/ui/button';
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
  getColumnChooserConfig() {
    return {
      enabled: true,
      height: 340,
      mode: 'select',
      position: {
        my: 'right top',
        at: 'right bottom',
        of: '.dx-cardview-column-chooser-button'
      },
      selection: {
        selectByClick: true
      }
    };
  }
}
