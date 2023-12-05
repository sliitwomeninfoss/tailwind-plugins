# @sliit-wif/animated-borders

> Add stylish animated borders to your buttons with this Tailwind CSS plugin!

<br/>

## Install

<br/>

Using npm:

```sh
npm install --save @sliit-wif/animated-borders
```

or using yarn:

```sh
yarn add @sliit-wif/animated-borders
```

<br/>

## Usage

1.  Make sure you have Tailwind CSS set up in your project.
2.  Update tailwind.config.js:

    - In your tailwind.config.js, make sure to use the correct plugin name:

---

```sh

    plugins: [require("@sliit-wif/animated-borders/src/customButtonPlugin.js")],

```

---

3.  Use the Styles in Your Components:
    - After installing and configuring the plugin, you can use the styles.

---

```sh

  <>

    <button className="flex justify-center items-center bg-blue-900 hover:bg-cyan-200 rounded-[10px] text-white hover:text-blue-900 font-bold py-2 px-4 focus:outline-none focus:shadow-outline animated-border from-blue-800 via-sky-400 to-blue-800 transition-all">
      Custom Button
    </button>

  </>


```

---

4. Make sure to add this css code into your CSS file.

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

---
