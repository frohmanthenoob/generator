import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemePreviewComponent } from './meme-preview/meme-preview.component';
import { MemeMakerComponent } from './meme-maker/meme-maker.component';

const routes: Routes = [
  {  path: '',  component: MemePreviewComponent  },
  {  path: 'make', redirectTo: '/', pathMatch: 'full'  },
  {  path: 'make/:img', component: MemeMakerComponent  },
  {  path: '**', redirectTo: '/', pathMatch: 'full'  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
