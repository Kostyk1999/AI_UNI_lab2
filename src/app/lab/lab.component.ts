import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {

  constructor() {
  }

  dtOptions: any = {
    'paging': false,
    'ordering': false,
    'info': false,
    'searching': false
  };

  rowsColsDescriptions: string[] = [];
  matrix: number[][] = [];
  colsSums: number[] = [];
  converseColsSums: number[] = [];
  normalizedBelongFunction: number[] = [];

  public calculateMatrix() {
    this.normalizedBelongFunction = [];

    console.log('calculate matrix');

    const k = this.matrix.length - 1; // k - last matrix row

    // aij = akj/aki if j<i
    for (let i = 0; i < this.matrix.length; ++i) {
      for (let j = 0; j < i; ++j) {
        this.matrix[i][j] = Number((this.matrix[k][j] / this.matrix[k][i]).toFixed(2));
      }
    }

    // aij = 1/aji if j>i
    for (let i = 0; i < this.matrix.length; ++i) {
      for (let j = i; j < this.matrix[0].length; ++j) {
        this.matrix[i][j] = Number((1 / this.matrix[j][i]).toFixed(2));
      }
    }

    // calucalate 1,2
    for (let j = 0; j < this.matrix.length; ++j) {
      let sum = 0;
      for (let i = 0; i < this.matrix[0].length; ++i) {
        sum += this.matrix[i][j];
      }
      this.colsSums[j] = Number((sum).toFixed(2));
      this.converseColsSums[j] = Number((1 / sum).toFixed(2));
    }

    // calculate M(x)
    const maxConversedColsSum = Math.max(...this.converseColsSums);
    for (let j = 0; j < this.matrix.length; ++j) {
      this.normalizedBelongFunction[j] = Number((this.converseColsSums[j] / maxConversedColsSum).toFixed(2));
    }
  }

  ngOnInit() {
    for (let markForSubjectInTheUniversity = 50, i = 0;
         markForSubjectInTheUniversity <= 100;
         markForSubjectInTheUniversity += 5, ++i) {
      this.rowsColsDescriptions[i] = markForSubjectInTheUniversity.toString();
    }

    for (let i = 0; i < this.rowsColsDescriptions.length; ++i) {
      const row = [];
      for (let j = 0; j < this.rowsColsDescriptions.length; ++j) {
        if (i !== j) {
          row.push(0);
        } else {
          row.push(1);
        }
      }
      this.matrix.push(row);
    }
  }

  fillMatrixLastRow() {
    this.matrix[10] = [9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  }

  clear() {
    this.normalizedBelongFunction = [];
  }

  trackByIdx(index: number, obj: any) {
    return index;
  }
}
