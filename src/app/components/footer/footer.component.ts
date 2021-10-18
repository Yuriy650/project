import {Component, OnInit} from '@angular/core';
import {GetInfo, GetNextPageCharacters} from "../../actions/characters.action";
import {Select, Store} from "@ngxs/store";
import {CharactersState} from "../../state/characters.state";
import {Observable} from "rxjs";
import {Info} from "../../models/characters.model";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Select(CharactersState.getInfo) info$: Observable<Info>

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  goToNextPage() {
    this.store.dispatch(new GetInfo());
    let nextPage = this.info$.subscribe(result => {
      if (result.next) this.store.dispatch(new GetNextPageCharacters(result.next))
    })
    nextPage.unsubscribe()
  }

  goToPrevPage() {
    this.store.dispatch(new GetInfo());
    let prevPage = this.info$.subscribe(result => {
      if (result.prev) this.store.dispatch(new GetNextPageCharacters(result.prev))
    })
    prevPage.unsubscribe()
  }
}
