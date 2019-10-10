import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: object;
  success: boolean;

  constructor(private formBuilder: FormBuilder, private db: AngularFirestore, private router: Router) { 
    this.loginForm = this.formBuilder.group(
      {
        email: new FormControl('', Validators.required ),
        password: new FormControl('', Validators.required ),
      }
    );
     this.db.collection('usuarios').doc('ogL8cPo9okdeamh0Xp2B').ref.get().then(
      doc => {  this.user = doc.data(); }
  );    
  }

  ngOnInit() {
    this.success = true;
  }

  onSubmit(data: Object) {
    
    console.warn('user', this.user);
    this.success = JSON.stringify(this.user) === JSON.stringify(data)
    if(this.success) {
      this.router.navigate( ['/store']);
    }
  }

}
