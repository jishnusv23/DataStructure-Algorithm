  // class Graph {
  //   constructor() {
  //     this.adList = [];
  //   }
  //   adVertex(vertex) {
  //     if (!this.adList[vertex]) {
  //       this.adList[vertex] = new Set();
  //     }
  //   }
  //   addEdges(vertex1, vertex2) {
  //     if (!this.adList[vertex1]) {
  //       this.adVertex(vertex1);
  //     }
  //     if (!this.adList[vertex2]) {
  //       this.adVertex(vertex2);
  //     }
  //     this.adList[vertex1].add(vertex2);
  //     this.adList[vertex2].add(vertex1);
  //   }
  //   // removeEdges(vertex1, vertex2) {
  //   //   this.adList[vertex1].delete(vertex2);
  //   //   this.adList[vertex2].delete(vertex1);
  //   // }
  //   // removeVertex(vertex) {
  //   //   if (!this.adList[vertex]) return null;

  //   //   for (let advertex of this.adList[vertex]) {
  //   //     this.removeEdges(vertex, advertex);
  //   //   }
  //   //   delete this.adList[vertex];
  //   // }
  //   removeEdges(vertex1,vertex2){
  //     this.adList[vertex1].delete(vertex2)
  //     this.adList[vertex2].delete(vertex1)
  //   }
  //   removeVertex(vertex){
  //     if(!this.adList[vertex]){
  //       return null

  //     }
  //     for(const advertex of this.adList[vertex]){
  //       this.removeEdges(vertex,advertex)
  //     }
  //     delete this.adList[vertex]
      
  //   }
  //   bfs(startvertex) {
  //     if (!this.adList[vertex]) {
  //       return;
  //     }
  //     let visited = {};
  //     let queue = [];
  //     queue.push(startvertex);
  //     visited[startvertex] = true;
  //     while (queue.length > 0) {
  //       let curnt = queue.shift();
  //       console.log(curnt);
  //       for (let child of this.adList[curnt]) {
  //         if (!visited[child]) {
  //           queue.push(child);
  //           visited[child] = true;
  //         }
  //       }
  //     }
  //     dfshelper(startvertex);
  //     return stack;
  //   }
  //   dfs(startvertex) {
  //     let visited = {};
  //     let stack = [];
  //     const dfshelper = (curnt) => {
  //       if (!this.adList[curnt]) return null;

  //       visited[curnt] = true;
  //       stack.push(curnt);
  //       for (let child of this.adList[curnt]) {
  //         if (!visited[child]) {
  //           dfshelper(child);
  //         }
  //       }
  //     };
  //   }
  //   hasCycle(vertex, visited = new Set(), parent = null) {
  //     visited.add(vertex);

  //     for (let ele of this.adList[vertex]) {
  //       if (!visited.has(ele)) {
  //         console.log('if',ele);
  //         if (this.hasCycle(ele, visited, vertex)) {
  //           return true
  //         }
  //       } else if (ele !== parent) {
  //         console.log('else if',ele);
  //         return true;
  //       }
  //     }

  //     return false;
  //   }
  //   Diplay() {
  //     for (let vertex of this.adList) {
  //       console.log(vertex + "->" + [...this.adList[vertex]]);
  //     }
  //   }
  // }
  // // Create an instance of the Graph class
  // const graph = new Graph();

  // // Add vertices and edges to the graph
  // graph.addEdges(1,3);
  // graph.addEdges(2, 3);
  // graph.addEdges(3, 1); // This edge creates a cycle

  // // Call the hasCycle function with a starting vertex
  // const hasCycle = graph.hasCycle(1);

  // // Check if there's a cycle
  // if (hasCycle) {
  //   console.log("The graph has a cycle.");
  // } else {
  //   console.log("The graph does not have a cycle.");
  // }
class Graph {
  constructor() {
    this.adList = [];
  }
  adVertex(vertex) {
    if (!this.adList[vertex]) {
      this.adList[vertex] = new Set();
    }
  }
  addEdges(vertex1, vertex2) {
    if (!this.adList[vertex1]) {
      this.adVertex(vertex1);
    }
    if (!this.adList[vertex2]) {
      this.adVertex(vertex2);
    }
    this.adList[vertex1].add(vertex2);
    this.adList[vertex2].add(vertex1);
  }
  removeEdges(vertex1, vertex2) {
    this.adList[vertex1].delete(vertex2);
    this.adList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adList[vertex]) {
      return null;
    }
    for (const advertex of this.adList[vertex]) {
      this.removeEdges(vertex, advertex);
    }
    delete this.adList[vertex];
  }
  bfs(startvertex) {
    if (!this.adList[startvertex]) {
      return;
    }
    let visited = {};
    let queue = [];
    let stack = []; // Initialize stack
    queue.push(startvertex);
    visited[startvertex] = true;
    while (queue.length > 0) {
      let curnt = queue.shift();
      stack.push(curnt); // Push current vertex to stack
      for (let child of this.adList[curnt]) {
        if (!visited[child]) {
          queue.push(child);
          visited[child] = true;
        }
      }
    }
    console.log(stack); // Print stack
    return stack; // Return stack
  }
  dfs(startvertex) {
    let visited = {};
    let stack = [];
    const dfshelper = (curnt) => {
      if (!this.adList[curnt]) return null;

      visited[curnt] = true;
      stack.push(curnt);
      for (let child of this.adList[curnt]) {
        if (!visited[child]) {
          dfshelper(child);
        }
      }
    };
    dfshelper(startvertex); 
    console.log(stack); // Print stack
    return stack; // Return stack
  }
  hasCycle(vertex, visited = new Set(), parent = null) {
    visited.add(vertex);
    for (let ele of this.adList[vertex]) {
      if (!visited.has(ele)) {
        console.log("if", ele);
        if (this.hasCycle(ele, visited, vertex)) {
          return true;
        }
      } else if (ele !== parent) {
        console.log("else if", ele);
        return true;
      }
    }
    return false;
  }
  Diplay() {
    for (let vertex of this.adList) {
      console.log(vertex + "->" + [...this.adList[vertex]]);
    }
  }
}
// Create an instance of the Graph class
const graph = new Graph();

// Add vertices and edges to the graph
graph.addEdges(1, 3);
graph.addEdges(2, 3);
graph.addEdges(3, 1); // This edge creates a cycle

// Call the hasCycle function with a starting vertex
const hasCycle = graph.hasCycle(1);

// Check if there's a cycle
if (hasCycle) {
  console.log("The graph has a cycle.")
} else {
  console.log("The graph does not have a cycle.")
}
