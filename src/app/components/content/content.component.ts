import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {
  GetCharacters,
   SortDownCharactersById,
  SortUpCharactersById
} from "../../actions/characters.action";
import {CharactersState} from "../../state/characters.state";
import {Observable} from "rxjs";
import {Character} from "../../models/characters.model";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Select(CharactersState.getCharacters) characters$: Observable<Character[]>;

  status: string = '';
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetCharacters(1));
  }
sortDownById(){
    this.store.dispatch(new SortDownCharactersById())
}
sortUpById(){
    this.store.dispatch(new SortUpCharactersById())
}
}
