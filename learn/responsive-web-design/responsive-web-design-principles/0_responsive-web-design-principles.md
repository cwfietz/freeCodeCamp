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

