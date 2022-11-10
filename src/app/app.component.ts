import { Component } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { IUser } from '@shared/interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'task-ancient';
  public currentUser: IUser | null = null;
  public isLoadingUser: boolean = true;
  constructor(private userService: UserService) {
    this.userService.getCurrentUser().subscribe(
      user => {
        this.currentUser = user;
        this.isLoadingUser = false;
      },
      (err: any) => {
        this.isLoadingUser = false;
      }
    );
  }
}
