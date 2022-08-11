import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from "../contact/contact.model";
import {ContactService} from "../contact/contact.service";
import {AlertService} from "../../../shared/components/alert/alert.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  // @ts-ignore
  contactForm: FormGroup;
  contact :Contact = new Contact();
  // @ts-ignore
  file: File;
  // @ts-ignore
  preview: string;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private productService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
      this.contact = new Contact();
      this.route.params.subscribe(params => {
      // @ts-ignore
      this.contactForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        birth_date: ['', Validators.required],
        phones: new FormArray([new FormControl(''),new FormControl('')]),
        file: [''],
      });
    })
  }

  handleFile(e: Event) {
    // @ts-ignore
    if (e.target && e.target.files && e.target.files.length > 0) {
      // @ts-ignore
      let file = (e.target as HTMLInputElement).files[0];
      this.file= file;
      const reader = new FileReader();
      reader.onload = (event: any) => this.preview = event.target.result;
      reader.readAsDataURL(file);
    }
  }

  get phones(): FormArray {
    return this.contactForm.get('phones') as FormArray;
  }

  upload() {
    this.contact.name   = this.contactForm.get('name')!.value;
    this.contact.email  = this.contactForm.get('email')!.value;
    this.contact.phones = this.contactForm.get('phones')!.value;
    this.contact.birth_date = this.contactForm.get('birth_date')!.value;

    this.productService.upload(this.contact, this.file)
                        .subscribe((response) => {
                          this.router.navigate(['dashboard/contact']);
                          } ,(error: HttpErrorResponse) => {
      // @ts-ignore
      this.alertService.danger("Falha ao adicionar um novo Contato", true);
    })
  }
}
