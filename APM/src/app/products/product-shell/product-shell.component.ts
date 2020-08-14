import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {
  bestGuess = "Winston Churchill";
  worstGuess = "Charlie Chaplin";

  constructor() { }

  ngOnInit() {
  }
}
