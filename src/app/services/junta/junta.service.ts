import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Junta } from 'src/app/shared/models/user.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JuntaService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getJuntas() {
    // const url = `${this.url}users`;
    return this.http.get<any[]>(this.url);
  }
}
