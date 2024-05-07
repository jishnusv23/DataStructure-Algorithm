class Graph {
  constructor() {
    this.adlist = []
  }
  addVertex(vertex) {
    if (!this.adlist[vertex]) {
      this.adlist[vertex] = new Set()
    }
  }
  addEdges(vertex1, vertex2) {
    if (!this.adlist[vertex1]) {
      this.addVertex[vertex1]
    }
    if (!this.adlist[vertex2]) {
      this.addVertex[vertex2]
    }
    this.adlist[vertex1].add(vertex2)
    this.adlist[vertex2].add(vertex1)
  }
  bfs(startvertex) {
    if (!this.adlist[startvertex]) {
      return 
    }
    let visited = {};
    let queue = [];
    queue.push(startvertex);
    visited[startvertex] = true;
    while (queue.length > 0) {
      const currentvertex = queue.shift();
      console.log(currentvertex);
      for (const child of this.adlist[currentvertex]) {
        if (!visited[child]) {
          queue.push(child);
          visited[child] = true;
        }
      }
    }
  }
  dfs(startvertex) {
    const visited = {};
    const result = [];
    const dfshelper = (currentvertex) => {
      if (!currentvertex) return null
      result.push(currentvertex);
      visited[currentvertex] = true;
      for (const child of this.adlist[currentvertex]) {
        if (!visited[child]) {
          dfshelper(child);
        }
      }
    };
  dfshelper(startvertex)
  return result
}
  Display() {
    for (let vertex in this.adlist) {
      console.log(vertex + "->" + [...this.adlist[vertex]]);
    }
  }
}
let vertices = ["A", "B", "C", "D"];
        let edge = [
        ["A", "B"],
        ["B", "C"],
        ["C", "A"],
        ["A", "D"],
        ];
let graph = new Graph();    
vertices.forEach((vertex) => graph.addVertex(vertex));
edge.forEach((edge) => graph.addEdges(...edge));
// graph.Display()
graph.bfs("A");

// console.log(graph.dfs("M"));