import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {
  public nameLower: string = 'angel';
  public nameUpper: string = 'ANGEL';
  public fullName: string = 'aNgEl cAsTrO';

  public customDate: Date = new Date();

}
