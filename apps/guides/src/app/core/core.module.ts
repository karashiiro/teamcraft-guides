import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GuideContentComponent } from './guide-content/guide-content.component';
import { ActionComponent } from './custom-markdown-elements/action/action.component';
import { DynamicHTMLRenderer } from './dynamic-html/dynamic-html-renderer';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CharacterPipe } from './pipes/character.pipe';
import { XivapiClientModule } from '@xivapi/angular-client';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ListComponent } from './custom-markdown-elements/list/list.component';
import { RotationComponent } from './custom-markdown-elements/rotation/rotation.component';
import { CUSTOM_MARKDOWN_ELEMENTS } from './custom-markdown-elements';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { XivapiActionTooltipDirective } from './xivapi/xivapi-action-tooltip/xivapi-action-tooltip.directive';
import { XivapiActionTooltipComponent } from './xivapi/xivapi-action-tooltip/xivapi-action-tooltip.component';
import { IfMobilePipe } from './pipes/if-mobile.pipe';
import { GuideCardComponent } from './guide-card/guide-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GuideContentComponent,
    ActionComponent,
    LoginPopupComponent,
    CharacterPipe,
    ListComponent,
    RotationComponent,
    XivapiActionTooltipDirective,
    XivapiActionTooltipComponent,
    IfMobilePipe,
    GuideCardComponent
  ],
  exports: [GuideContentComponent, LoginPopupComponent, CharacterPipe, IfMobilePipe, GuideCardComponent],
  imports: [
    CommonModule,

    HttpClientModule,
    NzAlertModule,
    NzDividerModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    XivapiClientModule,
    NzToolTipModule,
    FlexLayoutModule,
    NzEmptyModule,
    NzIconModule,
    NzMessageModule,
    NzCardModule,
    NzBadgeModule,
    NzAvatarModule,
    RouterModule
  ],
  providers: [
    ...CUSTOM_MARKDOWN_ELEMENTS,
    DynamicHTMLRenderer
  ]
})
export class CoreModule {
}
