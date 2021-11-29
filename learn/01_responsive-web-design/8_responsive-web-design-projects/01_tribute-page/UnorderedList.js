
const unorderedItems = [
    "1916 Born in Nuneaton, Warwickshire, England on September 30<sup>th</sup>",
    "1933 Read Dickson's <cite>History of the Theory of Numbers</cite>. He said it was better than \"the whole works of Shakespeare\" re-enforcing his interest in Mathematics. He went on to author or co-author over 50 books and over 100 research papers in math in his career of over 80 years.",
    "1935 Entered Gonville and Caius College, Cambridge, after winning several scholarships. He met Michael Thirian",
    "1937 Met Michael Thirian's sister, Nancy Louise Thirian. They both loved mountain climbing and dancing.",
    "1938 Graduated with a second-class honours degree and got a teaching diploma at the University of Birmingham to became a teacher",
    "1939 He and Louise staid in Youth Hostels in the Lake District of northeast England for a two week holiday",
    "1940 Married Louise on December 21<sup>st</sup> in Nottingham",
    "1942 Received an emergency commission in the Meteorological Branch of the Royal Air Force, with the rank of flight lieutenant in November. He was posted to Reykjavik then Bermuda. His wife, Louis, was not allowed to join him. While in Iceland he learned to enjoy skiing and climbing on snow and ice.",
    "1945 At the end of Word War II, he returned to England to teach at Stockport Grammar School for two years.",
    "1947 He and Louis moved to London where he taught at Goldsmiths' College (now known as Goldsmiths, University of London). From 1947 to 1951 he was the [chess] endings editor for <cite>British Chess Magazine</cite>. One of the inventors of the GBR (Guy–Blandford–Roycroft) code.",
    "1951 Moved to Singapore to teach at the University of Malaya",
    "1960 Met Paul Erdős",
    "1962 Moved to the Indian Institute of Technology in Delhi, India. He and Louise went mountaineering in the foothills of the Himalayas.",
    "1965 Moved to Calgary, Alberta, Canada and obtained a professorship at The University of Calgary. He championed changing the name from <cite>University of Calgary</cite> to <cite><strong>The</strong> University of Calgary</cite>, correctly anticipating that <cite>Mount Royal College</cite> would become <cite>Mount Royal University</cite>. Taught at Canada/USA Mathcamp during its early years along with George Thomas and John Selfridge.",
    "1966 Became head of the mathematics department at The University of Calgary on April 1<sup>st</sup> (despite the understanding that he would not become head of the department when he started at the University).",
    "1968 Guy discovered a unistable polyhedron with 19 faces. A unistable polyhedron with fewer than 19 faces was not discovered until 2012.",
    "1970 Published his first of four articles with Paul Erdős, thus giving him an Erdős number of 1. Discovered the glider in John Conway's Game of Life, though Conway named it.", 
    "1982 Officially retired from The University of Calgary (at age 66) but continued to go to his office until 2020 February. \"I didn’t retire. They just stopped paying me.\". Co-authored the first edition of <cite>Winning Ways for your Mathematical Plays</cite> in two volumes with John Conway and Elwyn Berlekamp. They extended it to four volumes in the second edition that was published in 2003 and 2004. In 1998 Martin Gardner described this book as, \"the greatest contribution to recreational mathematics in this century\".",
    "1988 Published a paper, <cite>The strong law of small numbers</cite>, explaining an idea that was first reported by Martin Gardner in <cite>Scientific American</cite> in 1980.",
    "1989 He and Louise went on a ski adventure across the icefields of the Saint Elias Mountains near Mount Logan, Canada’s highest peak. Received the Lester R. Ford Award for the <cite>The strong law of small numbers</cite> paper.",
    "1991 Awarded an honorary doctorate by The University of Calgary. He said that they gave him the degree out of embarrassment. The university stated that, \"his extensive research efforts and prolific writings in the field of number theory and combinatorics have added much to the underpinnings of game theory and its extensive application to many forms of human activity.\"",
    "1994 Published <cite>Unsolved Problems in Number Theory</cite>. Many number theorists got their start trying to solve problems from this book.",
    "1999 One of the founders, and was one of the first directors of, the Number Theory Foundation. Supported the foundation for more than 20 years.",
    "2006 As they had done for many years, he and Louise celebrated Richard’s birthday at Mount Assiniboine Lodge. On his 90<sup>th</sup> birthday he climbed to the top of the Towers. The first <cite>Louise and Richard K. Guy Lecture series</cite> lecture was held. This lecture series was a birthday present from his wife, Louise. The lecture series continues.",
    "2008 He and Louise skied the 11 km to Lake O’Hara Lodge for Valentine's Day",
    "2010 His wife, Louise died",
    "2014 Donated $100,000 to the Alpine Club of Canada to train amateur leaders.",
    "2016 Celebrated his 100<sup>th</sup> birthday at Mount Assiniboine Lodge by hiking 6 km to Wonder Pass. He played cheese in the evening. The next day he hiked to the top of the Niblet. To mark his 100th birthday friends and colleagues organised a celebration of his life. A video of a tribute song with slides was released by Gathering 4 Gardner",
    "2020 On Friday, February 21<sup>st</sup> he went into the office at the University for the last time. He died 17 days later in Calgary, Alberta, Canada on March 9<sup>th</sup> at the age of 103.",
    "      Richard and Louise had three children, Elizabeth, Michael and Peter, five grandchildren, Kenny, Andy, Rosie, Carol and Kathy, and two great grandchildren, Sarah and Emily."
];

const makeUnorderedList = (arr) => {
    var outputList = "<ul>\n";
    arr.forEach(element => {
       outputList += 
`    <li>
        <strong>${element.substring(0,4)}</strong> - ${element.substring(5)}
    </li>\n`; 
    });
    outputList += "</ul>";
    return outputList;
}
const processedList = makeUnorderedList(unorderedItems);
console.log(processedList);
