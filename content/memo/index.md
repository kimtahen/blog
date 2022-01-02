---
emoji: 📝 
title: 메모
date: '2022-01-02 19:57:55' 
author: kimtahen
tags: memo
categories: memo
---
## height-balanced-BT
리트코드에서 아래와 같은 코드를 다시 작성해서 제출했더니 틀렸다고 나온다.
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

이 테스트 케이스에서 틀렸다고 나온다. 그런데 이걸 어떻게 binary tree로 그리는지 모르겠다. 코드가 틀린이유도 잘 모르겠다. 더 생각해봐야겠다. 