import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferComponent {
  input: string = '';
  textarea: string = '';
  form: object = {};

  clear() {
    this.input = '';
    this.textarea = '';
    this.form = {};
  }
}
