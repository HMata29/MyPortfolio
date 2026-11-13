
import { Component, inject, signal } from '@angular/core';
import { ThemeService } from './theme.service';
import { LanguageService } from './language.service';


import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Experience } from './sections/experience/experience';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    About,
    Skills,
    Projects,
    Experience,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly themeService = inject(ThemeService);
  protected readonly languageService = inject(LanguageService);

  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
