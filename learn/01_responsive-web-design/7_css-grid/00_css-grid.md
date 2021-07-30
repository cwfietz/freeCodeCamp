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
