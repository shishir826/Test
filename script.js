<input type="text" id="name" placeholder="Enter name">
<button id="submit" onclick="go()">Check</button>
<p id="res"></p>

<script>
let a = document.getElementById("res");
let z = ["sejal","aayushma","supriya","yashoda","aaha"];
let y = ["safal","paras","sumit","nisip","pratyush","titan","suyog","abhinav"];

function go() {
    let name = document.getElementById("name").value.toLowerCase();

    if(name.length < 3) {
        a.innerHTML = "Please use a valid name.";
        return;
    }

    if(name === "shishir") {
        a.innerHTML = "How can you even think of it????? He is straight as fuck!!";
        return;
    }

    if(y.includes(name)) {
        a.innerHTML = "You are Gay, No Doubt!";
        return;
    }

    if(z.includes(name)) {
        a.innerHTML = "Nah she is Angel..";
        return;
    }

    // If name not found in either array
    a.innerHTML = "So you doubt yourself if you are gay or not, that's the reason why you tested right? Hell yeah, you're gay then....";
}
</script>
