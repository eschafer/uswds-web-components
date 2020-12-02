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
    const variants: { id: string, classes: string[] }[] = [
      { id: 'secondary', classes: ['usa-button--secondary']},
      { id: 'accent-cool', classes: ['usa-button--accent-cool']},
      { id: 'accent-warm', classes: ['usa-button--accent-warm']},
      { id: 'base', classes: ['usa-button--base']},
      { id: 'outline', classes: ['usa-button--outline']},
      { id: 'inverse', classes: ['usa-button--outline', 'usa-button--inverse']},
      { id: 'big', classes: ['usa-button--big']},
      { id: 'unstyled', classes: ['usa-button--unstyled']},
    ];

    const button = this.el.querySelector('button');

    // add .usa-button for basic button styles
    button.classList.add('usa-button');

    // Add variant styles.
    // This will override classes set directly in the code.
    // Not sure if that's a good idea or not...
    if (this.variant) {
      // clear variant styles
      const allVariantClasses = [];
      variants.forEach(({ classes }) => {
        classes.forEach((className) => {
          allVariantClasses.push(className);
        })
      });
      button.classList.remove(...allVariantClasses);
      
      const filteredVariants = variants.filter((variant) => variant.id === this.variant);
      if (filteredVariants.length > 0) {
        const { classes } = filteredVariants[0];
        button.classList.add(...classes);
      }
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
