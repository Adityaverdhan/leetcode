/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function(n, roads) {
    const MOD=1000000007;

    let graph=Array.from(
        {length:n},
        ()=>[]
    );

    for(const [u,v,time] of roads){
        graph[u].push([v,time]);
        graph[v].push([u,time])
    };

    let dist=new Array(n).fill(Infinity);
    let ways=new Array(n).fill(0);

    dist[0]=0;
    ways[0]=1;

    let heap=[[0,0]];

    while(heap.length>0){

        heap.sort((a,b)=>a[0]-b[0]);
        let [currentdist,node]=heap.shift();

        if(currentdist>dist[node]){
            continue;
        }

        for(const[next,time] of graph[node]){

            let newdist=currentdist+time
            if(newdist<dist[next]){
                
                dist[next]=newdist;
                ways[next]=ways[node];
                heap.push([newdist,next]);
            }
            else if( newdist===dist[next]){
                ways[next]=(ways[next]+ways[node])%MOD;
            }
        }

    }
    return ways[n-1];
};