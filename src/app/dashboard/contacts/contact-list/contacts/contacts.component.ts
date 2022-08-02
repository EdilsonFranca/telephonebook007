import {Component, Input} from '@angular/core';
import {ContactService} from "../../contact/contact.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent {

  @Input() contacts: any;
  filter: string = '';

  // @ts-ignore
  name!: String;
  private id!: number;

  constructor(private contactService: ContactService) {}

  remove() {
    // @ts-ignore
    this.contactService.remove(this.id).subscribe((response) => {
        this.contacts.splice(this.contacts.indexOf(this.id), 1);
    });
  }

  add_contact($event: any) {
    this.id   = $event.id;
    this.name = $event.name;
  }
}
