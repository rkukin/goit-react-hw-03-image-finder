(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{31:function(n,e,t){n.exports=t(75)},75:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(23),i=t.n(o),c=t(12),u=t(5),l=t(6),p=t(8),s=t(7),d=t(9),m=t(2),g=t(3),h=t(24);function f(){var n=Object(m.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder{\n    font: inherit;\n    font-size: 18px;\n  }\n"]);return f=function(){return n},n}function b(){var n=Object(m.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]);return b=function(){return n},n}function x(){var n=Object(m.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]);return x=function(){return n},n}function v(){var n=Object(m.a)(["\ndisplay: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]);return v=function(){return n},n}function y(){var n=Object(m.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]);return y=function(){return n},n}var w=g.a.header(y()),k=g.a.form(v()),j=g.a.button(x()),O=g.a.span(b()),E=g.a.input(f()),C=function(n){function e(){var n,t;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(p.a)(this,(n=Object(s.a)(e)).call.apply(n,[this].concat(r)))).state={searchQuery:""},t.onChange=function(n){var e=n.target,a=e.name,r=e.value;t.setState(Object(h.a)({},a,r))},t.onSubmit=function(n){n.preventDefault(),t.props.onFormSubmit(t.state.searchQuery),t.setState({searchQuery:""})},t}return Object(d.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement(k,{onSubmit:this.onSubmit},r.a.createElement(j,{type:"submit"},r.a.createElement(O,null,"Search")),r.a.createElement(E,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"searchQuery",value:this.state.searchQuery,onChange:this.onChange})))}}]),e}(a.Component);function S(){var n=Object(m.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]);return S=function(){return n},n}function L(){var n=Object(m.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return L=function(){return n},n}var U=g.a.li(L()),z=g.a.img(S());function I(n){var e=n.images,t=n.onImageClick;return r.a.createElement(r.a.Fragment,null,e.map((function(n){var e=n.id,a=n.previewURL,o=n.webformatURL;return r.a.createElement(U,{key:e},r.a.createElement(z,{onClick:function(){t(o)},src:a,alt:""}))})))}function Q(){var n=Object(m.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]);return Q=function(){return n},n}var R=g.a.ul(Q());function F(n){var e=n.images,t=n.onImageClick;return r.a.createElement(R,null,r.a.createElement(I,{onImageClick:t,images:e}))}var M=t(28),D=t.n(M);t(58);function A(){return r.a.createElement(D.a,{type:"Bars",color:"#00BFFF",height:80,width:80})}function B(){var n=Object(m.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]);return B=function(){return n},n}function K(){var n=Object(m.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]);return K=function(){return n},n}var J=g.a.div(K()),W=g.a.div(B()),_=function(n){function e(){var n,t;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(p.a)(this,(n=Object(s.a)(e)).call.apply(n,[this].concat(r)))).handleKeyDown=function(n){"Escape"===n.code&&t.props.onModalClose()},t}return Object(d.a)(e,n),Object(l.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var n=this.props,e=n.onModalClose,t=n.imageURL;return r.a.createElement(J,{onClick:e},r.a.createElement(W,null,r.a.createElement("img",{src:t,alt:""})))}}]),e}(a.Component);function q(){var n=Object(m.a)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover {\n   background-color: #303f9f;\n  }\n  &:focus {\n   background-color: #303f9f;\n  }\n"]);return q=function(){return n},n}var H=g.a.button(q());function T(n){var e=n.onLoadMore;return r.a.createElement(H,{type:"button",onClick:e},"Load more...")}var G=t(29),N=t.n(G),P=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return N.a.get("http://pixabay.com/api/?q=".concat(n,"&page=").concat(e,"&key=14121213-0294698cbddd3de5cddc95af0&image_type=photo&orientation=horizontal&per_page=12")).then((function(n){return n.data.hits}))};function V(){var n=Object(m.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]);return V=function(){return n},n}var X=g.a.div(V()),Y=function(n){function e(){var n,t;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(p.a)(this,(n=Object(s.a)(e)).call.apply(n,[this].concat(r)))).state={searchQuery:"",images:[],page:0,isLoading:!1,imgURL:null,error:null},t.onSearchFormSubmit=function(n){t.setState({images:[],searchQuery:n,page:1})},t.onImageClick=function(n){t.setState({imgURL:n})},t.onModalClose=function(){t.setState({imgURL:null})},t.fetchImages=function(){var n=t.state,e=n.searchQuery,a=n.page;t.setState({isLoading:!0}),P(e,a).then((function(n){return t.setState((function(e){return{images:[].concat(Object(c.a)(e.images),Object(c.a)(n)),page:e.page+1}}))})).catch((function(n){return t.setState({error:n})})).finally((function(){return t.setState({isLoading:!1})}))},t}return Object(d.a)(e,n),Object(l.a)(e,[{key:"componentDidUpdate",value:function(n,e,t){e.imgURL===this.state.imgURL&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var n=this.state,e=n.images,t=n.isLoading,a=n.error,o=n.imgURL;return r.a.createElement(X,null,r.a.createElement(C,{onFormSubmit:this.onSearchFormSubmit}),a&&r.a.createElement("p",null,"Whoops, something went wrong: ".concat(a.message)),e.length>0&&r.a.createElement(F,{onImageClick:this.onImageClick,images:e}),t&&r.a.createElement(A,null),e.length>0&&!t&&r.a.createElement(T,{onLoadMore:this.fetchImages}),o&&r.a.createElement(_,{imageURL:o,onModalClose:this.onModalClose}))}}]),e}(a.Component);i.a.render(r.a.createElement(Y,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.9988d0dd.chunk.js.map