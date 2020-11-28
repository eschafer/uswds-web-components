import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'usa-list',
  styleUrl: 'usa-list.scss',
  shadow: false,
  assetsDirs: ['../fonts', '../img']
})
export class UsaList {

  @Element() el: HTMLElement;

  connectedCallback() {
    const list = this.el.querySelector('ul, ol');
    
    list.classList.add('usa-list');
  }

  render() {
    return (
      <Host class="uswds-stencil">
        <slot></slot>
      </Host>
    );
  }

}
