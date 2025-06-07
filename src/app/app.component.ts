import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'web-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <router-outlet />
  `,
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'web-akademia';
}
