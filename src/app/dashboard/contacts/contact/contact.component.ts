import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ContactService} from "./contact.service";
import {Contact} from "./contact.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  // @ts-ignore
  @Input() contact: Contact;
  @Output() remove_contact = new EventEmitter<any>();

  constructor(private contactService: ContactService) {}

  getPhoto(photo : String){
    return this.contactService.getPhoto(photo)
  }

  // @ts-ignore
  openModal(contact) {
    this.remove_contact.emit(contact);
  }
}
