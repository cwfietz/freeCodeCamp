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

