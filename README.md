# Color Scheme Generator
## Introduction
It's a website where you can choose a color and a scheme type, and it generates a palette of 5 colors based on your choice.
This website is a Solo Project of the Scrimba Frontend Course, Module 8, where they teach you how to interact with APIs.
## Details
  ### Javascript
  * When you click the "get color scheme" button the website sends a GET request to "www.thecolorapi.com" using fetch.
  * The color and scheme type chosen are used in the URL of the GET request as **query strings**.
  * The API returns 5 colors, per default, of the color scheme chosen.
  * When the request is responded to, the code accesses the 'color-info' HTML elements and changes their text content to the HEX color received from the API.
    * To make the color visible, the code directly changes the 'scheme-color-container' HTML elements background color.
    * The code also changes the 'aria-label' of the 'scheme-color-container' elements parent (button) for accessibility.
  * If you click a color, you can copy its HEX value, and a message replaces the 'color-info' text content to inform of this event.
  * When you remove the pointer from the button or change the focus to another element, the 'color-info' text content returns to normal
    * To make this, I stored the HEX color value of each button in the 'data-hex' attribute of the 'color-info' element.
    * When you remove the pointer, the code changes the 'color-info' text content to the value of its 'data-hex' attribute. 
  ### CSS
  * z-index of buttons content set to "-1" to make the button outline when focused more visible.
  * z-index of buttons set to "1" to make its content visible. (content general z-index = -1 + 1 for his container = 0).
  * z-index of buttons set to "2" then focused/hovered to prevent the outline from hiding behind the other buttons.
  * pointer-events:none set to the buttons content, to help when using event listeners.
  * grid used for the layout of everything, to make the color containers adapt to the window height.
## Preview
![color-scheme-generator](https://github.com/AlexMakowiecki/color-scheme-generator/assets/122258496/fde9c0c8-8ba2-4d66-846c-46dafc8da42b)

## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!
