# CSS Grid
Turn any HTML element into a grid container by setting its display property to grid. This gives you the ability to use all the other properties associated with CSS Grid.

## Note:
In CSS Grid, the parent element is referred to as the container and its children are called items. Simply creating a grid element doesn't get you very far. You need to define the structure of the grid as well.

## grid-template-columns property
To add some columns to the grid, use the grid-template-columns property on a grid container.
e.g.
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
This will give your grid two columns that are each 50px wide. The number of parameters given to the grid-template-columns property indicates the number of columns in the grid, and the value of each parameter indicates the width of each column.

## grid-template-rows property
To adjust the rows manually, use the grid-template-rows property in the same way you use grid-template-columns.
e.g.
grid-template-columns: 100px 100px 100px;
grid-template-rows: 50px 50px;

## units
You can use absolute and relative units in CSS Grid to define the size of rows and columns. 

### px

### em

### fr
sets the column or row to a fraction of the available space

### auto
sets the column or row to the width or height of its content automatically,

### %
adjusts the column or row to the percent width of its container.

e.g.
grid-template-columns: auto 50px 10% 2fr 1fr;
Creates five columns. The first column is as wide as its content, the second column is 50px, the third column is 10% of its container, and for the last two columns; the remaining space is divided into three sections, two are allocated for the fourth column, and one for the fifth.

## column-gap property
grid-column-gap property obsolete
Adds a gap between the columns.
e.g.
column-gap: 10px;
This creates 10px of empty space between all of the columns.

## row-gap
grid-row-gap property obsolete 
Adds a gap in between the rows of a grid.
e.g.
row-gap: 5px;

## gap property
grid-gap property obsolete
A shorthand property for grid-row-gap and grid-column-gap that's more convenient to use. If gap has one value, it will create a gap between all rows and columns. However, if there are two values, it will use the first one to set the gap between the rows and the second value for the columns.


## grid-column property 
Up to this point, all the properties that have been discussed are for grid containers. The grid-column property is the first one for use on the grid items themselves.

The hypothetical horizontal and vertical lines that create the grid are referred to as lines. These lines are numbered starting with 1 at the top left corner of the grid and move right for columns and down for rows, counting upward.

This is what the lines look like for a 3x3 grid:

            column lines
            1 2 3 4
row lines 1
          2
          3
          4

To control the number of columns an item will consume, you can use the grid-column property in conjunction with the line numbers you want the item to start and stop at.
e.g.
grid-column: 1 / 3;
This will make the item start at the first vertical line of the grid on the left and span to the 3rd vertical line of the grid, consuming two columns.

## grid-row property
e.g.
grid-row: 2 / 4;
Will make the item start at the second horizontal line of the grid from the top and do down to the 4th horizontal line of the grid consuming two rows.