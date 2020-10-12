import { html } from 'lit-element';
import { DemoCard } from './demo-card.component';

import '@spectrum/sp-card';
import '@spectrum/sp-container';


export default function template(this: DemoCard) {
  return html`
  <sp-container>
  <sp-rule medium label="Card - Standard"></sp-rule>
      <sp-demo width="300" height="300">
        <pre>
<sp-card title="Card Title" subtitle="JPG" footer="Footer" src="https://opensource.adobe.com/spectrum-css/img/example-card-portrait.jpg"></sp-card></pre>
      </sp-demo>
  </sp-container>
  `;
}
