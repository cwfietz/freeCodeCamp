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

## Attributes

### For
The label tag wraps the text for a specific form control item, usually the name or label for a choice. This ties meaning to the item and makes the form more readable. The for attribute on a label tag explicitly associates that label with the form control and is used by screen readers.

You learned about radio buttons and their labels in a lesson in the Basic HTML section. In that lesson, we wrapped the radio button input element inside a label element along with the label text in order to make the text clickable. Another way to achieve this is by using the for attribute.

The value of the for attribute must be the same as the value of the id attribute of the form control.
e.g.
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
