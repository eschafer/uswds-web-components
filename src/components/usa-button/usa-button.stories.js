import { html } from 'lit-html';
import prettier from 'prettier';
import parserHtml from "prettier/parser-html";

const Component = ({ variant = '' }) => {
  const template = html`<usa-button variant="${variant}">
    <button>Button</button>
</usa-button>`;
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

const demoArgs = {};
export const Demo = Template.bind(demoArgs);
Demo.parameters = {
  docs: {
    source: {
      code: `// Note: code doesn't seem to update when controls change
${getComponentString(demoArgs)}
`,
    },
  },
};
Demo.args = demoArgs;
Demo.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: [
        '',
        'secondary',
        'accent-cool',
        'accent-warm',
        'base',
        'outline',
        'inverse',
        'unstyled'
      ]
    }
  }
}

export const Variants = () => html`
<div>
  <usa-button>
    <button>Default button</button>
  </usa-button>
</div>
<div>
  <usa-button variant="secondary">
    <button>Secondary button</button>
  </usa-button>
</div>
<div>
  <usa-button variant="accent-cool">
    <button>Accent cool button</button>
  </usa-button>
</div>
<div>
  <usa-button variant="accent-warm">
    <button>Accent warm button</button>
  </usa-button>
</div>
<div>
  <usa-button variant="base">
    <button>Base button</button>
  </usa-button>
</div>
<div>
  <usa-button variant="outline">
    <button>Outline button</button>
  </usa-button>
</div>
<div>
  <usa-button variant="inverse">
    <button>Inverse button</button>
  </usa-button>
</div>
<div>
  <usa-button variant="big">
    <button>Big button</button>
  </usa-button>
</div>
<div>
  <usa-button variant="unstyled">
    <button>Unstyled button</button>
  </usa-button>
</div>
`;

export const OtherExamples = () => html`
  <div>
    <usa-button>
      <button disabled>Disabled button</button>
    </usa-button>
  </div>
  <div>
    <usa-button>
      <button title="Hello!">Tooltip button</button>
    </usa-button>
  </div>
`