import { Injectable } from '@angular/core';
import {Character} from "../models/characters.model";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  getPagination(results: Character[], countPages: number){
    const countPerPage = environment.countPerPage;
    const lastCharIdx = countPages*countPerPage;
    const firstCharIdx = lastCharIdx - countPerPage;
    return results.slice(firstCharIdx, lastCharIdx)
  }

}
