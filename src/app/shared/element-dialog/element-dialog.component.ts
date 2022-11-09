import { Component, Inject, OnInit } from '@angular/core';
import { CryptoElement } from 'src/app/views/home/home.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit {
  element!: CryptoElement;
  isChange!: boolean

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: CryptoElement,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
  ) {}


  ngOnInit(): void {
    if(this.data.position != null){
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
