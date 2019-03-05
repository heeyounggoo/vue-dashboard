## dashboard [데모사이트](http://54.180.194.30:3000/#/)

> Vue.js를 통해 제작한 관리자 사이트입니다.
기본적인 로그인과 로그아웃 그리고 게시판 기능을 구현해놨습니다.
화면은 Vue.js를 통해 작업했고 서버는 Node.js 프레임워크인 Express.js를 통해 작업했습니다.
서버 작업은 [여기서](https://github.com/heeyounggoo/vue-dashboard-node) 확인 가능합니다.

## 프로젝트 설명
* [작업방식](https://github.com/heeyounggoo/vue-dashboard#%EC%9E%91%EC%97%85%EB%B0%A9%EC%8B%9D)
* [로그인,회원가입](https://github.com/heeyounggoo/vue-dashboard#%EB%A1%9C%EA%B7%B8%EC%9D%B8%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85)
* [게시판](https://github.com/heeyounggoo/vue-dashboard#%EA%B2%8C%EC%8B%9C%ED%8C%90)


## 작업방식
프론트 환경은 Vue.js를 사용하여 작성하였으며 전반적인 라이브러리는 Element UI로 작업하였습니다. 그 외 필요한 부분들은 scss(css 전처라기기)를 사용했습니다. 서버 작업은 Node.js 라이브러리인 Express.js를 사용하였습니다. 

게시판 작업에서 게시판 목록을 구현할 때는 GET을 사용했고 등록, 수정, 삭제를 할 경우에는 POST를 사용했습니다. 삭제시에는 데이터를 지우는 것이 아니라 데이터 값을 추가해서 삭제할 경우네는 화면에 안보이게 하는 방식으로 코드를 정리했습니다.


## 로그인,회원가입
로그인과 로그아웃 구현에는 Vuex state, mutations, actions를 이해하며 사용했습니다. 뿐 만 아니라 Element UI에서 제공한 rule과 Validator 기능을 사용하였습니다. 로그인 시 쿠키를 저장하여 다른 사이트에서 현재 사이트 접속시에도 바로 대시보드 페이징이 되도록 설계했습니다. 로그아웃은 쿠키를 지우는 방식으로 작업했습니다. 회원가입은 정규식을 사용하여 validation 체크를 했습니다.

로그인을 하지 않을 경우에는 메인루트를 타고 TABLE경로에서만 로그인이 필요하도록 작업하였습니다.
로그인이 되어 있을 경우에는 상단 메뉴 드롭다운에 Logout이 생성되고 로그아웃이 되면 Login, Join이 생성됩니다.

회원가입에는 필수기입항목과 아닌 항목을 나눠서 작업했습니다. 


## 게시판
게시판은 기본적인 작성, 수정, 삭제, 목록 구현이 됩니다. 목록에는 제목으로 검색이 가능합니다. 게시판 작성에는 Input, Radio, Select, Checkbox, Textarea, 이미지등록을 사용하여 form 형식을 최대한 사용하려고 했습니다. 또한 이미지 등록 작업은 multer와 FormData를 사용하여 서버에 데이터를 전송하도록 작업했습니다.  


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
