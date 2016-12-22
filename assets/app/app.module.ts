import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from "./app.routing";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavigationComponent } from "./components/partials/navigation/navigation.component";
import { SigninComponent } from "./components/auth/signin/signin.component";
import { SignupComponent } from "./components/auth/signup/signup.component";
import { VerificationComponent } from "./components/partials/verification/verification.component";
import { ProfileComponent } from "./components/profile/profile.component";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavigationComponent,
        SigninComponent,
        SignupComponent,
        VerificationComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        routing
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}