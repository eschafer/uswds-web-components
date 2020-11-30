import { Component, Element, Host, Prop, Watch, h } from '@stencil/core';
import { tooltip } from 'uswds/src/js/components';

@Component({
  tag: 'usa-button',
  styleUrl: 'usa-button.scss',
  shadow: false,
  assetsDirs: ['../fonts', '../img']
})
export class UsaButton {

  @Prop() variant: string;

  @Watch('variant')
  watchHandler() {
    this.update();
  }

  @Element() el: HTMLElement;

  connectedCallback() {
    this.update();

    tooltip.on(this.el);
  }

  disconnectedCallback() {
    tooltip.off(this.el);
  }

  update() {
    const variantClasses: {
      secondary: string[];
      "accent-cool": string[];
      "accent-warm": string[];
      base: string[];
      outline: string[];
      inverse: string[];
      big: string[];
      unstyled: string[];
    } = {
      secondary: ['usa-button--secondary'],
      "accent-cool": ['usa-button--accent-cool'],
      "accent-warm": ['usa-button--accent-warm'],
      base: ['usa-button--base'],
      outline: ['usa-button--outline'],
      inverse: ['usa-button--outline', 'usa-button--inverse'],
      big: ['usa-button--big'],
      unstyled: ['usa-button--unstyled'],
    };

    const button = this.el.querySelector('button');

    // add .usa-button for basic button styles
    button.classList.add('usa-button');

    // Add variant styles.
    // This will override classes set directly in the code.
    // Not sure if that's a good idea or not...
    if (this.variant) {
      // clear variant styles
      let allVariantClasses = [];
      Object.keys(variantClasses).forEach(key => {
        variantClasses[key].forEach((className) => {
          allVariantClasses.push(className);
        });
      });
      button.classList.remove(...allVariantClasses);

      button.classList.add(...variantClasses[this.variant]);
    }

    // add .usa-tooltip if there's a title attr
    if (button.hasAttribute('title')) {
      button.classList.add('usa-tooltip');
    }
  }

  render() {
    return (
      <Host class="uswds-stencil">
        <slot></slot>
      </Host>
    );
  }
}
