let arrNewsItems = document.getElementsByClassName("NewsArticle");

for(let i = 0; i < arrNewsItems.length; i++)
{
    arrNewsItems[i].addEventListener("click", (() => 
    {
        let element = arrNewsItems[i];
				if(window.innerWidth <= 640){
        	document.getElementById("NewsItems").style.display = "none";
					
        	document.querySelector("article").style.display = "grid";
        	document.querySelector("article").style.gridColumn = "span 1";

        	document.getElementById("GridContainer").style.gridTemplateColumns = "1fr";
				}
        //Dit werkt nog niet

        document.getElementById("showArticleButton").classList.remove("showArticleButtonAnimateRev");
        void document.getElementById("showArticleButton").offsetWidth;
        document.getElementById("showArticleButton").classList.add("showArticleButtonAnimate");

        ShowArticle(
            element.querySelector("img").src,
            element.querySelector("h2").innerHTML,
            element.querySelector("p").innerHTML);

    }));
}

function ShowArticle(src, title, text)
{
    let article = document.querySelector("article");

	article.style.visibility = "visible";
    article.querySelector("img").src = src;
    article.querySelector("h2").innerHTML = title;
    article.querySelector("p").innerHTML = text;
}

document.querySelector("#showArticleButton").addEventListener("click", (()=>{

    document.getElementById("NewsItems").style.display = "flex";


    if(window.innerWidth <= 640){
      document.getElementById("GridContainer").style.gridTemplateColumns = "minmax(20rem, 1fr) 1fr";
			document.querySelector("article").style.visibility = "hidden";
    }
    else{
      //computer
			document.getElementById("GridContainer").style.gridTemplateColumns = "minmax(30rem, 1fr) 1fr";
    }

    document.getElementById("showArticleButton").classList.remove("showArticleButtonAnimate");
    void document.getElementById("showArticleButton").offsetWidth;
    document.getElementById("showArticleButton").classList.add("showArticleButtonAnimateRev");
    
}));