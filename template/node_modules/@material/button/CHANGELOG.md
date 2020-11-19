# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.2.0](https://github.com/material-components/material-components-web/compare/v3.1.1...v3.2.0) (2019-09-12)

**Note:** Version bump only for package @material/button





# [4.0.0-edc72a4d7.0](https://github.com/material-components/material-components-web/compare/v3.1.1...v4.0.0-edc72a4d7.0) (2019-09-09)


### Bug Fixes

* **button:** Add `overflow: visible` to button. ([#4973](https://github.com/material-components/material-components-web/issues/4973)) ([905e84e](https://github.com/material-components/material-components-web/commit/905e84e))
* **button:** Replace density sets with min & max scales ([#5015](https://github.com/material-components/material-components-web/issues/5015)) ([38fb436](https://github.com/material-components/material-components-web/commit/38fb436))


### Code Refactoring

* **button:** Add ripple target as an inner element. ([#4890](https://github.com/material-components/material-components-web/issues/4890)) ([dffefe6](https://github.com/material-components/material-components-web/commit/dffefe6))


### Features

* **button:** Add support for increased touch target to button. ([#4948](https://github.com/material-components/material-components-web/issues/4948)) ([1d7a2e6](https://github.com/material-components/material-components-web/commit/1d7a2e6))
* **button:** Added density mixin to button ([77379e1](https://github.com/material-components/material-components-web/commit/77379e1))
* **dialog:** Add dialog mixin for dialogs with increased touch target buttons. ([#5024](https://github.com/material-components/material-components-web/issues/5024)) ([2ef1ddd](https://github.com/material-components/material-components-web/commit/2ef1ddd))


### BREAKING CHANGES

* **button:** This changes the structure of the button element by moving the ripple from the outer <button> element to an inner `mdc-button__ripple` element.

OLD
```
<button class="mdc-button">
  <span class="mdc-button__label">Hello World</span>
</button>
```

NEW
```
<button class="mdc-button">
  <div class="mdc-button__ripple"></div>
  <span class="mdc-button__label">Hello World</span>
</button>
```





# [4.0.0-canary.1](https://github.com/material-components/material-components-web/compare/v3.1.1...v4.0.0-canary.1) (2019-09-09)


### Bug Fixes

* **button:** Add `overflow: visible` to button. ([#4973](https://github.com/material-components/material-components-web/issues/4973)) ([905e84e](https://github.com/material-components/material-components-web/commit/905e84e))
* **button:** Replace density sets with min & max scales ([#5015](https://github.com/material-components/material-components-web/issues/5015)) ([38fb436](https://github.com/material-components/material-components-web/commit/38fb436))


### Code Refactoring

* **button:** Add ripple target as an inner element. ([#4890](https://github.com/material-components/material-components-web/issues/4890)) ([dffefe6](https://github.com/material-components/material-components-web/commit/dffefe6))


### Features

* **button:** Add support for increased touch target to button. ([#4948](https://github.com/material-components/material-components-web/issues/4948)) ([1d7a2e6](https://github.com/material-components/material-components-web/commit/1d7a2e6))
* **button:** Added density mixin to button ([77379e1](https://github.com/material-components/material-components-web/commit/77379e1))
* **dialog:** Add dialog mixin for dialogs with increased touch target buttons. ([#5024](https://github.com/material-components/material-components-web/issues/5024)) ([2ef1ddd](https://github.com/material-components/material-components-web/commit/2ef1ddd))


### BREAKING CHANGES

* **button:** This changes the structure of the button element by moving the ripple from the outer <button> element to an inner `mdc-button__ripple` element.

OLD
```
<button class="mdc-button">
  <span class="mdc-button__label">Hello World</span>
</button>
```

NEW
```
<button class="mdc-button">
  <div class="mdc-button__ripple"></div>
  <span class="mdc-button__label">Hello World</span>
</button>
```





# [4.0.0-canary.1](https://github.com/material-components/material-components-web/compare/v3.1.1...v4.0.0-canary.1) (2019-09-09)


### Bug Fixes

* **button:** Add `overflow: visible` to button. ([#4973](https://github.com/material-components/material-components-web/issues/4973)) ([905e84e](https://github.com/material-components/material-components-web/commit/905e84e))
* **button:** Replace density sets with min & max scales ([#5015](https://github.com/material-components/material-components-web/issues/5015)) ([38fb436](https://github.com/material-components/material-components-web/commit/38fb436))


### Code Refactoring

* **button:** Add ripple target as an inner element. ([#4890](https://github.com/material-components/material-components-web/issues/4890)) ([dffefe6](https://github.com/material-components/material-components-web/commit/dffefe6))


### Features

* **button:** Add support for increased touch target to button. ([#4948](https://github.com/material-components/material-components-web/issues/4948)) ([1d7a2e6](https://github.com/material-components/material-components-web/commit/1d7a2e6))
* **button:** Added density mixin to button ([77379e1](https://github.com/material-components/material-components-web/commit/77379e1))
* **dialog:** Add dialog mixin for dialogs with increased touch target buttons. ([#5024](https://github.com/material-components/material-components-web/issues/5024)) ([2ef1ddd](https://github.com/material-components/material-components-web/commit/2ef1ddd))


### BREAKING CHANGES

* **button:** This changes the structure of the button element by moving the ripple from the outer <button> element to an inner `mdc-button__ripple` element.

OLD
```
<button class="mdc-button">
  <span class="mdc-button__label">Hello World</span>
</button>
```

NEW
```
<button class="mdc-button">
  <div class="mdc-button__ripple"></div>
  <span class="mdc-button__label">Hello World</span>
</button>
```





# [4.0.0-canary.0](https://github.com/material-components/material-components-web/compare/v3.1.1...v4.0.0-canary.0) (2019-09-05)


### Bug Fixes

* **button:** Add `overflow: visible` to button. ([#4973](https://github.com/material-components/material-components-web/issues/4973)) ([905e84e](https://github.com/material-components/material-components-web/commit/905e84e))
* **button:** Replace density sets with min & max scales ([#5015](https://github.com/material-components/material-components-web/issues/5015)) ([38fb436](https://github.com/material-components/material-components-web/commit/38fb436))


### Code Refactoring

* **button:** Add ripple target as an inner element. ([#4890](https://github.com/material-components/material-components-web/issues/4890)) ([dffefe6](https://github.com/material-components/material-components-web/commit/dffefe6))


### Features

* **button:** Add support for increased touch target to button. ([#4948](https://github.com/material-components/material-components-web/issues/4948)) ([1d7a2e6](https://github.com/material-components/material-components-web/commit/1d7a2e6))
* **button:** Added density mixin to button ([77379e1](https://github.com/material-components/material-components-web/commit/77379e1))
* **dialog:** Add dialog mixin for dialogs with increased touch target buttons. ([#5024](https://github.com/material-components/material-components-web/issues/5024)) ([2ef1ddd](https://github.com/material-components/material-components-web/commit/2ef1ddd))


### BREAKING CHANGES

* **button:** This changes the structure of the button element by moving the ripple from the outer <button> element to an inner `mdc-button__ripple` element.

OLD
```
<button class="mdc-button">
  <span class="mdc-button__label">Hello World</span>
</button>
```

NEW
```
<button class="mdc-button">
  <div class="mdc-button__ripple"></div>
  <span class="mdc-button__label">Hello World</span>
</button>
```





# [4.0.0-canary.0](https://github.com/material-components/material-components-web/compare/v3.1.1...v4.0.0-canary.0) (2019-09-05)


### Bug Fixes

* **button:** Add `overflow: visible` to button. ([#4973](https://github.com/material-components/material-components-web/issues/4973)) ([905e84e](https://github.com/material-components/material-components-web/commit/905e84e))
* **button:** Replace density sets with min & max scales ([#5015](https://github.com/material-components/material-components-web/issues/5015)) ([38fb436](https://github.com/material-components/material-components-web/commit/38fb436))


### Code Refactoring

* **button:** Add ripple target as an inner element. ([#4890](https://github.com/material-components/material-components-web/issues/4890)) ([dffefe6](https://github.com/material-components/material-components-web/commit/dffefe6))


### Features

* **button:** Add support for increased touch target to button. ([#4948](https://github.com/material-components/material-components-web/issues/4948)) ([1d7a2e6](https://github.com/material-components/material-components-web/commit/1d7a2e6))
* **button:** Added density mixin to button ([77379e1](https://github.com/material-components/material-components-web/commit/77379e1))
* **dialog:** Add dialog mixin for dialogs with increased touch target buttons. ([#5024](https://github.com/material-components/material-components-web/issues/5024)) ([2ef1ddd](https://github.com/material-components/material-components-web/commit/2ef1ddd))


### BREAKING CHANGES

* **button:** This changes the structure of the button element by moving the ripple from the outer <button> element to an inner `mdc-button__ripple` element.

OLD
```
<button class="mdc-button">
  <span class="mdc-button__label">Hello World</span>
</button>
```

NEW
```
<button class="mdc-button">
  <div class="mdc-button__ripple"></div>
  <span class="mdc-button__label">Hello World</span>
</button>
```





# [4.0.0-canary.0](https://github.com/material-components/material-components-web/compare/v3.1.1...v4.0.0-canary.0) (2019-09-05)


### Bug Fixes

* **button:** Add `overflow: visible` to button. ([#4973](https://github.com/material-components/material-components-web/issues/4973)) ([905e84e](https://github.com/material-components/material-components-web/commit/905e84e))
* **button:** Replace density sets with min & max scales ([#5015](https://github.com/material-components/material-components-web/issues/5015)) ([38fb436](https://github.com/material-components/material-components-web/commit/38fb436))


### Code Refactoring

* **button:** Add ripple target as an inner element. ([#4890](https://github.com/material-components/material-components-web/issues/4890)) ([dffefe6](https://github.com/material-components/material-components-web/commit/dffefe6))


### Features

* **button:** Add support for increased touch target to button. ([#4948](https://github.com/material-components/material-components-web/issues/4948)) ([1d7a2e6](https://github.com/material-components/material-components-web/commit/1d7a2e6))
* **button:** Added density mixin to button ([77379e1](https://github.com/material-components/material-components-web/commit/77379e1))
* **dialog:** Add dialog mixin for dialogs with increased touch target buttons. ([#5024](https://github.com/material-components/material-components-web/issues/5024)) ([2ef1ddd](https://github.com/material-components/material-components-web/commit/2ef1ddd))


### BREAKING CHANGES

* **button:** This changes the structure of the button element by moving the ripple from the outer <button> element to an inner `mdc-button__ripple` element.

OLD
```
<button class="mdc-button">
  <span class="mdc-button__label">Hello World</span>
</button>
```

NEW
```
<button class="mdc-button">
  <div class="mdc-button__ripple"></div>
  <span class="mdc-button__label">Hello World</span>
</button>
```





# [4.0.0-a9e694931.0](https://github.com/material-components/material-components-web/compare/v3.1.1...v4.0.0-a9e694931.0) (2019-09-05)


### Bug Fixes

* **button:** Add `overflow: visible` to button. ([#4973](https://github.com/material-components/material-components-web/issues/4973)) ([905e84e](https://github.com/material-components/material-components-web/commit/905e84e))
* **button:** Replace density sets with min & max scales ([#5015](https://github.com/material-components/material-components-web/issues/5015)) ([38fb436](https://github.com/material-components/material-components-web/commit/38fb436))


### Code Refactoring

* **button:** Add ripple target as an inner element. ([#4890](https://github.com/material-components/material-components-web/issues/4890)) ([dffefe6](https://github.com/material-components/material-components-web/commit/dffefe6))


### Features

* **button:** Add support for increased touch target to button. ([#4948](https://github.com/material-components/material-components-web/issues/4948)) ([1d7a2e6](https://github.com/material-components/material-components-web/commit/1d7a2e6))
* **button:** Added density mixin to button ([77379e1](https://github.com/material-components/material-components-web/commit/77379e1))
* **dialog:** Add dialog mixin for dialogs with increased touch target buttons. ([#5024](https://github.com/material-components/material-components-web/issues/5024)) ([2ef1ddd](https://github.com/material-components/material-components-web/commit/2ef1ddd))


### BREAKING CHANGES

* **button:** This changes the structure of the button element by moving the ripple from the outer <button> element to an inner `mdc-button__ripple` element.

OLD
```
<button class="mdc-button">
  <span class="mdc-button__label">Hello World</span>
</button>
```

NEW
```
<button class="mdc-button">
  <div class="mdc-button__ripple"></div>
  <span class="mdc-button__label">Hello World</span>
</button>
```





# [4.0.0-snapshot.0](https://github.com/material-components/material-components-web/compare/v3.1.1...v4.0.0-snapshot.0) (2019-09-05)


### Bug Fixes

* **button:** Add `overflow: visible` to button. ([#4973](https://github.com/material-components/material-components-web/issues/4973)) ([905e84e](https://github.com/material-components/material-components-web/commit/905e84e))
* **button:** Replace density sets with min & max scales ([#5015](https://github.com/material-components/material-components-web/issues/5015)) ([38fb436](https://github.com/material-components/material-components-web/commit/38fb436))


### Code Refactoring

* **button:** Add ripple target as an inner element. ([#4890](https://github.com/material-components/material-components-web/issues/4890)) ([dffefe6](https://github.com/material-components/material-components-web/commit/dffefe6))


### Features

* **button:** Add support for increased touch target to button. ([#4948](https://github.com/material-components/material-components-web/issues/4948)) ([1d7a2e6](https://github.com/material-components/material-components-web/commit/1d7a2e6))
* **button:** Added density mixin to button ([77379e1](https://github.com/material-components/material-components-web/commit/77379e1))
* **dialog:** Add dialog mixin for dialogs with increased touch target buttons. ([#5024](https://github.com/material-components/material-components-web/issues/5024)) ([2ef1ddd](https://github.com/material-components/material-components-web/commit/2ef1ddd))


### BREAKING CHANGES

* **button:** This changes the structure of the button element by moving the ripple from the outer <button> element to an inner `mdc-button__ripple` element.

OLD
```
<button class="mdc-button">
  <span class="mdc-button__label">Hello World</span>
</button>
```

NEW
```
<button class="mdc-button">
  <div class="mdc-button__ripple"></div>
  <span class="mdc-button__label">Hello World</span>
</button>
```





# [4.0.0-alpha.0](https://github.com/material-components/material-components-web/compare/v3.1.0...v4.0.0-alpha.0) (2019-08-07)


### Code Refactoring

* **button:** Add ripple target as an inner element. ([#4890](https://github.com/material-components/material-components-web/issues/4890)) ([dffefe6](https://github.com/material-components/material-components-web/commit/dffefe6))


### Features

* **button:** Add support for increased touch target to button. ([#4948](https://github.com/material-components/material-components-web/issues/4948)) ([1d7a2e6](https://github.com/material-components/material-components-web/commit/1d7a2e6))


### BREAKING CHANGES

* **button:** This changes the structure of the button element by moving the ripple from the outer <button> element to an inner `mdc-button__ripple` element.

OLD
```
<button class="mdc-button">
  <span class="mdc-button__label">Hello World</span>
</button>
```

NEW
```
<button class="mdc-button">
  <div class="mdc-button__ripple"></div>
  <span class="mdc-button__label">Hello World</span>
</button>
```





# [3.1.0](https://github.com/material-components/material-components-web/compare/v3.0.0...v3.1.0) (2019-07-22)

**Note:** Version bump only for package @material/button





# [3.1.0-alpha.0](https://github.com/material-components/material-components-web/compare/v3.0.0...v3.1.0-alpha.0) (2019-07-16)

**Note:** Version bump only for package @material/button





# [3.1.0](https://github.com/material-components/material-components-web/compare/v3.0.0...v3.1.0) (2019-07-16)

**Note:** Version bump only for package @material/button
