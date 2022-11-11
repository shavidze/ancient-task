import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, first, map, Observable } from 'rxjs';
import { IBox } from '@shared/interfaces/box';
import { ActivatedRoute } from '@angular/router';
import { BoxService } from '@core/services/box.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { error } from '@angular/compiler-cli/src/transformers/util';

@UntilDestroy()
@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.scss', '../../shared.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxDetailsComponent implements OnInit {
  public boxDetails$: Observable<IBox> | undefined;
  public loading$ = new BehaviorSubject(false);
  public boxPrize$ = new BehaviorSubject(null);
  public error$ = new BehaviorSubject(null);
  constructor(private activatedRoute: ActivatedRoute, private boxService: BoxService) {}

  ngOnInit(): void {
    this.boxDetails$ = this.activatedRoute.data.pipe(
      untilDestroyed(this),
      map((data: any) => data.boxDetails.box)
    );
  }

  openBox(id: string | undefined): void {
    this.loading$.next(true);
    this.boxService.openBox(id || '', 1).subscribe({
      next: (boxRes: any) => {
        this.boxPrize$.next(boxRes.data?.openBox.boxOpenings);
        this.loading$.next(false);
      },
      error: err => {
        this.loading$.next(false);
        this.error$.next(err?.message);
      },
    });
  }
}
