
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly languageService = inject(LanguageService);
}
