---
emoji: ๐ 
title: ๋ฉ๋ชจ
date: '2022-01-02 19:57:55' 
author: kimtahen
tags: memo
categories: memo
---
## height-balanced-BT
๋ฆฌํธ์ฝ๋์์ ์๋์ ๊ฐ์ ์ฝ๋๋ฅผ ๋ค์ ์์ฑํด์ ์ ์ถํ๋๋ ํ๋ ธ๋ค๊ณ  ๋์จ๋ค.
```cpp
class Solution {
public:
    int search(TreeNode* t){
        if(!t) return 0;
        
        int left = search(t->left) + 1;
        if(left==-1) return -1;
        
        int right = search(t->right) + 1;
        if(right==-1) return -1;
        
        int diff = left < right ? right - left : left - right;
        if(diff>1) return -1;
        return max(left, right);
    }
    bool isBalanced(TreeNode* root) {
        int height = search(root);
        bool result = height == -1 ? false : true; 
        return result;
    }
};
```
> [1,2,2,3,null,null,3,4,null,null,4]

์ด ํ์คํธ ์ผ์ด์ค์์ ํ๋ ธ๋ค๊ณ  ๋์จ๋ค. ๊ทธ๋ฐ๋ฐ ์ด๊ฑธ ์ด๋ป๊ฒ binary tree๋ก ๊ทธ๋ฆฌ๋์ง ๋ชจ๋ฅด๊ฒ ๋ค. ์ฝ๋๊ฐ ํ๋ฆฐ์ด์ ๋ ์ ๋ชจ๋ฅด๊ฒ ๋ค. ๋ ์๊ฐํด๋ด์ผ๊ฒ ๋ค. 