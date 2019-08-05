[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Build Status](https://travis-ci.org/samAbeywickrama/react-video-bg.svg?branch=master)](https://travis-ci.org/samAbeywickrama/react-video-bg)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

# react-video-bg

Easily add background videos to your webapps

## Installation

### npm

`npm i react-video-bg`

### yarn

`yarn add react-video-bg`

## Usage

```jsx
import React from "react";
import VideoBg from "react-video-bg";
import ogg from "./videos/Neon.ogg";
import webm from "./videos/Neon.webm";
import mp4 from "./videos/Neon.mp4";

<VideoBg>
  <BgVidVideoBgeo.Source src={ogg} type="video/ogg" />
  <VideoBg.Source src={webm} type="video/webm" />
  <VideoBg.Source src={mp4} type="video/mp4" />
</VideoBg>;
```

## API

### `<VideoBg />`

| Prop         | Type      | Default | Required | Description                         |
| ------------ | --------- | ------- | -------- | ----------------------------------- |
| wrapperClass | `String`  | none    | no       | className name for wrapper element. |
| videoClass   | `String`  | none    | no       | className name for video element.   |
| loop         | `Boolean` | `true`  | no       | Should video loop?                  |
| autoPlay     | `Boolean` | `true`  | no       | Should video autoplay?              |
| poster       | `String`  | none    | no       | Video Poster                        |

### `<VideoBg.Source />`

| Prop | Type     | Default | Required | Description                      |
| ---- | -------- | ------- | -------- | -------------------------------- |
| src  | `String` | none    | yes      | static file or video file source |
| type | `String` | none    | yes      | video type                       |
