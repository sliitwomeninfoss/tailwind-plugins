# @sliit-wif/button-wrapper

> Boost your React projects with our @sliit-wif/button-wrapper—where style meets function. Designed with Tailwind CSS, this button component not only captivates with dynamic animations and hover effects but also doubles as a navigator, seamlessly guiding users with its integrated linking feature. It’s the perfect upgrade for a more interactive and polished user experience.

<br/>

## Features

- **Smooth Hover Effects**: Enjoy a subtle scaling background color transition that ensures your buttons not only stand out but also captivate.
- **Arrow Animation**: Dynamic arrows glide on hover, signaling direction and prompting user interaction.
- **Integrated Navigation** : Each button doubles as a navigation tool, offering seamless in-app routing with built-in linking capabilities. Perfect for guiding users through your application’s journey.

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
