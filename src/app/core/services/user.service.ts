import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { getCurrentUser } from '@core/queries/user/user';
import { map, Observable } from 'rxjs';
import { IUser } from '@shared/interfaces/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo) {}
  public getCurrentUser = (): Observable<IUser> => {
    return this.apollo
      .watchQuery({ query: getCurrentUser })
      .valueChanges.pipe(map((x: any) => x.data.currentUser));
  };
}
