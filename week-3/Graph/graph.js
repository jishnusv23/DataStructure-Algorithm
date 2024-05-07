class Graph {
  constructor() {
    this.adList = [];
  }
  addVertex(vertex) {
    if (!this.adList[vertex]) {
      this.adList[vertex] = new Set();
    }
  }
  adEdge(vertex1, vertex2) {
    if (!this.adList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adList[vertex1].add(vertex2);
    this.adList[vertex2].add(vertex1);
  }           
  removeEdge(vertex1, vertex2) {
    this.adList[vertex1].delete(vertex2);
    this.adList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adList[vertex]) {
      return;
    }
    for (let advertex of this.adList[vertex]) {
        this.removeEdge(vertex,advertex)
    }
    delete this.adList[vertex]
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adList[vertex1].has(vertex2) && this.adList[vertex2].has(vertex1)
    );
  }
  Display() {
    for (let vertex in this.adList) {
      console.log(vertex + "->" + [...this.adList[vertex]]);
    }
  }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.adEdge("A", "B");
graph.adEdge("B", "C");
graph.Display();
// graph.removeVertex("B");
// graph.Display();
