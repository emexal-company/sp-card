import { html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map.js';
export default function standardTemplate() {
    const coverPhotoStyles = {
        'background-image': `url(${this.src})`,
    };
    return html `
        <div style="width: 208px;">
          <div class="spectrum-Card" tabindex="0" role="figure">
            <div class="spectrum-Card-coverPhoto" style="${styleMap(coverPhotoStyles)}"></div>
            <div class="spectrum-Card-body">
              <div class="spectrum-Card-header">
                <div class="spectrum-Card-title">${this.title}</div>
                <div class="spectrum-Card-actionButton">
                  <button aria-haspopup="true" class="spectrum-ActionButton spectrum-ActionButton--quiet">

                  </button>
                </div>
              </div>
              <div class="spectrum-Card-content">
                <div class="spectrum-Card-subtitle">${this.subtitle}</div>
              </div>
            </div>
            <div class="spectrum-Card-footer">
              ${this.footer}
            </div>
            <div class="spectrum-QuickActions spectrum-Card-quickActions">
              <div class="spectrum-Checkbox">
                <input type="checkbox" class="spectrum-Checkbox-input" aria-checked="false" title="Select" value="">
                <span class="spectrum-Checkbox-box">

                </span>
              </div>
            </div>
          </div>
        </div>
        `;
}
//# sourceMappingURL=card.template.js.map