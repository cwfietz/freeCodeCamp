# Applied Visual Design notes

### Blank string for alt="" for <img> tag:
If the image isn't for content but decoration only and not important for a screen reader to read out, you can leave the string blank.
e.g. <img src="samuraiSwords.jpeg" alt="">

### Use Headings To Show Hierarchical Relationships Of Content
Use only one <h1> tag for a page. Then use the h2, h3, etc. headings in order without skipping. Have the subheadings have semantic meaning (they match the content in meaning). Use the CSS to style the headings.

### Landmarks
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
