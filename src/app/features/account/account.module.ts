import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent, ProfileComponent, SignupComponent } from './pages';

@NgModule({
  declarations: [ProfileComponent, LoginComponent, SignupComponent],
  imports: [AccountRoutingModule],
})
export class AccountModule {}
