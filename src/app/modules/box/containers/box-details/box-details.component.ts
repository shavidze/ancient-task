import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IBox } from '@shared/interfaces/box';
import { ActivatedRoute } from '@angular/router';
import { BoxService } from '@core/services/box.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.scss', '../../shared.scss'],
})
export class BoxDetailsComponent implements OnInit {
  public boxDetails$: Observable<IBox> | undefined;
  public loadinng: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private boxService: BoxService) {}

  ngOnInit(): void {
    this.boxDetails$ = this.activatedRoute.data.pipe(
      untilDestroyed(this),
      map((data: any) => data.boxDetails.data.box)
    );
  }

  openBox(id: string | undefined): void {}
}
