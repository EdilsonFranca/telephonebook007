import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../dashboard/categories/category/category';
import {Modal} from './modal';
import {Product} from '../../dashboard/contacts/product/product.model';
import {Card} from './card';
import {Client} from './client';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  categories: Category[] = [];
  product_modal: any;
  modal = new Modal();
  card  = new Card();
  client: Client = new Client();
  clientForm: FormGroup;
  price_promotion: Product[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
     this.activatedRoute.params.subscribe(params => {
      const response   =  this.activatedRoute.snapshot.data['categories'];
       this.categories = response.data[1];
       this.price_promotion = response.data[0];
    });

    this.clientForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      telephone: ['', Validators.required],
      formOfPayment: ['', Validators.required],
      thing: ['', Validators.required],
    });
  }

  formatPrice(value) {
    return parseFloat(value).toFixed(2);
  }

  add_qtd() {
    this.modal.quantity ++;
    // @ts-ignore
    this.modal.value = this.formatPrice(this.modal.quantity * this.modal.price);
  }

  remove_qtd() {
    this.modal.quantity > 1 ? this.modal.quantity -- : 1;
    // @ts-ignore
    this.modal.value = this.formatPrice(this.modal.quantity * this.modal.price);
  }

  handleOk() {
    const objetCloned = Object.assign({}, this.modal);
    this.card.items.push(objetCloned);
    this.card.subTotal = this.card.items.reduce((total, num) => total + parseFloat(num.value), 0).toFixed(2);
    // @ts-ignore
    this.card.total    = parseFloat(this.card.subTotal) + parseFloat(this.card.deliveryFee);
  }

  open_modal(product: Product) {
    const price = product.price_promotion ? product.price_promotion : product.price;
    this.modal.price = price;
    this.modal.id = product.id;
    this.modal.price_aux = 0;
    this.modal.quantity = 1;
    this.modal.name = product.name;
    this.modal.value = price;
    this.modal.observation = '';
  }

  get_name_item(name) {
    return name.length > 23 ? name.substring(0, 23) : name;
  }

  show_image(id_image: string) {

  }
}
