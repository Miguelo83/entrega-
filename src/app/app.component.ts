import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesI } from './interface/sherch';
import { SherchService } from './services/sherch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-api-wiki';
  article$!: Observable<ArticlesI[]>;
  constructor(
    private sherchSvc: SherchService
  ) { }

  onSerach(searchTerm: string) {
    console.log(searchTerm);
    this.article$ = this.sherchSvc.getSearch(searchTerm);
  }
}


