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
declare const cssClasses: {
    CLOSING: string;
    OPEN: string;
    OPENING: string;
};
declare const strings: {
    ACTION_SELECTOR: string;
    ARIA_LIVE_LABEL_TEXT_ATTR: string;
    CLOSED_EVENT: string;
    CLOSING_EVENT: string;
    DISMISS_SELECTOR: string;
    LABEL_SELECTOR: string;
    OPENED_EVENT: string;
    OPENING_EVENT: string;
    REASON_ACTION: string;
    REASON_DISMISS: string;
    SURFACE_SELECTOR: string;
};
declare const numbers: {
    DEFAULT_AUTO_DISMISS_TIMEOUT_MS: number;
    MAX_AUTO_DISMISS_TIMEOUT_MS: number;
    MIN_AUTO_DISMISS_TIMEOUT_MS: number;
    SNACKBAR_ANIMATION_CLOSE_TIME_MS: number;
    SNACKBAR_ANIMATION_OPEN_TIME_MS: number;
    /**
     * Number of milliseconds to wait between temporarily clearing the label text
     * in the DOM and subsequently restoring it. This is necessary to force IE 11
     * to pick up the `aria-live` content change and announce it to the user.
     */
    ARIA_LIVE_DELAY_MS: number;
};
export { cssClasses, strings, numbers };
