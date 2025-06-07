import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TestimonialSliderComponent } from '../../shared/ui/testimonial-slider/testimonial-slider.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'web-home',
  imports: [TestimonialSliderComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
