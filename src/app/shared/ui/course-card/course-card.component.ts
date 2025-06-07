import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'web-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent implements OnInit {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) image!: string;
  @Input({ required: true }) longDescription!: string;

  isMobile = false;
  showDetails = true;

  ngOnInit(): void {
    this.checkDevice();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkDevice();
  }

  private checkDevice() {
    this.isMobile = window.innerWidth < 768;
    this.showDetails = !this.isMobile;
  }

  toggleDetails() {
    if (this.isMobile) {
      this.showDetails = !this.showDetails;
    }
  }
}
