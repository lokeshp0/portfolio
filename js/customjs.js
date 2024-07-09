
// alert("dsj")
setTimeout(function(){
    subHeadingRender()
},500)

const subHeading = document.getElementById("subheading")
text= "'I Love Java Programming language'"

c=0
function subHeadingRender(){
    if(c<text.length){
        if(text[c]==" "){
            subHeading.innerHTML+="<span> &nbsp;</span>"
            
        }
        else{
            subHeading.innerText+=text[c]
        }
        c++
        setTimeout(subHeadingRender,100)
    }
    else{
        c=0
        setTimeout(function(){
            subHeading.innerText=''
            subHeadingRender()
        },1000)
    }
}


function backgroundAction(value){
    const background = document.getElementById("link_background_id")
    const active_link = document.getElementById("active_link")
    background.style.left = value+"px"
    console.log(active_link)
    // active_link.style.color += "rgb(161, 29, 29) !important;"
    active_link.classList.replace("active_link","deactivat_link")

}

function backgrounReAction(value){
    const background = document.getElementById("link_background_id")
    background.style.left = value+"px"
    const active_link = document.getElementById("active_link")

    active_link.classList.replace("deactivat_link","active_link")



}