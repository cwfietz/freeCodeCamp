
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

## Absolute position:
e.g. locks the #Searchbar to being 50px x 50 px to the bottm and left of its parent, section. Be sure to assign a position to the parent otherwise the browser will read all they way up the hierarchy until it reaches the <body> tag.
#searchbar {
    position: absolute;
    top: 50px;
    right: 50px;
}
section {
    position: relative;
}

## Fixed position:
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

## Pseudo-classes:
A pseudo-class is a keyword that can be added to selectors, in order to select a specific state of the element.

For example, the styling of an anchor tag can be changed for its hover state using the :hover pseudo-class selector. Here's the CSS to change the color of the anchor tag to red during its hover state:

### :hover pseudo-class 
e.g. a {
            color: #000;
        }
     a:hover {
            color: blue;
        }
