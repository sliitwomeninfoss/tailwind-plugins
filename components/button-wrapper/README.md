# @sliit-wif/button-wrapper

> Enhance your Tailwind-powered projects with our Animated Button Tailwind Plugin. This plugin adds beautifully animated buttons to your web applications, featuring smooth transitions and a dynamic visual effect that enriches user interactions. Perfect for projects that require that extra flair in button animations.

<br/>

## Features

- **Smooth Hover Effects**: Enjoy a subtle scaling background color transition that ensures your buttons stand out.
- **Arrow Animation**: Arrows that move on hover, giving a clear indication of interaction.

<br/>

## Installation

<br/>

Using npm:

```sh
npm install --save @sliit-wif/button-wrapper
```

or using yarn:

```sh
yarn add @sliit-wif/button-wrapper
```

<br/>

## Usage

1.  Make sure you have Tailwind CSS set up in your project.
2.  To use the Animated Button plugin in your project, you need to add it to your tailwind.config.js:

---

```sh

    plugins: [require("@sliit-wif/button-wrapper/src/buttonStyles")],

```

---

3.  Use the Styles in Your Components:
    - After installing and configuring the plugin, you can use the styles.

---

```sh

  <>

  import ButtonWrapper from '@sliit-wif/button-wrapper/src/Button';


  <ButtonWrapper to="/next-page" className="w-auto" arrow arrowClassName="md:mt-[0.08rem]">
      Go to Next Page
  </ButtonWrapper>

  </>


```
