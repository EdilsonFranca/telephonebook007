import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {environment} from '../../../../environments/environment';
import {Contact} from "./contact.model";

const API = environment.ApiUrl;

@Injectable({providedIn: 'root'})
export class ContactService {

  constructor(private http: HttpClient) {}

  // @ts-ignore
  listFromContactPaginated(index) {
    return this.http.get<Contact[]>(API + 'contact');
  }

  upload(contact: Contact, file: File) {
    const formData = this.createContact(contact, file);
    return this.http.post<Response>(API + 'contact', formData);
  }

  upload_edit(id: any, contact: Contact, file: File) {
    const formData = this.createContact(contact, file);
    formData.append('id', id);
    return this.http.put<Response>(API + 'contact/' + id, formData);
  }

  private createContact(contact: Contact, file: File) {
    const formData = new FormData();
    // @ts-ignore
    formData.append('name', contact.name);
    // @ts-ignore
    formData.append('email', contact.email);
    // @ts-ignore
    formData.append('phones', contact.phones.filter(p => p != ''));

    formData.append('birth_date', contact.birth_date);

    if (file != undefined)  formData.append('file', file);
    return formData;
  }

  findById(id: number) {
    return this.http.get<Contact>(API + 'contact/' + id);
  }

  remove(id: number) {
    return this.http.delete(API + 'contact/' + id);
  }

  getPhoto(photo: String) {
    return API + 'photos/' + photo
  }
}
