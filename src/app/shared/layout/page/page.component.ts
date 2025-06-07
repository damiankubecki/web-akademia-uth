import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'web-page',
  imports: [NgTemplateOutlet],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {
  readonly title = input<string>();
  readonly description = input<string>();
  readonly pageTemplate = input<TemplateRef<HTMLElement>>();
}
