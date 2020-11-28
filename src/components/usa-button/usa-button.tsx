import { Component, Element, Host, h } from '@stencil/core';
import { tooltip } from 'uswds/src/js/components';

@Component({
  tag: 'usa-button',
  styleUrl: 'usa-button.scss',
  shadow: false,
  assetsDirs: ['../fonts', '../img']
})
export class UsaButton {

  @Element() el: HTMLElement;

  connectedCallback() {
    const button = this.el.querySelector('button');
    
    // add .usa-button for basic button styles
    button.classList.add('usa-button');
    
    // add .usa-tooltip if there's a title attr
    if (button.hasAttribute('title')) {
      button.classList.add('usa-tooltip');
    }

    tooltip.on(this.el);
  }

  disconnectedCallback() {
    tooltip.off(this.el);
  }

  render() {
    return (
      <Host class="uswds">
        <slot></slot>
      </Host>
    );
  }

}
