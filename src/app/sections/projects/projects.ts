
import { Component, inject, OnInit, signal } from '@angular/core';
import { LanguageService } from '../../language.service';
import { GitHubService, GitHubRepository } from '../../github.service';
import { ScrollRevealDirective } from '../../shared/scroll-reveal';

@Component({
  selector: 'app-projects',
  imports: [ScrollRevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  languageService = inject(LanguageService);
  private githubService = inject(GitHubService);

  repositories = signal<GitHubRepository[]>([]);
  loading = signal(true);
  error = signal(false);

  ngOnInit(): void {
    this.githubService.getRepositories().subscribe({
      next: (repos) => {
        const filteredRepos = repos
          .filter((repo) => !repo.fork)
          .sort((a, b) => {
            if (a.name.toLowerCase() === 'myportfolio') return -1;
            if (b.name.toLowerCase() === 'myportfolio') return 1;
            return a.name.localeCompare(b.name);
          })
          .slice(0, 4);

        this.repositories.set(filteredRepos);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      },
    });
  }
}
