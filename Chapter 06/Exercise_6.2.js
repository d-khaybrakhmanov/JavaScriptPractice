const adj = ["super", "wonderful", "bad", "angry", "careful"];

function myFunc() {
    const question = prompt("Whai is your name?");
    const nameAdj = Math.floor(Math.random() * adj.length);
    console.log(adj[nameAdj] + " " + question);
}

myFunc();