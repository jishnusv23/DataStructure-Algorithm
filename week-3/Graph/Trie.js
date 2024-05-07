class TrieNode{
    constructor(){
        this.children={}
        this.isEndofword=false
    }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let curnt = this.root;
    for (let char of word) {
      if (!curnt.children[char]) {
        curnt.children[char] = new TrieNode();
      }
      curnt = curnt.children[char];
    }
    curnt.isEndofword = true;
  }
  Search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndofword;
  }
  Print(node = this.root, currntword = "", result = []) {
    if (node.isEndofword) {
      result.push(currntword);
    }
    for (let char in node.children) {
      this.Print(node.children[char], currntword + char, result);
    }
    return result;
  }
  AutoComplete(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    let list = [];
    this.Collectword(node, word, list);
    return list;
  }
  Collectword(node, word, list) {
    if (node.isEndofword) {
      list.push(word);
    }
    for (let char in node.children) {
      this.Collectword(node.children[char], word + char, list);
    }
  }
  findLongestWord() {
    let longest = "";
    let queue = [[this.root, ""]];

    while (queue.length) {
      const [node, word] = queue.shift();
      if (node.isEndofword && word.length > longest.length) {
        longest = word;
      }

      for (let char in node.children) {
        queue.push([node.children[char], word + char]);
      }
    }
    return longest;
  }
  FindShortest() {
    let shortest = "";
    const queue = [[this.root, ""]];
    while (queue.length) {
      let [node, word] = queue.shift();

      if (
        node.isEndword &&
        (shortest === "" || word.length < shortest.length)
      ) {
        shortest = word;
      }

      for (let char in node.children) {
        queue.push([node.children[char], word + char]);
      }
    }
    return shortest;
  }
}
const trie=new Trie()
trie.insert("apple");
trie.insert("banana");
trie.insert("application");
console.log(trie.Search("banana")); 
console.log(trie.Search("orange")); 
console.log(trie.Search("bana")); 
// console.log(trie.Print())
// const autoCompleteList = trie.AutoComplete("app");


// console.log(autoCompleteList);
console.log(trie.findLongestWord());