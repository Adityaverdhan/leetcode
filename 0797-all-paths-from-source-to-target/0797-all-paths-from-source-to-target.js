/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let destination=graph.length-1;
    let result=[];

    function allpaths(node,path){
        if(node===destination){
            result.push([...path]);
            return;
        }

        for(const n of graph[node]){
            path.push(n);
            allpaths(n,path);
            path.pop();
        }
    }

    allpaths(0,[0]);
    return result;
};
