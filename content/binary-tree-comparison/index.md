---
emoji: 🙂️
title: 이진트리의 비교
date: '2022-01-01 16:34:45' 
author: kimtahen
tags: leetcode algorithm binary-tree
categories: algorithm
---
## 서론
leetcode easy 문제부터 풀고 있는 중이다. 그러다가 두 개의 **binary tree**가 똑같은지(문제 1) 그리고 좌우대칭인지 (문제 2)를 확인하여 리턴하는 문제를 풀게되었다. 푸는데는 막 오래 걸리진 않았지만, 그래도 템플릿을 기억해놓으면 좋을 것 같다.

## 코드
### leetcode - TreeNode
기본적으로 leetcode 에서 제공하는 **binary tree**의 형식은 다음과 같다.
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
### 1. solution - Same Tree
```cpp
class Solution {
public:
    bool search(TreeNode* p, TreeNode *q){
        if((!p&&q)||(p&&!q)) return false;
        if(!p&&!q)return true;
        if(p->val != q->val) return false;
        if(!search(p->left, q->left)) return false;
        if(!search(p->right, q->right)) return false;
        return true;
    }
    bool isSameTree(TreeNode* p, TreeNode* q) {
        return search(p,q);
    }
};
```

### 2. solution - Symmetric Tree 
```cpp
class Solution {
public:
    bool symm(TreeNode* p, TreeNode* q){
        if((!p&&q)||(p&&!q)) return false;
        if(!p&&!q) return true;
        if(p->val != q->val) return false;
        if(!symm(p->left, q->right)) return false;
        if(!symm(p->right, q->left)) return false;
        return true;
    }
    bool isSymmetric(TreeNode* root) {
        return symm(root->left, root->right);
    }
};
```
1번과 대부분이 똑같다. 다만, 재귀호출을 하는 부분에서 1번과는 달리 left right의 순서가 다르다. 




