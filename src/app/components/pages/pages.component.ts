import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {GetCurrentPageCharacters, GetInfo} from "../../actions/characters.action";
import {CharactersState} from "../../state/characters.state";
import {Observable} from "rxjs";
import {Info} from "../../models/characters.model";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @Select(CharactersState.getInfo) info$: Observable<Info>
pageNumbers: number[] = [];
charactersPerPage = 4;
countPages = 20/this.charactersPerPage
  constructor(private store: Store) { }

  ngOnInit(): void {
    for (let i = 1; i <= this.countPages; i++) {
      this.pageNumbers.push(i)
    }
  }
getCurrentPageNumber(event: any){
  this.store.dispatch(new GetInfo());
  let currentPage = this.info$.subscribe(result=>{
    if(result.next) this.store.dispatch(new GetCurrentPageCharacters({page: event.currentTarget.value, link: result.next}))
    console.log({page: event.currentTarget.value, link: result.next})
  })
  currentPage.unsubscribe()
//this.store.dispatch(new GetCharacters(event.currentTarget.value))
}
}
