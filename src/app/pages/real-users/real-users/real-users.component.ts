import { Component, inject, OnInit } from '@angular/core';
import { RealUserItemComponent } from '../real-user-item/real-user-item.component';
import { RealUsersService } from '../real-users.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-real-users',
  standalone: true,
  imports: [RealUserItemComponent, RouterOutlet, RouterLink],
  templateUrl: './real-users.component.html',
  styleUrl: './real-users.component.scss',
})
export class RealUsersComponent implements OnInit {
  private realUsersService = inject(RealUsersService);

  users = this.realUsersService.users;

  ngOnInit(): void {
    this.realUsersService.fetchUsers();
  }
}
