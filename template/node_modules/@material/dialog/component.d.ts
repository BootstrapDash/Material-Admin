/**
 * @license
 * Copyright 2017 Google Inc.
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
import { MDCDialogFoundation } from './foundation';
import { MDCDialogFocusTrapFactory } from './util';
export declare class MDCDialog extends MDCComponent<MDCDialogFoundation> {
    readonly isOpen: boolean;
    escapeKeyAction: string;
    scrimClickAction: string;
    autoStackButtons: boolean;
    static attachTo(root: Element): MDCDialog;
    private buttonRipples_;
    private buttons_;
    private container_;
    private content_;
    private defaultButton_;
    private focusTrap_;
    private focusTrapFactory_?;
    private handleClick_;
    private handleKeydown_;
    private handleDocumentKeydown_;
    private handleLayout_;
    private handleOpening_;
    private handleClosing_;
    initialize(focusTrapFactory?: MDCDialogFocusTrapFactory): void;
    initialSyncWithDOM(): void;
    destroy(): void;
    layout(): void;
    open(): void;
    close(action?: string): void;
    getDefaultFoundation(): MDCDialogFoundation;
    private getInitialFocusEl_;
}
