import { Component, OnInit, ElementRef, Input, Renderer2, OnDestroy, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],

})
export class ModalsComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input() size: string;
  @Input() datePickerOpen = false
  @Output() modalClosed: EventEmitter<any> = new EventEmitter()
  private element: any;

  constructor(
    private modalService: ModalService,
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any
  ) {

  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.element = this.el.nativeElement;

    const modal = this;

    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // Sets the max-width of the modal
    this.renderer.addClass(this.element, this.size)

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', (e: any) => {
      if (e.target.className === 'zy-modal-background') {
        modal.close();
      }
      if (e.target.className === 'zy-modal') {
        modal.close();
      }
      if (e.target.className === 'zy-close') {
        modal.close()
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.addModal(this);
    }
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('zy-modal-open');
  }

  // close modal
  close(): void {
    // this.modalClosed.emit('true')
    this.element.style.display = 'none';
    document.body.classList.remove('zy-modal-open');
  }


  closeModal(id: string) {
    this.element.style.display = 'none';
    document.body.classList.remove('zy-modal-open');
    this.modalClosed.emit('true')
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.modalService.remove(this.id);
      this.element.remove();
     }
  }


}
