import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'No',
    'Word',
    'WordTranslate',
    'PartOfSpeech',
    'Action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  no: string;
  word: string;
  wordTranslate: string;
  partOfSpeech: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { no: '1', word: 'cookie', wordTranslate: '餅乾', partOfSpeech: '名詞' },
  { no: '2', word: 'work', wordTranslate: '工作', partOfSpeech: '名詞' },
  { no: '3', word: 'eat', wordTranslate: '吃', partOfSpeech: '動詞' },
];
