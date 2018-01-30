import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { NewuserComponent } from './newuser/newuser';
@NgModule({
	declarations: [LoginComponent,
    NewuserComponent],
	imports: [],
	exports: [LoginComponent,
    NewuserComponent]
})
export class ComponentsModule {}
