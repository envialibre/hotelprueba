import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';


const routes: Routes = [
  {
    path: '**',
    loadChildren: () =>
      import('./pages/hotels/hotels.module').then((m) => m.HotelsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
