import {Current, SearchedObject} from "../models/characters.model";

export class GetCharacters {
  static readonly type = '[CHARACTERS] Get';
  constructor(public payload: number) {
  }
}

export class GetNextPageCharacters {
  static readonly type = '[NEXT-PAGE-CHARACTERS] Get'
  constructor(public payload: string){
  }
}

export class GetCurrentPageCharacters {
  static readonly type = '[CURRENT-PAGE] Get';
  constructor(public payload: Current){
  }
}

export class SearchByFormsFields {
  static readonly type = '[BY-FORMS-FIELDS] Search'
  constructor(public payload: SearchedObject) {
  }
}

/*export class SearchByName {
  static readonly type = '[BY-NAME] Search'

  constructor(public payload: string) {
  }
}*/

export class GetSearchByAllFields {
  static readonly type = '[SEARCH-BY-ALL] Get'
}

export class GetSearchByName {
  static readonly type = '[SEARCH-BY-NAME] Get'
}

export class GetSearchByGender {
  static readonly type = '[SEARCH-BY-GENDER] Get'
}

export class SortDownCharactersById {
  static readonly type = '[SORT-CHARACTERS-DOWN-BY-ID] Get'
}

export class SortUpCharactersById {
  static readonly type = '[SORT-CHARACTERS-UP-BY-ID] Get'
}

export class GetInfo {
  static readonly type = '[INFO] Get'
}
