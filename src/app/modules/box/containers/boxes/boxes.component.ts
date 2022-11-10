import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BoxService } from '@core/services/box.service';
import { BehaviorSubject, finalize, Observable, tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
@UntilDestroy()
@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxesComponent implements OnInit {
  public boxList$: Observable<any> = new Observable();
  public isLoading$ = new BehaviorSubject(true);
  constructor(private boxService: BoxService) {}

  ngOnInit(): void {
    this.boxList$ = this.boxService.getBoxes().pipe(
      untilDestroyed(this),
      tap(() => this.isLoading$.next(false))
    );
  }
}
