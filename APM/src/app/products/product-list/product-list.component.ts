import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../product';
import { Store } from '@ngrx/store';
import { State, getShowProductCode, getCurrentProduct, getProducts, getError } from '../state';
import { Observable } from 'rxjs';


@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  pageTitle = 'Products';
  @Input() selectedProduct: Product;
  @Input() products: Product[];
  @Input() displayCode: boolean;
  @Input() errorMessage: string;

  @Output() displayCodeChanged = new EventEmitter<boolean>();
  @Output() initializeNewProduct = new EventEmitter<void>();
  @Output() productWasSelected = new EventEmitter<Product>();

  checkChanged(): void{
    this.displayCodeChanged.emit();
  }

  newProduct(): void{
    this.initializeNewProduct.emit();
  }

  productSelected(product: Product): void{
    this.productWasSelected.emit(product);
  }


}
