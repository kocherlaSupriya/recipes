import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private router:Router,private authService:AuthService,private userService:UserService){}

userActivated=false;

ngOnInit(): void {


}



  onLoadServer(id:number){
this.router.navigate(['/viewserver',id,'edit'],{queryParams:{allowEdit:1},fragment:'loading'});

// this.router.navigateByUrl('/viewserver')
  }

  onLogin(){
    this.authService.logIn();
    console.log(this.userActivated)
  }

  onLogout(){
    this.authService.logOut();
  }



}
