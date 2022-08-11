import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Contact} from "../contact/contact.model";
import {ContactService} from "../contact/contact.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AlertService} from "../../../shared/components/alert/alert.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  // @ts-ignore
  contactForm: FormGroup;
  contact: Contact = new Contact();
  _id: number | undefined;
  name: string | undefined;
  // @ts-ignore
  file: File;
  // @ts-ignore
  preview: string;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private contactService: ContactService,
  ) {}

  ngOnInit() {
    this._id = this.route.snapshot.params['id'];

    // @ts-ignore
    this.contactService.findById(this._id).subscribe((contact) => {
      // @ts-ignore
      this.contact = contact;

      this.contactForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        birth_date: ['', Validators.required],
        phones: new FormArray([new FormControl(contact.phones[0].number), new FormControl(contact.phones[1]?.number)]),
        file: [''],
      });
    })
  }

  // @ts-ignore
  getPhoto = photo => this.contactService.getPhoto(photo);

  upload_edit() {
    this.contact.name   = this.contactForm.get('name')!.value;
    this.contact.email  = this.contactForm.get('email')!.value;
    this.contact.phones = this.contactForm.get('phones')!.value;
    this.contact.birth_date = this.contactForm.get('birth_date')!.value;

    this.contactService.upload_edit(this._id, this.contact, this.file)
      .subscribe((response) => {
        // @ts-ignore
        this.alertService.success("Contato Editado com Sucesso!", true);
      } ,(error: HttpErrorResponse) => {
        // @ts-ignore
        this.alertService.danger("Falha ao adicionar um novo Contato", true);
      })
  }


  remove() {
    // @ts-ignore
    this.contactForm.remove(this._id)
  }

  handleFile(e: Event) {
    // @ts-ignore
    if (e.target && e.target.files && e.target.files.length > 0) {
      // @ts-ignore
      let file = (e.target as HTMLInputElement).files[0];
      this.file = file;
      const reader = new FileReader();
      reader.onload = (event: any) => this.preview = event.target.result;
      reader.readAsDataURL(file);
    }
  }
}
