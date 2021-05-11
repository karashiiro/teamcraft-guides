import { Component, OnInit } from '@angular/core';
import { CustomMarkdownElement } from '../custom-markdown-element';
import { XivapiDataService } from '../../xivapi/xivapi-data.service';
import { Observable } from 'rxjs';
import { Action } from '../../xivapi/action';
import { XivapiEndpoint } from '@xivapi/angular-client';

@Component({
  selector: 'guides-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.less']
})
export class ActionComponent extends CustomMarkdownElement implements OnInit {

  public action$: Observable<Action>;

  constructor(private xivapiData: XivapiDataService) {
    super();
  }

  ngOnInit(): void {
    const actionId = +this.args[0];
    if (actionId >= 100000) {
      this.action$ = this.xivapiData.get<Action>(XivapiEndpoint.CraftAction, actionId);
    } else {
      this.action$ = this.xivapiData.get<Action>(XivapiEndpoint.Action, actionId);
    }
  }
}
