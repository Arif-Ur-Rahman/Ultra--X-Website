import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './archive/archive.component';
import { BinComponent } from './bin/bin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoteComponent } from './note/note.component';
import { NotesComponent } from './notes.component';
import { RemainderComponent } from './remainder/remainder.component';


const routes: Routes = [
  {path: '', redirectTo:'note', pathMatch: 'full'},

  { 
    path: '', component: NotesComponent, 

    children: [
      { path: 'dashboard', component:DashboardComponent},
      { path: 'archive', component:ArchiveComponent},
      { path: 'bin', component:BinComponent},
      { path: 'note', component:NoteComponent},
      { path: 'remainder', component:RemainderComponent}
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
