import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserRegistComponent } from "./users/user-regist/user-regist.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'regist', component: UserRegistComponent}

];

export const router = RouterModule.forRoot(routes);