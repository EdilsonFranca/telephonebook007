import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ContactService} from "../contact/contact.service";
import {Contact} from "../contact/contact.model";

@Injectable({ providedIn: 'root'})
export class ContactListResolver implements Resolve<Observable<Contact[]>> {

    constructor(private service: ContactService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact[]> {
      return this.service.listFromContactPaginated(0);
    }
}
