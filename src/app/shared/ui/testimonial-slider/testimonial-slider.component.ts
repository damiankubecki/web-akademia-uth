import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'web-testimonial-slider',
  imports: [],
  templateUrl: './testimonial-slider.component.html',
  styleUrl: './testimonial-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialSliderComponent {
  @Input({ required: true }) testimonials: { author: string; text: string }[] =
    [];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }
}
