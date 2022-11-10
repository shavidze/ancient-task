import { Component, Input, OnInit } from '@angular/core';
import { IBox } from '@shared/interfaces/box';

@Component({
  selector: 'app-box-item',
  templateUrl: './box-item.component.html',
  styleUrls: ['./box-item.component.scss', '../../shared.scss'],
})
export class BoxItemComponent implements OnInit {
  @Input() box: IBox | null = null;
  constructor() {}

  ngOnInit(): void {
    console.log('box', this.box);
  }
}
