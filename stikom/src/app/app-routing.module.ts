import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'tab5', loadChildren: './pages/tab5/tab5.module#Tab5PageModule' },
  { path: 'tab6', loadChildren: './pages/tab6/tab6.module#Tab6PageModule' },
  { path: 'tab7', loadChildren: './pages/tab7/tab7.module#Tab7PageModule' },
  { path: 'tab8', loadChildren: './pages/tab8/tab8.module#Tab8PageModule' },
  { path: 'tab9', loadChildren: './pages/tab9/tab9.module#Tab9PageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'chat1', loadChildren: './chat1/chat1.module#Chat1PageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
