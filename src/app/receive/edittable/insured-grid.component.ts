import { Component, OnInit, ViewChild,AfterViewInit, Input } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatTableDataSource,MatTableModule } from '@angular/material/table'
import { User, UserColumns } from './model/user'
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';


@Component({
  selector: 'app-insured-grid',
  templateUrl: './insured-grid.component.html',
  styleUrls: ['./insured-grid.component.scss'],
})
export class InsuredGridComponent  implements AfterViewInit{
  @Input() hideComponent: boolean = false;
  
  displayedColumns: string[] = ['position', 'emp_id','emp_name', 'rela', 'insuredId','insuredName','plan'];

  //dataSource = new MatTableDataSource<User>()
  valid: any = {}

  dataSource = new MatTableDataSource<Insured>(INSURED_DATA_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {}

  ngOnInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}



export interface Insured {
  position: number;
  emp_id: string;
  emp_name: string;
  rela: string;
  insuredId: string;
  insuredName: string;
  plan: string;
}

const INSURED_DATA_DATA: Insured[] = [
  {position: 1, emp_id: 'A123456789', emp_name: '王大強', rela: '本人', insuredId:'A123456789', insuredName:'王大強', plan: 'A11'},
  {position: 2, emp_id: 'A123456789', emp_name: '吳小花', rela: '配偶', insuredId:'F232425019', insuredName:'吳小花', plan: 'A11'},
  {position: 3, emp_id: 'A123456789', emp_name: '王小明', rela: '子女', insuredId:'A145897319', insuredName:'王小明', plan: 'A11'},
  {position: 4, emp_id: 'J123456789', emp_name: '許阿美', rela: '本人', insuredId:'J123456789', insuredName:'許阿美', plan: 'A11'},
  {position: 5, emp_id: 'G123456789', emp_name: '柯博文', rela: '本人', insuredId:'G123456789', insuredName:'柯博文', plan: 'A11'},

];
