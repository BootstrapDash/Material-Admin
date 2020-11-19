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
import { MDCFoundation } from '@material/base/foundation';
import { MDCSelectAdapter } from './adapter';
import { MDCSelectFoundationMap } from './types';
export declare class MDCSelectFoundation extends MDCFoundation<MDCSelectAdapter> {
    static readonly cssClasses: {
        ACTIVATED: string;
        DISABLED: string;
        FOCUSED: string;
        INVALID: string;
        OUTLINED: string;
        REQUIRED: string;
        ROOT: string;
        SELECTED_ITEM_CLASS: string;
        WITH_LEADING_ICON: string;
    };
    static readonly numbers: {
        LABEL_SCALE: number;
    };
    static readonly strings: {
        ARIA_CONTROLS: string;
        ARIA_SELECTED_ATTR: string;
        CHANGE_EVENT: string;
        ENHANCED_VALUE_ATTR: string;
        HIDDEN_INPUT_SELECTOR: string;
        LABEL_SELECTOR: string;
        LEADING_ICON_SELECTOR: string;
        LINE_RIPPLE_SELECTOR: string;
        MENU_SELECTOR: string;
        NATIVE_CONTROL_SELECTOR: string;
        OUTLINE_SELECTOR: string;
        SELECTED_ITEM_SELECTOR: string;
        SELECTED_TEXT_SELECTOR: string;
    };
    /**
     * See {@link MDCSelectAdapter} for typing information on parameters and return types.
     */
    static readonly defaultAdapter: MDCSelectAdapter;
    private readonly leadingIcon_;
    private readonly helperText_;
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    constructor(adapter?: Partial<MDCSelectAdapter>, foundationMap?: Partial<MDCSelectFoundationMap>);
    setSelectedIndex(index: number): void;
    setValue(value: string): void;
    getValue(): string;
    setDisabled(isDisabled: boolean): void;
    /**
     * @param content Sets the content of the helper text.
     */
    setHelperTextContent(content: string): void;
    layout(): void;
    handleMenuOpened(): void;
    handleMenuClosed(): void;
    /**
     * Handles value changes, via change event or programmatic updates.
     */
    handleChange(didChange?: boolean): void;
    /**
     * Handles focus events from select element.
     */
    handleFocus(): void;
    /**
     * Handles blur events from select element.
     */
    handleBlur(): void;
    handleClick(normalizedX: number): void;
    handleKeydown(event: KeyboardEvent): void;
    /**
     * Opens/closes the notched outline.
     */
    notchOutline(openNotch: boolean): void;
    /**
     * Sets the aria label of the leading icon.
     */
    setLeadingIconAriaLabel(label: string): void;
    /**
     * Sets the text content of the leading icon.
     */
    setLeadingIconContent(content: string): void;
    setValid(isValid: boolean): void;
    isValid(): boolean;
}
export default MDCSelectFoundation;
