import { Component, OnInit, OnChanges } from '@angular/core';
import { AdminPointsService } from 'src/app/services/admin-points/admin-points.service';
import { Point } from 'src/app/model/Point';
import { UserService } from 'src/app/services/user/user.service';
import { BadgeType } from 'src/app/model/Resultat';

@Component({
  selector: 'app-admin-points',
  templateUrl: './admin-points.page.html',
  styleUrls: ['./admin-points.page.scss'],
})
export class AdminPointsPage implements OnInit {

  users: [any];
  point: Point = new Point();
  badges: Array<string>;

  constructor(private adminPointsService: AdminPointsService, private userService: UserService) { }

  ngOnInit() {
    this.badges = this.keys();
    this.userService.findAllUsers().subscribe(d => this.users = d);
    //choose start of week
    let curr = new Date(); // get current date
    this.point.date = new Date();
    this.point.date.setDate(curr.getDate() - curr.getDay()); // First day is the day of the month - the day of the week

  }

  keys(): Array<string> {
    var keys = Object.keys(BadgeType);
    console.log(keys);

    return keys;
  }

  save() {
    this.adminPointsService.save(this.point);
  }

 /*  findFor(badgeType: BadgeType, which: number): number {
    if (isUndefined(this.points))
      return 0;

    let toto = this.points.filter(p => p.categorie == badgeType)[which];
    console.log(toto);
    if (isUndefined(toto))
      return -1;
    return toto.nbPoints;
  } */

}
