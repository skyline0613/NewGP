import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MatDialogContent } from '@angular/material/dialog';


@Component({
  selector: 'app-insured-dialog',
  templateUrl: './insured-dialog.component.html',
  styleUrls: ['./insured-dialog.component.css']
})
export class InsuredDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InsuredDialogComponent>) {}

  ngOnInit() {
  }

}
