---
path: "/flexbox/"
date: "2018-07-31"
title: "Flexbox"
tags: ['css']
---

Flexbox is short for flexible box module. In terms familiar to those with previous CSS knowledge this means you don't have to import an external framework – like Bootstrap's grid – for regular layouts. And no more floats. It also adds the much awaited vertical alignment (align-items:center;) and equal box height (something which required required 3rd party Javascript library like [Masonry](https://masonry.desandro.com/)).

I don't see it use that much even though it is now widely [supported](https://caniuse.com/#search=flexbox). Perhaps because it comes of as abstract and non-intuitive, specially if you have been used to using traditional 3rd party libraries for hacking CSS layout. Truth is these layout feature have been missing for ages in CSS. 

## Align-content, align-items and align-self

Align-content aligns multiple lines of content in the container while align-items aligns per line of content. Both arranges content vertically along the y-axis. [Here](https://stackoverflow.com/questions/27539262/whats-the-difference-between-align-content-and-align-items) is a Stackoverflow post detailing it. Align-self merely aligns a single item on a line, an align-items for 1 item.

```javascript
  align-content = [
    'center',
    'start',
    'end',
    'flex-start',
    'flex-end',
    'normal',
    'baseline',
    'first baseline',
    'last baseline',
    'space-between',
    'space-around',
    'space-evenly',
    'stretch',
    'safe center',
    'unsafe center',
    'inherit',
    'initial',
    'unset',
  ];
```

[Align-content specifications](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).

```javascript
  align-items = align-self = [
    'normal',
    'stretch',
    'center',
    'start',
    'end',
    'flex-start',
    'flex-end',
    'self-start',
    'self-end',
    'baseline',
    'first baseline',
    'last baseline',
    'safe center',
    'unsafe center',
    'inherit',
    'initial',
    'unset',
  ];
```

[Align-content specifications](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) and [align-self specifications](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self).

## Justify-content

Justify-content aligns content (usually) along x-axis of the container, the horizontal axis. Using `justify-content: space-between;` on a container and `flex: 0 0 31%;` on the 3 items gives you 3 boxes with similar width and space between them:

<div style="justify-content: space-between; display:flex;">
  <p style="flex: 0 0 31%; background: wheat;">1. item <br /> and with multiple lines…</p>
  <p style="flex: 0 0 31%; background: wheat;">2. item</p>
  <p style="flex: 0 0 31%; background: wheat;">3. item</p>
</div>


```html
  <div style="justify-content: space-between; display:flex;">
    <p style="flex: 0 0 31%; background: wheat;">1. item <br /> but with multiple lines…</p>
    <p style="flex: 0 0 31%; background: wheat;">2. item</p>
    <p style="flex: 0 0 31%; background: wheat;">3. item</p>
  </div>
```

```javascript
  justify-content = [
    'center',
    'start',
    'end',
    'flex-start',
    'flex-end',
    'normal',
    'baseline',
    'first baseline',
    'last baseline',
    'space-between',
    'space-around',
    'space-evenly',
    'stretch',
    'safe center',
    'unsafe center',
    'inherit',
    'initial',
    'unset',
  ];
```

[Justify-content specifications](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).

## place-content

Place-content is a shortcut for `place-content: align-content justify-content;`.

```javascript
  place-content = [
    'center start',
    'start center',
    'end left',
    'flex-start center',
    'flex-end center',
    'baseline center',
    'first baseline space-evenly',
    'last baseline right',
    'space-between space-evenly',
    'space-around space-evenly',
    'space-evenly stretch',
    'stretch space-evenly',
    'inherit',
    'initial',
    'unset',
  ];
```

## Flex: flex-grow, flex-shrink and flex-basis

Flex is actual a shortcut for 3 other properties; flex-grow, flex-shrink and flex-basis. When you only pass a number to flex, `flex: 1;` or `flex: 2;`, it is interpreted as `flex-grow: 1;` and `flex-grow: 2;` respectably. This means that 3 flex items that each have `flex: 1;` will have the same width. Change one to `flex: 2;` will result in one item becoming twice as wide as the others.

If a valid width is passed to `flex: 50px;` then it is interpreted as `flex-basis: 50px;`, which means the width 50px wide (because accounting for space between items, margin and padding).

If you have 2 values, `flex: 1 1;`, the second is the flex-shrink factor which essentially is the reverse of flex-grow. It scales the item by the factor giving in `flex-grow: 2;`. It is detailed [here](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink).

Flex with 3 values is shortcut for: `flex: flex-grow flex-shrink flex-basis;`. I tend to think of these properties as:

```javascript
  flex-grow: scale factor (1 is default)
  flex-shrink: shrink factor (1 is default)
  flex-basis: relative width (auto is default)
```

[Flex specifications](https://developer.mozilla.org/en-US/docs/Web/CSS/flex).

## Flex-direction

Flex-direction allows you to either stack items on top of each other like columns or next to each other like rows. It can be useful for stacking elements for mobile devices.

```javascript
  flex-direction = [
    'row',
    'row-reverse',
    'column',
    'column-reverse',
    'inherit',
    'initial',
    'unset',
  ];
```

[Flex-direction specifications](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction).

## flex-wrap

Wraps items within a container or allows them container to overflow horizontally.

```javascript
  flex-wrap = [
    'nowrap',
    'wrap',
    'wrap-reverse',
    'inherit',
    'initial',
    'unset',
  ];
```

[Flex-wrap specification](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap).

Useful links:

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Flexbox - w3schools.com](https://www.w3schools.com/css/css3_flexbox.asp)