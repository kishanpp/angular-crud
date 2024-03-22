import { Routes } from '@angular/router';

import { HomepageComponent } from './modules/homepage.component';
import { LoginComponent } from './modules/Login.component';
import { AddEmployee } from './modules/Add';
import { UpdateEmployee } from './modules/Update';
import { ViewEmployee } from './modules/View';

import { pageNotFoundComponent } from './modules/pageNotFound';

export const routes: Routes = [
    {path: "", component: HomepageComponent},
    {path: "login", component: LoginComponent},
    {path: "add", component: AddEmployee},
    {path: "update/:emailId", component: UpdateEmployee},
    {path: "view", component: ViewEmployee},
    
    {path: "**", component: pageNotFoundComponent}
];
