import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { About } from './about/about';

export const routes: Routes = [
    {path :'header',component:Header},
    {path :'footer',component:Footer},
    {path :'about',component:About}
   
];
