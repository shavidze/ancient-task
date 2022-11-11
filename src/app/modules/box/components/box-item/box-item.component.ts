import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IBox } from '@shared/interfaces/box';

@Component({
  selector: 'app-box-item',
  templateUrl: './box-item.component.html',
  styleUrls: ['./box-item.component.scss', '../../shared.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxItemComponent implements OnInit {
  @Input() box: IBox | null = null;
  constructor() {}

  ngOnInit(): void {}
}
