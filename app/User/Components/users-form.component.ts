import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../Services/user.service'
import { User } from '../model/user';

@Component({
    moduleId: module.id,
    selector: 'users-form',
    providers: [ UserService ],
    templateUrl: '../Views/users-form.html',
})

export class UsersFormComponent implements OnInit {

    user: User;

    constructor (private userService: UserService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            if (!isNaN(id)) {
                this.user = new User();
                console.log('edit');
                this.userService.getUser(id)
                    .subscribe(
                        user => {this.user = user;},
                        err => {
                            console.log(err);
                        }
                    );
            } else {
                this.user = new User();
                console.log('create');
            }

        });
    }

    gotoHeroes() { this.router.navigate(['/user']); }

    onSubmit() {
        console.log(this.user);
        this.gotoHeroes();
    }

}