import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from '../user-item/user-item.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UserItemComponent, RouterLink, RouterOutlet],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  private userService = inject(UsersService);

  users = this.userService.users;

  ngOnInit(): void {
    this.userService.fetchUsers();
  }

  onDeleteUser(id: string): void {
    this.userService.deleteUser(id);
  }
}
