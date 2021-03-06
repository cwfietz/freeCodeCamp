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

## repeat function
Can be used with grid-template-columns and grid-template-rows to specify the number of times the column or row is to be repeated, followed by a comma and the value to be repeated to define the structure of a grid.
e.g.
grid-template-rows: repeat(100, 50px);

To repeat multiple values with the repeat function and insert the function amongst other values.
e.g.
grid-template-columns: repeat(3, 1fr 50px) 20px; which translates to:
grid-template-columns: 1fr 50px 1fr 50px 1fr 50px 20px;

## minmax function
Limits the size of items when the grid container changes size. The arguments specify the acceptable minimum and maximum sizes for your item.
e.g.
grid-template-columns: 100px minmax(50px, 200px);
grid-template-columns is set to create two columns; the first is 100px wide, and the second has the minimum width of 50px and the maximum width of 200px.

## auto-fill parameter
An option argument for the repeat function. Automatically inserts as many rows or columns of the desired size as possible depending on the size of the container. 
Can be used with minmax() to create flexible layouts.
e.g.
repeat(auto-fill, minmax(60px, 1fr));
When the container changes size, this setup keeps inserting 60px columns and stretching them until it can insert another one.
Note: If the container can't fit all the items on one row, it will move them down to a new one.

## auto-fit parameter
auto-fit works almost identically to auto-fill. The only difference is that when the container's size exceeds the size of all the items combined, auto-fill keeps inserting empty rows or columns and pushes the items to the side, while auto-fit collapses those empty rows or columns and stretches the items to fit the size of the container.
Note: If your container can't fit all your items on one row, it will move them down to a new one.
e.g.
grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));

## column-gap property
grid-column-gap property obsolete
Adds a gap between the columns.
e.g.
column-gap: 10px;
This creates 10px of empty space between all of the columns.

## row-gap property
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

## justify-self property
In CSS Grid, the content of each item is located in a box which is referred to as a cell. You can align the content's position within its cell horizontally using the justify-self property on a grid item. 

### stretch
By default, the justify-self property has a value of stretch, which will make the content fill the whole width of the cell. 

### start
aligns the content at the left of the cell,

### center
aligns the content in the center of the cell,

### end
aligns the content at the right of the cell.

## align-self property
Aligns an item vertically. This property accepts all of the same values as justify-self.

## justify-items property
Align all the items in the CSS Grid to the same alignment. You can use the previously learned properties and align them individually, or you can align them all at once horizontally by using justify-items on your grid container. This property can accept all the same values listed above the difference being that it will move all the items in the grid to the desired alignment.

## align-items property
Sets the vertical alignment for all the items in the grid. This property can accept all the same values listed above.

## grid-template-areas property 
Groups cells of your the together into an area and give the area a custom name.
e.g.

grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";

The code above merges the top three cells together into an area named header, the bottom three cells into a footer area, and it makes two areas in the middle row; advert and content. Every word in the code represents a cell and every pair of quotation marks represent a row.

## empty cell
In addition to custom labels the grid-template-areas property, you can use a period (.) to designate an empty cell in the grid.

## grid-area property
Places an item into an area by referencing the area name.
e.g.
.item1 {
  grid-area: header;
}
Will put item1 into the grid-area header.

## grid-area property with NO grid-template-areas property 
The grid-area property can be used in another way. If the grid doesn't have an areas template to reference, you can create an area on the fly for an item to be placed using this syntax:
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
This description uses the line numbers described above in the grid-column property to define where the area for this item will be. 
e.g.
item1 { grid-area: 1/1/2/4; }
item1 will consume the rows between lines 1 and 2, and the columns between lines 1 and 4.
e.g.
.item5 { grid-area: 3/1/4/4; }
item5 will consume the rows between lines 3 and 4, and the columns between lines 1 and 4.

## media query 
CSS Grid can be an easy way to make a site more responsive by using media queries to rearrange grid areas, change dimensions of a grid, and rearrange the placement of items.
e.g.
.container {
  font-size: 1.5em;
  min-height: 300px;
  width: 100%;
  background: LightGray;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px auto 1fr auto;
  grid-gap: 10px;
  grid-template-areas:
    "header"
    "advert"
    "content"
    "footer";
}
@media (min-width: 300px) {
  .container {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
}
@media (min-width: 400px) {
  .container {
    grid-template-areas:
      "header header"
      "advert content"
      "footer footer";
  }
}
When the viewport width is 300px or more, the number of columns changes from 1 to 2. The advertisement area then occupies the left column completely. When the viewport width is 400px or greater, the advertisement area occupies the middle of the left column and the header and footer occupy the top and bottom rows. 

## grids within grids
Turning an element into a grid only affects the behaviour of its direct descendants. So by turning a direct descendant into a grid, you have a grid within a grid.
e.g.
.container {
  font-size: 1.5em;
  min-height: 300px;
  width: 100%;
  background: LightGray;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  grid-gap: 10px;
  grid-template-areas:
    "advert header"
    "advert content"
    "advert footer";
}
<snip>
.item3 {
  background: PaleTurquoise;
  grid-area: content;

  /* enter your code below this line */
  display: grid;
  grid-template-columns: auto 1fr;
  /* enter your code above this line */

}
<snip>
Setting the display and grid-template-columns properties of the element with the item3 class, creates a grid within your grid.
