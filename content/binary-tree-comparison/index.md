---
emoji: ๐๏ธ
title: ์ด์งํธ๋ฆฌ์ ๋น๊ต
date: '2022-01-01 16:34:45' 
author: kimtahen
tags: leetcode algorithm binary-tree
categories: algorithm
---
## ์๋ก 
leetcode easy ๋ฌธ์ ๋ถํฐ ํ๊ณ  ์๋ ์ค์ด๋ค. ๊ทธ๋ฌ๋ค๊ฐ ๋ ๊ฐ์ **binary tree**๊ฐ ๋๊ฐ์์ง(๋ฌธ์  1) ๊ทธ๋ฆฌ๊ณ  ์ข์ฐ๋์นญ์ธ์ง (๋ฌธ์  2)๋ฅผ ํ์ธํ์ฌ ๋ฆฌํดํ๋ ๋ฌธ์ ๋ฅผ ํ๊ฒ๋์๋ค. ํธ๋๋ฐ๋ ๋ง ์ค๋ ๊ฑธ๋ฆฌ์ง ์์์ง๋ง, ๊ทธ๋๋ ํํ๋ฆฟ์ ๊ธฐ์ตํด๋์ผ๋ฉด ์ข์ ๊ฒ ๊ฐ๋ค.

## ์ฝ๋
### leetcode - TreeNode
๊ธฐ๋ณธ์ ์ผ๋ก leetcode ์์ ์ ๊ณตํ๋ **binary tree**์ ํ์์ ๋ค์๊ณผ ๊ฐ๋ค.
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
1๋ฒ๊ณผ ๋๋ถ๋ถ์ด ๋๊ฐ๋ค. ๋ค๋ง, ์ฌ๊ทํธ์ถ์ ํ๋ ๋ถ๋ถ์์ 1๋ฒ๊ณผ๋ ๋ฌ๋ฆฌ left right์ ์์๊ฐ ๋ค๋ฅด๋ค. 




