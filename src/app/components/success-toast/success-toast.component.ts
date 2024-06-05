import { Component, inject } from '@angular/core';
import { SuccessToastService } from '../../services/success-toast.service';

@Component({
  selector: 'app-success-toast',
  standalone: true,
  imports: [],
  templateUrl: './success-toast.component.html',
  styleUrl: './success-toast.component.scss'
})
export class SuccessToastComponent {
  constructor(
    public successToastService: SuccessToastService
  ) {}
}
