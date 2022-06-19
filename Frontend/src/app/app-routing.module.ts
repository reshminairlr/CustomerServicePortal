import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent} from './admin/admin.component';
import { CustomerloginComponent} from './customerlogin/customerlogin.component';
import { ServiceteamComponent} from './serviceteam/serviceteam.component';
import { CustomerserviceagentComponent} from './customerserviceagent/customerserviceagent.component';
import { AboutusComponent} from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';
import { CustomerviewComponent } from './customerview/customerview.component';
import { CustomercomplaintupdateComponent } from './customerview/customercomplaintupdate/customercomplaintupdate.component';



const routes: Routes = [ 
  {path:"",component:CustomerloginComponent},
  {path:"customerlogin",component:CustomerloginComponent},
  {path:"admin",component:AdminComponent},
  
  {path:"serviceteam",component:ServiceteamComponent},
  {path:"customerserviceagent",component:CustomerserviceagentComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"customerview",component:CustomerviewComponent},
  {path:"customercomplaintupdate",component:CustomercomplaintupdateComponent}


];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
