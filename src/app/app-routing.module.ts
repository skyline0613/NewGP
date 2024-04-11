import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CourseComponent} from "./course/course.component";
import {courseResolver} from "./services/course.resolver";
import {CreateCourseComponent} from './create-course/create-course.component';
import {DragDropComponent} from './drag-drop/drag-drop.component';
import {TreeDemoComponent} from './tree-demo/tree-demo.component';
import {VirtualScrollingComponent} from './virtual-scrolling/virtual-scrolling.component';
import {SignupComponent}  from './signup/signup.component'; 
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReceiveComponent } from './receive/receive.component';


const routes: Routes = [
    {
        path: "",
        component: HomeComponent

    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: 'courses/:id',
        component: CourseComponent,
        resolve: {
            course: courseResolver
        }
    },
  {
    path: 'add-new-course',
    component: CreateCourseComponent
  },
  {
    path: "drag-drop-example",
    component: DragDropComponent
  },
  {
    path: "tree-demo",
    component: TreeDemoComponent
  },
  {
    path: "form",
    component: FormComponent
  },
  {
    path: "tabs",
    component: TabsComponent
  },  
  {
    path: "receive",
    component: ReceiveComponent
  },      
  {
    path: 'virtual-scrolling',
    component: VirtualScrollingComponent
  },
  {
    path: 'register',
    component: SignupComponent
  }, 
  {
    path: 'table',
    component: TableComponent
  },  
  
    {
        path: "**",
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
