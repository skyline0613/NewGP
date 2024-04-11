import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ProposalViewComponent } from './proposal-view/proposar-view.component';


export class User {
  public name!: string;
  public email!: string;
  public password!: string;
  public hobbies!: string;
}



@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.scss']
})
export class ReceiveComponent implements OnInit {
  tabIndex = 1;

  IsChecked: boolean;
  IsIndeterminate: boolean;
  LabelAlign: 'after' | 'before';
  IsDisabled: boolean;



  // constructor() {
  //   this.IsChecked = false;
  //   this.IsIndeterminate = false;
  //   this.LabelAlign = 'after';
  //   this.IsDisabled = false;


  // }

  constructor(public dialog: MatDialog) {
    this.IsChecked = false;
    this.IsIndeterminate = false;
    this.LabelAlign = 'after';
    this.IsDisabled = false;
  }

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(ProposalViewComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  tabFocusChange($event: MatTabChangeEvent) {
    console.log(`focus變更，index：${$event.index}`);
  }

  tabSelectedIndexChange($event: number) {
    if($event <=0){
      $event= 0;
      this.tabIndex = 0;
    }

    console.log(`selectedIndex變更，index：${$event}`);
  }

  tabSelectedTabChange($event: MatTabChangeEvent) {
    console.log(`selectedTab變更，index：${$event.index}`);
  }


  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
