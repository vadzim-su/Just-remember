import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';
  public form!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.http.get('api/categories').subscribe(console.log);

    this.form = this.fb.group({
      categoryName: ['', [Validators.required]],
    });
  }

  createCategory() {
    return this.http
      .post('api/categories', {
        categoryName: this.form.get('categoryName')?.value,
      })
      .subscribe();
  }
}
