import {Character, Info} from "../models/characters.model";
import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {FetchCharactersService} from "../services/fetch-characters.service";
import {
  GetCharacters, GetCurrentPageCharacters, GetNextPageCharacters, SearchByFormsFields,
  SortDownCharactersById,
  SortUpCharactersById
} from "../actions/characters.action";
import {tap} from "rxjs/operators";
import {environment} from "../../environments/environment.prod";
import {PaginationService} from "../services/pagination.service";

export class CharactersStateModel {
  characters: Character[];
  searchedCharacters: Character[];
  searchedByGender: Character[];
  searchedByStatus: Character[];
  currentPage: number;
  info: Info
}


@Injectable()
@State<CharactersStateModel>({
  name: 'characters',
  defaults: {
    characters: [],
    searchedCharacters: [],
    searchedByGender: [],
    searchedByStatus: [],
    currentPage: 1,
    // @ts-ignore
    info: null
  }
})
export class CharactersState {
  constructor(public fetchService: FetchCharactersService,
              public paginationService: PaginationService) {
  }

  @Selector()
  static getCharacters(state: CharactersStateModel) {
    return state.characters
  }

  @Selector()
  static getInfo(state: CharactersStateModel) {
    return state.info
  }

  @Selector()
  static getSearchByName(state: CharactersStateModel) {
    return state.searchedCharacters
  }

  @Selector()
  static getSearchedCharacter(state: CharactersStateModel) {
    return state.searchedCharacters
  }

  @Selector()
  static getSearchedByGender(state: CharactersStateModel) {
    return state.searchedByGender
  }

  @Selector()
  static getSearchedByStatus(state: CharactersStateModel) {
    return state.searchedByStatus
  }

  @Action(GetCharacters)
  getCharacters({getState, setState}: StateContext<CharactersStateModel>, {payload}: GetCharacters) {
    return this.fetchService.fetchCharacters()
      .pipe(
        tap(data => {
          const state = getState();
          // @ts-ignore
          const {info, results} = data;
          const charactersInCurrentPage = this.paginationService.getPagination(results, payload)
          setState({
            ...state,
            characters: charactersInCurrentPage,
            currentPage: payload,
            info: info
          })
        })
      )
  }

  @Action(SearchByFormsFields)
  getSearchedCharactersByAllFields({getState, setState}: StateContext<CharactersStateModel>, {payload}: SearchByFormsFields) {

    return this.fetchService.fetchCharacters().pipe(
      tap(data => {
          const state = getState();
          const {name, gender, status, species} = payload;
// @ts-ignore
          const {info, results} = data
          let searchedCharacters = results
            .filter((item: Character) => (item.name.toLowerCase().includes(name.toLowerCase()) || name === ''))
            .filter((item: Character) => (item.gender.toLowerCase() === gender.toLowerCase()) || gender === '')
            .filter((item: Character) => (item.status.toLowerCase().includes(status.toLowerCase()) || status === ''))
          setState({
            ...state,
            characters: searchedCharacters
          })
        }
      )
    )

  }

  @Action(GetCurrentPageCharacters)
  getCurrentPage({getState, setState}: StateContext<CharactersStateModel>, {payload}: GetCurrentPageCharacters) {
    return this.fetchService.fetchNextPageCharacters(payload.link).pipe(
      tap(data => {
        const state = getState();
        // @ts-ignore
        const {info, results} = data;
        const charactersInCurrentPage = this.paginationService.getPagination(results, payload.page)
        setState({
          ...state,
          characters: charactersInCurrentPage,
        })
      })
    )
  }

  @Action(GetNextPageCharacters)
  getNextCharacters({getState, setState}: StateContext<CharactersStateModel>, {payload}: GetNextPageCharacters) {
    return this.fetchService.fetchNextPageCharacters(payload).pipe(
      tap(data => {
        const state = getState();
        // @ts-ignore
        const {info, results} = data;
        const charactersInCurrentPage = this.paginationService.getPagination(results, state.currentPage)
        setState({
          ...state,
          characters: charactersInCurrentPage,
          info: info
        })
      })
    )
  }

  @Action(SortDownCharactersById)
  sortDownCharactersById({getState, setState}: StateContext<CharactersStateModel>) {
    const state = getState();
    let sortedCharacters = [...state.characters].sort((a, b) => b.id - a.id)
    return setState({
      ...state,
      characters: [...sortedCharacters]
    })
  }

  @Action(SortUpCharactersById)
  sortUpCharactersById({getState, setState}: StateContext<CharactersStateModel>) {
    const state = getState();
    let sortedCharacters = [...state.characters].sort((a, b) => a.id - b.id)
    return setState({
      ...state,
      characters: [...sortedCharacters]
    })
  }
}
