import BinaryTree from "./binary-tree";
import TreeNode from "./tree-node";

export const createTreeNode = () => {
  // TreeNode instantiation
  const nodeA = new TreeNode(1);
  const nodeB = new TreeNode(2);
  const nodeC = new TreeNode(3);
  const nodeD = new TreeNode(4);
  const nodeE = new TreeNode(5);
  const nodeF = new TreeNode(6);
  const nodeG = new TreeNode(7);
  const nodeH = new TreeNode(8);
  const nodeI = new TreeNode(9);

  // construct the Binary Tree
  nodeA.left = nodeB;
  nodeA.right = nodeC;
  nodeB.left = nodeD;
  nodeB.right = nodeE;
  nodeE.left = nodeG;
  nodeE.right = nodeH;
  nodeC.left = nodeF;
  nodeF.right = nodeI;

  // link parent pointer
  nodeB.parent = nodeA;
  nodeC.parent = nodeA;
  nodeD.parent = nodeB;
  nodeE.parent = nodeB;
  nodeG.parent = nodeE;
  nodeH.parent = nodeE;
  nodeF.parent = nodeC;
  nodeI.parent = nodeF;

  return nodeA;
};

export const createBinaryTree = () => new BinaryTree(createTreeNode());
