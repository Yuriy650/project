import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Character} from "../../models/characters.model";
import {Select, Store} from "@ngxs/store";
import {GetSearchByName} from "../../actions/characters.action";
import {CharactersState} from "../../state/characters.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() character: Character;
  @Input() displayedColumns: string[];
  @Input() characters: Character[]
  @Select(CharactersState.getSearchedCharacter) searchCharacters$: Observable<Character[]>;
  @Select(CharactersState.getSearchedByGender) searchGenderCharacters$: Observable<Character[]>

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

}

