const div = document.createElement('div')
document.body.insertBefore(div, document.body.firstChild)
document.querySelector('footer').innerHTML = `
<div class="navBar flex">
        <div>
            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5ee401ee1f08215e6dbf0661_color-lettermark.svg" alt="">
        </div>
        <div class="flex">
            <a href="">services</a>
            <a href="">security</a>
            <a href="">team</a>
            <a href="">carears</a>
            <a href="">blog</a>
            <a href="">contact</a>
            
        </div>
    </div>
`
