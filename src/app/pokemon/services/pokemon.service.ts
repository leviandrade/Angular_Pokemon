import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../models/Root';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public obterTodos(offset: number, limit: number): Observable<Root> {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return this.http
      .get<Root>(url)
      .pipe();
  }
  public teste(url:string): Observable<Root> {
    return this.http
      .get<Root>(url)
      .pipe();
  }
}
