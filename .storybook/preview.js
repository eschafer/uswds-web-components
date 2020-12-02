import prettier from 'prettier';
import parserHtml from "prettier/parser-html";
import "./preview.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
      transformSource (source, storyId) {
        const matches = source.match(/^\(\) => html`(.+)`/s);

        if (matches) {
          const htmlString = matches[1];
          const formattedHtmlString = prettier.format(htmlString, {
            parser: 'html',
            plugins: [parserHtml],
            htmlWhitespaceSensitivity: 'ignore'
          });
          return formattedHtmlString;
        }

        return source;
      }
  }
}