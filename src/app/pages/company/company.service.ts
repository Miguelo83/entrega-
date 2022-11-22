import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserResponseI } from 'src/app/auth/interfaces/user';
import { environment } from 'src/environments/environment';
import { CompanyI } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companies$: Observable<CompanyI[]> | undefined;
  // categories$ : Observable<CategoryI[]> | undefined;
  constructor(
    private http: HttpClient

  ) { }
  getAllCompanies(): Observable<CompanyI[]> {
    this.companies$ = this.http.get<CompanyI[]>(environment.baseUrl + '/company');
    return this.companies$;
  }
  delete(id: string): Observable<UserResponseI | void> {
    return this.http.delete<UserResponseI | void>(`${environment.baseUrl}/company/${id}`).pipe(
      map((res: UserResponseI) => {
        return res;
      })
    );

  }
  newCompany(company: CompanyI): Observable<UserResponseI | void> {
    return this.http.post<UserResponseI | void>(`${environment.baseUrl}/company`, company).pipe(
      map((res: UserResponseI) => {
        return res;
      })
    );
  }

  getByid(id: string): Observable<CompanyI | void> {
    return this.http.get<CompanyI>(`${environment.baseUrl}/company/${id}`);
  }
  updateCompany(id:string,company: CompanyI): Observable<UserResponseI | void> {
    return this.http.patch<UserResponseI | void>(`${environment.baseUrl}/company/${id}`, company).pipe(
      map((res: UserResponseI) => {
        return res;
      })
    );
  }
  


  
      // getAllCategories():Observable<CompanyI[]>{    
  //   this.categories$= this.http.get<CompanyI[]>(environment.baseUrl + '/category');
  // }

}
