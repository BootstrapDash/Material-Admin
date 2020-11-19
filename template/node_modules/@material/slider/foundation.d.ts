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
import { MDCSliderAdapter } from './adapter';
export declare class MDCSliderFoundation extends MDCFoundation<MDCSliderAdapter> {
    static readonly cssClasses: {
        ACTIVE: string;
        DISABLED: string;
        DISCRETE: string;
        FOCUS: string;
        HAS_TRACK_MARKER: string;
        IN_TRANSIT: string;
        IS_DISCRETE: string;
    };
    static readonly strings: {
        ARIA_DISABLED: string;
        ARIA_VALUEMAX: string;
        ARIA_VALUEMIN: string;
        ARIA_VALUENOW: string;
        CHANGE_EVENT: string;
        INPUT_EVENT: string;
        LAST_TRACK_MARKER_SELECTOR: string;
        PIN_VALUE_MARKER_SELECTOR: string;
        STEP_DATA_ATTR: string;
        THUMB_CONTAINER_SELECTOR: string;
        TRACK_MARKER_CONTAINER_SELECTOR: string;
        TRACK_SELECTOR: string;
    };
    static readonly numbers: {
        PAGE_FACTOR: number;
    };
    static readonly defaultAdapter: MDCSliderAdapter;
    private rect_;
    /**
     * We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
     * because those could be valid tabindices set by the client code.
     */
    private savedTabIndex_;
    private active_;
    private inTransit_;
    private isDiscrete_;
    private hasTrackMarker_;
    private handlingThumbTargetEvt_;
    private min_;
    private max_;
    private step_;
    private value_;
    private disabled_;
    private preventFocusState_;
    private readonly thumbContainerPointerHandler_;
    private readonly interactionStartHandler_;
    private readonly keydownHandler_;
    private readonly focusHandler_;
    private readonly blurHandler_;
    private readonly resizeHandler_;
    constructor(adapter?: Partial<MDCSliderAdapter>);
    init(): void;
    destroy(): void;
    setupTrackMarker(): void;
    layout(): void;
    getValue(): number;
    setValue(value: number): void;
    getMax(): number;
    setMax(max: number): void;
    getMin(): number;
    setMin(min: number): void;
    getStep(): number;
    setStep(step: number): void;
    isDisabled(): boolean;
    setDisabled(disabled: boolean): void;
    /**
     * Called when the user starts interacting with the slider
     */
    private handleDown_;
    /**
     * Called when the user moves the slider
     */
    private handleMove_;
    /**
     * Called when the user's interaction with the slider ends
     */
    private handleUp_;
    /**
     * Returns the pageX of the event
     */
    private getPageX_;
    /**
     * Sets the slider value from an event
     */
    private setValueFromEvt_;
    /**
     * Computes the new value from the pageX position
     */
    private computeValueFromPageX_;
    /**
     * Handles keydown events
     */
    private handleKeydown_;
    /**
     * Returns the computed name of the event
     */
    private getKeyId_;
    /**
     * Computes the value given a keyboard key ID
     */
    private getValueForKeyId_;
    private handleFocus_;
    private handleBlur_;
    /**
     * Sets the value of the slider
     */
    private setValue_;
    /**
     * Calculates the quantized value
     */
    private quantize_;
    private updateUIForCurrentValue_;
    /**
     * Toggles the active state of the slider
     */
    private setActive_;
    /**
     * Toggles the inTransit state of the slider
     */
    private setInTransit_;
    /**
     * Conditionally adds or removes a class based on shouldBePresent
     */
    private toggleClass_;
}
export default MDCSliderFoundation;
