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
import { MDCChipSetAdapter } from './adapter';
export declare class MDCChipSetFoundation extends MDCFoundation<MDCChipSetAdapter> {
    static readonly strings: {
        CHIP_SELECTOR: string;
    };
    static readonly cssClasses: {
        CHOICE: string;
        FILTER: string;
    };
    static readonly defaultAdapter: MDCChipSetAdapter;
    /**
     * The ids of the selected chips in the set. Only used for choice chip set or filter chip set.
     */
    private selectedChipIds_;
    constructor(adapter?: Partial<MDCChipSetAdapter>);
    /**
     * Returns an array of the IDs of all selected chips.
     */
    getSelectedChipIds(): ReadonlyArray<string>;
    /**
     * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
     */
    select(chipId: string): void;
    /**
     * Handles a chip interaction event
     */
    handleChipInteraction(chipId: string): void;
    /**
     * Handles a chip selection event, used to handle discrepancy when selection state is set directly on the Chip.
     */
    handleChipSelection(chipId: string, selected: boolean): void;
    /**
     * Handles the event when a chip is removed.
     */
    handleChipRemoval(chipId: string): void;
    /**
     * Deselects the chip with the given id.
     */
    private deselect_;
    /**
     * Toggles selection of the chip with the given id.
     */
    private toggleSelect_;
}
export default MDCChipSetFoundation;
