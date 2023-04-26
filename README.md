# qr-component

This is the solution to "qr component" proyecto of Make It Real.

## Overview 
### The challenge

The user will se a QR code followed by a Title and a pagaraph. The entire page will be made in React suing components as modules.

### Screenshots

- On a screen of 375px:  

![SS screen 375px](https://raw.githubusercontent.com/mercuryeater/qr-component/main/ss/375px.png)

- On a screen of 1440px:

![SS screen 1440px](https://raw.githubusercontent.com/mercuryeater/qr-component/main/ss/1440px.png)

## My process
### Built with
- HTML5
- CSS
- Block Element Modifier (BEM) Notation
- Flexbox
- REACT
- Vite     
### What I learned

Second time using *REACT* and I'm feeling that it's not going to be that terrible, actually is pretty amazing how it saves you of direct manipulation of the DOM. At the same time I feel is pretty straight forward when using *Vite* because since the beggining you select the framework, the language and it feels like a breeze. 

I had never used a google font. but this time I searched, so It was my firs time using the `@import url()` filled with the api of the family that was requested, and was located in Google fonts. However in the meantime I looked and learned about the existence of `@font-face` to specify a custom font, from either a remote server or a local installed font. I tried to make it work with `@font-face` but couldn't figure it out. It will be an assignment for the next challenge.

I usually work with the developer tools of Mozilla and this time I encountered the 'error' called FOUC for Flash Of Unstyled Content, meaning that for a brief moment -less tha a second- the page appears unstyled while the script loads. I searched in stackoverflow and read a recommendation of writing a script before the end of <head> and it worked. 

I came back to the project because I wanted to make components outside the main .jsx file, I created two more functions and moved part of the html content to them, but it was not working, I was checking why and like 10 minutes later I see that I had forgot the return inside both functions, that was all.

I also had a questions regarding the reason for the code to break if the png image of the qr was not referenced correctly.

### Continued development

In the next challenge I want to use `@font-face` with a locally installed font.
Also I would like to try to use a preprocessor like `Sass` if it's possible.
### Useful resources

- **'font-face'**:

https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face

- **'box-shadow'** to show the shadow of a box and bring it to the front:

https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow

## Author
- Name - Federico Cordoba 
- Twitter - [@mercuryeater](https://twitter.com/Mercuryeater/)


