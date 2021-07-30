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
sets the column or row to a fraction of the available space,
### auto
sets the column or row to the width or height of its content automatically,

### %
adjusts the column or row to the percent width of its container.

e.g.
grid-template-columns: auto 50px 10% 2fr 1fr;

This snippet creates five columns. The first column is as wide as its content, the second column is 50px, the third column is 10% of its container, and for the last two columns; the remaining space is divided into three sections, two are allocated for the fourth column, and one for the fifth.
