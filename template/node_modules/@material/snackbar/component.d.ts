/**
 * @license
 * Copyright 2018 Google Inc.
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
import { MDCSnackbarFoundation } from './foundation';
import { MDCSnackbarAnnouncerFactory } from './types';
export declare class MDCSnackbar extends MDCComponent<MDCSnackbarFoundation> {
    static attachTo(root: Element): MDCSnackbar;
    private announce_;
    private actionEl_;
    private labelEl_;
    private surfaceEl_;
    private handleKeyDown_;
    private handleSurfaceClick_;
    initialize(announcerFactory?: MDCSnackbarAnnouncerFactory): void;
    initialSyncWithDOM(): void;
    destroy(): void;
    open(): void;
    /**
     * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
     *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
     *     client-specific values may also be used if desired.
     */
    close(reason?: string): void;
    getDefaultFoundation(): MDCSnackbarFoundation;
    timeoutMs: number;
    closeOnEscape: boolean;
    readonly isOpen: boolean;
    labelText: string;
    actionButtonText: string;
    private registerKeyDownHandler_;
    private deregisterKeyDownHandler_;
    private registerSurfaceClickHandler_;
    private deregisterSurfaceClickHandler_;
    private isActionButton_;
    private isActionIcon_;
}
