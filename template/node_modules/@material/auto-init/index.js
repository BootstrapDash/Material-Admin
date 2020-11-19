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
import * as tslib_1 from "tslib";
import { strings } from './constants';
var AUTO_INIT_ATTR = strings.AUTO_INIT_ATTR, AUTO_INIT_STATE_ATTR = strings.AUTO_INIT_STATE_ATTR, INITIALIZED_STATE = strings.INITIALIZED_STATE;
var registry = {};
var CONSOLE_WARN = console.warn.bind(console); // tslint:disable-line:no-console
function emit(evtType, evtData, shouldBubble) {
    if (shouldBubble === void 0) { shouldBubble = false; }
    var evt;
    if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
            bubbles: shouldBubble,
            detail: evtData,
        });
    }
    else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }
    document.dispatchEvent(evt);
}
/* istanbul ignore next: optional argument is not a branch statement */
/**
 * Auto-initializes all MDC components on a page.
 */
export function mdcAutoInit(root) {
    var e_1, _a;
    if (root === void 0) { root = document; }
    var components = [];
    var nodes = [].slice.call(root.querySelectorAll("[" + AUTO_INIT_ATTR + "]"));
    nodes = nodes.filter(function (node) { return node.getAttribute(AUTO_INIT_STATE_ATTR) !== INITIALIZED_STATE; });
    try {
        for (var nodes_1 = tslib_1.__values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
            var node = nodes_1_1.value;
            var ctorName = node.getAttribute(AUTO_INIT_ATTR);
            if (!ctorName) {
                throw new Error('(mdc-auto-init) Constructor name must be given.');
            }
            var Constructor = registry[ctorName]; // tslint:disable-line:variable-name
            if (typeof Constructor !== 'function') {
                throw new Error("(mdc-auto-init) Could not find constructor in registry for " + ctorName);
            }
            // TODO: Should we make an eslint rule for an attachTo() static method?
            // See https://github.com/Microsoft/TypeScript/issues/14600 for discussion of static interface support in TS
            var component = Constructor.attachTo(node);
            Object.defineProperty(node, ctorName, {
                configurable: true,
                enumerable: false,
                value: component,
                writable: false,
            });
            components.push(component);
            node.setAttribute(AUTO_INIT_STATE_ATTR, INITIALIZED_STATE);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    emit('MDCAutoInit:End', {});
    return components;
}
// Constructor is PascalCased because it is a direct reference to a class, rather than an instance of a class.
// tslint:disable-next-line:variable-name
mdcAutoInit.register = function (componentName, Constructor, warn) {
    if (warn === void 0) { warn = CONSOLE_WARN; }
    if (typeof Constructor !== 'function') {
        throw new Error("(mdc-auto-init) Invalid Constructor value: " + Constructor + ". Expected function.");
    }
    var registryValue = registry[componentName];
    if (registryValue) {
        warn("(mdc-auto-init) Overriding registration for " + componentName + " with " + Constructor + ". Was: " + registryValue);
    }
    registry[componentName] = Constructor;
};
mdcAutoInit.deregister = function (componentName) {
    delete registry[componentName];
};
mdcAutoInit.deregisterAll = function () {
    var keys = Object.keys(registry);
    keys.forEach(this.deregister, this);
};
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default mdcAutoInit;
//# sourceMappingURL=index.js.map