import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getBoxById, getBoxes, openBox } from '@core/queries/boxes/boxes';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  constructor(private apollo: Apollo) {}
  public openBox(boxId: string, amount: number = 1) {
    return this.apollo.watchQuery({ query: openBox(boxId, amount) });
  }
  public getBoxes() {
    return this.apollo.watchQuery({ query: getBoxes() }).valueChanges.pipe(map((x: any) => x.data));
  }
  public getBoxById(id: string) {
    return this.apollo.watchQuery({ query: getBoxById(id) }).valueChanges;
  }
}
