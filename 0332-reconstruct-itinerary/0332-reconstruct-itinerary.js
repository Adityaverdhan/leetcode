/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let graph={};

    for(const [dest,arr] of tickets){
        if(!graph[dest]){
            graph[dest]=[];
        }
        graph[dest].push(arr);
    }

    for(const i in graph){
        graph[i].sort();
    }

    let result=[];

    function dfs(node){
        let destination=graph[node] || 0;

        while(destination.length>0){
            let newAirport = destination.shift();
            dfs(newAirport);
        }
        result.push(node);
    }

    dfs("JFK");
    return result.reverse();
};
