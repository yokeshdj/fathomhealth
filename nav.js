var parent = document.body;
var element = document.createElement('nav');
parent.insertBefore(element,parent.firstChild);
document.querySelector('nav').innerHTML = `<a href="index.html"><img
        src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5ee401ee1f08215e6dbf0661_color-lettermark.svg"></a>
        <div class="menu">
        <a id="test" href="services.html">SERVICES</a>
<a href="security.html">SECURITY</a>
<a href="team.html">TEAM</a>
<a href="career.html">CAREERS</a>
<a href="blog.html">BLOG</a>
<a href="contact.html">CONTACT</a>
</div>`;
var navigationBar = document.querySelector('nav')
var url = window.location.href;
var page = ""
for(var i=url.length-1; i>=0; i--){
        if(url[i]=="/"){
                page = url.slice(i+1,url.length)
                break;
        }
}
if(page=="services.html"){
        var ele = navigationBar.getElementsByTagName('a')[1];
        ele.setAttribute('class','text-color')
}
else if(page=="security.html"){
        var ele = navigationBar.getElementsByTagName('a')[2];
        ele.setAttribute('class','text-color')
}
else if(page=="team.html"){
        var ele = navigationBar.getElementsByTagName('a')[3];
        ele.setAttribute('class','text-color')
}
else if(page=="blog.html"){
        var ele = navigationBar.getElementsByTagName('a')[5];
        ele.setAttribute('class','text-color')
}
else{
        var ele = navigationBar.getElementsByTagName('a')[6];
        ele.setAttribute('class','text-color')
}