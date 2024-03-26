import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
  // isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
  //   const isSubmitted = form && form.submitted;
  //   return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  // }
  constructor() { }

  ngOnInit(): void {
  }

}

// export class InputErrorStateMatcherExample {
//   emailFormControl = new FormControl('', [Validators.required, Validators.email]);
//   matcher = new ErrorStateMatcher();
// }
