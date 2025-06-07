import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PageComponent } from '../../shared/layout/page/page.component';

@Component({
  selector: 'web-contact',
  imports: [PageComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);

  contactForm!: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitted = true;
      // TU WYSYŁKA DO BACKENDU
      this.contactForm.reset();
    }
  }
}
