---
emoji: 🧱
title: 코드 조각모음
date: '2022-01-01 19:26:04' 
author: kimtahen
tags: programming coding algorithm
categories: code-defrag
---
## binary-tree-maxdepth
> 이진트리에서 depth를 구하는 코드이다. 아래와 같이 max를 활용해서 left tree와 right tree를 탐색하여 둘 중에 큰 값을 반환하는 방식으로 재귀호출하여 정답을 구할 수 있다.
```cpp
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
```
```cpp
class Solution {
public:
    int maxDepth(TreeNode* root) {
        if(!root)return 0;
        return max(1+maxDepth(root->left),1+maxDepth(root->right));
    }
};
```
[출처](https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/1658689/Two-recursive-solutions-in-C%2B%2B)

```toc
```