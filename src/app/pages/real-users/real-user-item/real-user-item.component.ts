import { Component, input } from '@angular/core';
import { RealUser } from '../real-user.model';

@Component({
  selector: 'app-real-user-item',
  standalone: true,
  templateUrl: './real-user-item.component.html',
  styleUrl: './real-user-item.component.scss',
})
export class RealUserItemComponent {
  user = input.required<RealUser>();
}
