import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CategoryService} from '../../dashboard/categories/category/category.service';
import {Category} from '../../dashboard/categories/category/category';

@Injectable({ providedIn: 'root'})
export class PageResolver implements Resolve<Observable<Category[]>> {

    constructor(private service: CategoryService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category[]> {
      return this.service.listFromCategoryWithProduct();
    }
}
