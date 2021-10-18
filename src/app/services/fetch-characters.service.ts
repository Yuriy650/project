import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Character} from "../models/characters.model";

@Injectable({
  providedIn: 'root'
})
export class FetchCharactersService {
  constructor(private http: HttpClient) {
  }
  fetchCharacters(): Observable<Character[]>{
    return this.http.get<Character[]>('https://rickandmortyapi.com/api/character?page=4')
  }
  fetchNextPageCharacters(value:string): Observable<Character[]>{
    return this.http.get<Character[]>(`${value}`)
  }
}
