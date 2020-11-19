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
import { MDCMenuFactory } from '@material/menu/component';
import { MDCNotchedOutlineFactory } from '@material/notched-outline/component';
import { MDCRipple } from '@material/ripple/component';
import { MDCRippleCapableSurface } from '@material/ripple/types';
import { MDCSelectFoundation } from './foundation';
import { MDCSelectHelperTextFactory } from './helper-text/component';
import { MDCSelectIconFactory } from './icon/component';
export declare class MDCSelect extends MDCComponent<MDCSelectFoundation> implements MDCRippleCapableSurface {
    static attachTo(root: Element): MDCSelect;
    root_: HTMLElement;
    ripple: MDCRipple | null;
    private menu_;
    private isMenuOpen_;
    private nativeControl_;
    private selectedText_;
    private targetElement_;
    private hiddenInput_;
    private menuElement_;
    private leadingIcon_?;
    private helperText_;
    private lineRipple_;
    private label_;
    private outline_;
    private handleChange_;
    private handleFocus_;
    private handleBlur_;
    private handleClick_;
    private handleKeydown_;
    private handleMenuOpened_;
    private handleMenuClosed_;
    private handleMenuSelected_;
    private validationObserver_;
    initialize(labelFactory?: MDCFloatingLabelFactory, lineRippleFactory?: MDCLineRippleFactory, outlineFactory?: MDCNotchedOutlineFactory, menuFactory?: MDCMenuFactory, iconFactory?: MDCSelectIconFactory, helperTextFactory?: MDCSelectHelperTextFactory): void;
    /**
     * Initializes the select's event listeners and internal state based
     * on the environment's state.
     */
    initialSyncWithDOM(): void;
    destroy(): void;
    value: string;
    selectedIndex: number;
    disabled: boolean;
    leadingIconAriaLabel: string;
    /**
     * Sets the text content of the leading icon.
     */
    leadingIconContent: string;
    /**
     * Sets the text content of the helper text.
     */
    helperTextContent: string;
    /**
     * Sets the current invalid state of the select.
     */
    /**
    * Checks if the select is in a valid state.
    */
    valid: boolean;
    /**
     * Sets the control to the required state.
     */
    /**
    * Returns whether the select is required.
    */
    required: boolean;
    /**
     * Recomputes the outline SVG path for the outline element.
     */
    layout(): void;
    getDefaultFoundation(): MDCSelectFoundation;
    /**
     * Handles setup for the enhanced menu.
     */
    private enhancedSelectSetup_;
    private createRipple_;
    private getNativeSelectAdapterMethods_;
    private getEnhancedSelectAdapterMethods_;
    private getCommonAdapterMethods_;
    private getOutlineAdapterMethods_;
    private getLabelAdapterMethods_;
    /**
     * Calculates where the line ripple should start based on the x coordinate within the component.
     */
    private getNormalizedXCoordinate_;
    private isTouchEvent_;
    /**
     * Returns a map of all subcomponents to subfoundations.
     */
    private getFoundationMap_;
    private setEnhancedSelectedIndex_;
    private initialSyncRequiredState_;
    private addMutationObserverForRequired_;
}
