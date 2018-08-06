import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { resolve } from 'url';

export interface DailyElement {
  task: string;
  priority: string;
}
const ELEMENT_DATA: DailyElement[] = [
  {task: '', priority: '' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['task', 'priority'];
  update: boolean;
  dailies: any;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(updates: SwUpdate, private data: DataService) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });

  }
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.data.getDaily().subscribe(res => {
      this.dailies = res;
      console.log(res);
      this.dataSource.data = this.dailies.rows;
    });
  }
}
