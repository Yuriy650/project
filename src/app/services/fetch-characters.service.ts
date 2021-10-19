import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Character} from "../models/characters.model";
import {environment} from "../../environments/environment.prod"

@Injectable({
  providedIn: 'root'
})
export class FetchCharactersService {
  constructor(private http: HttpClient) {
  }
  fetchCharacters(): Observable<Character[]>{
    return this.http.get<Character[]>(`${environment.apiUrl}`)
  }
  fetchNextPageCharacters(value:string): Observable<Character[]>{
    return this.http.get<Character[]>(`${value}`)
  }
}
