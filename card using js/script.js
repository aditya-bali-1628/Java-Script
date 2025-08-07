function createcard(title, Cname, views, monthsold, duration, thumbnail) {
    let viewstr;
    if(viewstr > 1000)
    {
        viewstr = views/1000 + "k";
    }
    else if(views > 1000000)
    {
        viewstr = views/1000000 + "m";
    }
    else{
        viewstr = views/1000 + "k";
    }
    let html = ` <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="Video Thumbnail">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${Cname} - ${viewstr}views - ${monthsold} months ago</p>
            </div>
        </div>`

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}
createcard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "thumbnail.jpg")