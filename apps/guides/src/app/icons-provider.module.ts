import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  DashboardOutline,
  DisconnectOutline,
  EditOutline,
  FileImageOutline,
  FormOutline,
  HomeOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  PlusOutline,
  SaveOutline
} from '@ant-design/icons-angular/icons';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline, SaveOutline, EditOutline, DisconnectOutline, HomeOutline,
  PlusOutline, FileImageOutline];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
