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


## justify-content
Sometimes the flex items within a flex container do not fill all the space in the container. It is common to want to tell CSS how to align and space out the flex items a certain way. Fortunately, the justify-content property has several options to do this. But first, there is some important terminology to understand before reviewing those options.

[useful image showing a row to illustrate the concepts below](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)

Recall that setting a flex container as a row places the flex items side-by-side from left-to-right. A flex container set as a column places the flex items in a vertical stack from top-to-bottom. For each, the direction the flex items are arranged is called the main axis. For a row, this is a horizontal line that cuts through each item. And for a column, the main axis is a vertical line through the items.

There are several options for how to space the flex items along the line that is the main axis:
  ### center
  aligns all the flex items to the center inside the flex container.
  ### flex-start
  aligns items to the start of the flex container. For a row, this pushes the items to the left of the container. For a column, this pushes the items to the top of the container. This is the default alignment if no justify-content is specified.
  ### flex-end
  aligns items to the end of the flex container. For a row, this pushes the items to the right of the container. For a column, this pushes the items to the bottom of the container.
  ### space-between
  aligns items to the center of the main axis, with extra space placed between the items. The first and last items are pushed to the very edge of the flex container. For example, in a row the first item is against the left side of the container, the last item is against the right side of the container, then the remaining space is distributed evenly among the other items.
  ### space-around
  similar to space-between but the first and last items are not locked to the edges of the container, the space is distributed around all the items with a half space on either end of the flex container.
  ### space-evenly
  Distributes space evenly between the flex items with a full space at either end of the flex container

## align-items property
The align-items property is similar to justify-content. 

Flex containers also have a cross axis which is perpendicular to the main axis. For rows, the cross axis is vertical and for columns, the cross axis is horizontal.

CSS offers the align-items property to align flex items along the cross axis. For a row, it tells CSS how to push the items in the entire row up or down within the container. And for a column, how to push all the items left or right within the container.

The different values available for align-items include:

  ### flex-start
  aligns items to the start of the flex container. For rows, this aligns items to the top of the container. For columns, this aligns items to the left of the container.
  ### flex-end
  aligns items to the end of the flex container. For rows, this aligns items to the bottom of the container. For columns, this aligns items to the right of the container.
  ### center
  align items to the center. For rows, this vertically aligns items (equal space above and below the items). For columns, this horizontally aligns them (equal space to the left and right of the items).
  ### stretch
  stretch the items to fill the flex container. For example, rows items are stretched to fill the flex container top-to-bottom. This is the default value if no align-items value is specified.
  ### baseline
  align items to their baselines. Baseline is a text concept, think of it as the line that the letters sit on.

