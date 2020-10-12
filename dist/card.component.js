import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import cardStyles from './card.styles';
import standardTemplate from './card.template';
let Card = class Card extends Base {
    constructor() {
        super(...arguments);
        this.title = '';
        this.subtitle = '';
        this.src = '';
        this.footer = '';
    }
    render() {
        return standardTemplate.call(this);
    }
};
Card.componentStyles = [cardStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Card.prototype, "title", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Card.prototype, "subtitle", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Card.prototype, "src", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Card.prototype, "footer", void 0);
Card = __decorate([
    customElement('sp-card')
], Card);
export { Card };
//# sourceMappingURL=card.component.js.map