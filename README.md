[![Build Status](https://travis-ci.org/samAbeywickrama/reactjs-videobg.svg?branch=master)](https://travis-ci.org/samAbeywickrama/reactjs-videobg)
[![Coverage Status](https://coveralls.io/repos/github/samAbeywickrama/react-video-bg/badge.svg?branch=master)](https://coveralls.io/github/samAbeywickrama/react-video-bg?branch=master)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/reactjs-videobg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# reactjs-videobg

Easily add background videos to your webapps

### [**DEMO**](https://qdync.csb.app/)

## Installation

### npm

`npm i -S reactjs-videobg`

### yarn

`yarn add reactjs-videobg`

## Development

This repo uses Commitizen for git commit conventions.

Run `yarn commit` or `npm run commit`

You'll be prompted to fill in any required fields and your commit messages will be formatted according to the standards

## Usage

```jsx
import React from "react";
import VideoBg from "reactjs-videobg";
import ogg from "./videos/Neon.ogg";
import webm from "./videos/Neon.webm";
import mp4 from "./videos/Neon.mp4";
import poster from "./img/poster.jpg";

<VideoBg poster={poster}>
  <VideoBg.Source src={ogg} type="video/ogg" />
  <VideoBg.Source src={webm} type="video/webm" />
  <VideoBg.Source src={mp4} type="video/mp4" />
</VideoBg>;
```

[**sandbox**](https://codesandbox.io/s/sharp-poitras-qdync)

## API

### `<VideoBg />`

| Prop         | Type      | Default | Required | Description                                             |
| ------------ | --------- | ------- | -------- | ------------------------------------------------------- |
| wrapperClass | `String`  | none    | no       | className name for wrapper element.                     |
| videoClass   | `String`  | none    | no       | className name for video element.                       |
| loop         | `Boolean` | `true`  | no       | Video will start over again.                            |
| autoPlay     | `Boolean` | `true`  | no       | Video will start playing as soon as it is ready.        |
| poster       | `String`  | none    | no       | The image to be shown while the videos are downloading. |
| muted        | `Boolean` | `true`  | no       | Should audio of the video be muted?                     |

### `<VideoBg.Source />`

| Prop | Type     | Default | Required | Description                      |
| ---- | -------- | ------- | -------- | -------------------------------- |
| src  | `String` | none    | yes      | static file or video file source |
| type | `String` | none    | yes      | video type                       |

### Resources

Videos: [Pixabay - gr8effect - neon-terrain-80-retro-abstract](https://pixabay.com/videos/neon-terrain-80-retro-abstract-21368/)
Photos: [Pixabay - MichaelGaida - nature-landscape-moor-high-fens](https://pixabay.com/photos/nature-landscape-moor-high-fens-4356963/)
