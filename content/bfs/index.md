---
emoji: ๐ฐ๏ธ
title: ์ต๋จ๊ฑฐ๋ฆฌ๊ณ์ฐ, ๋ชจ๋  ์ต๋จ๊ฑฐ๋ฆฌ๊ฒฝ๋ก ๊ตฌํ๊ธฐ
date: '2022-01-16 13:42:48' 
author: kimtahen
tags: algorithm bfs
categories: algorithm
---
## ์๋ก 
์ดํ ์ , ๊ฐ๋งํ ๋ฉ๋๋ฆฌ๋ค๊ฐ BFS ์๊ณ ๋ฆฌ์ฆ์ผ๋ก ์ต๋จ๊ฑฐ๋ฆฌ๋ฅผ ๊ตฌํ๋ ๋ฒ์ ๋ํด์ ๋ค์ ๊ณ ๋ฏผํด๋ณด์๋ค. BFS์ queue๋ก ๊ฐ์ depth ์์ผ๋ก ์์น ๋ฐฐ์ด์ ํ์ํ๋ฉฐ ๋ฐฐ์ด์ ๊ฐ์ 1์ฉ ๋ํด์ฃผ๋ ๋ฐฉ์์ผ๋ก ์ต๋จ๊ฑฐ๋ฆฌ๋ฅผ ๊ณ์ฐํ  ์ ์๋ค. ๊ทธ๋ฌ๋ ์ค, ์ด๋ป๊ฒ ํ๋ฉด ์ต๋จ๊ฑฐ๋ฆฌ์ธ ๋ชจ๋  ๊ฒฝ๋ก๋ฅผ ์ถ๋ ฅํ  ์ ์์๊น? ํ๋ ๊ถ๊ธ์ฆ์ด ์๊ฒผ๊ณ  BFS์ ์ฌ์ฉํด์ ์ฝ๋ฉ์ ํด๋ดค๋ค. 

### ๐ค๊ณ ๋ฏผ
์ต๋จ๊ฑฐ๋ฆฌ ๊ณ์ฐํ๋ ์ฝ๋๋ ์ด๋ ต์ง ์๊ฒ ์์ฑํ  ์ ์์์ง๋ง ๋๋ฒ์งธ๋ ์๊ฐ์ด ์กฐ๊ธ ๊ฑธ๋ ธ๋ค. ๋ฌด์๋ณด๋ค ๊ฒฝ๋ก๋ฅผ ์ ์ฅํ๊ธฐ ์ํด์๋ ๋ค์ฐจ์ ๋ฐฐ์ด์ ์ฌ์ฉํด์ผํ๋๋ฐ, vector๋ฅผ ์ด์ฉํ ๋ค์ฐจ์๋ฐฐ์ด์ ๋ด๊ฒ ์ต์ํ์ง ์์์ ๊ฒ์ํ๋ ์๊ฐ์ด ์ค๋๊ฑธ๋ ธ๋ค. 

```cpp
vector<vector<pair<int,int>>>* route[row][col];
for(int i = 0; i<row; i++){
    for(int j = 0; j<col; j++){
        route[i][j] = new vector<vector<pair<int,int>>>;
    }
}
```
๊ฒฐ๊ตญ ๊ฒฝ๋ก๋ฅผ ์ ์ฅํ๊ธฐ ์ํด์ ์์๊ฐ์ ๊ตฌ์กฐ๋ฅผ ์ฌ์ฉํ๋ค. pair 1๋ฒ์ vector 4๋ฒ์ ์ค์ฒฉ์์ผ์ ์ฒ์์ ํด๋ณด๋ ค๊ณ  ํ๋๋ฐ ์ด๋ ๊ฒ ์์ฑํด๋ณด๋ ๊ฒฝ๋ก๋ฅผ ์ ์ฅํ๋ vector์ size๋ฅผ ์ด๊ธฐํ ํด์ฃผ์ด์ผ ํ๋ ๋ฌธ์ ์ ๋ง์ฃผ์ณค๋ค. ์กฐ๊ธ ๋ ์ฐพ์๋ณด๋ฉด ์ด๊ฒ๋ ํด๊ฒฐํ  ์ ์๋ ๋ฐฉ๋ฒ์ด ์์ํ์ง๋ง ์ผ๋จ์ ์๊ฐ๋๋๋๋ก, ์์ ์ฝ๋์ฒ๋ผ ์์ฑํ๋ค. `route[i][j]` ๋ ์์์ ์ผ๋ก๋ถํฐ ๊ฐ `i,j`๊น์ง์ ์ต๋จ ๊ฒฝ๋ก๋ฅผ ์ ์ฅํ๋ค. ์ผ๊ด์ ์ผ๋ก route[i][j] ์ ๊ฒฝ๋ก๋ฅผ ์ ์ฅํ๋ ์๋ฃ๊ตฌ์กฐ๋ฅผ ํ ๋นํด์ค๋ค.

## ์ฝ๋

### 1. ์ต๋จ๊ฑฐ๋ฆฌ๊ณ์ฐ
#### ์ ์ฒด ์ฝ๋
```cpp
#include <iostream>
#include <string>
#include <cstring>
#include <vector>
#include <queue>
#include <map>
#define row 5
#define col 5
using namespace std;

class Solution {
public:
    void display(vector<vector<int>> t){
        for(auto i = t.begin(); i!=t.end(); i++){
            for(auto j = i->begin(); j!= i->end(); j++){
                printf("%3d",*j);
            } 
            printf("\n");
        }
        printf("\n");
    }

    int dx[4] ={-1,0,1,0};
    int dy[4]= {0,-1,0,1};
    void bfs(vector<vector<int>>& board, int x, int y){
        queue<pair<int,int>> q;
        q.push({x,y});
        for(;!q.empty();){
            int cx = q.front().first;
            int cy = q.front().second;
            for(int i = 0; i<4; i++){
                if(0<=cx+dx[i] && cx+dx[i]<board.size() && 0<=cy+dy[i] && cy+dy[i]<board[0].size() && board[cx+dx[i]][cy+dy[i]]==0){
                    board[cx+dx[i]][cy+dy[i]] = board[cx][cy] + 1;
                    q.push({cx+dx[i],cy+dy[i]});
                }
            }
            q.pop();
        }
    }

};
int main() {
    Solution s;
    vector<vector<int>> board = {
        {-1,-1,-1,-1,-1},
        {0,0,0,-1,0},
        {-1,-1,0,-1,-1},
        {0,-1,0,0,0},
        {0,-1,0,0,0},
    };

    s.display(board);
    s.bfs(board,1,0);
    s.display(board);
} 
```

#### output
leetcode์ solution์ ์์ฑํ๋ ๊ฒ์ฒ๋ผ ์์ฑํด๋ณด์๋ค. ์ ์ฝ๋๋ฅผ ์คํํ๋ฉด ์๋์ ๊ฐ์ด ์ถ๋ ฅ๋๋ค. ์ถ๋ฐ์ ์ `{1,0}` ์ด๋ค. 
```
 -1 -1 -1 -1 -1
  0  0  0 -1  0
 -1 -1  0 -1 -1
  0 -1  0  0  0
  0 -1  0  0  0

 -1 -1 -1 -1 -1
  2  1  2 -1  0
 -1 -1  3 -1 -1
  0 -1  4  5  6
  0 -1  5  6  7
``` 

์ฒซ๋ฒ์งธ ๋ฐฐ์ด์ input์ด๋ค. -1์ ๊ฐ ์ ์๋ ๊ธธ์ด๊ณ , 0์ด ๊ฐ ์ ์๋ ๊ธธ์ด๋ค. ๋๋ฒ์งธ ๋ฐฐ์ด์ `{1,0}` ์ผ๋ก๋ถํฐ ๊ฐ ์ง์ ๊น์ง์ ์ต๋จ๊ฑฐ๋ฆฌ์ด๋ค. 


BFS ์ฝ๋๋ ์๋์ ๊ฐ๋ค.
#### bfs
```cpp
int dx[4] ={-1,0,1,0}; 
int dy[4]= {0,-1,0,1};
//dx์ dy ๋ฐฐ์ด์ ์ํ์ข์ฐ์ ์์น๋ฅผ ๊ณ์ฐํ  ๋ ์ฌ์ฉ๋๋ค.
void bfs(vector<vector<int>>& board, int x, int y){
    queue<pair<int,int>> q;
    //bfs๋ฅผ ์ฌ์ฉํ๊ธฐ ์ํ์ฌ queue๋ฅผ ์ฌ์ฉํ๋ค.
    q.push({x,y});
    //์ฒ์ ์์น์ธ x,y๋ฅผ queue์ ๋ฃ์ด์ค๋ค.

    //queue์์ ์์๋ฅผ ํ๋์ฉ ๊บผ๋ด๊ณ , queue์ ๋จ์์๋ ์์๊ฐ ์์ ๋๊น์ง ๋ฐ๋ณตํ๋ค.
    for(;!q.empty();){
        int cx = q.front().first;
        int cy = q.front().second;
        //queue์์ ์์๋ฅผ ํ๋ ๊บผ๋ธ๋ค.

        //dx์ dy๋ฅผ ์ด์ฉํด์ ์ํ์ข์ฐ ์์น๋ฅผ ํ์ํ๋ค.
        for(int i = 0; i<4; i++){
            if(0<=cx+dx[i] && cx+dx[i]<board.size() && 0<=cy+dy[i] && cy+dy[i]<board[0].size() && board[cx+dx[i]][cy+dy[i]]==0){
                //ํ์ฌ ํ์ํ๋ ์์น(์,ํ,์ข,์ฐ)๊ฐ board์ ๋ฒ์๋ฅผ ๋ฒ์ด๋์ง ์๊ณ , ํ์ํ์ ์ด ์๋ ๊ฒฝ์ฐ(board์ ๊ฐ์ด 0) ํ์ํ๋ค.

                board[cx+dx[i]][cy+dy[i]] = board[cx][cy] + 1;
                //ํ์ฌ ์์น๋ก๋ถํฐ ๊ฑฐ๋ฆฌ๊ฐ 1 ๋ฉ์ด์ง๊ธฐ ๋๋ฌธ์ board์ 1์ ๋ํด์ค๋ค.

                q.push({cx+dx[i],cy+dy[i]});
                //queue์ ๋ฃ์์ผ๋ก์จ ๊ทธ ๋ค์ ํ์์ ๊ธฐ์ค์ ์ด ๋  ์ ์๋๋ก ํ๋ค.
            }
        }
        q.pop();
    }
}
```


### 2. ์ต๋จ๊ฒฝ๋ก๊ตฌํ๊ธฐ
#### ์ ์ฒด ์ฝ๋
```cpp
#include <iostream>
#include <string>
#include <cstring>
#include <vector>
#include <queue>
#include <map>
#define row 5
#define col 5
using namespace std;

class Solution {
public:
    void display(vector<vector<int>> t){
        for(auto i = t.begin(); i!=t.end(); i++){
            for(auto j = i->begin(); j!= i->end(); j++){
                printf("%3d",*j);
            } 
            printf("\n");
        }
        printf("\n");
    }
    void displaypair1d(vector<vector<pair<int,int>>> r){
        for(auto i = r.begin(); i!=r.end(); i++){
            for(auto j = i->begin(); j!=i->end(); j++){
                printf("[%d][%d],",j->first,j->second);
            }
            printf("\n");
        }
        printf("\n");
    }

    void display_route(vector<vector<pair<int,int>>> r, int x, int y){
        for(auto it = r.begin(); it!=r.end(); it++ ){
            int palet[row][col] = {{0}};
            it->push_back({x,y});
            for(auto i = it->begin(); i!=it->end(); i++){
                palet[i->first][i->second] = 1;
            }

            for(int i = 0; i<row; i++){
                for(int j = 0; j<col; j++){
                
                    if(palet[i][j]==1){
                        printf("%3d",1);
                    }
                    else{
                        printf("   ");
                    }
                }
                printf("\n");
            }
        printf("\n");
        }
    }

    int dx[4] ={-1,0,1,0};
    int dy[4]= {0,-1,0,1};
    void shortest_route(vector<vector<int>>& board, vector<vector<pair<int,int>>>* route[row][col], int length, queue<pair<int,int>> task){
        if(task.empty())return;
        queue<pair<int,int>> next_task;
        for(;!task.empty();){
            int cx = task.front().first;
            int cy = task.front().second;
            for(int i = 0; i<4; i++){
                if(0<=cx+dx[i] && cx+dx[i]<board.size() && 0<=cy+dy[i] && cy+dy[i]<board[0].size() && (board[cx+dx[i]][cy+dy[i]] == 0 || board[cx+dx[i]][cy+dy[i]]==length+1)){
                    int org_value = board[cx+dx[i]][cy+dy[i]];
                    board[cx+dx[i]][cy+dy[i]] = board[cx][cy] + 1;
                    if(length==0){
                        vector<pair<int,int>> v;
                        v.push_back({cx,cy});
                        route[cx+dx[i]][cy+dy[i]] -> push_back(v);
                    }
                    else{
                        for(auto it = route[cx][cy]->begin(); it!=route[cx][cy]->end(); it++){
                            vector<pair<int,int>> v = *it;
                            v.push_back({cx,cy});
                            route[cx+dx[i]][cy+dy[i]] -> push_back(v);
                        }
                    }
                    if(org_value==0){
                        next_task.push({cx+dx[i],cy+dy[i]});
                    }
                }
            }
            task.pop();
        } 
        shortest_route(board,route,length+1,next_task);
    }
    
};
int main() {
    Solution s;
    vector<vector<int>> board = {
        {-1,-1,-1,-1,-1},
        {0,0,0,-1,0},
        {-1,-1,0,-1,-1},
        {0,-1,0,0,0},
        {0,-1,0,0,0},
    };
    vector<vector<pair<int,int>>>* route[row][col];
    for(int i = 0; i<row; i++){
        for(int j = 0; j<col; j++){
            route[i][j] = new vector<vector<pair<int,int>>>;
        }
    }

    queue<pair<int,int>> task;
    task.push({1,0});
    s.display(board);
    s.shortest_route(board,route,0,task);
    s.display(board);
    s.display_route(*route[4][4],4,4);
} 
```

#### output
์ ์ฝ๋๋ฅผ ์คํํ๋ฉด ์๋์ ๊ฐ์ด ์ถ๋ ฅ๋๋ค.
```
 -1 -1 -1 -1 -1
  0  0  0 -1  0
 -1 -1  0 -1 -1
  0 -1  0  0  0
  0 -1  0  0  0

 -1 -1 -1 -1 -1
  2  1  2 -1  0
 -1 -1  3 -1 -1
  0 -1  4  5  6
  0 -1  5  6  7

               
  1  1  1      
        1      
        1      
        1  1  1

               
  1  1  1      
        1      
        1  1   
           1  1

               
  1  1  1      
        1      
        1  1  1
              1
```
์ฒซ๋ฒ์งธ ๋ฐฐ์ด๊ณผ ๋๋ฒ์งธ ๋ฐฐ์ด์ ์์ `์ต๋จ๊ฑฐ๋ฆฌ๊ณ์ฐ`๊ณผ ๊ฐ๋ค. ๊ทธ๋ฆฌ๊ณ  ๋ฐ์ 3๊ฐ๋ {4,4} ๊น์ง์ ๋ชจ๋  ์ต๋จ ๊ฒฝ๋ก๋ฅผ ์ถ๋ ฅํ ๊ฒ์ด๋ค. 

#### shortest_route
`shortest_route` ํจ์๋ ์๋์ ๊ฐ๋ค. ์ ์ฒด์ ์ธ ์ฝ๋๋ bfs์ ๋น์ทํ๋ค. ํ์ง๋ง, ์ฌ๊ทํจ์๋ฅผ ์ด์ฉํด์ ํ์ฌํ์ํ๊ณ  ์๋ ์์น์ length๋ฅผ ๊ณ์ฐํ ์ ์๋๋ก ํ๋ค.
```cpp
int dx[4] ={-1,0,1,0};
int dy[4]= {0,-1,0,1};
// ํ์ํ๋ ์์น๋ฅผ ๊ณ์ฐํ๊ธฐ ์ํด ์ฌ์ฉ๋๋ค. (์,ํ,์ข,์ฐ)

void shortest_route(vector<vector<int>>& board, vector<vector<pair<int,int>>>* route[row][col], int length, queue<pair<int,int>> task){

    
    if(task.empty())return;
    //๊ธฐ์ ์ฌ๊ฑด : task๊ฐ ๋น์ด์์ผ๋ฉด ์ฌ๊ทํธ์ถ์ ์ข๋ฃํ๋ค.

    queue<pair<int,int>> next_task;
    //๋ค์ ํ์์ ๊ธฐ์ค์ ์ด ๋๋ ์์น๋ฅผ ์ ์ฅํ๋ค.

    //task๊ฐ ๋น ๋๊น์ง ๋ฐ๋ณตํ์ฌ ์คํํ๋ค.
    for(;!task.empty();){
        int cx = task.front().first;
        int cy = task.front().second;
        //task์์ ์์๋ฅผ ํ๋ ๊บผ๋ธ๋ค.

        for(int i = 0; i<4; i++){
            if(0<=cx+dx[i] && cx+dx[i]<board.size() && 0<=cy+dy[i] && cy+dy[i]<board[0].size() && (board[cx+dx[i]][cy+dy[i]] == 0 || board[cx+dx[i]][cy+dy[i]]==length+1)){
            //ํ์ฌ ํ์ํ๋ ์์น(์,ํ,์ข,์ฐ)๊ฐ board๋ฅผ ๋ฒ์ด๋์ง ์๊ณ , ํ์ํ์ง ์์๊ฑฐ๋ 'ํ์ฌ์ length' + 1์ธ ๊ฒฝ์ฐ์๋ง ํ์์ ํ๋ค. ์ด ๋๋ฒ์งธ ๊ฒฝ์ฐ๊ฐ ํ์ํด์ ์ฌ๊ทํจ์๋ฅผ ์์ฑํด์ ํ์ฌ ํ์ํ๋ ์์น์ length๋ฅผ ๊ตฌํ  ์ ์๋๋ก ํ์๋ค. 'ํ์ฌ์ length' + 1์ธ ๊ฒฝ์ฐ์๋ ํ์์ ํ๋ ์ด์ ๋ '์ต๋จ๊ฑฐ๋ฆฌ์ธ ๊ฒฝ์ฐ์๋ ์ฌ๋ฌ๊ฐ์ง ๊ฒฝ๋ก๊ฐ ์์ ์๋ ์๊ธฐ ๋๋ฌธ์ด๋ค.'

                int org_value = board[cx+dx[i]][cy+dy[i]];
                //๋ฏธ๋ฆฌ ์๋์ board์ ๊ฐ์ ์ ์ฅํด์ค๋ค.

                board[cx+dx[i]][cy+dy[i]] = board[cx][cy] + 1;
                //ํ์ํ๋ ์์น๋ ํ์ฌ ์์น๋ณด๋ค ๊ฑฐ๋ฆฌ๊ฐ 1 ๋์ด๋๊ธฐ ๋๋ฌธ์, ๋ํด์ ์ ์ฅํ๋ค.

                //length๊ฐ 0์ธ ๊ฒฝ์ฐ๋ shortest_route๊ฐ ์ฒ์์ผ๋ก ํธ์ถ๋๋ ๊ฒฝ์ฐ์ด๋ค. ์ฒ์์ route๋ ์๋ฃ๊ตฌ์กฐ๋ง ํ ๋นํด๋๊ณ , ์๋ฌด ๊ฐ๋ ๋ค์ด๊ฐ ์์ง ์๋ค. else์ ๊ฒฝ์ฐ๋ง ์ฌ์ฉํ๋ค๋ฉด ์๋ฌด ๊ฐ๋ ์๊ธฐ ๋๋ฌธ์ ๊ฒฝ๋ก๊ฐ ์ ์ฅ๋์ง ์๋๋ค. ๋ฐ๋ผ์ ๊ฒฝ์ฐ๋ฅผ ๋๋์ด๋์๋ค.
                if(length==0){
                    vector<pair<int,int>> v;
                    v.push_back({cx,cy});
                    route[cx+dx[i]][cy+dy[i]] -> push_back(v);
                }
                else{
                    //ํ์ฌ ํ์ํ๋ ์์น์ route์ ํ์ฌ๊น์ง์ ๊ฒฝ๋ก๋ฅผ ์ ์ฅํด์ค๋ค. ํ์ฌ๊น์ง์ ๊ฒฝ๋ก๋ ์ฌ๋ฌ๊ฐ๊ฐ ์์ ์๋ ์๋ค. ๋ฐ๋ผ์ ํ์ฌ ์์น์ route์ ์ ์ฅ๋ ๋ชจ๋  ๊ฒฝ๋ก์ ๋ํ์ฌ ํ์ฌ ์์น๋ฅผ ์ถ๊ฐํด์ฃผ์ด, ํ์ฌ ํ์ํ๊ณ  ์๋ route์ ์ ์ฅํด์ค๋ค.
                    for(auto it = route[cx][cy]->begin(); it!=route[cx][cy]->end(); it++){
                        vector<pair<int,int>> v = *it;
                        v.push_back({cx,cy});
                        route[cx+dx[i]][cy+dy[i]] -> push_back(v);
                    }
                }

                //ํ์ฌ ํ์ํ๋ ์์น์ ์๋ board ๊ฐ์ด 0์ธ ๊ฒฝ์ฐ๋ ์ฒ์ ํ์ํ๋ ๊ฒฝ์ฐ์ด๋ค. ์ด ๊ฒฝ์ฐ์๋ง next_task ์ ๋ฃ์ด์ ๋ค์ ๊ธฐ์ค์ ์ด ๋  ์ ์๋๋ก ํ๋ค. 'ํ์ฌ์ length' + 1 ์ธ ๊ฒฝ์ฐ์๋ next_task์ ๋ฃ๋๋ค๋ฉด ์ค๋ณต ํ์์ ํ  ์๋ ์๊ธฐ ๋๋ฌธ์ ์ฒ์ ํ์ํ๋ ๊ฒฝ์ฐ๋ง ๋ค์์ ๊ธฐ์ค์ ์ด ๋  ์ ์๋๋ก ํ๋ค.
                if(org_value==0){
                    next_task.push({cx+dx[i],cy+dy[i]});
                }
            }
        }
        task.pop();
    } 
    shortest_route(board,route,length+1,next_task);
}
```

#### main
```cpp
int main() {
    Solution s;
    vector<vector<int>> board = {
        {-1,-1,-1,-1,-1},
        {0,0,0,-1,0},
        {-1,-1,0,-1,-1},
        {0,-1,0,0,0},
        {0,-1,0,0,0},
    };
    vector<vector<pair<int,int>>>* route[row][col];
    for(int i = 0; i<row; i++){
        for(int j = 0; j<col; j++){
            route[i][j] = new vector<vector<pair<int,int>>>;
        }
    }
    // ๊ฒฝ๋ก๊ฐ ์ ์ฅ๋  route๋ฅผ ์์ฑํ๊ณ , newํค์๋๋ฅผ ์ฌ์ฉํด์ ๊ฒฝ๋ก๊ฐ ์ ์ฅ๋  ๊ตฌ์กฐ๋ฅผ ํ ๋นํด์ค๋ค.

    queue<pair<int,int>> task;
    task.push({1,0});
    //์ฒ์ task๋ฅผ ํ ๋นํด์ค๋ค. ์ด๋ ๊ณง ์์์ ์ ์๋ฏธํ๋ค.

    s.display(board);
    s.shortest_route(board,route,0,task);
    s.display(board);
    s.display_route(*route[4][4],4,4);
    //๋ชจ๋  ๊ฒฝ๋ก๋ฅผ ์ถ๋ ฅํด์ค๋ค.
} 
```

#### ์ ๋ฆฌ
์ด ์ฝ๋์์ ๊ฐ์ฅ ์ค์ํ ์ ์ length๋ฅผ ๊ณ์ฐํ๊ธฐ ์ํด์, ์ต๋จ๊ฑฐ๋ฆฌ๊ณ์ฐ์์ ์ฌ๊ทํธ์ถ ์์ด queue์ ๋ฐ๋ก pushํ ๊ฒ๊ณผ ๋ฌ๋ฆฌ next_task๋ฅผ ๋ง๋ค์ด์ ์ฌ๊ทํธ์ถ๋ก ๊ฐ์ length์ ๊ณ์ฐ์ ๋ฌถ์๋ค๋ ๋ฐฉ๋ฒ์ ์ฌ์ฉํ๋ค๋ ๊ฒ์ด๋ค. length๋ ์ต๋จ๊ฑฐ๋ฆฌ์ผ๋ ๊ฒฝ๋ก๋ฅผ ์ถ๊ฐํด์ฃผ๊ธฐ ์ํด ์ฌ์ฉํ๋ค.

```toc
```