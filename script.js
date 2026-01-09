let x = document.getElementById("submit");
let a = document.getElementById("res");
let z = ["sejal","aayushma","supriya","yashoda","aaha"];
let y = ["safal","paras","sumit","nisip","pratyush","titan","suyog","abhinav"];
function go(){
    let name = document.getElementById("name").value;
    for(let i = 0;i<y.length;i++)
    {
        if(name == y[i])
        {
            a.innerHTML = "You are Gay, No Doubt!";
            break;
        }
        else if(name == "shishir")
        {
            a.innerHTML = "How can you even think of it????? He is straight as fuck!!"
            break;
        }
        else if(name == z[i] )
        {
            a.innerHTML = "Nah she is Angel..";
            break;
        }
        else if(name.length < 3)
        {
            a.innerHTML = "Please use valid name.";
            break;
        }
        else 
        {
            a.innerHTML = "So you doubt yourself if you are gay or not,that's the reason why you tested right? Hell yeah you're gay then....";
            continue;
        }
    }
}
