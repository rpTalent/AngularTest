import { Component, OnInit } from '@angular/core';
import { Man } from '../man';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  workers: Man[] = this.genareteWorkers();

  constructor() { }

  ngOnInit() {
  }

  private genareteWorkers(count?: number): Man[] {
    let cnt:    number;
    const items:  Man[] = [];

    cnt = count || 100;
    for (let i = 0; i < cnt; i++) {
      items[i] = new Man('FirtsName_' + i, 'SureName' + i);
    }
    return items;
  }

}
