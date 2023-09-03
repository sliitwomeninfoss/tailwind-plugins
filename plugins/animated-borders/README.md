# @sliit-wif/tailwind-plugin-animated-borders

> Add stylish animated borders to your buttons with this Tailwind CSS plugin!

<br/>

## Install

<br/>

Using npm:

```sh
npm install --save @sliit-wif/tailwind-plugin-animated-borders
```

or using yarn:

```sh
yarn add @sliit-wif/tailwind-plugin-animated-borders
```

<br/>

## Usage

- Make sure you have Tailwind CSS set up in your project.

```sh

import { CustomButton } from '@sliit-wif/tailwind-plugin-animated-borders';

....

  <>

    <CustomButton> Click Me! </CustomButton/>

  </>

...

```

---

- Additional CSS:-

```sh
 @property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@keyframes rotate {
  to {
    --angle: 360deg;
  }
}

```

- Make sure to add this css code into your CSS file.
