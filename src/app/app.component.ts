import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  title = 'Portofolio';
  activeBtn = '';
  imagePreview: string;
  display: boolean = false;
  personDescription = {
    title: "John wick",
    description: "I'm a WEB developer, I love to create beautiful and functional websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellendus optio nostrum temporibus laboriosam ipsa officiis perferendis adipisci autem alias recusandae, aperiam, minus laudantium eos commodi omnis aut, nam explicabo?",
    image: "../assets/img/hero.png"
  }

  ngOnInit() {
    this.form = new FormGroup({
      'title': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      'description': new FormControl(null, {validators: [Validators.required]}),
      'image': new FormControl(null, {validators: [Validators.required]})
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    }
    reader.readAsDataURL(file);
  }

  pageTransition(str: string) {
    this.activeBtn = str;
    this.display = false;
  }

  hideForm() {
    this.display = false;
  }

  displayForm() {
    this.display = true;
    console.log("something")
  }

  onSubmit() {
    if(this.form?.invalid) {
      console.log('invalid')
      return;
    }
    console.log("valid")
    console.log(this.form?.value.title);
    this.personDescription.title = this.form?.value.title,
    this.personDescription.description = this.form?.value.description
    this.personDescription.image = this.imagePreview;
    this.imagePreview = '';
    this.form?.reset();
  }
}
