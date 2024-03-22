import { Component, Input } from '@angular/core';
import { Repo } from 'src/app/models/repo';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent {
  @Input() repo = {} as Repo;
}
