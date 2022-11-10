import { Component, OnInit } from '@angular/core';
import { BoxService } from '@core/services/box.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss'],
})
export class BoxesComponent implements OnInit {
  public boxList$: Observable<any> = new Observable();
  constructor(private boxService: BoxService) {}

  ngOnInit(): void {
    this.boxList$ = this.boxService.getBoxes();
  }
}
