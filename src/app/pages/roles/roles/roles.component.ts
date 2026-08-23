import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RoleItemComponent } from '../role-item/role-item.component';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [RoleItemComponent, RouterLink, RouterOutlet],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss',
})
export class RolesComponent implements OnInit {
  private rolesService = inject(RolesService);

  roles = this.rolesService.roles;

  ngOnInit(): void {
    this.rolesService.fetchRoles();
  }
}
