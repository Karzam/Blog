---
title: Using Vue.js everyday
date: 2019-11-27
tags: ['tech']
description: "Vue.js is one of the most trending frameworks. I've been using it everyday for more than one year, and it feels great. Here are some of the things I like the most with it."
---

Vue.js is one of the most trending frameworks. I've been using it for more than one year in my current job, and it feels great. I used to work with React & React Native, and I wanted to share my point of view and some of the things I like the most with it, compared to other frameworks, and even globally.  

### The template / script separation

I think that having distinctive template & script is really a cool way of handling big files, compared to having a mix of everything.
When I previously worked with React and JSX, I found it quite illegible when I had to construct big views.  

### The directives

Making a conditional render is really clear and simple with Vue, and I don't regret having to use the `&&` and ternary operators.
It's personal, but I prefer writing this :

```html
<Sheep v-if="hasWool" />
<Cow v-else />
```

...than this :

```jsx
{ hasWool ? <Sheep /> : <Cow/> }
```

Also, you can setup your own directives, which can be very useful.  

### Two-way data binding

I think I never had any problems who questioned two-way data bindings, and the ability to couple data, props and watchers can solve
many use-cases. Also, using the `v-model` directive is very clean and handy, as you don't have to define a prop and an associated listener when most of the time what you want is simply your child component to update its parent value :

```html
<CookieBox v-model="cookies" />
<!-- instead of: -->
<CookieBox :value="cookies" @update="newCookies => cookies = newCookies" />  
```  

### The mixins

Mixins are shareable objects containing datas and methods, putting them in common with the component that imports it.
Of course, they are very useful when needing common and reusable piece of logic. Mixins have their own lifecycle hooks
(created, destroyed, ...) called before the component ones.  

### Community and popularity

Vue allows us to write light code, and its flexibility is really pleasant. There are so many companies using it right now, and so many job offers,
that it became a solid alternative to Angular and React. I hope Vue's community will continue to grow up in 2020 and beyond.

