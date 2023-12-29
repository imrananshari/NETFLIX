


function disp()
{
    let para = event.target;

    if(para.nextElementSibling.style.height=="" || para.nextElementSibling.style.height=="0px")
    {
        para.nextElementSibling.style.height = "100px";
    }
    else{
        para.nextElementSibling.style.height = "0px";
    }




}