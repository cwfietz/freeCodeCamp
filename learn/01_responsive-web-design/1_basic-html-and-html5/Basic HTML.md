Basic HTML
==============================================================================

1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
         1         2         3         4         5         6         7         8         9         0



<tag></tag>
with attribute
<tag attribute=""></tag>
some are self closing and don't require the </tag> to close it.


<!-- comments -->
<!-- 
     comments 
              -->


HTML Document structure
=========================
<!DOCTYPE html>
<html>
  <head>
    <!-- metadata elements -->
    <title></title>
    <link></link>
    <meta></meta>
    <style></style>
  </head>
  <body>
    <!-- page contents -->
  </body>
</html>


Division element (div)
=========================
The division element <div> is a general purpose container for other elements.
<div>
  <other elements
</div>


Heading tags
====================
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>

Paragraph tag
====================
<p></p>

lorem ipsum text as placeholder text. The lorem ipsum text is randomly scraped from a famous passage by Cicero of Ancient Rome.

==============================================================================
HTML5 introduces more descriptive HTML tags. These include main, header, footer, nav, video, article, section and others.
==============================================================================

<main>
The main HTML5 tag helps search engines and other developers find the main content of your page.
</main>

Images
==========
<img> element

with the
src = "" 
and
alt = ""
attributes

<img src="http://www.your-imag-source.com/your-image.jpg" alt="a text description of the image">
If the image isn't for content but decoration only and not important for a screen reader to read out, you can leave the string blank.
e.g. <img src="samuraiSwords.jpeg" alt="">

self closing.

Anchor elements
====================
<a></a>

with the hypertext reference
href attribute
<a href="www.website.com">Link to website</a>
href="#" is a dead link that leads no where.

<a href="#internal-id-element"\>Internal link</a> will jump to:
<h2 id="internal-id-element">Internal Element</h2> inside the current document

target attribute

target="_blank"
indicates the link is to  be opened in a new browswer tab. 

Put and image tag in an anchor tag to make the image a link:
<a href=""><img src="" alt=""></a>


Unordered list
====================
<ul>
  <li>first item</li>
  <li>second item</li>
</ul>

Ordered list
====================
<ol>
  <li>first item</li>
  <li>second item</li>
</ol>


Forms
====================
<form></form>

action attribute

<form action="/url-to-where-you-want-to-submit-the-form-data"></form>

<input text...> elements can be nested in <form... elements. See below.


Input  field
====================
<input>

Text
<input type="text">
self closing

Placeholder
<input type="text" placeholder="Please, type you input here.">

The HTML5 "required" attribute
<input type="text" required>
to force a text value to be entered by the user.


Buttons
====================
<button></button>
type="submit" attribute
<button type="submit">This button submits the form</button>


Labels for ...
====================

Radio buttons
==============================
<label for="idName1">
  <input id="idName1" value="value1" type="radio" name="nameOfRadioButtonGroup">Labeltext1
</label>
<label for="idName2">
  <input id="idName2" value="value2" type="radio" name="nameOfRadioButtonGroup" checked>Labeltext2
</label>

value - sent back when form is submitted
name - all radio buttons or checkboxes in the same group must have same name
checked - indicates the preselected default value

Checkboxes
====================
<label for="idName1">
  <input id="idName1" value="value1" type="checkbox" name="nameOfCheckboxGroup"checked>Labeltext1
</label>
<label for="idName2">
  <input id="idName2" value="value2" type="checkbox" name="nameOfCheckboxGroup">Labeltext2
</label>

