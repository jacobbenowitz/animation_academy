export default class NavLinkCreator {
    constructor(headerList) {
        this.headerList = document.querySelector('.header-list')
        this.navLinks = [];
        this.navLinksBase = {
            'Home': '#',
            'Play': '#',
            'Learn': '#',
            'Contact':'#'
        }
        this.createNavLinks()
        // TODO //
        // this.mouseOver = this.mouseOver.bind(this)
        // this.headerList.addEventListener("mouseover", this.mouseOver)
    }
    
    // create all of our nav links
    createNavLinks() {
        // extract nav link titles in an array
        const navLinkTitles = Object.keys(this.navLinksBase)
        // go through each link title 
        navLinkTitles.forEach(link => {
            // create li and a tags for each link
            const outerLi = document.createElement('li');
            const innerLink = document.createElement('a');

            // define the new link's text and url
            innerLink.innerHTML = link;
            innerLink.href = this.navLinksBase[link];

            // add a class for styling and interactivity
            outerLi.classList.add('main-nav-link')

            // put the 'a' tag inside of the 'li'
            outerLi.appendChild(innerLink);

            // add the completed li to our array of navLinks
            this.navLinks.push(outerLi);
        })
        this.attachNavLinks(this.NavLinks);
    }

    // add our nav links to the header
    attachNavLinks() {
        this.navLinks.forEach(link => this.headerList.appendChild(link))
    }


    // mouseOver(){
    //     // change color based on link
    // }
}