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
import { MDCChipAdapter } from './adapter';
export declare class MDCChipFoundation extends MDCFoundation<MDCChipAdapter> {
    static readonly strings: {
        ARIA_CHECKED: string;
        CHECKMARK_SELECTOR: string;
        ENTRY_ANIMATION_NAME: string;
        INTERACTION_EVENT: string;
        LEADING_ICON_SELECTOR: string;
        REMOVAL_EVENT: string;
        SELECTION_EVENT: string;
        TRAILING_ICON_INTERACTION_EVENT: string;
        TRAILING_ICON_SELECTOR: string;
    };
    static readonly cssClasses: {
        CHECKMARK: string;
        CHIP_EXIT: string;
        HIDDEN_LEADING_ICON: string;
        LEADING_ICON: string;
        SELECTED: string;
        TRAILING_ICON: string;
    };
    static readonly defaultAdapter: MDCChipAdapter;
    /**
     * Whether a trailing icon click should immediately trigger exit/removal of the chip.
     */
    private shouldRemoveOnTrailingIconClick_;
    constructor(adapter?: Partial<MDCChipAdapter>);
    isSelected(): boolean;
    setSelected(selected: boolean): void;
    getShouldRemoveOnTrailingIconClick(): boolean;
    setShouldRemoveOnTrailingIconClick(shouldRemove: boolean): void;
    getDimensions(): ClientRect;
    /**
     * Begins the exit animation which leads to removal of the chip.
     */
    beginExit(): void;
    /**
     * Handles an interaction event on the root element.
     */
    handleInteraction(evt: MouseEvent | KeyboardEvent): void;
    /**
     * Handles a transition end event on the root element.
     */
    handleTransitionEnd(evt: TransitionEvent): void;
    /**
     * Handles an interaction event on the trailing icon element. This is used to
     * prevent the ripple from activating on interaction with the trailing icon.
     */
    handleTrailingIconInteraction(evt: MouseEvent | KeyboardEvent): void;
}
export default MDCChipFoundation;
