import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HomeComponent } from './modules/home/home';
import { PromoComponent } from './modules/promo/promo';
import { NewsComponent } from './modules/news/news';

@Component({
    selector: 'my-app',
    templateUrl: 'app/nav-bar.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true
    },
    {
        path: '/khuyen-mai',
        name: 'Promo',
        component: PromoComponent
    },
    {
        path: '/tin-tuc',
        name: 'News',
        component: NewsComponent
    }
])
export class AppComponent {
    selected = 'Home';
    routeList = [
        {
            show: 'Vé máy bay',
            name: 'Home',
            icon: 'fa-plane'
        },
        {
            show: 'Khuyến mãi',
            name: 'Promo',
            icon: 'fa-bar-chart-o'
        },
        {
            show: 'Tin tức',
            name: 'News',
            icon: 'fa-newspaper-o'
        }
    ]
    onSelect = function(name){
        this.selected = name;
    }
}