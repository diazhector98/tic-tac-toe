(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{29:function(e,t,r){},30:function(e,t,r){"use strict";r.r(t);var s=r(2),n=r(11),a=r(12),c=r(15),i=r(14),u=r(0),o=r.n(u),l=r(17),h=r.n(l),j=r(36),d=r(1);function b(){return Object(d.jsxs)(j.a,{children:[Object(d.jsx)(j.a.Toggle,{variant:"success",id:"dropdown-basic",children:"Dropdown Button"}),Object(d.jsxs)(j.a.Menu,{children:[Object(d.jsx)(j.a.Item,{href:"#/action-1",children:"Action"}),Object(d.jsx)(j.a.Item,{href:"#/action-2",children:"Another action"}),Object(d.jsx)(j.a.Item,{href:"#/action-3",children:"Something else"})]})]})}r(28),r(29);function x(e){return Object(d.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var O=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(d.jsx)(x,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(o.a.Component),m=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(e){var s;return Object(n.a)(this,r),(s=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},s}return Object(a.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();v(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,s=r[this.state.stepNumber],n=v(s.squares),a=r.map((function(e,r){var s=r?"Go to move #"+r:"Go to game start";return Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){return t.jumpTo(r)},children:s})},r)}));return e=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O"),Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)(b,{}),Object(d.jsx)("div",{className:"game-board",children:Object(d.jsx)(O,{squares:s.squares,onClick:function(e){return t.handleClick(e)}})}),Object(d.jsxs)("div",{className:"game-info",children:[Object(d.jsx)("div",{children:e}),Object(d.jsx)("ol",{children:a})]})]})}}]),r}(o.a.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(s.a)(t[r],3),a=n[0],c=n[1],i=n[2];if(e[a]&&e[a]===e[c]&&e[a]===e[i])return e[a]}return null}h.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.067b2118.chunk.js.map