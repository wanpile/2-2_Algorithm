

function solution2(){
    let input = gets().split(' ');
    let nodes = gets().split(' ');
    let queue = [];
    let queue2 = [];
    let ans = [];
    let edges = {}; 
    for(let i of nodes){
        edges[nodes] = [];
    }
    for(let i = 0; i < Number(input[1]); i++){
        let temp = gets().split(' ');
        edges[temp[0]].push(temp[1]);
        if(!queue.includes(temp[0])){
            queue.push(temp[0]);
        }
        if(!queue.includes(temp[1])){
            queue.push(temp[1]);
        }
    }

}

function solution2_2(){
    let input = gets().split(' ');
    let nodes = gets().split(' ');
    let weight = {};
    let queue = [];
    for(let i = 0; i < nodes.length; i++){
        weight[nodes[i]] = 0;
    }
    let temp = gets().split(' ');
    weight[temp[0]] = 0;
    weight[temp[1]] = 1;
    for(let i = 1; i < Number(input[1]); i++){
        let temp = gets().split(' ');
        let tempnode = weight[temp[0]] + 1;
        weight[temp[1]] = tempnode;
        if(!queue.includes(temp[0])){
            queue.push(temp[0]);
        }
        if(!queue.includes(temp[1])){
            queue.push(temp[1]);
        }
    }
    let val = Object.values(weight);
    let ansr = Array.from(Array(val.length), () => Array(2));
    val.forEach((e, i) => {
        ansr[i][0] = e;
        ansr[i][1] = i;
    })
    ansr = ansr.sort((a, b) => {
        if(a[0] == b[0]){
            return queue.indexOf(nodes[a[1]]) - queue.indexOf(nodes[b[1]]);
        }else{
            return a[0] - b[0];
        }
    })
    let ans = [];
    ansr.forEach(e => ans.push(nodes[e[1]]));
    print(ans.join(' '));
}

function solution2_3_sol(){
    let input = gets().split(' ');
    let nodes = gets().split(' ');
    let degree = Array(nodes.length).fill(0);
    let graph = {};
    for(let i = 0; i < nodes.length; i++){
        graph[nodes[i]] = [];
    }
    for(let i = 0; i < Number(input[1]); i++){
        let temp = gets().split(' ');
        graph[temp[0]].push(temp[1]);
        degree[nodes.indexOf(temp[1])]++;
    }

    let result = Array(nodes.length).fill(0);
    function topology(){
        let queue = [];
        for(let i = 0; i < degree.length; i++){
            if(degree[i] == 0) queue.push(nodes[i]);
        }

        for(let i = 0; i < nodes.length; i++){
            //처리 안함
            if(queue.length == 0){
                return;
            }
            let node = queue.shift();
            result[i] = node;
            graph[node].forEach(e => {
                let temp = e;
                degree[nodes.indexOf(temp)]--;
                if(degree[nodes.indexOf(temp)] == 0){
                    queue.push(temp);
                }
            })
        }
    }
    topology();
    print(result.join(' '));
}
//A B C E D F G

//A B C D E H F G I //ans
//
//E H G I //queue1
//E H        //queue2
//A B C D         //ansarr

//A B C D E F G H I
//0 1 1 2 3 4 0 3 0


//A B C D E H F G I