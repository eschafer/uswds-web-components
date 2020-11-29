import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'usa-sidenav',
  styleUrl: 'usa-sidenav.scss',
  shadow: false,
  assetsDirs: ['../fonts', '../img']
})
export class UsaSidenav {

  @Element() el: HTMLElement;

  connectedCallback() {
    const nav = this.el.querySelector('nav');
    const list = this.el.querySelector('nav > ul, nav > ol');
    const items = this.el.querySelectorAll('li');
    const sublists = this.el.querySelectorAll('ol > li > ol, ol > li > ul, ul > li > ol, ul > li > ul');

    
    nav.setAttribute('aria-label', 'Secondary navigation');
    list.classList.add('usa-sidenav');
    items.forEach((item) => item.classList.add('usa-sidenav__item'));
    sublists.forEach((sublist) => sublist.classList.add('usa-sidenav__sublist'));
  }

  render() {
    return (
      <Host class="uswds-stencil">
        <slot></slot>
      </Host>
    );
  }

}
