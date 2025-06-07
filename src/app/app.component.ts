import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';

@Component({
  selector: 'web-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="wrapper">
      <web-header />
      <main>
        <router-outlet />
      </main>
      <web-footer />
    </div>
  `,
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
