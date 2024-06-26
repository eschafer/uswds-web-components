/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface UsaAccordion {
        "variant": string;
    }
    interface UsaButton {
        "variant": string;
    }
    interface UsaLink {
    }
    interface UsaList {
    }
    interface UsaSidenav {
    }
    interface UsaTypography {
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLUsaAccordionElement extends Components.UsaAccordion, HTMLStencilElement {
    }
    var HTMLUsaAccordionElement: {
        prototype: HTMLUsaAccordionElement;
        new (): HTMLUsaAccordionElement;
    };
    interface HTMLUsaButtonElement extends Components.UsaButton, HTMLStencilElement {
    }
    var HTMLUsaButtonElement: {
        prototype: HTMLUsaButtonElement;
        new (): HTMLUsaButtonElement;
    };
    interface HTMLUsaLinkElement extends Components.UsaLink, HTMLStencilElement {
    }
    var HTMLUsaLinkElement: {
        prototype: HTMLUsaLinkElement;
        new (): HTMLUsaLinkElement;
    };
    interface HTMLUsaListElement extends Components.UsaList, HTMLStencilElement {
    }
    var HTMLUsaListElement: {
        prototype: HTMLUsaListElement;
        new (): HTMLUsaListElement;
    };
    interface HTMLUsaSidenavElement extends Components.UsaSidenav, HTMLStencilElement {
    }
    var HTMLUsaSidenavElement: {
        prototype: HTMLUsaSidenavElement;
        new (): HTMLUsaSidenavElement;
    };
    interface HTMLUsaTypographyElement extends Components.UsaTypography, HTMLStencilElement {
    }
    var HTMLUsaTypographyElement: {
        prototype: HTMLUsaTypographyElement;
        new (): HTMLUsaTypographyElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "usa-accordion": HTMLUsaAccordionElement;
        "usa-button": HTMLUsaButtonElement;
        "usa-link": HTMLUsaLinkElement;
        "usa-list": HTMLUsaListElement;
        "usa-sidenav": HTMLUsaSidenavElement;
        "usa-typography": HTMLUsaTypographyElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface UsaAccordion {
        "variant"?: string;
    }
    interface UsaButton {
        "variant"?: string;
    }
    interface UsaLink {
    }
    interface UsaList {
    }
    interface UsaSidenav {
    }
    interface UsaTypography {
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "usa-accordion": UsaAccordion;
        "usa-button": UsaButton;
        "usa-link": UsaLink;
        "usa-list": UsaList;
        "usa-sidenav": UsaSidenav;
        "usa-typography": UsaTypography;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "usa-accordion": LocalJSX.UsaAccordion & JSXBase.HTMLAttributes<HTMLUsaAccordionElement>;
            "usa-button": LocalJSX.UsaButton & JSXBase.HTMLAttributes<HTMLUsaButtonElement>;
            "usa-link": LocalJSX.UsaLink & JSXBase.HTMLAttributes<HTMLUsaLinkElement>;
            "usa-list": LocalJSX.UsaList & JSXBase.HTMLAttributes<HTMLUsaListElement>;
            "usa-sidenav": LocalJSX.UsaSidenav & JSXBase.HTMLAttributes<HTMLUsaSidenavElement>;
            "usa-typography": LocalJSX.UsaTypography & JSXBase.HTMLAttributes<HTMLUsaTypographyElement>;
        }
    }
}
