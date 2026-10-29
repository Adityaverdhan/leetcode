/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let graph=Array.from(
        {length:n},
        ()=>[]
    );

    for(const [u,v] of edges){
        graph[u].push(v);
        graph[v].push(u);
    }

    let visited=new Set();

    function dfs(node){
        if(node===destination) return true;
        visited.add(node);

        for(const n of graph[node]){
            if(!visited.has(n)){
                if(dfs(n)){
                    return true;
                }
            }
        }
        return false;
    }
    return dfs(source);
};