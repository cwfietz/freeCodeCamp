# Applied Visual Design notes

##### Blank string for alt="" for <img> tag:

If the image isn't for content but decoration only and not important for a screen reader to read out, you can leave the string blank.
e.g. <img src="samuraiSwords.jpeg" alt="">

###### Use Headings To Show Hierarchical Relationships Of Content
Use only one <h1> tag for a page. Then use the h2, h3, etc. headings in order without skipping. Have the subheadings have semantic meaning (they match the content in meaning). Use the CSS to style the headings.

###### Landmarks
These tags are rendered as <div></div> tags but help screen readers or other assistive technology find content.
    <header></header>
    <main></main>
    <footer></footer>
    <nav></nav>
    <article></article>
    <section></section>

