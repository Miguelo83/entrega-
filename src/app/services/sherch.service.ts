import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticlesI, SearchI } from '../interface/sherch';

@Injectable({
  providedIn: 'root'
})
export class SherchService {

  constructor(
    private readonly http: HttpClient
  ) { }
  getSearch(search: string):Observable<ArticlesI[]> {
    const params={
      action:'query',
      format:'json',
      list:'search',
      srsearch:search,
      srlimit:'10',
      utf8:'1',
      origin:'*'
    }
    return this.http.get<SearchI>(environment.api,{params}).pipe(
      map(res => {
        return res.query.search;
        })
    );
  }

}
