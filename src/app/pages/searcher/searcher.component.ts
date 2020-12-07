import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'film-and-series-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  searchControl: FormControl;

  constructor(private FORM_BUILDER: FormBuilder) { }

  ngOnInit(): void {
    this.searchControl = this.FORM_BUILDER.control(
      '',
      []
    )
  }

  get SearchControlValue() {
    return this.searchControl.value;
  }

  resetSearch() {
    this.searchControl.patchValue('');
  }

}
