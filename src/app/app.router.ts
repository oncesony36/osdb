import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { UserRegistComponent } from "./users/user-regist/user-regist.component";

const routes: Routes = [
    {path: '#', component: AppComponent},
    {path: '#regist', component: UserRegistComponent}

];

export const router = RouterModule.forRoot(routes);