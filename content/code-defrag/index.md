---
emoji: ๐งฑ
title: ์ฝ๋ ์กฐ๊ฐ๋ชจ์
date: '2022-01-01 19:26:04' 
author: kimtahen
tags: programming coding algorithm
categories: code-defrag
---
## height-balanced-BT
> Binary Tree๊ฐ height-balanced ์ธ์ง ํ์ธํ๋ ์ฝ๋์ด๋ค.
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
    int search(TreeNode* t, bool& check){
        if(!t) return 0;
        int left = search(t->left, check) + 1;
        if(!check) return false;
        int right = search(t->right, check) + 1;
        if(!check) return false;
        int diff = left < right ? right - left : left - right;
        if(diff>1)check = false;
        return max(left, right);
    }
    bool isBalanced(TreeNode* root) {
        bool check = true;
        search(root, check);
        return check;
    }
};
```
check๋ผ๋ ๋ณ์๋ฅผ ๋๊ฒจ์ฃผ๋ฉด์ left tree์ right tree๊ฐ balanced ์ธ์ง ํ์ธํ๋ค. ๋ค๋ฅธ ์ฌ๋์ ์ฝ๋๋ฅผ ๋ณด๋ ๊ตณ์ด check๋ผ๋ ๋ณ์๋ฅผ ๋ง๋ค์ง ์๊ณ , balanced ๋์ด์์ง ์๋ค๋ฉด -1์ ๋ฆฌํดํ๋ ๋ฐฉ์์ผ๋ก ํด๋ ๋๋ค๋ ์ ์ ์๊ฒ ๋์๋ค.

---
## height-balanced-BST
> ์ค๋ฆ์ฐจ์์ผ๋ก ์ ๋ ฌ๋ ๋ฐฐ์ด์ height-balanced ์ด์งํธ๋ฆฌ๋ก ๋ณํํ๋ ์ฝ๋์ด๋ค. 
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
    void avl(TreeNode** t, vector<int>& nums, int start, int end){
        if (start>end) return;
        int mid = (start + end)/2;
        *t = new TreeNode(nums[mid]);
        avl(&((*t)->left),nums,start,mid-1);
        avl(&((*t)->right),nums,mid+1,end);
    }
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        TreeNode* root = new TreeNode(0);     
        int start = 0;
        int end = nums.size()-1;
        avl(&root,nums, start, end);
        return root;
    }
};
```
์ด ์ฝ๋๋ฅผ ์์ฑํ๋๋ฐ ๊ฝค๋ ์ ๋ฅผ ๋จน์๋ค. ์๋ฌด๋ฆฌ ๋ด๋ ๋ณํํ๋ ๊ณผ์ ์ด ๋ง๋๋ฐ ์๊พธ๋ง time limit exceed ๋ผ๊ณ  ๋จ๋ ๊ฒ์ด์๋ค. ๊ทธ๋์ ์ค๋งํธํฐ์ผ๋ก ์ฝ๋๋ฅผ ์์ฑํด์ ๋๋ ค๋ณด๋ ์ด์ ๋ segmentation fault๊ฐ ๋ฌ๋ค. ์ด์ํด์ ๊ฝค ์๊ฐ์ด ์ง๋๊ณ  ๋ค์๋ณด๋, mid index ๋ฅผ ๊ณ์ฐํ๋ ๋ถ๋ถ์ด ์๋ชป๋์๋ค. (end - start + 1) / 2 ๋ผ๊ณ  ํ์๋๋ฐ, (start + end) / 2 ๊ฐ ๋ง๋ค.

---
## binary-tree-maxdepth
> ์ด์งํธ๋ฆฌ์์ depth๋ฅผ ๊ตฌํ๋ ์ฝ๋์ด๋ค. ์๋์ ๊ฐ์ด max๋ฅผ ํ์ฉํด์ left tree์ right tree๋ฅผ ํ์ํ์ฌ ๋ ์ค์ ํฐ ๊ฐ์ ๋ฐํํ๋ ๋ฐฉ์์ผ๋ก ์ฌ๊ทํธ์ถํ์ฌ ์ ๋ต์ ๊ตฌํ  ์ ์๋ค.
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
[์ถ์ฒ](https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/1658689/Two-recursive-solutions-in-C%2B%2B)

```toc
```