
# Applied Visual Design

## Properties
### text-align
text-align: justify;
text-align: center;
text-align: right;
text-align: left;

### Font size:
e.g. font-size: 27px;
- or -
for multiple elements or tags:
    h1 { font-size: 68px; }
    h2 { font-size: 52px; }
    h3 { font-size: 40px; }
    h4 { font-size: 32px; }
    h5 { font-size: 21px; }
    h6 { font-size: 14px; }

### Font Weight:
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
