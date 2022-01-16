---
emoji: 🛰️
title: 최단거리계산, 모든 최단거리경로 구하기
date: '2022-01-16 13:42:48' 
author: kimtahen
tags: algorithm bfs
categories: algorithm
---
## 서론
이틀 전, 가만히 멍때리다가 BFS 알고리즘으로 최단거리를 구하는 법에 대해서 다시 고민해보았다. BFS의 queue로 같은 depth 순으로 위치 배열을 탐색하며 배열의 값에 1씩 더해주는 방식으로 최단거리를 계산할 수 있다. 그러던 중, 어떻게 하면 최단거리인 모든 경로를 출력할 수 있을까? 하는 궁금증이 생겼고 BFS을 사용해서 코딩을 해봤다. 

### 🤔고민
최단거리 계산하는 코드는 어렵지 않게 작성할 수 있었지만 두번째는 시간이 조금 걸렸다. 무엇보다 경로를 저장하기 위해서는 다차원 배열을 사용해야하는데, vector를 이용한 다차원배열은 내게 익숙하지 않아서 검색하는 시간이 오래걸렸다. 

```cpp
vector<vector<pair<int,int>>>* route[row][col];
for(int i = 0; i<row; i++){
    for(int j = 0; j<col; j++){
        route[i][j] = new vector<vector<pair<int,int>>>;
    }
}
```
결국 경로를 저장하기 위해서 위와같은 구조를 사용했다. pair 1번에 vector 4번을 중첩시켜서 처음엔 해보려고 했는데 이렇게 작성해보니 경로를 저장하는 vector의 size를 초기화 해주어야 하는 문제에 마주쳤다. 조금 더 찾아보면 이것도 해결할 수 있는 방법이 있을테지만 일단은 생각나는대로, 위의 코드처럼 작성했다. `route[i][j]` 는 시작점으로부터 각 `i,j`까지의 최단 경로를 저장한다. 일괄적으로 route[i][j] 에 경로를 저장하는 자료구조를 할당해준다.

## 코드

### 1. 최단거리계산
#### 전체 코드
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
leetcode의 solution을 작성하는 것처럼 작성해보았다. 위 코드를 실행하면 아래와 같이 출력된다. 출발점은 `{1,0}` 이다. 
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

첫번째 배열은 input이다. -1은 갈 수 없는 길이고, 0이 갈 수 있는 길이다. 두번째 배열은 `{1,0}` 으로부터 각 지점까지의 최단거리이다. 


BFS 코드는 아래와 같다.
#### bfs
```cpp
int dx[4] ={-1,0,1,0}; 
int dy[4]= {0,-1,0,1};
//dx와 dy 배열은 상하좌우의 위치를 계산할 때 사용된다.
void bfs(vector<vector<int>>& board, int x, int y){
    queue<pair<int,int>> q;
    //bfs를 사용하기 위하여 queue를 사용한다.
    q.push({x,y});
    //처음 위치인 x,y를 queue에 넣어준다.

    //queue에서 원소를 하나씩 꺼내고, queue에 남아있는 원소가 없을 때까지 반복한다.
    for(;!q.empty();){
        int cx = q.front().first;
        int cy = q.front().second;
        //queue에서 원소를 하나 꺼낸다.

        //dx와 dy를 이용해서 상하좌우 위치를 탐색한다.
        for(int i = 0; i<4; i++){
            if(0<=cx+dx[i] && cx+dx[i]<board.size() && 0<=cy+dy[i] && cy+dy[i]<board[0].size() && board[cx+dx[i]][cy+dy[i]]==0){
                //현재 탐색하는 위치(상,하,좌,우)가 board의 범위를 벗어나지 않고, 탐색한적이 없는 경우(board의 값이 0) 탐색한다.

                board[cx+dx[i]][cy+dy[i]] = board[cx][cy] + 1;
                //현재 위치로부터 거리가 1 멀어지기 때문에 board에 1을 더해준다.

                q.push({cx+dx[i],cy+dy[i]});
                //queue에 넣음으로써 그 다음 탐색의 기준점이 될 수 있도록 한다.
            }
        }
        q.pop();
    }
}
```


### 2. 최단경로구하기
#### 전체 코드
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
위 코드를 실행하면 아래와 같이 출력된다.
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
첫번째 배열과 두번째 배열은 위의 `최단거리계산`과 같다. 그리고 밑의 3개는 {4,4} 까지의 모든 최단 경로를 출력한 것이다. 

#### shortest_route
`shortest_route` 함수는 아래와 같다. 전체적인 코드는 bfs와 비슷하다. 하지만, 재귀함수를 이용해서 현재탐색하고 있는 위치의 length를 계산할수 있도록 했다.
```cpp
int dx[4] ={-1,0,1,0};
int dy[4]= {0,-1,0,1};
// 탐색하는 위치를 계산하기 위해 사용된다. (상,하,좌,우)

void shortest_route(vector<vector<int>>& board, vector<vector<pair<int,int>>>* route[row][col], int length, queue<pair<int,int>> task){

    
    if(task.empty())return;
    //기저사건 : task가 비어있으면 재귀호출을 종료한다.

    queue<pair<int,int>> next_task;
    //다음 탐색의 기준점이 되는 위치를 저장한다.

    //task가 빌 때까지 반복하여 실행한다.
    for(;!task.empty();){
        int cx = task.front().first;
        int cy = task.front().second;
        //task에서 원소를 하나 꺼낸다.

        for(int i = 0; i<4; i++){
            if(0<=cx+dx[i] && cx+dx[i]<board.size() && 0<=cy+dy[i] && cy+dy[i]<board[0].size() && (board[cx+dx[i]][cy+dy[i]] == 0 || board[cx+dx[i]][cy+dy[i]]==length+1)){
            //현재 탐색하는 위치(상,하,좌,우)가 board를 벗어나지 않고, 탐색하지 않았거나 '현재의 length' + 1인 경우에만 탐색을 한다. 이 두번째 경우가 필요해서 재귀함수를 작성해서 현재 탐색하는 위치의 length를 구할 수 있도록 하였다. '현재의 length' + 1인 경우에도 탐색을 하는 이유는 '최단거리인 경우에도 여러가지 경로가 있을 수도 있기 때문이다.'

                int org_value = board[cx+dx[i]][cy+dy[i]];
                //미리 원래의 board의 값을 저장해준다.

                board[cx+dx[i]][cy+dy[i]] = board[cx][cy] + 1;
                //탐색하는 위치는 현재 위치보다 거리가 1 늘어나기 때문에, 더해서 저장한다.

                //length가 0인 경우는 shortest_route가 처음으로 호출되는 경우이다. 처음에 route는 자료구조만 할당해놓고, 아무 값도 들어가 있지 않다. else의 경우만 사용한다면 아무 값도 없기 때문에 경로가 저장되지 않는다. 따라서 경우를 나누어두었다.
                if(length==0){
                    vector<pair<int,int>> v;
                    v.push_back({cx,cy});
                    route[cx+dx[i]][cy+dy[i]] -> push_back(v);
                }
                else{
                    //현재 탐색하는 위치의 route에 현재까지의 경로를 저장해준다. 현재까지의 경로는 여러개가 있을 수도 있다. 따라서 현재 위치의 route에 저장된 모든 경로에 대하여 현재 위치를 추가해주어, 현재 탐색하고 있는 route에 저장해준다.
                    for(auto it = route[cx][cy]->begin(); it!=route[cx][cy]->end(); it++){
                        vector<pair<int,int>> v = *it;
                        v.push_back({cx,cy});
                        route[cx+dx[i]][cy+dy[i]] -> push_back(v);
                    }
                }

                //현재 탐색하는 위치의 원래 board 값이 0인 경우는 처음 탐색하는 경우이다. 이 경우에만 next_task 에 넣어서 다음 기준점이 될 수 있도록 한다. '현재의 length' + 1 인 경우에도 next_task에 넣는다면 중복 탐색을 할 수도 있기 때문에 처음 탐색하는 경우만 다음의 기준점이 될 수 있도록 한다.
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
    // 경로가 저장될 route를 생성하고, new키워드를 사용해서 경로가 저장될 구조를 할당해준다.

    queue<pair<int,int>> task;
    task.push({1,0});
    //처음 task를 할당해준다. 이는 곧 시작점을 의미한다.

    s.display(board);
    s.shortest_route(board,route,0,task);
    s.display(board);
    s.display_route(*route[4][4],4,4);
    //모든 경로를 출력해준다.
} 
```

#### 정리
이 코드에서 가장 중요한 점은 length를 계산하기 위해서, 최단거리계산에서 재귀호출 없이 queue에 바로 push한 것과 달리 next_task를 만들어서 재귀호출로 같은 length의 계산을 묶었다는 방법을 사용했다는 것이다. length는 최단거리일때 경로를 추가해주기 위해 사용한다.

```toc
```