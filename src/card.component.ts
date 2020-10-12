import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import cardStyles from './card.styles';
import standardTemplate from './card.template';

@customElement('sp-card')
export class Card extends Base {
  public static componentStyles = [cardStyles];

  @property({ type: String })  public title: string = '';
  @property({ type: String })  public subtitle: string = '';
  @property({ type: String })  public src: string = '';
  @property({ type: String })  public footer: string = '';

  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-card': Card;
  }
}
