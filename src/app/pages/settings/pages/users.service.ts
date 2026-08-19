import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from './users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private httpClient = inject(HttpClient);
  private apiUrl = 'https://6a79b616674f43f4db11a1e7.mockapi.io/User';
  users = signal<User[]>([]);

  fetchUsers() {
    this.httpClient.get<User[]>(this.apiUrl).subscribe({
      next: (response) => this.users.set(response),
    });
  }
  addUser(user: Omit<User, 'id'>) {
    return this.httpClient.post<User>(this.apiUrl, user).subscribe({
      next: (newUser) => {
        this.users.update((currentUsers) => [...currentUsers, newUser]);
      },
    });
  }
  deleteUser(userId: string) {
    return this.httpClient.delete<User>(`${this.apiUrl}/${userId}`).subscribe({
      next: () => {
        this.users.update((currentUsers) =>
          currentUsers.filter((user) => user.id !== userId),
        );
      },
    });
  }
  updateUser(userId: string, user: Omit<User, 'id'>) {
    return this.httpClient
      .put<User>(`${this.apiUrl}/${userId}`, user)
      .subscribe({
        next: (updatedUser) => {
          this.users.update((currentUsers) =>
            currentUsers.map((user) =>
              user.id === userId ? updatedUser : user,
            ),
          );
        },
      });
  }
}
