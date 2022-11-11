import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { IUser } from '@shared/interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'task-ancient';
  public currentUser: IUser | null = null;
  public isLoadingUser: boolean = true;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe({
      next: user => {
        this.currentUser = user;
        this.isLoadingUser = false;
      },
      error: (err: any) => {
        this.isLoadingUser = false;
      },
    });
  }
}
