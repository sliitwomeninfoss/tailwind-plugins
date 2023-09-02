# @sliit-wif/tailwind-plugin-animated-borders

> Add stylish animated borders to your buttons with this Tailwind CSS plugin!

<br/>

## Install

<br/>

Using npm:

```sh
npm install --save-dev @sliit-wif/tailwind-plugin-animated-borders
```

or using yarn:

```sh
yarn add @sliit-wif/tailwind-plugin-animated-borders --dev
```

<br/>

## Usage

- First, make sure you have Tailwind CSS set up in your project.
- Import the plugin's CSS into your project. You can do this by adding the following line to your main CSS file (e.g., styles.css):

```sh
import { CustomButton } from '@sliit-wif/tailwind-plugin-animated-borders';
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

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
