import { Base } from '@spectrum/sp-base';
export declare class Card extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    title: string;
    subtitle: string;
    src: string;
    footer: string;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-card': Card;
    }
}
