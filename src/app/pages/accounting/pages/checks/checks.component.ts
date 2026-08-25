import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PermissionsService } from 'src/app/permissions/permissions.service';
import { ChecksService } from '../checks.service';
import { CheckItemComponent } from '../check-item/check-item.component';

@Component({
  selector: 'app-checks',
  standalone: true,
  imports: [CheckItemComponent, RouterLink, RouterOutlet],
  templateUrl: './checks.component.html',
  styleUrl: './checks.component.scss',
})
export class ChecksComponent implements OnInit {
  private checksService = inject(ChecksService);
  private permissionsService = inject(PermissionsService);

  checks = this.checksService.checks;

  canAdd = this.permissionsService.can('Accounting', 'Add');
  canEdit = this.permissionsService.can('Accounting', 'Edit');
  canDelete = this.permissionsService.can('Accounting', 'Delete');

  ngOnInit(): void {
    this.checksService.fetchChecks();
  }
  onDeleteCheck(tranID: number): void {
    this.checksService.deleteCheck(tranID);
  }
}
