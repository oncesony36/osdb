import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserRegistComponent } from "./users/user-regist/user-regist.component";
import { UserReadComponent } from "./users/user-read/user-read.component";
import { UserModifyComponent } from "./users/user-modify/user-modify.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'regist', component: UserRegistComponent},
    {path: 'read', component: UserReadComponent },
    {path: 'modify', component: UserModifyComponent }

];

export const router = RouterModule.forRoot(routes);