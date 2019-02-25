# dashboard

> Vue.js를 통해 제작한 관리자 사이트입니다.
기본적인 로그인과 로그아웃 그리고 게시판 기능을 구현해놨습니다.
화면은 Vue.js를 통해 작업했고 서버는 Node.js 프레임워크인 Express.js를 통해 작업했습니다.
서버 작업은 [여기서](https://github.com/heeyounggoo/vue-dashboard-node) 확인 가능합니다.



# 작업방식
디자인 작업은 scss(css 전처라기기)를 사용했습니다. 
게시판 작업에서 게시판 목록을 구현할 때는 GET을 사용했고 등록, 수정, 삭제를 할 경우에는 POST를 사용했습니다.
삭제시에는 데이터를 지우는 것이 아니라 데이터 값을 추가해서 삭제할 경우네는 화면에 안보이게 하는 방식으로 코드를 정리했습니다.

컴포먼트 구성은 부모, 자식 컴포먼트를 따로 지정해서 더 효율적으로 분배했습니다.

로그인과 로그아웃 구현에는 Vuex state, mutations, actions를 이해하며 사용했습니다.
로그인 시 쿠키를 저장하여 다른 사이트에서 현재 사이트 접속시에도 바로 대시보드 페이징이 되도록 설계했습니다.
로그아웃은 쿠키를 지우는 방식으로 작업했습니다.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
