let author = document.querySelector("#active")
let share = document.querySelector(".share")
let mobileHidden = document.querySelector(".mobileHidden")
let icon_share = document.querySelector(".icon_share")
let share_hidden = document.querySelector("#active > .share_hidden")
let share_hidden_mobile = document.querySelector(".mobileHidden > .share_hidden")
let hide_share = document.querySelector(".mobileHidden > .share_hidden")

//show hidden block on mobile
share.addEventListener("click", function(event){
   
    author.style =  "display: none"
   mobileHidden.style =  "display: flex"

})

//hide block with social icons on mobile
share_hidden_mobile.addEventListener("click", function(event){
   
    mobileHidden.style =  "display: none"
    author.style = "dysplay: flex"
 
})

// show hidden block just if width is >= 870px 
share.addEventListener("click", function() {
    if (window.matchMedia("(min-width: 870px)").matches) {
        
        mobileHidden.style = "display: block"
        mobileHidden.style = "display: flex"
        author.style = "display: flex"
        share.style = "display: none"
        share_hidden.style = "display: flex"
        hide_share.style = "display: none"

    } 
  })


//hide block with social media on if width is >= 870px  
icon_share.addEventListener("click", function(event){
    if (window.matchMedia("(min-width: 870px)").matches) {
       
        share.style = "display: flex"
        share_hidden.style = "display: none"
        mobileHidden.style = "display: none"
     
        
    }
})  

       
