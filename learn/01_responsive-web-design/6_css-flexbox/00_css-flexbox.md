# CSS Flexbox

## display: flex
Placing the CSS property display: flex; on an element allows you to use other flex properties to build a responsive page.
e.g.
#box-container {
  height: 500px;
  display: flex;
}

## flex-direction
Adding display: flex to an element turns it into a flex container. This makes it possible to align any children of that element into rows or columns. You do this by adding the flex-direction property to the parent item and setting it to row or column. Creating a row will align the children horizontally, and creating a column will align the children vertically.
Other options for flex-direction are row-reverse and column-reverse.
Note: The default value for the flex-direction property is row.
e.g.
flex-direction: row-reverse;

### row
### row-reverse
### column
### column-reverse.

