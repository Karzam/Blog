---
title: Some useful ES6 tricks
date: 2020-03-12
tags: ['tech']
description: "When it comes to writing Javascript, there are some tricks very useful to make your code simple and easily readable. I wrote this post to talk about some of them, probably the ones I use the most in my job and personal projects...."
---

When it comes to writing Javascript, there are some tricks very useful to make your code simple and easily readable.  
I wrote this post to talk about some of them, probably the ones I use the most in my job and personal projects.

### Conditionally add properties to an object

If you want to declare an object with some properties added only if a condition is truthy, there is a useful writing for this:

```js
const hasWings = true

const animals = {
  elephant: '🐘',
  pig: '🐷',
  ...hasWings && ({ bat: '🦇' }),
}
// Returns {elephant: "🐘", pig: "🐷", bat: "🦇"}
```

Instead of assigning properties after the constant declaration, we can declare everything at once.

### Concatenating objects with spread operator

While we are talking about the spread operator, it also allows another cool thing: concatenating objects.

```js
const withTails = { kangaroo: '🦘', horse: '🐎' }

const withWings = { bird: '🐦', bat: '🦇' }

const animals = {
  ...withTails,
  ...withWings
}
// Returns {kangaroo: "🦘", horse: "🐎", bird: "🐦", bat: "🦇"}
```

When coupling it with the previous trick, it's kind of useful.
You can also merge arrays together with the same spread system:

```js
const withTails = ['🦘', '🐎']

const withWings = ['🐦', '🦇']

const animals = [
  ...withTails,
  ...withWings
]
// Returns ["🦘", "🐎", "🐦", "🦇"]
```

### Short circuit evaluation with || operator (and nullish coalescing)

When you need to declare a variable with a value, but assign another value if the first one is falsy, short circuit evaluation is perfect:

```js
const dinosaur = null

const animal = dinosaur || '🐦'
// Returns '🐦'
```

Javascript is parsing values from left to right, and assign the first value that is not falsy.

*Note: using a short-circuit evaluation can be dangerous if the first value is 0 or an empty string '', as they are considered as falsy values.*

Considering this, it's a not a good idea to use it on function parameters... Better use the default parameter value:

```js
const getAnimal = (animal = '🐦') => animal

getAnimal()
// Returns 🐦
```

By the way, there is a new feature currently in validation by the ECMAScript committee, the nullish coalescing:

```js
const animals = { bat: '🦇' }

const animal = animals.kangaroo ?? '🐘'
// Returns '🐘'
```

Unlike || operator that checks if value is truthy, this one returns second value only if the first one is null or undefined:

```js
const animals = { bat: '' }

const firstAnimal = animals.bat || '🐘'
// Returns '🐘'

const secondAnimal = animals.bat ?? '🐘'
// Returns ''
```

Thank you for reading this!

