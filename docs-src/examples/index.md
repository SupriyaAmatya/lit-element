---
layout: example.11ty.cjs
title: <app-element> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
---

<style>
  app-element p {
    border: solid 1px blue;
    padding: 8px;
  }
</style>
<app-element>
  <p>This is child content</p>
</app-element>

<h3>CSS</h3>

```css
  p {
    border: solid 1px blue;
    padding: 8px;
  }
```

<h3>HTML</h3>

```html
<app-element>
  <p>This is child content</p>
</app-element>
```
