
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly languageService = inject(LanguageService);

  readonly skillGroups = [
    {
      title: 'Backend',
      skills: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'REST API', 'Microservices'],
    },
    {
      title: 'Frontend',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'SCSS'],
    },
    {
      title: 'Database',
      skills: ['Oracle SQL', 'MySQL', 'SQL', 'PL/SQL'],
    },
    {
      title: 'Testing & Tools',
      skills: ['JUnit 5', 'Mockito', 'Maven', 'Git', 'GitLab', 'SQL Developer'],
    },
  ];
}
