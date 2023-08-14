# Welcome to `@serhiiseregin/material-icons`

## Overview

`@serhiiseregin/material-icons` is a powerful collection of beautifully crafted icons designed to enhance the visual appeal of your projects. Whether you're working on a website, web application, or any other frontend project, these icons are here to add a touch of elegance and creativity to your user interfaces.

## Features

- **Smaller Bundle Size:** We've optimized our icons to minimize the impact on your application's bundle size, ensuring efficient performance.
- **mapIcon Function:** The `mapIcon` function provides flexibility for your project by allowing you to easily map icon names to components of your choice.
- **Fix for Linux OS:** We've addressed the issue of repeating icon names on Linux OS, ensuring a seamless experience across all platforms.

## Installation

To get started, install `@serhiiseregin/material-icons` using your package manager of choice:

```sh
npm install @serhiiseregin/material-icons
```

## Usage

### Basic Usage

```javascript
import { MdClose } from '@serhiiseregin/material-icons/icons/MdClose';

const MyComponent = () => (
  <div>
    <MdClose />
    {/* ... */}
  </div>
);
```

### Dynamic icons
```javascript
import { mapIcon } from '@serhiiseregin/material-icons';

const Icon = mapIcon('MdClose')

const MyComponent = () => (
  <div>
    {/* Will render close icon */}
    <Icon />
  </div>
);
```

**Note**: The `mapIcon` function allows you to dynamically create icon components by passing their names as arguments. This provides flexibility in rendering icons based on runtime conditions.

### Accessing All Icon Names
You can access an array of all icon names using the iconNames export:

```javascript
import { iconNames } from '@serhiiseregin/material-icons';

console.log(iconNames); <!-- An array of all available icon names -->
```
This array includes all the icon names you can use with the mapIcon function. It's useful for various scenarios where you need to work with icon names programmatically.
