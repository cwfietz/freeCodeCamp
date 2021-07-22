# Applied Accessibility notes
https://www.freecodecamp.org/learn/responsive-web-design/#applied-accessibility

## Blank string for alt="" for <img> tag:
If the image isn't for content but decoration only and not important for a screen reader to read out, you can leave the string blank.
e.g. <img src="samuraiSwords.jpeg" alt="">

## Use Headings To Show Hierarchical Relationships Of Content
Use only one <h1> tag for a page. Then use the h2, h3, etc. headings in order without skipping. Have the subheadings have semantic meaning (they match the content in meaning). Use the CSS to style the headings.

## Landmarks
These tags are rendered as <div></div> tags but help screen readers or other assistive technology find content.
    <header></header>
    <main></main>
    <footer></footer>
    <nav></nav>
    <article></article>
    <section></section>

e.g.
<header>
  <h1>Training with Camper Cat</h1>
</header>

e.g.
<main>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>
      The internet is littered with varying opinions on nutritional
      paradigms, from catnip paleo to hairball cleanses. But let's turn our
      attention to an often overlooked fitness fuel, and examine the
      protein-carb-NOM trifecta that is lasagna...
    </p>
  </article>
...
<main>

e.g.
<footer>&copy; 2018 Camper Cat</footer>

e.g.
<nav>
    <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
    </ul>
</nav>

e.g.
<main>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article>...</article>
    </section>
...
</main>

## Audio
Audio content also needs a text alternative to be accessible to people who are deaf or hard of hearing. This can be done with nearby text on the page or a link to a transcript.

The audio tag supports the controls attribute. This shows the browser default: play, pause, and other controls, and supports keyboard functionality. This is a boolean attribute, meaning it doesn't need a value, its presence on the tag turns the setting on.

Here's an example:

<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg">
  <source src="audio/meow.ogg" type="audio/ogg">
</audio>

Note: Multimedia content usually has both visual and auditory components. It needs synchronized captions and a transcript so users with visual and/or auditory impairments can access it.

## Figures and captions
HTML5 introduced the figure element and the related figcaption. Used together, these items wrap a visual representation (like an image, diagram, or chart) along with its caption. Wrapping these elements together gives a two-fold accessibility boost by semantically grouping related content and providing a text alternative explaining the figure.

For data visualizations like charts, the caption can be used to briefly note the trends or conclusions for users with visual impairments. 

e.g. - note that the figcaption goes inside the figure tags and can be combined with other elements:
<figure>
  <img src="roundhouseDestruction.jpeg" alt="Photo of Camper Cat executing a roundhouse kick">
  <br>
  <figcaption>
    Master Camper Cat demonstrates proper form of a roundhouse kick.
  </figcaption>
</figure>

## For attribute for the label tag
The label tag wraps the text for a specific form control item, usually the name or label for a choice. This ties meaning to the item and makes the form more readable. The for attribute on a label tag explicitly associates that label with the form control and is used by screen readers.

You learned about radio buttons and their labels in a lesson in the Basic HTML section. In that lesson, we wrapped the radio button input element inside a label element along with the label text in order to make the text clickable. Another way to achieve this is by using the for attribute.

The value of the for attribute must be the same as the value of the id attribute of the form control.
e.g.
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>

## <input type="date"
HTML5 introduced an option to specify a date field. Depending on browser support, a date picker shows up in the input field when it's in focus, which makes filling in a form easier for all users. For older browsers, the type will default to text, so it helps to show users the expected date format in the label or placeholder text just in case.
e.g.
<label for="pickdate">Preferred Date:</label>
<input type="date" id="pickdate" name="date" placeholder="YYYY-MM-DD" />

## fieldset
The next form topic covers the accessibility of radio buttons. Each choice is given a label with a for attribute tying to the id of the corresponding item as covered in the last challenge. Since radio buttons often come in a group where the user must choose one, there's a way to semantically show the choices are part of a set.

The fieldset tag surrounds the entire grouping of radio buttons to achieve this. It often uses a legend tag to provide a description for the grouping, which screen readers read for each choice in the fieldset element.

The fieldset wrapper and legend tag are not necessary when the choices are self-explanatory, like a gender selection. Using a label with the for attribute for each radio button is sufficient.
e.g.
<fieldset>
  <legend>What level ninja are you?</legend>

  <input id="newbie" type="radio" name="levels" value="newbie" />
  <label for="newbie">Newbie Kitten</label><br />
  
  <input id="intermediate" type="radio" name="levels" value="intermediate" />
  <label for="intermediate">Developing Student</label><br />
  
  <input id="master" type="radio" name="levels" value="master" />
  <label for="master">Master</label>
  
</fieldset>

## time and datetime
The time element along with a datetime attribute are used to to include standardized times. The time element is an inline element that can wrap a date or time on a page. A datetime attribute holds a valid format of that date. This is the value accessed by assistive devices. It helps avoid confusion by stating a standardized version of a time.
e.g.
 <time datetime="2016-08-16T00:00Z">August 16<sup>th</sup></time>


## Screen reader only content; visually hidden
CSS can also improve accessibility on your page when you want to visually hide content meant only for screen readers. This happens when information is in a visual format (like a chart), but screen reader users need an alternative presentation (like a table) to access the data. CSS is used to position the screen reader-only elements off the visual area of the browser window.

Here's an example of the CSS rules that accomplish this:
e.g.
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}

## High contrast text
Sufficient contrast improves your content's readability. The Web Content Accessibility Guidelines (WCAG) recommend at least a 4.5 to 1 contrast ratio for normal text. The ratio is calculated by comparing the relative luminance values of two colors. This ranges from 1:1 for the same color, or no contrast, to 21:1 for white against black, the most substantial contrast. There are many contrast checking tools available online that calculate this ratio for you.
e.g.
color: #636363;
background-color: #fff;
  - for a contrast ratio of 6:1.

e.g.
- Insufficient lightness contrast:
    color: hsl(0, 55%, 20%);
    background-color: hsl(120, 25%, 35%);
- Sufficient lightness contrast:
    color: hsl(0, 55%, 15%);
    background-color: hsl(120, 25%, 55%);

## colourblindness
There are various forms of colorblindness. These can range from a reduced sensitivity to a certain wavelength of light to the inability to see color at all. The most common form is a reduced sensitivity to detect greens.

For example, if two similar green colors are the foreground and background color of your content, a colorblind user may not be able to distinguish them. Close colors can be thought of as neighbors on the color wheel, and those combinations should be avoided when conveying important information.
e.g.
color: #33ff33; green
background-color: #ffff33;

Note: Some online color picking tools include visual simulations of how colors appear for different types of colorblindness. These are great resources in addition to online contrast checking calculators.
e.g.
color: #003366; blue
background-color: #ffff33;

## Meaningful links 
Making the word, "here" a link is not useful for those using screen readers. Instead make link text meaningful.
Back example:
  Click <a href="">here</a> for information about batteries
Better example:
  Click here for <a href="">information about batteries</a>

