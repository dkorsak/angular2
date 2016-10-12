import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }  from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { UsersListComponent }   from './User/Components/users-list.component';
import { UsersFormComponent }   from './User/Components/users-form.component';
import { MDL }            from './MaterialDesignLiteUpgradeElement';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: UsersListComponent, pathMatch: 'full'},
            { path: 'user', component: UsersListComponent },
            { path: 'user/:id/edit', component: UsersFormComponent },
            { path: 'user/create', component: UsersFormComponent }
        ])
    ],
    declarations: [
        AppComponent,
        MDL,
        UsersListComponent,
        UsersFormComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}