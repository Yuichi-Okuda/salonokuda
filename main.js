// スムーススクロール
const smoothScroll = (e) => {
    e.preventDefault()

    console.log(e.target)
    console.log(e.target.hash)  //ハッシュタグのhash
    console.log(document.querySelector(e.target.hash))
    // const targetSection=document.querySelector("")
    // console.log(document.getElementById("menu"))
    const targetSection = document.querySelector(e.target.hash)
    targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })

}

document.addEventListener("click", smoothScroll)