class NavBar {
    constructor(ele){
        this.ele = ele
        this.ele.innerHTML = ""
        // this.handleClick = this.handleClick.bind(this)
        // this.ele.addEventListener("click", this.handleClick)
    }

    handleClick(){
        this.ele.children[0].innerText = ""
    }
}

export default NavBar;