import { Component } from '@angular/core';
import { Employee, Service } from './app.service';
import { DxCardViewTypes } from 'devextreme-angular/card-view';

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

  getColumnChooserConfig(): DxCardViewTypes.ColumnChooser {
    return {
      enabled: true,
      height: 340,
      mode: 'select',
      position: {
        my: 'right top',
        at: 'right bottom',
        of: '.dx-cardview-column-chooser-button',
      },
      selection: {
        selectByClick: true,
      },
    };
  }
}
