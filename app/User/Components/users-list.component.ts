import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service'
import { User } from '../model/user';

@Component({
    moduleId: module.id,
    selector: 'users-list',
    providers: [ UserService ],
    templateUrl: '../Views/users-list.html',
})

export class UsersListComponent implements OnInit {

    users: User[];

    constructor (private userService: UserService) {}

    loadUsers() {
        this.userService.getUsers()
            .subscribe(
                users => {this.users = users;},
                err => {
                    console.log(err);
                }
            );
    }

    ngOnInit() {
        this.loadUsers();
    }

}