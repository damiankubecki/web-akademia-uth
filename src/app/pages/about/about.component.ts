import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageComponent } from '../../shared/layout/page/page.component';

@Component({
  selector: 'web-about',
  imports: [PageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
