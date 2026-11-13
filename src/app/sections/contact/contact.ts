import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  languageService = inject(LanguageService);
}