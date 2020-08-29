import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { getCurrentProduct, State, getProducts, getShowProductCode, getError } from '../state';
import { Store } from '@ngrx/store';
import {ProductPageActions} from '../state/actions'
import { ProductService } from '../product.service';
import { tap } from 'rxjs/operators';


@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit, OnDestroy {
  bestGuess = "Winston Churchill";
  worstGuess = "Charlie Chaplin";
  selectedProduct$: Observable<Product>
  products$: Observable<Product[]>;
  displayCode$: Observable<boolean>;
  errorMessage$: Observable<string>;



  constructor(private store: Store<State>, private productService: ProductService) { }

  ngOnInit() {
    this.store.dispatch(ProductPageActions.loadProducts());

    this.selectedProduct$ = this.store.select(getCurrentProduct);
    this.products$ = this.store.select(getProducts);
    this.displayCode$ = this.store.select(getShowProductCode);
    this.errorMessage$ = this.store.select(getError);
  }

  ngOnDestroy(): void {
  }

  checkChanged(): void {
    this.store.dispatch(
      {type: '[Product] Toggle Product Code'}
    )
  }

  newProduct(): void {
    this.store.dispatch(ProductPageActions.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductPageActions.setCurrentProduct({currentProductId: product.id}))
  }
}
