import { html } from 'lit-html';
import prettier from 'prettier';
import parserHtml from "prettier/parser-html";

const Component = ({ variant = '' }) => {
  const template = html`<usa-accordion variant="${variant}">
    <div>hi</div>
</usa-accordion>`;
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
  title: 'USWDS/usa-accordion'
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
<h2>Borderless</h2>

<usa-accordion>
  <div>
    <!-- Use the accurate heading level to maintain the document outline -->
    <h3>
      <button
        aria-expanded="true"
        aria-controls="a1"
      >
        First Amendment
      </button>
    </h3>
    <div id="a1" class="usa-prose">
      <p>
        Congress shall make no law respecting an establishment of religion, or
        prohibiting the free exercise thereof; or abridging the freedom of speech,
        or of the press; or the right of the people peaceably to assemble, and to
        petition the Government for a redress of grievances.
      </p>
    </div>

    <!-- Use the accurate heading level to maintain the document outline -->
    <h3>
      <button
        aria-expanded="false"
        aria-controls="a2"
      >
        Second Amendment
      </button>
    </h3>
    <div id="a2" class="usa-prose">
      <p>
        A well regulated Militia, being necessary to the security of a free State,
        the right of the people to keep and bear Arms, shall not be infringed.
      </p>
      <ul>
        <li>This is a list item</li>
        <li>Another list item</li>
      </ul>
    </div>

    <!-- Use the accurate heading level to maintain the document outline -->
    <h3>
      <button
        aria-expanded="false"
        aria-controls="a3"
      >
        Third Amendment
      </button>
    </h3>
    <div id="a3" class="usa-prose">
      <p>
        No Soldier shall, in time of peace be quartered in any house, without the
        consent of the Owner, nor in time of war, but in a manner to be prescribed
        by law.
      </p>
    </div>

    <!-- Use the accurate heading level to maintain the document outline -->
    <h3>
      <button
        aria-expanded="false"
        aria-controls="a4"
      >
        Fourth Amendment
      </button>
    </h3>
    <div id="a4" class="usa-prose">
      <p>
        The right of the people to be secure in their persons, houses, papers, and
        effects, against unreasonable searches and seizures, shall not be
        violated, and no Warrants shall issue, but upon probable cause, supported
        by Oath or affirmation, and particularly describing the place to be
        searched, and the persons or things to be seized.
      </p>
    </div>

    <!-- Use the accurate heading level to maintain the document outline -->
    <h3>
      <button
        aria-expanded="false"
        aria-controls="a5"
      >
        Fifth Amendment
      </button>
    </h3>
    <div id="a5" class="usa-prose">
      <p>
        No person shall be held to answer for a capital, or otherwise infamous
        crime, unless on a presentment or indictment of a Grand Jury, except in
        cases arising in the land or naval forces, or in the Militia, when in
        actual service in time of War or public danger; nor shall any person be
        subject for the same offence to be twice put in jeopardy of life or limb;
        nor shall be compelled in any criminal case to be a witness against
        himself, nor be deprived of life, liberty, or property, without due
        process of law; nor shall private property be taken for public use,
        without just compensation.
      </p>
    </div>
  </div>
</usa-accordion>

<h2>Bordered</h2>

<usa-accordion variant="bordered">
  <div>
    <!-- Use the accurate heading level to maintain the document outline -->
    <h3>
      <button
        aria-expanded="true"
        aria-controls="b-a1"
      >
        First Amendment
      </button>
    </h3>
    <div id="b-a1" class="usa-prose">
      <p>
        Congress shall make no law respecting an establishment of religion, or
        prohibiting the free exercise thereof; or abridging the freedom of speech,
        or of the press; or the right of the people peaceably to assemble, and to
        petition the Government for a redress of grievances.
      </p>
    </div>

    <!-- Use the accurate heading level to maintain the document outline -->
    <h3>
      <button
        aria-expanded="false"
        aria-controls="b-a2"
      >
        Second Amendment
      </button>
    </h3>
    <div id="b-a2" class="usa-prose">
      <p>
        A well regulated Militia, being necessary to the security of a free State,
        the right of the people to keep and bear Arms, shall not be infringed.
      </p>
      <ul>
        <li>This is a list item</li>
        <li>Another list item</li>
      </ul>
    </div>

    <!-- Use the accurate heading level to maintain the document outline -->
    <h3>
      <button
        aria-expanded="false"
        aria-controls="b-a3"
      >
        Third Amendment
      </button>
    </h3>
    <div id="b-a3" class="usa-prose">
      <p>
        No Soldier shall, in time of peace be quartered in any house, without the
        consent of the Owner, nor in time of war, but in a manner to be prescribed
        by law.
      </p>
    </div>

    <!-- Use the accurate heading level to maintain the document outline -->
    <h3>
      <button
        aria-expanded="false"
        aria-controls="b-a4"
      >
        Fourth Amendment
      </button>
    </h3>
    <div id="b-a4" class="usa-prose">
      <p>
        The right of the people to be secure in their persons, houses, papers, and
        effects, against unreasonable searches and seizures, shall not be
        violated, and no Warrants shall issue, but upon probable cause, supported
        by Oath or affirmation, and particularly describing the place to be
        searched, and the persons or things to be seized.
      </p>
    </div>

    <!-- Use the accurate heading level to maintain the document outline -->
    <h3>
      <button
        aria-expanded="false"
        aria-controls="b-a5"
      >
        Fifth Amendment
      </button>
    </h3>
    <div id="b-a5" class="usa-prose">
      <p>
        No person shall be held to answer for a capital, or otherwise infamous
        crime, unless on a presentment or indictment of a Grand Jury, except in
        cases arising in the land or naval forces, or in the Militia, when in
        actual service in time of War or public danger; nor shall any person be
        subject for the same offence to be twice put in jeopardy of life or limb;
        nor shall be compelled in any criminal case to be a witness against
        himself, nor be deprived of life, liberty, or property, without due
        process of law; nor shall private property be taken for public use,
        without just compensation.
      </p>
    </div>
  </div>
</usa-accordion>

<h2>Multiselectable</h2>

<usa-accordion>
  <div aria-multiselectable="true">
    <!-- Use the accurate heading level to maintain the document outline -->
    <h3>
      <button
        aria-expanded="true"
        aria-controls="m-a1"
      >
        First Amendment
      </button>
    </h3>
    <div id="m-a1" class="usa-prose">
      <p>
        Congress shall make no law respecting an establishment of religion, or
        prohibiting the free exercise thereof; or abridging the freedom of speech,
        or of the press; or the right of the people peaceably to assemble, and to
        petition the Government for a redress of grievances.
      </p>
    </div>

    <!-- Use the accurate heading level to maintain the document outline -->
    <h3>
      <button
        aria-expanded="false"
        aria-controls="m-a2"
      >
        Second Amendment
      </button>
    </h3>
    <div id="m-a2" class="usa-prose">
      <p>
        A well regulated Militia, being necessary to the security of a free State,
        the right of the people to keep and bear Arms, shall not be infringed.
      </p>
      <ul>
        <li>This is a list item</li>
        <li>Another list item</li>
      </ul>
    </div>

    <!-- Use the accurate heading level to maintain the document outline -->
    <h3>
      <button
        aria-expanded="false"
        aria-controls="m-a3"
      >
        Third Amendment
      </button>
    </h3>
    <div id="m-a3" class="usa-prose">
      <p>
        No Soldier shall, in time of peace be quartered in any house, without the
        consent of the Owner, nor in time of war, but in a manner to be prescribed
        by law.
      </p>
    </div>

    <!-- Use the accurate heading level to maintain the document outline -->
    <h3>
      <button
        aria-expanded="false"
        aria-controls="m-a4"
      >
        Fourth Amendment
      </button>
    </h3>
    <div id="m-a4" class="usa-prose">
      <p>
        The right of the people to be secure in their persons, houses, papers, and
        effects, against unreasonable searches and seizures, shall not be
        violated, and no Warrants shall issue, but upon probable cause, supported
        by Oath or affirmation, and particularly describing the place to be
        searched, and the persons or things to be seized.
      </p>
    </div>

    <!-- Use the accurate heading level to maintain the document outline -->
    <h3>
      <button
        aria-expanded="false"
        aria-controls="m-a5"
      >
        Fifth Amendment
      </button>
    </h3>
    <div id="m-a5" class="usa-prose">
      <p>
        No person shall be held to answer for a capital, or otherwise infamous
        crime, unless on a presentment or indictment of a Grand Jury, except in
        cases arising in the land or naval forces, or in the Militia, when in
        actual service in time of War or public danger; nor shall any person be
        subject for the same offence to be twice put in jeopardy of life or limb;
        nor shall be compelled in any criminal case to be a witness against
        himself, nor be deprived of life, liberty, or property, without due
        process of law; nor shall private property be taken for public use,
        without just compensation.
      </p>
    </div>
  </div>
</usa-accordion>
`;

export const OtherExamples = () => html``