import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserInfoComponent} from './components/user-info/user-info.component';
import {ReposInfoComponent} from './components/repos-info/repos-info.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: UserInfoComponent},
  {path: 'repos/:username', component: ReposInfoComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
