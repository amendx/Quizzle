import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../models/menu-item';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
    constructor() { }

    items = [
        {
            "title": "Home",
            "routerLink": "home",
            "icon": "fa-dashboard"
        },
        {
            "title": "Answers",
            "routerLink": "answer",
            "icon": "fa-dashboard"
        },
        {
            "title": "Questions",
            "routerLink": "question",
            "icon": "fa-dashboard"
        },
        {
            "title": "Quiz",
            "routerLink": "quiz",
            "icon": "fa-dashboard"
        },

    ]
    menuItems: MenuItem[];

    ngOnInit() {
        this.menuItems = this.items;
    }
}