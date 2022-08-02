import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from "../contact/contact.model";

@Pipe({ name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform {

    transform(contact: Contact[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if(descriptionQuery) {


          return contact.filter(contact =>
              // @ts-ignore
              contact.name.toLowerCase().includes(descriptionQuery)
            );
        } else {
            return contact;
        }
    }

}
