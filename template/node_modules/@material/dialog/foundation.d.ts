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
import { MDCFoundation } from '@material/base/foundation';
import { MDCDialogAdapter } from './adapter';
export declare class MDCDialogFoundation extends MDCFoundation<MDCDialogAdapter> {
    static readonly cssClasses: {
        CLOSING: string;
        OPEN: string;
        OPENING: string;
        SCROLLABLE: string;
        SCROLL_LOCK: string;
        STACKED: string;
    };
    static readonly strings: {
        ACTION_ATTRIBUTE: string;
        BUTTON_DEFAULT_ATTRIBUTE: string;
        BUTTON_SELECTOR: string;
        CLOSED_EVENT: string;
        CLOSE_ACTION: string;
        CLOSING_EVENT: string;
        CONTAINER_SELECTOR: string;
        CONTENT_SELECTOR: string;
        DESTROY_ACTION: string;
        INITIAL_FOCUS_ATTRIBUTE: string;
        OPENED_EVENT: string;
        OPENING_EVENT: string;
        SCRIM_SELECTOR: string;
        SUPPRESS_DEFAULT_PRESS_SELECTOR: string;
        SURFACE_SELECTOR: string;
    };
    static readonly numbers: {
        DIALOG_ANIMATION_CLOSE_TIME_MS: number;
        DIALOG_ANIMATION_OPEN_TIME_MS: number;
    };
    static readonly defaultAdapter: MDCDialogAdapter;
    private isOpen_;
    private animationFrame_;
    private animationTimer_;
    private layoutFrame_;
    private escapeKeyAction_;
    private scrimClickAction_;
    private autoStackButtons_;
    private areButtonsStacked_;
    constructor(adapter?: Partial<MDCDialogAdapter>);
    init(): void;
    destroy(): void;
    open(): void;
    close(action?: string): void;
    isOpen(): boolean;
    getEscapeKeyAction(): string;
    setEscapeKeyAction(action: string): void;
    getScrimClickAction(): string;
    setScrimClickAction(action: string): void;
    getAutoStackButtons(): boolean;
    setAutoStackButtons(autoStack: boolean): void;
    layout(): void;
    /** Handles click on the dialog root element. */
    handleClick(evt: MouseEvent): void;
    /** Handles keydown on the dialog root element. */
    handleKeydown(evt: KeyboardEvent): void;
    /** Handles keydown on the document. */
    handleDocumentKeydown(evt: KeyboardEvent): void;
    private layoutInternal_;
    private handleAnimationTimerEnd_;
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */
    private runNextAnimationFrame_;
    private detectStackedButtons_;
    private detectScrollableContent_;
}
export default MDCDialogFoundation;
