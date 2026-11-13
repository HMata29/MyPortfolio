
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  private readonly http = inject(HttpClient);

  getRepositories(): Observable<GitHubRepository[]> {
    return this.http.get<GitHubRepository[]>(
      'https://api.github.com/users/HMata29/repos?sort=updated&per_page=100'
    );
  }
}
