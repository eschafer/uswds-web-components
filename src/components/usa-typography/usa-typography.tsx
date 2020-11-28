import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'usa-typography',
  styleUrl: 'usa-typography.scss',
  shadow: false,
  assetsDirs: ['../fonts', '../img']
})
export class UsaTypography {

  @Element() el: HTMLElement;

  connectedCallback() {
    // TODO: this assumes we're getting a single element
    const rootEl = this.el.querySelector(':first-child');
    rootEl.classList.add('usa-typography');
  }

  render() {
    return (
      <Host class="uswds-stencil">
        <slot></slot>
      </Host>
    );
  }

}
