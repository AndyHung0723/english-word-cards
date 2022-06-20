import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { NewCardComponent } from './new-card.component';

const router: Routes = [
  { path: '', component: NewCardComponent },
  { path: ':cardId', component: NewCardComponent },
];

@NgModule({
  declarations: [NewCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
})
export class NewCardModule {}
