import { Component, Element, Host, h } from '@stencil/core';
import { accordion } from 'uswds/src/js/components';

@Component({
  tag: 'usa-accordion',
  styleUrl: 'usa-accordion.scss',
  shadow: false,
  assetsDirs: ['../fonts', '../img']
})
export class UsaAccordion {

  @Element() el: HTMLElement;

  connectedCallback() {
    const nav = this.el.querySelector(':first-child');
    
    nav.classList.add('usa-accordion');
  
    accordion.on(this.el);
  }

  disconnectedCallback() {
    accordion.off(this.el);
  }
  
  render() {
    return (
      <Host class="uswds-stencil">
        <slot></slot>
      </Host>
    );
  }

}
