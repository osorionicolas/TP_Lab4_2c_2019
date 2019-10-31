import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatCardModule, MatListModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter, MatCheckboxModule, MatTableModule, MatPaginatorModule, MatExpansionModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ve' }
  ]
})
export class MaterialModule { }
