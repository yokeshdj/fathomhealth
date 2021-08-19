var parent = document.body;
var element = document.createElement('nav');
parent.insertBefore(element,document.body.firstChild);
document.querySelector('nav').innerHTML = `<a href="index.html"><img
        src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5ee401ee1f08215e6dbf0661_color-lettermark.svg"></a>
        <div class="menu">
        <a href="services.html">SERVICES</a>
<a href="security.html">SECURITY</a>
<a href="team.html">TEAM</a>
<a href="careers.html">CAREERS</a>
<a href="blog.html">BLOG</a>
<a href="contact.html">CONTACT</a>
</div>`