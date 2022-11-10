import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { BoxService } from '@core/services/box.service';

@Injectable({
  providedIn: 'root',
})
export class BoxDetailsResolver implements Resolve<boolean> {
  constructor(private boxService: BoxService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.boxService.getBoxById(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['boxes']);
        return EMPTY;
      })
    );
  }
}
