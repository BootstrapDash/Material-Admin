/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import { MDCComponent } from '@material/base/component';
import { MDCFloatingLabelFactory } from '@material/floating-label/component';
import { MDCLineRippleFactory } from '@material/line-ripple/component';
import { MDCNotchedOutlineFactory } from '@material/notched-outline/component';
import { MDCRipple, MDCRippleFactory } from '@material/ripple/component';
import { MDCRippleCapableSurface } from '@material/ripple/types';
import { MDCTextFieldCharacterCounterFactory } from './character-counter/component';
import { MDCTextFieldFoundation } from './foundation';
import { MDCTextFieldHelperTextFactory } from './helper-text/component';
import { MDCTextFieldIconFactory } from './icon/component';
export declare class MDCTextField extends MDCComponent<MDCTextFieldFoundation> implements MDCRippleCapableSurface {
    static attachTo(root: Element): MDCTextField;
    root_: HTMLElement;
    ripple: MDCRipple | null;
    private input_;
    private characterCounter_;
    private helperText_;
    private label_;
    private leadingIcon_;
    private lineRipple_;
    private outline_;
    private trailingIcon_;
    initialize(rippleFactory?: MDCRippleFactory, lineRippleFactory?: MDCLineRippleFactory, helperTextFactory?: MDCTextFieldHelperTextFactory, characterCounterFactory?: MDCTextFieldCharacterCounterFactory, iconFactory?: MDCTextFieldIconFactory, labelFactory?: MDCFloatingLabelFactory, outlineFactory?: MDCNotchedOutlineFactory): void;
    destroy(): void;
    /**
     * Initializes the Text Field's internal state based on the environment's
     * state.
     */
    initialSyncWithDOM(): void;
    /**
    * @param value The value to set on the input.
    */
    value: string;
    /**
    * @param disabled Sets the Text Field disabled or enabled.
    */
    disabled: boolean;
    /**
    * @param valid Sets the Text Field valid or invalid.
    */
    valid: boolean;
    /**
    * @param required Sets the Text Field to required.
    */
    required: boolean;
    /**
    * @param pattern Sets the input element's validation pattern.
    */
    pattern: string;
    /**
    * @param minLength Sets the input element's minLength.
    */
    minLength: number;
    /**
    * @param maxLength Sets the input element's maxLength.
    */
    maxLength: number;
    /**
    * @param min Sets the input element's min.
    */
    min: string;
    /**
    * @param max Sets the input element's max.
    */
    max: string;
    /**
    * @param step Sets the input element's step.
    */
    step: string;
    /**
     * Sets the helper text element content.
     */
    helperTextContent: string;
    /**
     * Sets the aria label of the leading icon.
     */
    leadingIconAriaLabel: string;
    /**
     * Sets the text content of the leading icon.
     */
    leadingIconContent: string;
    /**
     * Sets the aria label of the trailing icon.
     */
    trailingIconAriaLabel: string;
    /**
     * Sets the text content of the trailing icon.
     */
    trailingIconContent: string;
    /**
     * Enables or disables the use of native validation. Use this for custom validation.
     * @param useNativeValidation Set this to false to ignore native input validation.
     */
    useNativeValidation: boolean;
    /**
     * Focuses the input element.
     */
    focus(): void;
    /**
     * Recomputes the outline SVG path for the outline element.
     */
    layout(): void;
    getDefaultFoundation(): MDCTextFieldFoundation;
    private getRootAdapterMethods_;
    private getInputAdapterMethods_;
    private getLabelAdapterMethods_;
    private getLineRippleAdapterMethods_;
    private getOutlineAdapterMethods_;
    /**
     * @return A map of all subcomponents to subfoundations.
     */
    private getFoundationMap_;
    private createRipple_;
}
