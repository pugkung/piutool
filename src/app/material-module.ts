import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,

    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
} from '@angular/material';

@NgModule( {
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatExpansionModule,

        MatCardModule,
        MatTableModule,
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
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,

        BrowserAnimationsModule
    ]
})

export class MaterialModule {}