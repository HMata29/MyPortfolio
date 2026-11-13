import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  languageService = inject(LanguageService);
}