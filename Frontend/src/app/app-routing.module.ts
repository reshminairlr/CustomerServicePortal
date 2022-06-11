import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent} from './admin/admin.component';
import { CustomerloginComponent} from './customerlogin/customerlogin.component';
import { ServiceteamComponent} from './serviceteam/serviceteam.component';
import { CustomerserviceagentComponent} from './customerserviceagent/customerserviceagent.component';
import { AboutusComponent} from './aboutus/aboutus.component';



const routes: Routes = [ 
  {path:"",component:HomeComponent},
  {path:"admin",component:AdminComponent},
  {path:"customerlogin",component:CustomerloginComponent},
  {path:"serviceteam",component:ServiceteamComponent},
  {path:"customerserviceagent",component:CustomerserviceagentComponent},
  {path:"customerserviceagent",component:AboutusComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
