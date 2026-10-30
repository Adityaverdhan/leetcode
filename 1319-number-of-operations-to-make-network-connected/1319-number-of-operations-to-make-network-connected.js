/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    
    if(connections.length<n-1){
        return -1;
    }

    let adj=Array.from(
        {length:n},
        ()=>[]
    );

    for(const [u,v] of connections){
        adj[u].push(v);
        adj[v].push(u);
    }

    let visited=new Array(n).fill(false);

    let component=0;

    function dfs(node){
        visited[node]=true;

        for( const ngh of adj[node]){
            if(!visited[ngh]){
                dfs(ngh);
            }
        }
    }

    for(let i=0; i<n ;i++){
        if(!visited[i]){
            component++;
            dfs(i);
        }
    }

    return component-1;

};