import { Injectable, signal } from '@angular/core';

export type Language = 'it' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  readonly language = signal<Language>('it');

  toggle(): void {
    this.language.update((current) =>
      current === 'it' ? 'en' : 'it'
    );
  }
}