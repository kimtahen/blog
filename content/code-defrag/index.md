---
emoji: 🧱
title: 코드 조각모음
date: '2022-01-01 19:26:04' 
author: kimtahen
tags: programming coding algorithm
categories: code-defrag
---
## height-balanced-BT
> Binary Tree가 height-balanced 인지 확인하는 코드이다.
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
check라는 변수를 넘겨주면서 left tree와 right tree가 balanced 인지 확인한다. 다른 사람의 코드를 보니 굳이 check라는 변수를 만들지 않고, balanced 되어있지 않다면 -1을 리턴하는 방식으로 해도 된다는 점을 알게 되었다.

---
## height-balanced-BST
> 오름차순으로 정렬된 배열을 height-balanced 이진트리로 변환하는 코드이다. 
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
이 코드를 작성하는데 꽤나 애를 먹었다. 아무리 봐도 변환하는 과정이 맞는데 자꾸만 time limit exceed 라고 뜨는 것이었다. 그래서 스마트폰으로 코드를 작성해서 돌려보니 이제는 segmentation fault가 뜬다. 이상해서 꽤 시간이 지나고 다시보니, mid index 를 계산하는 부분이 잘못되었다. (end - start + 1) / 2 라고 했었는데, (start + end) / 2 가 맞다.

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