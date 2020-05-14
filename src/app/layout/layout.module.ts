import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { WrapperComponent } from './wrapper/wrapper.component';



@NgModule({
  declarations: [TopNavComponent, SideNavComponent, ContentComponent, FooterComponent, WrapperComponent],
  exports: [
    SideNavComponent,
    TopNavComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
