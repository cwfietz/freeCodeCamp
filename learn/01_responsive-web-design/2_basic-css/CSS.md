# CSS
==============================================================================
Review of Cascading Style Sheets (CSS) in FreeCodeCamp.org

## CSS is case-sensitive.
hundreds of CSS properties

## Three ways of adding styles
1. Inline styles: HTML elements with the style attribute
2. CSS rules in style tags in an HTML document.
3. External style sheets which are referenced in the HTML documents

good practice to end inline style declarations with a ;

## Example of an inline style
<h2 style="color: blue;">CatPhotoApp</h2>

## Style block in style tags.
<style>
</style>

## Inside style elements 
### class names start with a period.

<style>
  .blue-text {
    color: blue;
  }
</style>

<h2 class="blue-text">CatPhotoApp</h2>

## HTML elements can also have an id attribute.
Example:
<h2 id="cat-photo-element">
Make id unique to each element with an id.

Inside style elements ids have a # at the beginning of their name.
Example:
<style>
#cat-photo-element {
  background-color: green;
}
</style>



## Inheritance:

body element of HTML documents

<style>
body {
  background-color: black;
}
</style>

all elements in the body will inherit the body element's styles.

### class styles will override the styles inherited from body.
Example:
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }

  .pink-text {
    color: pink
  }
</style>

<h1 class=pink-text >Hello World!</h1>

“Hello World!” shows as pink against a black background.

====
The order in the styles block determines which conflicting style overrides another.

Example: 

<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue
  }
</style>
<h1 class="blue-text pink-text">Hello World!</h1>

“Hello World!” shows as blue against a black background because .blue-text was listed second in the style block.

====
id attributes styles override class styles

Example
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
  #orange-text {
    color: orange;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>

“Hello World!” shows as orange against a black background because orange-text is  an id.


Inline styes override class styles and id styles
====

<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 style="color: white" id="orange-text" class="pink-text blue-text">Hello World!</h1>

“Hello World!” shows as white against a black background because that is the inline style for the h1 element.

====
Important overrides all other styles

Example: 
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink !important; /* <-- overrides other styles */
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>

“Hello World!” shows as pink against a black background because the pink-text color style is marked as !important.


===========
Absolute and relative units

px - pixels
em - em is based on the size of an element's font.
rem - ?



========================================

===========
color style property.

style=“color: [colour]”;

Example as an inline style
<h2 style="color: blue;">CatPhotoApp</h2>

Example as a style block. All h2 elements will be red.
<style>
  h2 {
    color: red;
  }
</style>

red, blue, 

===========
font-size

h1 {
  font-size: 30px;
}

===========
font-family

font-family: FAMILY_NAME, GENERIC_NAME;.

h2 {
  font-family: sans-serif, "Open Sans"; // quotes are needed if there is a space.
}

sans-serif, serif, monospace, Lobster

lists the fonts in the order of preference.

Google Fonts (https://fonts.google.com/) is a free library of web fonts that you can use in your CSS by referencing the font's URL.

Lobster font:
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
link goes above <style> block.

font-family: FAMILY_NAME, GENERIC_NAME;.

===========
width

<style>
  .larger-image {
    width: 500px;
  }
</style>

===========
border-color, border-width, border-style

<style>
  .thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
  }
</style>

===========
border-radius

  .thick-green-border {
    border-radius: 10px;
    border-color: green;
    border-width: 10px;
    border-style: solid;
  }

or 

  .smaller-image {
    border-radius: 10px;
    width: 100px;
  }

or 

  .smaller-image {
    border-radius: 10px;
    width: 50%; <!— for circular images —>
  }

==========
background-color

  .silver-background {
    background-color: silver
  }


==========
padding

An element's padding controls the amount of space between the element's content and its border.

Example:
  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

CSS allows you to control the padding of all four individual sides of an element with the
 padding-top,
 padding-right, 
 padding-bottom, and
 padding-left
 properties.

-OR-
padding: 10px 20px 10px 20px;
These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific padding instructions.

==========
margin

An element's margin controls the amount of space between an element's border and surrounding elements.

Example:
  .blue-box {
    background-color: blue;
    margin: 10px;
  }

If you set an element's margin to a negative value, the element will grow larger.

CSS allows you to control the margin of all four individual sides of an element with the
 margin-top,
 margin-right,
 margin-bottom, and
 margin-left
 properties.

-OR-
margin: 10px 20px 10px 20px;
These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific margin instructions.

==========
Attribute Selectors
[attr=value]

Example:
[type='radio'] {
  margin: 20px 0px 20px 0px;
}

All elements with type=“radio” will have these margins.

==========
[Hex](https://en.wikipedia.org/wiki/Hexadecimal)
symbols for digits 0-9,A-F or 0-F for zero to sixteen.

===========
Hex Code for Specific Colors

#RRGGBB
First two digits for read, second pair for green, last two digits for blue
0 weaker, F stronger

    <style>
      body {
          /* background-color: black; */
          background-color: #000000;
      }
      .red-text {
        color: #FF0000;
      }

      .green-text {
          color: #00FF00;
      }

      .dodger-blue-text {
          color: #1E90FF;
      }

      .orange-text {
          color: #FFA500;
      }
    </style>

    <h1 class="red-text">I am red!</h1>

    <h1 class="green-text">I am green!</h1>

    <h1 class="dodger-blue-text">I am dodger blue!</h1>

    <h1 class="orange-text">I am orange!</h1>


===========
Short Hex Code

    <style>
        .red-text {
            color: #F00;
        }

        .fuchsia-text {
            color: #F0F;
        }

        .cyan-text {
            color: #0FF;
        }

        .green-text {
            color: #0F0;
        }
    </style>

    <h1 class="red-text">I am red!</h1>

    <h1 class="fuchsia-text">I am fuchsia!</h1>

    <h1 class="cyan-text">I am cyan!</h1>

    <h1 class="green-text">I am green!</h1><!-- page contents -->

===========
RGB

/* background-color: #F00; */
background-color: rgb(0, 0, 0)
values range from 0 to 255 to represent the same values as hex but in base 10 instead.

<style>
  .red-text {
    color: rgb(255, 0, 0);
  }
  .orchid-text {
    color: rgb(218, 112, 214);
  }
  .sienna-text {
    color: rgb(160, 82, 45);
  }
  .blue-text {
    color: rgb(0, 0, 255);
  }
</style>

===========
CSS Variables
A double dash, "--" is used to indicate a CSS variable

--penguin-skin: gray;
--penguin-belly: white;
--penguin-beak: orange;

To use the value of the variable, enclose the variable in var()
To add a value for the client to display is the variable is not valid, include it after the name of the variable.
E.g.
...
background: var(--penguin-skin, gray);
...
background: var(--penguin-belly, white);
...
background: var(--penguin-beak, orange);
...

Some browsers or too old to work with variables. You can set fallbacks for them. For example,
...
background: gray;
background: var(--penguin-skin, gray);
...

===========
Inherit CSS Variables
<style>
  :root {
    --penguin-belly: pink;
  }
...
The other elements that inherit from :root can use this --penguin-belly variable.

<style>
  :root {
    --penguin-skin: gray;
    --penguin-belly: pink;
    --penguin-beak: orange;
  }

  body {
    background: var(--penguin-belly, #c6faf1);
  }

  .penguin {
    /* Only change code below this line */
    --penguin-belly: white;

Within the .penguin class the --penguin-belly variable will interpreted as while while outside of this class the --penguin-belly variable will be pink.

===========
Use a media query to change a variable
E.g.
<style>
  :root {
    --penguin-size: 300px;
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
  }

  @media (max-width: 350px) {
    :root {
      --penguin-size: 200px; /* redefines size */
      --penguin-skin: black; /* redefines skin */
    }
  }



