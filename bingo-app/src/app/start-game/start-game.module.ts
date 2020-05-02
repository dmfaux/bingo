import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { StartGameComponent } from './start-game.component';

@NgModule({
  declarations: [StartGameComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [StartGameComponent],
})
export class StartGameModule {}
