import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'usa-link',
  styleUrl: 'usa-link.scss',
  shadow: false,
  assetsDirs: ['../fonts', '../img']
})
export class UsaLink {

  @Element() el: HTMLElement;

  connectedCallback() {
    const link = this.el.querySelector('a');
    
    link.classList.add('usa-link');
  }

  render() {
    return (
      <Host class="uswds-stencil">
        <slot></slot>
      </Host>
    );
  }

}
