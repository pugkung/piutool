import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule( {
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatExpansionModule,

        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,

        BrowserAnimationsModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatExpansionModule,

        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,

        BrowserAnimationsModule
    ]
})

export class MaterialModule {}
