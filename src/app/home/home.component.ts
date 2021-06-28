import { Component, ComponentFactoryResolver, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ModalService } from '../modals/modal.service';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { Subscription } from 'rxjs';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngIfModalId = 'ngIfModal'
  progromaticModalId = 'progromaticModalId'
  currentUser: User
  private subs = new Subscription()
  constructor(
    private tsService: Title,
    private msService: Meta,
    private userService: UserService,
    private storage: LocalStorageService,
    private modalService: ModalService,
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit(): void {
    this.subToCurrentUser()
    if (isPlatformBrowser(this.platformId)) {
      this.setTitleAndMetaTags()
    }
  }

  setTitleAndMetaTags() {
    this.tsService.setTitle('My Application | Home')
    const tags = [
      { property: 'og:url', content: 'https://code-labs-ng-universal-test.herokuapp.com/home' },
      { property: 'og:image', content: 'https://codelabs.codefiworks.com/assets/images/logo/logo-code-labs-light.png' },
      { property: 'og:title', content: 'My Application | Home' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'Some Description about my application.' }
    ]
    this.msService.addTags(tags)
  }

  subToCurrentUser() {
    this.subs.add(
      this.userService.currentUser.subscribe(user => {
        if (user) {
          this.currentUser = user
        } else {
          this.currentUser = null
        }
      })
    )
  }

  openNgIfModal() {
    this.modalService.open(this.ngIfModalId)
  }

  setUserLoggedIn(event: any) {
    if (event) {
      this.modalService.close(this.ngIfModalId)
      this.currentUser = this.userService.currentUserValue
    }
  }

  logoutUser() {
    this.userService.removeCurrentUser()
  }

  closeModals() {
    this.modalService.close(this.ngIfModalId)
  }

}
