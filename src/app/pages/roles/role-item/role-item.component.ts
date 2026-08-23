import { Component, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Role } from '../role.model';

@Component({
  selector: 'app-role-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './role-item.component.html',
  styleUrl: './role-item.component.scss',
})
export class RoleItemComponent {
  role = input.required<Role>();
}
