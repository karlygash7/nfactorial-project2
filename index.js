const articlesFromAPI = [
    {
        id: 0,
        title: "7 Practical CSS Tips",
        summary: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off."
        , src: "./assets/img.png"
    },
    {
        id: 1,
        title: "7 Practical CSS Tips",
        summary: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks..."
        , src: "./assets/img (1).png"
    },
    {
        id: 2,
        title: "7 Practical CSS Tips",
        summary: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks..."
        , src: "./assets/img (2).png"
    },
];

let article = `<div class="art">
<div class = left>
<div class="left-top">
    <img src="./assets/ava1.png">
    <p>Authors name in Topics Name · 7 july</p>
</div>
<div class="art-in">
    <a href="article.html"> <p class="title" id="title"> </p></a>
    <p class="summary" id="summary"> </p>
</div>
<div class="info-btn">
    <div class="info">
    <button>
    <p>Java Script</p>
    </button>
    <p>12 min read</p>
    <p>·</p>
    <p>Selected for you</p>
    </div>
    <div class="actions">
    <img src="./assets/Icon.png">
    <img src="./assets/Icon1.png">
    <img src="./assets/Icon2.png">
    </div>
</div>
</div>
<img src="" alt="article-img"/>
</div>`;

const articles = document.getElementById("articles");

articlesFromAPI.forEach((item) => {
    let newArticle = article.replace('id="title">', `id="title">${item.title}`);
    newArticle = newArticle.replace('id="summary">', `id="summary">${item.summary}`);
    newArticle = newArticle.replace('src="" ', `src="${item.src}"`);

    console.log(newArticle);
    articles.innerHTML += newArticle;

});