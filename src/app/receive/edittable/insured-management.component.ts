import { Component, DefaultIterableDiffer, OnInit, ViewChild,AfterViewInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatTableDataSource,MatTableModule } from '@angular/material/table'
import { User, UserColumns } from './model/user'
import { UserService } from './services/user.service'
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { InsuredDialogComponent } from '../insured/insured-dialog.component'


@Component({
  selector: 'app-insured-management',
  templateUrl: './insured-management.component.html',
  styleUrls: ['./insured-management.component.scss'],
})
export class InsuredManagementComponent {


  constructor(public dialog: MatDialog) {}

  ngOnInit() {

  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(InsuredDialogComponent, {
      width: '1000px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}



