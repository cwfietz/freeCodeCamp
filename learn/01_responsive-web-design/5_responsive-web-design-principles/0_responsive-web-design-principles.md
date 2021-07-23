# Responsive Web Design Principles

## Media Query (@media)
e.g.
<style>
  p {
    font-size: 20px;
  }
  @media (max-height: 800px) {  /* max-height, max-width, etc. */
    p {
      font-size: 10px;
    }
  }
</style>

## Responsive image or how to keep an image's aspect ratio and not be bigger than the browser window
e.g.
  .responsive-img  {
    max-width: 100%;
    display: block;
    height: auto;
  }
  <img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg"
    alt="freeCodeCamp stickers set"
    class="responsive-img" />

## High-Resolution Displays
The simplest way to make your images properly appear on High-Resolution Displays, such as the MacBook Pros "retina display" is to define their width and height values as only half of what the original file is. Here is an example of an image that is only using half of the original height and width:
e.g.
<style>
  img { height: 250px; width: 250px; }
</style>
<img src="coolPic500x500" alt="A most excellent picture">

## Viewport units
you can use viewport units for responsive typography. Viewport units, like percentages, are relative units, but they are based off different items. Viewport units are relative to the viewport dimensions (width or height) of a device, and percentages are relative to the size of the parent container element.

The four different viewport units are:

    vw (viewport width): 10vw would be 10% of the viewport's width.
    vh (viewport height): 3vh would be 3% of the viewport's height.
    vmin (viewport minimum): 70vmin would be 70% of the viewport's smaller dimension (height or width).
    vmax (viewport maximum): 100vmax would be 100% of the viewport's bigger dimension (height or width).

Here is an example that sets a body tag to 30% of the viewport's width.
e.g.
  body { width: 30vw; }
e.g.
h2 {
  width: 80vw;
}
p {
  width: 75vmin;
}