import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { CourseComponent } from "./course/course.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogContent, MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CoursesService } from "./services/courses.service";
import { HttpClientModule } from "@angular/common/http";
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreateCourseComponent } from './create-course/create-course.component';
import { MatStepperModule } from '@angular/material/stepper';
import { CreateCourseStep1Component } from './create-course/create-course-step-1/create-course-step-1.component';
import { CreateCourseStep2Component } from './create-course/create-course-step-2/create-course-step-2.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';
import { MatTreeModule } from '@angular/material/tree';
import { VirtualScrollingComponent } from './virtual-scrolling/virtual-scrolling.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SignupComponent } from './signup/signup.component';
import { MatDialog, MatDialogRef, MatDialogActions } from '@angular/material/dialog';
import { DialogOverviewExampleDialog, TableComponent } from './table/table.component';
import { UserService } from './table/user.service';
import { FormComponent } from './form/form.component';
import { TabsComponent } from './tabs/tabs.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProposerComponent } from './tabs/proposer/proposer.component';
import { FlexboxComponent } from './tabs/flexbox/flexbox.component';
import { EdittableComponent } from './tabs/edittable/edittable.component';
import { ConfirmDialogComponent } from './tabs/edittable/confirm-dialog/confirm-dialog.component';
import { ReceiveComponent } from './receive/receive.component';
import { ProposalInfoComponent } from './receive/proposal-info/proposar-info.component';
import { InsuredComponent } from './receive/insured/insured.component';
import { InsuredManagementComponent } from './receive/edittable/insured-management.component';
import { InsuredDialogComponent } from './receive/insured/insured-dialog.component';
import { ProposalViewComponent } from './receive/proposal-view/proposar-view.component';
import { InsuredGridComponent } from './receive/edittable/insured-grid.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        CourseComponent,
        CoursesCardListComponent,
        CourseDialogComponent,
        CreateCourseComponent,
        CreateCourseStep1Component,
        CreateCourseStep2Component,
        DragDropComponent,
        TreeDemoComponent,
        VirtualScrollingComponent,
        SignupComponent,
        TableComponent,
        FormComponent,
        DialogOverviewExampleDialog,
        TabsComponent,
        ProposerComponent,
        FlexboxComponent,
        EdittableComponent,
        ConfirmDialogComponent,
        ReceiveComponent,
        ProposalInfoComponent,
        InsuredComponent,
        InsuredManagementComponent,
        InsuredDialogComponent,
        ProposalViewComponent,
        InsuredGridComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatTooltipModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatStepperModule,
        MatDialogModule,
        AppRoutingModule,
        MatSelectModule,
        MatCheckboxModule,
        DragDropModule,
        MatRadioModule,
        MatSliderModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule,
        MatGridListModule,
        MatTreeModule,
        ScrollingModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatDialogModule,
        MatDialogActions,
        MatDialogContent

    ],
    providers: [
        CoursesService, UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
