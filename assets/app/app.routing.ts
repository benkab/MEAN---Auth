import { Routes, RouterModule, CanActivate } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SigninComponent } from "./components/auth/signin/signin.component";
import { SignupComponent } from "./components/auth/signup/signup.component";
import { ProfileComponent } from "./components/profile/profile.component";


const APP_ROUTES: Routes = [
    {
        path : '',
        component: HomeComponent
    },
    {
        path : 'signin',
        component: SigninComponent
    },
    {
        path : 'signup',
        component: SignupComponent
    },
    {
        path : 'profile',
        component: ProfileComponent
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);