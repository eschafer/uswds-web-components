import { Component, Element, Host, Prop, Watch, h } from '@stencil/core';
import { accordion } from 'uswds/src/js/components';

@Component({
  tag: 'usa-accordion',
  styleUrl: 'usa-accordion.scss',
  shadow: false,
  assetsDirs: ['../fonts', '../img']
})
export class UsaAccordion {

  @Prop() variant: string;

  @Watch('variant')
  watchHandler() {
    this.update();
  }

  @Element() el: HTMLElement;

  connectedCallback() {
    this.update();

    accordion.on(this.el);
  }

  disconnectedCallback() {
    accordion.off(this.el);
  }

  update() {
    const variants: { id: string, classes: string[] }[] = [
      { id: 'bordered', classes: ['usa-accordion--bordered']},
    ];

    // add root class
    const div = this.el.querySelector('div');
    div.classList.add('usa-accordion');

    // add heading and heading button classes
    const headings = this.el.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading) => {
      heading.classList.add('usa-accordion__heading')
    });

    const buttons = this.el.querySelectorAll('h1 > button, h2 > button, h3 > button, h4 > button, h5 > button, h6 > button');
    buttons.forEach((button) => {
      button.classList.add('usa-accordion__button');
    })

    const contents = this.el.querySelectorAll('h1 > button + div, h2 > button + div, h3 > button + div, h4 > button + div, h5 > button + div, h6 > button + div')
    contents.forEach((content) => {
      content.classList.add('usa-accordion__content');
    })

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
      div.classList.remove(...allVariantClasses);
      
      const filteredVariants = variants.filter((variant) => variant.id === this.variant);
      if (filteredVariants.length > 0) {
        const { classes } = filteredVariants[0];
        div.classList.add(...classes);
      }
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
