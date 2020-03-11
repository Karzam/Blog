---
title: "Making a game with Javascript: Part 1"
date: 2020-03-09
tags: ['tech', 'tutorial']
description: "I wrote a shoot'em up tutorial few years ago that got published on Medium and Hackernoon, and got read by lot of people, but something itches a lot : it's old now!..."
---

![alt text](https://hackernoon.com/hn-images/1*d6LciqpRc7XxOV_kCOU_NQ.png "The final result")

Hi everyone, I wrote a shoot'em up tutorial few years ago that got published on Medium and Hackernoon, and got read by lot of people,
but something itches a lot : it's old now! I was a very young developer at that time, and I just wanted to rewrite it with a better code quality, and new development tools (for example, using a webpack dev-server instead of Mamp).

It's was also not completely finished, as there were no enemies (only a flying / firing ship between moving clouds) so this time I will go much further in the gameplay.

The complete source code of this tutorial part can be found here:  
https://github.com/Karzam/Spaceship_Tutorial_Part_1

### Introduction

I will not explain all the functioning and concepts behind each tool, but I will try to be as clear as possible, so 
most of people can understand what's going on. This tutorial is mostly intended to novice developers, and people with code skills who just want to discover Pixi.js. I won't go too far in the abstractions and implementations, just keeping something readable and simple.

I hope that everyone will be able to reproduce and understand it. Let's start with the setup!

### The setup

The starter project can be cloned / downloaded from Github:  
https://github.com/Karzam/Spaceship_Tutorial_Starter_Project  

You also need Node.js to be installed:  
https://nodejs.org/

Once it's done, on your terminal / command line, move on the root folder and run:

```bash
npm install
```

...so all the needed packages will be installed in your local project. Webpack is basically a bundler that compiles your files, manage your code dependencies, and also allows you to run a local web server that reloads automatically whenever you update and save a file in your editor.


Now, you can run this command to test the setup:

```bash
npm run start
```

The web server will start, and if you visit http://localhost:3000/ in your browser, you will see a black screen.
If you open the devtools console, there will be a pink message like `PixiJS 5.2.1 - ✰ WebGL 2 ✰`, meaning that Pixi is running fine.

### Clouds everywhere

Now that everything is setup, we can finally start working on the game. In this part, our objective is having a blue sky, with moving clouds (so we'll feel like we are moving fast).

If you look at `index.js` (the file where everything starts) you will see a new application creation, specifying a width and height for our game, and a resolution. The `stage` constant is basically a container displaying objects, it's a "frame" where the game lives.
The `init` function is called when all the needed assets have been loaded, and the `loop` one is called every frame to re-render the stage, with all the objects moving, etc.

First, what we need is to update the backgroud color of our stage. There is a property on `app.renderer` that allows us to set it :

```js
function init()
{
    // Update the background color to blue
    app.renderer.backgroundColor = 0x22A7F0;

    // Render game container in the Pixi app
    app.renderer.render(stage);

    // Start game loop
    loop();
}
```

This background is kind of boring, isn't it? Let's add some floating clouds.
First, we need a `CloudManager.js` class file in the `src` folder, to create and manage their move.
This ES6 class constructor is where we need to make the clouds pop:

```js
import { Loader, Sprite } from 'pixi.js'

export default class CloudManager
{
  /**
   * Init the clouds array rendered on the stage
   */
  constructor(stage) {
    // The array is storing 8 clouds
    this.clouds = Array(8).fill().map(() => {
      // Create cloud instance
      const cloud = new Sprite();

      // This is where we will set random position, texture and scale
      this.reset(cloud);

      // Add cloud to container stage
      stage.addChild(cloud);
      
      return cloud;
    });
  }

  /**
   * Randomly compute cloud entity position, scale and texture
   */
  reset(element) {
    const { innerWidth, innerHeight } = window
    
    // Select texture randomly
    const texture = Math.random() > 0.5 ? "cloud_1" : "cloud_2";

    // Set texture, anchor and position
    element.texture = Loader.shared.resources["assets/" + texture + ".png"].texture;
    element.anchor.set(0.5, 0.5);
    element.position.set(innerWidth + (innerWidth * Math.random(), innerHeight * Math.random());

    // Diversify clouds size
    const scale = Math.random() * 1 + 0.1;
    element.scale.set(scale, scale);
  }
}
```

We fill an array with cloud entities : for each cloud created (here we have 8 at the same time) we create a new sprite, we reset the cloud with new random attributes, and then it's ready to be added to the stage.

The reset function comments are pretty explicit: 
* First we select a random texture between two different png images (`Math.random()` returns a number between 0 and 1)
* The position point of this sprite is going to be its top left corner, so we set its anchor point to the middle.
* We need to display the cloud beyond the right border of the screen, so it can move to the left through the screen without seeing it appearing : `width` is the screen width, and we shift it by a value between 0 and itself, meanwhile the y position will be located between the screen bottom and top.
* The scale is basically set between 0.1 and 1, so we get different cloud sizes.

Why creating the clouds and then not destroying them to create new ones? Because it's better in terms of performance to keep the same objects and update their properties, instead of creating and destroying new entities every time.

All the computed attributes are put inside a function, because we need it for the `update` loop that is just below:

```js
/**
 * Move clouds and reset position when needed
 */
update() {
  this.clouds.forEach(element => {
    element.position.x -= 4;

    // If beyond the left screen border, reset position 
    if (element.position.x < -element.width) {
      this.reset(element);
    }
  });
}
```

For each cloud entity, we move their position and if they go beyond the left border of the screen, and are out of the visible range,
we reset them with new random attributes. That's all for the `CloudManager` class!

Next step: to import the cloud sprites, and instantiate the game's CloudManager in the main file.

You can download the 2 textures in the links just below, and them to your `build/assets` folder (image previews are invisible on Github because they are white):

https://github.com/Karzam/Spaceship_Tutorial_Part_1/blob/master/build/assets/cloud_1.png
https://github.com/Karzam/Spaceship_Tutorial_Part_1/blob/master/build/assets/cloud_2.png

Then, we have to tell Pixi to load these images before initializing the game. So update the `loader.add` method in `index.js` with the texture paths:

```js
loader.add([
  "assets/cloud_1.png",
  "assets/cloud_2.png"
]).load(init);
```

...and import `CloudManager.js` file at the top of the file:

```js
import CloudManager from './CloudManager';
```

Now that it's done, we can simply create the `CloudManager` instance in this same file, by adding an empty `let` variable before the `init` function:

```js
// Cloud manager entity
let cloudManager;
```

Here we can't declare this variable in the `init` function scope as it will be used in both `init` and update, so we can assign the instance in `init` to create the clouds, and update it in the game loop:

```js
// First function called after loading assets is done
function init()
{
  app.renderer.backgroundColor = 0x22A7F0;

  // Init cloud manager
  cloudManager = new CloudManager(stage);

  app.renderer.render(stage);

  loop();
}

// Looping function, called every frame
function loop()
{
  // Call update method of CloudManager to make them move
  cloudManager.update();

  requestAnimationFrame(loop);

  app.renderer.render(stage);
}
```

Now you should get something like this:

![alt text](https://hackernoon.com/hn-images/1*7fHsC9aCJwOe3f4WBjAbBA.gif "Moving clouds")   

Congrats! Of course, there are lot of improvements we could make here, like varying clouds speed or make the background tint change over time, but the essential is done.

Remember that you can find the source code of this tutorial here:  
https://github.com/Karzam/Spaceship_Tutorial_Part_1

And if you have any questions, you can reach me at `bapmenard@gmail.com`

In the next part, we'll add the player spaceship, making it move and shoot.

Thanks for reading!  



