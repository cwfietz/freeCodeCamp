
# Applied Visual Design

## Tags

### Strong (Bold)
e.g. at <strong>Stanford University</strong>.
- the browser applies the CSS of font-weight: bold; to the element.

### Underline
e.g. <u>Ph.D. students</u>
-  the browser applies the CSS of text-decoration: underline; to the element.

### Emphasis (Italics)
e.g. <em>Google was founded by Larry Page and Sergey Brin</em>
- the browser applies the CSS of font-style: italic; to the element.

### Strikethrough
e.g. <s>Google</s> Alphabet
- the browser applies the CSS of text-decoration: line-through; to the element.

### Horizontal line
e.g. <hr>
- self closing


## Properties
### text-align
text-align: justify;
text-align: center;
text-align: right;
text-align: left;

### Font size
e.g. font-size: 27px;
- or -
for multiple elements or tags:
    h1 { font-size: 68px; }
    h2 { font-size: 52px; }
    h3 { font-size: 40px; }
    h4 { font-size: 32px; }
    h5 { font-size: 21px; }
    h6 { font-size: 14px; }
- or -
for any element containing text.
e.g.
    p { font-size: 16px; }

### Line height
e.g. line-height: 25px;
    - change the height of each line in a block of text. As the name suggests, it changes the amount of vertical space that each line of text gets.

### Font Weight
e.g. font-weight: 800;
    - The font-weight property sets how thick or thin characters are in a section of text.

### text-transform
e.g. text-transform: uppercase;

    Value	    | Result
    ----------- | ----------------
    lowercase	| "transform me"
    uppercase	| "TRANSFORM ME"
    capitalize  | "Transform Me"
    initial	    | Use the default value
    inherit	    | Use the text-transform value from the parent element
    none	    | Default: Use the original text

### Width
width:  a number and units. 
    units: px, em, or percentage

### Height
height: a number and units. 
    units: px, em, or percentage e.g. height: 25px;

### Background Colour
e.g. background-color: rgba(45, 45, 45, 0.1);
    - rgba(read, green, blue, alpha(opacity))
    - could use another means of describing colour like rgb() or hex()

#### background: linear-gradient
e.g. background: linear-gradient(35deg, #CCFFFF, #FFCCCC);
    - ange of direction of gradient. 0deg is bottom to top.
    - can have list of more than two colors.

#### background: repeating-linear-gradient
e.g. background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
    - there are many different parameters for this function
    - here, the 0px to 40px is one band while the 40px to 80px is the next band. the colors at the beginning and ends of the bands are the start and end colors for the repeating gradients.

#### background: url
e.g.
    body {
      background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png");
    }

### Box-Shadow
e.g. box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    - The box-shadow property takes values for
        - offset-x (how far to push the shadow horizontally from the element),
        - offset-y (how far to push the shadow vertically from the element),
        - blur-radius,
        - spread-radius and
        - color, in that order.
    - The blur-radius and spread-radius values are optional. 
    - Multiple box-shadows can be created by using commas to separate properties of each box-shadow element.

### Opacity
e.g. opacity: 0.7;
    - 0 is transparent while 1 is opaque.

e.g. with animation
#ball {
  width: 70px;
  height: 70px;
  margin: 50px auto;
  position: fixed;
  left: 20%;
  border-radius: 50%;
  background: linear-gradient(35deg, #ccffff, #ffcccc);
  animation-name: fade;
  animation-duration: 3s;
}
@keyframes fade {
  50% {
    left: 60%;
    opacity: 0.1;
  }
}

### Transform size
e.g. transform: scale(1.5);

### Transform skew
e.g.
transform: skewX(24deg);
transform: skewY(-10deg);  
transform: skewX(24deg, 10deg);
    - skews the selected element along its axises by the given degrees.

## Position:

### Relative position:
When the position of an element is set to relative, it allows you to specify how CSS should move it relative to its current position in the normal flow of the page. It pairs with the CSS offset properties of left or right, and top or bottom. These say how many pixels, percentages, or ems to move the item away from where it is normally positioned. 
e.g. h2 {
            position: relative;
            top: 15px
        }
e.g. h2 {
            position: relative;
            left: 15px;
            bottom: 10px;
        }

### Absolute position:
e.g. 
#searchbar {
    position: absolute;
    top: 50px;
    right: 50px;
}
section {
    position: relative;
}
locks the #Searchbar to being 50px x 50 px to the bottom and left of its parent, section. Be sure to assign a position to the parent otherwise the browser will read all they way up the hierarchy until it reaches the <body> tag.

### Fixed position:
a type of absolute positioning that locks an element relative to the browser window. Similar to absolute positioning, it's used with the CSS offset properties and also removes the element from the normal flow of the document. Other items no longer "realize" where it is positioned, which may require some layout adjustments elsewhere.

One key difference between the fixed and absolute positions is that an element with a fixed position won't move when the user scrolls.

e.g.
#navbar {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: #767676;
}

### Float
Floating elements are removed from the normal flow of a document and pushed to either the left or right of their containing parent element. It's commonly used with the width property to specify how much horizontal space the floated element requires.
e.g.
#left {
    float: left;
    width: 50%;
}
#right {
    float: right;
    width: 40%;
}

### z-index
When elements are positioned to overlap (i.e. using position: absolute | relative | fixed | sticky), the element coming later in the HTML markup will, by default, appear on the top of the other elements. However, the z-index property can specify the order of how elements are stacked on top of one another. It must be an integer (i.e. a whole number and not a decimal), and higher values for the z-index property of an element move it higher in the stack than those with lower values.
e.g.
.first {
    background-color: red;
    position: absolute;
    z-index: 2;   <!-- will be in front of .second -->
}
.second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
}

### margin - to centre a block element
One way to center a block element horizontally is to set its margin to a value of auto. 
This method works for images, too. Images are inline elements by default, but can be changed to block elements when you set the display property to block.
e.g.
div {
    background-color: blue;
    height: 100px;
    width: 100px;
    margin: auto;
}


## Pseudo-classes:
A pseudo-class is a keyword that can be added to selectors, in order to select a specific state of the element.

For example, the styling of an anchor tag can be changed for its hover state using the :hover pseudo-class selector. Here's the CSS to change the color of the anchor tag to red during its hover state:

### :hover pseudo-class 
e.g.
a {
    color: #000;
}
a:hover {
    color: blue;
}

e.g.
div {
  width: 70%;
  height: 100px;
  margin:  50px auto;
  background: linear-gradient(
    53deg,
    #ccfffc,
    #ffcccf
  );
}
div:hover {
    transform: scale(1.1);
}

e.g.
button:hover {    
  animation-name: background-color;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
}
@keyframes background-color {
  100% {
    background-color: #4791d0;
  }
}

## Pseudo-elements
the ::before and ::after pseudo-elements. These pseudo-elements are used to add something before or after a selected element. In the following example, a ::before pseudo-element is used to add a rectangle to an element with the class heart:

.heart::before {
  content: "";
  background-color: yellow;
  border-radius: 25%;
  position: absolute;
  height: 50px;
  width: 70px;
  top: -50px;
  left: 5px;
}

For the ::before and ::after pseudo-elements to function properly, they must have a defined content property. This property is usually used to add things like a photo or text to the selected element. When the ::before and ::after pseudo-elements are used to make shapes, the content property is still required, but it's set to an empty string. In the above example, the element with the class of heart has a ::before pseudo-element that produces a yellow rectangle with height and width of 50px and 70px, respectively. This rectangle has round corners due to its 25% border-radius and is positioned absolutely at 5px from the left and 50px above the top of the element.

e.g.
<style>
        .heart {
            position: absolute;
            margin: auto;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: pink;
            height: 50px;
            width: 50px;
            transform: rotate(-45deg);
        }

        .heart::after {
            background-color: pink;
            content: "";
            border-radius: 50%;
            position: absolute;
            width: 50px;
            height: 50px;
            top: 0px;
            left: 25px;
        }

        .heart::before {
            content: "";
            background-color: pink;
            border-radius: 50%;
            position: absolute;
            width: 50px;
            height: 50px;
            top: -25px;
            left: 0px;
        }
    </style>
</head>

<body>
    <div class="heart"></div>
... makes a pink heart.

## Colour
Color theory and its impact on design is a deep topic and only the basics are covered in the following challenges. On a website, color can draw attention to content, evoke emotions, or create visual harmony. Using different combinations of colors can really change the look of a website, and a lot of thought can go into picking a color palette that works with your content.

### Complementary colors
The color wheel is a useful tool to visualize how colors relate to each other - it's a circle where similar hues are neighbors and different hues are farther apart. When two colors are opposite each other on the wheel, they are called complementary colors. They have the characteristic that if they are combined, they "cancel" each other out and create a gray color. However, when placed side-by-side, these colors appear more vibrant and produce a strong visual contrast.

Some examples of complementary colors with their hex codes are:

    red (#FF0000) and cyan (#00FFFF)
    green (#00FF00) and magenta (#FF00FF)
    blue (#0000FF) and yellow (#FFFF00)

This is different than the outdated RYB color model that many of us were taught in school, which has different primary and complementary colors. Modern color theory uses the additive RGB model (like on a computer screen) and the subtractive CMY(K) model (like in printing). [For more information on this complex subject](https://en.wikipedia.org/wiki/Color_model).

There are many color picking tools available online that have an option to find the complement of a color.

Note: Using color can be a powerful way to add visual interest to a page. However, color alone should not be used as the only way to convey important information because users with visual impairments may not understand that content. This issue will be covered in more detail in the Applied Accessibility challenges.
e.g.
    <style>
        body {
            background-color: #FFFFFF;
        }

        .blue {
            background-color: #0000FF;
        }

        .yellow {
            background-color: #FFFF00;
        }

        div {
            display: inline-block;
            height: 100px;
            width: 100px;
        }
    </style>
</head>

<body>
    <!-- page contents -->
    <div class="blue"></div>
    <div class="yellow"></div>


### Tertiary colours
Computer monitors and device screens create different colors by combining amounts of red, green, and blue light. This is known as the RGB additive color model in modern color theory. Red (R), green (G), and blue (B) are called primary colors. Mixing two primary colors creates the secondary colors cyan (G + B), magenta (R + B) and yellow (R + G). You saw these colors in the Complementary Colors challenge. These secondary colors happen to be the complement to the primary color not used in their creation, and are opposite to that primary color on the color wheel. For example, magenta is made with red and blue, and is the complement to green.

Tertiary colors are the result of combining a primary color with one of its secondary color neighbors. For example, within the RGB color model, red (primary) and yellow (secondary) make orange (tertiary). This adds six more colors to a simple color wheel for a total of twelve.

There are various methods of selecting different colors that result in a harmonious combination in design. One example that can use tertiary colors is called the split-complementary color scheme. This scheme starts with a base color, then pairs it with the two colors that are adjacent to its complement. The three colors provide strong visual contrast in a design, but are more subtle than using two complementary colors.

Here are three colors created using the split-complement scheme:
Color       |   Hex Code
orange      |   #FF7F00
cyan        |   #00FFFF
raspberry   |   #FF007F

### Hue
Colors have several characteristics including hue, saturation, and lightness. CSS3 introduced the hsl() property as an alternative way to pick a color by directly stating these characteristics.

Hue is what people generally think of as 'color'. If you picture a spectrum of colors starting with red on the left, moving through green in the middle, and blue on right, the hue is where a color fits along this line. In hsl(), hue uses a color wheel concept instead of the spectrum, where the angle of the color on the circle is given as a value between 0 and 360.

Saturation is the amount of gray in a color. A fully saturated color has no gray in it, and a minimally saturated color is almost completely gray. This is given as a percentage with 100% being fully saturated.

Lightness is the amount of white or black in a color. A percentage is given ranging from 0% (black) to 100% (white), where 50% is the normal color.

Here are a few examples of using hsl() with fully-saturated, normal lightness colors:

Colour       |   HSL
---------------------------
red	        |   hsl(0, 100%, 50%)
yellow	    |   hsl(60, 100%, 50%)
green	    |   hsl(120, 100%, 50%)
cyan	    |   hsl(180, 100%, 50%)
blue	    |   hsl(240, 100%, 50%)
magenta	    |   hsl(300, 100%, 50%)


### Tone
The hsl() option in CSS also makes it easy to adjust the tone of a color. Mixing white with a pure hue creates a tint of that color, and adding black will make a shade. Alternatively, a tone is produced by adding gray or by both tinting and shading. Recall that the 's' and 'l' of hsl() stand for saturation and lightness, respectively. The saturation percent changes the amount of gray and the lightness percent determines how much white or black is in the color. This is useful when you have a base hue you like, but need different variations of it.

All elements have a default background-color of transparent. 

hsl - hue, saturation, lightness
saturation - amount of grey
lightness - amount of black or white

## Graphics 
 - By manipulating different selectors and properties, you can make interesting shapes.
 e.g.
 <style>
    .center {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100px;
        height: 100px;
        background-color: transparent;
        border-radius: 50%;
        box-shadow: 25px 10px 0 0 blue;
      }
    </style>
</head>
<body>
    <!-- page contents -->
    <div class="center"></div>
... makes a blue crescent moon shape.

## Animation
The animation properties control how the animation should behave and the @keyframes rule controls what happens during that animation. There are eight animation properties in total. This challenge will keep it simple and cover the two most important ones first:

animation-name sets the name of the animation, which is later used by @keyframes to tell CSS which rules go with which animations.

animation-duration sets the length of time for the animation.

@keyframes is how to specify exactly what happens within the animation over the duration. This is done by giving CSS properties for specific "frames" during the animation, with percentages ranging from 0% to 100%. If you compare this to a movie, the CSS properties for 0% is how the element displays in the opening scene. The CSS properties for 100% is how the element appears at the end, right before the credits roll. Then CSS applies the magic to transition the element over the given duration to act out the scene.
e.g.
#rect {
  animation-name: rainbow;
  animation-duration: 4s;
}  

@keyframes rainbow {
  0% {
    background-color: blue;
  }
  50% {
    background-color: green;
  }
  100% {
    background-color: yellow;
  }
}

e.g. diagonal motion and colour change
<style>
      div {
        height: 40px;
        width: 70%;
        background: black;
        margin: 50px auto;
        border-radius: 5px;
        position: relative;
      }

      #rect {
        animation-name: rainbow;
        animation-duration: 4s;
        animation-fill-mode: forwards;
      }

      @keyframes rainbow {
        0% {
          background-color: blue;
          top: 0px;
          left: 0px;
        }
        50% {
          background-color: green;
          top: 50px;
          left: 25px;
        }
        100% {
          background-color: yellow;
          top: 0px;
          left: -25px;
        }
      }
    </style>
  </head>
  <body>
    <!-- page contents -->
    <div id="rect"></div>

### animation-iteration-count
e.g.
- animation-iteration-count: 3;
- animation-iteration-count: infinite;

Use a different @keyframes block for each element you want to animate differently
e.g.
@keyframes backdiv {
  50% {
    background: #ffe6f2;
  }
}

@keyframes beat {
  0% {
    transform: scale(1) rotate(-45deg);
  }

  50% {
    transform: scale(0.6) rotate(-45deg);
  }
}

and each can have different percentages of progress through the animation.

### animation-duration
and each element can have a different animation-duration.
e.g.
.stars {
  background-color: white;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  animation-iteration-count: infinite;
}
.star-1 {
  margin-top: 15%;
  margin-left: 60%;
  animation-duration: 1s;
  animation-name: twinkle;
}
.star-2 {
  margin-top: 25%;
  margin-left: 25%;
  animation-duration: 0.9s;
  animation-name: twinkle;
}
.star-3 {
  margin-top: 10%;
  margin-left: 50%;
  animation-duration: 1.1s;
  animation-name: twinkle;
}
@keyframes twinkle {
  20% {
    transform: scale(0.5);
    opacity: 0.5;
  }
}

