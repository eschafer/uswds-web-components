import { html } from 'lit-html';
import prettier from 'prettier';
import parserHtml from "prettier/parser-html";

const Component = ({ big = false, style = '' }) => {
    let classes = style.split(', ').map((style) => {
      if (style === '') {
        return '';
      }
      return `usa-button--${style}`;
    }).join(' ');
  if (big) classes += ' usa-button--big';

  const template = html`<usa-button><button class="usa-button ${classes}">Button</button></usa-button>`;
  return template;
}

const getComponentString = (args) => {
  const { strings, values } = Component(args);

  let finalString = ''

  // Loop through all values
  values.forEach((value, i) => {
    finalString += `${strings[i]}${value}`
  })

  // Add the last string literal
  finalString += strings[strings.length - 1]

  return prettier.format(finalString, { parser: 'html', plugins: [parserHtml] });
}

export default {
  title: 'USWDS/usa-button'
};

const Template = (args) => Component(args);

const defaultArgs = {
  big: false,
  style: ''
};
export const Default = Template.bind(defaultArgs);
Default.parameters = {
  docs: {
    source: {
      code: getComponentString(defaultArgs),
    },
  },
};
Default.args = defaultArgs;
Default.argTypes = {
  style: {
    control: {
      type: 'select',
      options: [
        '',
        'secondary',
        'accent-cool',
        'accent-warm',
        'base',
        'outline',
        'outline, inverse',
        'outline, inverse, unstyled',
        'unstyled'
      ]
    }
  }
}

export const Secondary = () => html`<usa-button><button class="usa-button--secondary">Secondary button</button></usa-button>`;
export const AccentCool = () => html`<usa-button><button class="usa-button--accent-cool">Accent cool button</button></usa-button>`;
export const AccentWarm = () => html`<usa-button><button class="usa-button--accent-warm">Accent warm button</button></usa-button>`;
export const Base = () => html`<usa-button><button class="usa-button--base">Base button</button></usa-button>`;
export const Outline = () => html`<usa-button><button class="usa-button--outline">Outline button</button></usa-button>`;
export const OutlineInverse = () => html`<usa-button><button class="usa-button--outline usa-button--inverse">Outline inverse button</button></usa-button>`;
export const Big = () => html`<usa-button><button class="usa-button--big">Big button</button></usa-button>`;
export const Unstyled = () => html`<usa-button><button class="usa-button--unstyled">Unstyled button</button></usa-button>`;
