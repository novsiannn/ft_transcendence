(()=>{"use strict";var e={274:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.btn=void 0,t.btn=document.createElement("button")},436:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.mainWrapper=void 0,t.mainWrapper=document.createElement("div")},624:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(274),t),r(n(436),t)},156:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),(0,o(n(468)).default)()},258:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const e=document.querySelector("#score-info"),t=document.getElementById("game-board"),n=document.querySelector("#restart-btn");let o;const r=null==t?void 0:t.getContext("2d"),i=t.width,c=t.height,a="w",l="s",s="ArrowUp",u="ArrowDown",d=25,f=120,y=13;let p=5,b=0,x=0;const m={x:i-d,y:c-f};let g=Object.assign({},{x:0,y:0}),v=Object.assign({},m);const h={x:i/2,y:c/2};let _=Object.assign({},h);const w={x:0,y:0};function O(e,t,n){r.fillStyle=n,r.fillRect(e,t,d,f)}function j(){r.beginPath(),r.fillStyle="white",r.arc(_.x,_.y,y,0,2*Math.PI),r.fill()}function M(){return Math.random()<.5}function P(){M()?w.x=1:w.x=-1,M()?w.y=1:w.y=-1}function k(){_.x+=p*w.x,_.y+=p*w.y,function(){const e=_.y<=y,t=_.y>=c-y;(e||t)&&(w.y*=-1)}(),function(){const e=function(){const e=_.x<=g.x+y+d,t=_.y>=g.y&&_.y<=g.y+f;return e&&t}(),t=function(){const e=_.x>=v.x-y,t=_.y>=v.y&&_.y<=v.y+f;return e&&t}();(e||t)&&(p*=1.07,w.x*=-1,e?_.x=g.x+d+y:t&&(_.x=v.x-y))}(),function(){const e=_.x>i,t=_.x<0;(e||t)&&(e&&b++,t&&x++,S(),_=Object.assign({},h),P(),j(),p=5)}()}function S(){e.textContent=`${b} : ${x}`}function W(e){console.log("heeree");const n=e.key===a,o=e.key===l,r=e.key===s,i=e.key===u,c=g.y>0,d=g.y<t.height-f,y=v.y>0,p=v.y<t.height-f;n&&c?g.y-=40:o&&d?g.y+=40:r&&y?v.y-=40:i&&p&&(v.y+=40)}function E(){r.fillStyle="black",r.fillRect(0,0,i,c),O(g.x,g.y,"yellow"),O(v.x,v.y,"blue"),k(),j()}function L(){b=0,x=0,clearInterval(o),p=5,_=Object.assign({},h),g=Object.assign({},g),v=Object.assign({},v),D()}function D(){S(),P(),window.addEventListener("keydown",W),o=setInterval(E,20),n.addEventListener("click",L)}window.addEventListener("load",D)}},468:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){document.body.append(r.mainWrapper);for(const e in c)location.pathname===e&&(r.mainWrapper.removeAttribute("id"),r.mainWrapper.className="",document.body.className="",r.mainWrapper.innerHTML=c[e](),"/game"===location.pathname&&(r.mainWrapper.id="game-container",r.mainWrapper.classList.add("h-screen","flex","flex-col","gap-2.5","justify-center","items-center"),window.addEventListener("DOMContentLoaded",(()=>{(0,i.default)()}))))};const r=n(624),i=o(n(258)),c={"/":function(){return'<div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-black via-black to-gray-800 space-y-8">\n                <button class="px-6 py-3 text-white bg-blue-500 rounded-lg text-xl hover:bg-blue-700 focus:outline-none">\n                    START\n                </button>\n            </div>'},"/game":function(){return document.body.style.margin="0",document.body.style.padding="0",'\n        <canvas id="game-board" width="800" height="500"></canvas>\n        <p id="score-info" class="text-4xl" > Score </p>\n        <button id="restart-btn" class="px-3 py-1 border-2 border-crimson rounded-[10px] bg-gray-500 text-white text-[25px]"> Restart </button>'}}}},t={};!function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}(156)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3JjL2VsZW1lbnRzL2NyZWF0ZUJ1dHRvbi50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9lbGVtZW50cy9jcmVhdGVNYWluV3JhcHBlci50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9lbGVtZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9nYW1lL2dhbWUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc3BhQXBwL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4iLCJleHBvcnQgY29uc3QgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIG1haW5XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW1zLWNlbnRlcicpOyIsImV4cG9ydCAqIGZyb20gJy4vY3JlYXRlQnV0dG9uJztcbmV4cG9ydCAqIGZyb20gJy4vY3JlYXRlTWFpbldyYXBwZXInOyIsImltcG9ydCBydW5TcGEgZnJvbSAnLi9zcGFBcHAvaW5kZXgnXG5cbnJ1blNwYSgpO1xuXG4vLyBmdW5jdGlvbiBjcmVhdGVIMSh0ZXh0OiBzdHJpbmcpIHtcbi8vICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbi8vICAgICBoMS50ZXh0Q29udGVudCA9IHRleHQ7XG4vLyAgICAgcmV0dXJuIGgxO1xuLy8gfVxuXG4vLyBjb25zdCBuYXZpZ2F0ZVRvID0gKHVybDogc3RyaW5nKSA9PiB7XG4vLyAgICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgXCJcIiwgdXJsKTtcbi8vICAgICByb3V0ZXIoKTtcbi8vIH07XG5cbi8vIGNvbnN0IHJvdXRlczogUmVjb3JkPHN0cmluZywgKCkgPT4gSFRNTEVsZW1lbnQ+ID0ge1xuLy8gICAgIFwiL1wiOiAoKSA9PiBjcmVhdGVIMShcIkhvbWUgUGFnZVwiKSxcbi8vICAgICBcIi9nYW1lXCI6ICgpID0+IGNyZWF0ZUgxKFwiR2FtZSBQYWdlXCIpLFxuLy8gfTtcblxuLy8gY29uc3Qgcm91dGVyID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuLy8gICAgIGlmICghYXBwKSByZXR1cm47XG5cbi8vICAgICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbi8vICAgICBjb25zdCByb3V0ZSA9IHJvdXRlc1tsb2NhdGlvbi5wYXRobmFtZSBhcyBrZXlvZiB0eXBlb2Ygcm91dGVzXSB8fCAoKCkgPT4gY3JlYXRlSDEoXCI0MDQgLSBQYWdlIE5vdCBGb3VuZFwiKSk7XG4vLyAgICAgYXBwLmFwcGVuZENoaWxkKHJvdXRlKCkpO1xuLy8gfTtcblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCByb3V0ZXIpOyAvLyDQndCw0LfQsNC0L9Cy0L/QtdGA0LXQtCDQsiDQsdGA0LDRg9C30LXRgNC1XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgIGFwcC5pZCA9IFwiYXBwXCI7XG4vLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHApO1xuXG4vLyAgICAgcm91dGVyKCk7IC8vINCf0LXRgNCy0LjRh9C90LDRjyDQt9Cw0LPRgNGD0LfQutCwXG5cbi8vICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuLy8gICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbi8vICAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09PSBcIkFcIikge1xuLy8gICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgbmF2aWdhdGVUbyh0YXJnZXQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIi9cIik7XG4vLyAgICAgICAgIH1cbi8vICAgICB9KTtcbi8vIH0pO1xuIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0R2FtZSgpe1xuXHRjb25zdCBzY29yZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Njb3JlLWluZm9cIik7XG5cdGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1ib2FyZFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcblx0Y29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdGFydC1idG5cIik7XG5cdGxldCBpbnRlcnZhbElEOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD47O1xuXG5cdGNvbnN0IGNvbnRleHQgPSBnYW1lQm9hcmQ/LmdldENvbnRleHQoXCIyZFwiKTtcblxuXHRjb25zdCBnYW1lQm9hcmRDb2xvciA9IFwiYmxhY2tcIjtcblx0Y29uc3QgYmFsbENvbG9yID0gXCJ3aGl0ZVwiO1xuXHRjb25zdCBmaXJzdFBhZGRsZUNvbG9yID0gXCJ5ZWxsb3dcIjtcblx0Y29uc3Qgc2Vjb25kUGFkZGxlQ29sb3IgPSBcImJsdWVcIjtcblxuXHRjb25zdCBnYW1lQm9hcmRXaWR0aCA9ICBnYW1lQm9hcmQud2lkdGg7XG5cdGNvbnN0IGdhbWVCb2FyZEhlaWdodCA9IGdhbWVCb2FyZC5oZWlnaHQ7XG5cblx0Y29uc3QgbW92ZUZpcnN0UGFkZGxlS2V5ID0ge1xuXHRcdHVwOiBcIndcIixcblx0XHRkb3duOiBcInNcIixcblx0fVxuXG5cdGNvbnN0IG1vdmVTZWNvbmRQYWRkbGVLZXkgPSB7XG5cdFx0dXA6IFwiQXJyb3dVcFwiLFxuXHRcdGRvd246IFwiQXJyb3dEb3duXCJcblx0fVxuXG5cdGNvbnN0IHBhZGRsZVNpemUgPSB7XG5cdFx0d2lkdGg6IDI1LFxuXHRcdGhlaWdodDogMTIwXG5cdH1cblxuXHRjb25zdCBiYWxsUmFkaXVzID0gMTM7XG5cdGNvbnN0IGluaXRpYWxCYWxsU3BlZWQgPSA1O1xuXHRsZXQgYmFsbFNwZWVkID0gaW5pdGlhbEJhbGxTcGVlZDtcblx0Y29uc3QgcGFkZGxlU3BlZWQgPSA0MDtcblx0bGV0IGZpcnN0UGxheWVyU2NvcmUgPSAwO1xuXHRsZXQgc2Vjb25kUGxheWVyU2NvcmUgPSAwO1xuXG5cdGNvbnN0IGZpcnN0UGFkZGxlSW5pdGlhbCA9IHtcblx0XHR4OiAwLFxuXHRcdHk6IDBcblx0fVxuXG5cdGNvbnN0IHNlY29uZFBhZGRsZUluaXRpYWwgPSB7XG5cdFx0eDogZ2FtZUJvYXJkV2lkdGggLSBwYWRkbGVTaXplLndpZHRoLFxuXHRcdHk6IGdhbWVCb2FyZEhlaWdodCAtIHBhZGRsZVNpemUuaGVpZ2h0LFxuXHR9XG5cblx0bGV0IGZpcnN0UGFkZGxlID0gey4uLmZpcnN0UGFkZGxlSW5pdGlhbH07XG5cdGxldCBzZWNvbmRQYWRkbGUgPSB7Li4uc2Vjb25kUGFkZGxlSW5pdGlhbH07XG5cblx0Y29uc3QgYmFsbEluaXRpYWwgPSB7XG5cdFx0eDogZ2FtZUJvYXJkV2lkdGggLyAyLFxuXHRcdHk6IGdhbWVCb2FyZEhlaWdodCAvIDIsIFxuXHR9XG5cblx0bGV0IGJhbGwgPSB7Li4uYmFsbEluaXRpYWx9O1xuXHRjb25zdCBiYWxsRGlyZWN0aW9uID0ge1xuXHRcdHg6IDAsXG5cdFx0eTogMCxcblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdCb2FyZCgpe1xuXHRcdGNvbnRleHQhLmZpbGxTdHlsZSA9IGdhbWVCb2FyZENvbG9yO1xuXHRcdGNvbnRleHQhLmZpbGxSZWN0KDAsMCAsZ2FtZUJvYXJkV2lkdGgsIGdhbWVCb2FyZEhlaWdodCk7XG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3UGFkZGxlKHBhZGRsZVg6IG51bWJlciwgcGFkZGxlWTogbnVtYmVyICwgY29sb3I6IHN0cmluZyl7XG5cdFx0Y29udGV4dCEuZmlsbFN0eWxlID0gY29sb3I7XG5cdFx0Y29udGV4dCEuZmlsbFJlY3QocGFkZGxlWCwgcGFkZGxlWSAscGFkZGxlU2l6ZS53aWR0aCwgcGFkZGxlU2l6ZS5oZWlnaHQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd1BhZGRsZXMoKXtcblx0XHRkcmF3UGFkZGxlKGZpcnN0UGFkZGxlLngsIGZpcnN0UGFkZGxlLnksIGZpcnN0UGFkZGxlQ29sb3IpO1xuXHRcdGRyYXdQYWRkbGUoc2Vjb25kUGFkZGxlLngsIHNlY29uZFBhZGRsZS55LCBzZWNvbmRQYWRkbGVDb2xvcik7XG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3QmFsbCgpe1xuXHRcdGNvbnRleHQhLmJlZ2luUGF0aCgpO1xuXHRcdGNvbnRleHQhLmZpbGxTdHlsZSA9IGJhbGxDb2xvcjtcblx0XHRjb250ZXh0IS5hcmMoYmFsbC54LCBiYWxsLnksIGJhbGxSYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcblx0XHRjb250ZXh0IS5maWxsKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBjaG9vc2VCYWxsRGlyZWN0aW9uKCl7XG5cdFx0cmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjU7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRCYWxsRGlyZWN0aW9uKCl7XG5cdFx0aWYoY2hvb3NlQmFsbERpcmVjdGlvbigpKXtcblx0XHRcdGJhbGxEaXJlY3Rpb24ueCA9IDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJhbGxEaXJlY3Rpb24ueCA9IC0xO1xuXHRcdH1cblx0XHRcblx0XHRpZihjaG9vc2VCYWxsRGlyZWN0aW9uKCkpe1xuXHRcdFx0YmFsbERpcmVjdGlvbi55ID0gMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YmFsbERpcmVjdGlvbi55ID0gLTE7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlQm9yZGVyQ29sbGlzaW9uKCl7XG5cdFx0Y29uc3QgdG9wQmFsbFJhZGl1cyA9IGJhbGwueSA8PSBiYWxsUmFkaXVzO1xuXHRcdGNvbnN0IGJvdHRvbUJhbGxSYWRpdXMgPSBiYWxsLnkgPj0gZ2FtZUJvYXJkSGVpZ2h0IC0gYmFsbFJhZGl1cztcblx0XHRpZih0b3BCYWxsUmFkaXVzIHx8IGJvdHRvbUJhbGxSYWRpdXMpe1xuXHRcdFx0YmFsbERpcmVjdGlvbi55ICo9IC0xO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNoZWNrRmlyc3RQYWRkbGVDb2xsaXNpb24oKXtcblx0XHRjb25zdCB4Q29sbGlzaW9uID0gYmFsbC54IDw9IGZpcnN0UGFkZGxlLnggKyBiYWxsUmFkaXVzICsgcGFkZGxlU2l6ZS53aWR0aDtcblx0XHRjb25zdCB5Q29sbGlzaW9uID0gYmFsbC55ID49IGZpcnN0UGFkZGxlLnkgJiYgYmFsbC55IDw9IGZpcnN0UGFkZGxlLnkgKyBwYWRkbGVTaXplLmhlaWdodDtcblx0XHRyZXR1cm4geENvbGxpc2lvbiAmJiB5Q29sbGlzaW9uO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2hlY2tTZWNvbmRQYWRkbGVDb2xsaXNpb24oKXtcblx0XHRjb25zdCB4Q29sbGlzaW9uID0gYmFsbC54ID49IHNlY29uZFBhZGRsZS54IC0gYmFsbFJhZGl1cztcblx0XHRjb25zdCB5Q29sbGlzaW9uID0gYmFsbC55ID49IHNlY29uZFBhZGRsZS55ICYmIGJhbGwueSA8PSBzZWNvbmRQYWRkbGUueSArIHBhZGRsZVNpemUuaGVpZ2h0O1xuXHRcdHJldHVybiB4Q29sbGlzaW9uICYmIHlDb2xsaXNpb247XG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVQYWRkbGVDb2xsaXNpb24oKXtcblx0XHRjb25zdCBmaXJzdFBhZGRsZUNvbGxpc2lvbiA9IGNoZWNrRmlyc3RQYWRkbGVDb2xsaXNpb24oKTtcblx0XHRjb25zdCBzZWNvbmRQYWRkbGVDb2xsaXNpb24gPSBjaGVja1NlY29uZFBhZGRsZUNvbGxpc2lvbigpO1xuXG5cdFx0aWYoZmlyc3RQYWRkbGVDb2xsaXNpb24gfHwgc2Vjb25kUGFkZGxlQ29sbGlzaW9uKXtcblx0XHRcdGJhbGxTcGVlZCAqPSAxLjA3O1xuXHRcdFx0YmFsbERpcmVjdGlvbi54ICo9IC0xO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gO1xuXHRcdH1cblx0XHRpZihmaXJzdFBhZGRsZUNvbGxpc2lvbil7XG5cdFx0XHRiYWxsLnggPSBmaXJzdFBhZGRsZS54ICsgcGFkZGxlU2l6ZS53aWR0aCArIGJhbGxSYWRpdXM7XG5cdFx0fSBlbHNlIGlmKHNlY29uZFBhZGRsZUNvbGxpc2lvbil7XG5cdFx0XHRiYWxsLnggPSBzZWNvbmRQYWRkbGUueCAtIGJhbGxSYWRpdXM7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gbW92ZUJhbGwoKXtcblx0XHRiYWxsLnggKz0gYmFsbFNwZWVkICogYmFsbERpcmVjdGlvbi54O1xuXHRcdGJhbGwueSArPSBiYWxsU3BlZWQgKiBiYWxsRGlyZWN0aW9uLnk7XG5cdFx0aGFuZGxlQm9yZGVyQ29sbGlzaW9uKCk7XG5cdFx0aGFuZGxlUGFkZGxlQ29sbGlzaW9uKCk7XG5cdFx0aGFuZGxlR29hbCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlU2NvcmUoKXtcblx0XHRzY29yZUluZm8hLnRleHRDb250ZW50ID0gYCR7Zmlyc3RQbGF5ZXJTY29yZX0gOiAke3NlY29uZFBsYXllclNjb3JlfWBcbiBcdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVHb2FsKCl7XG5cdFx0Y29uc3QgZmlyc3RVc2VyR29hbCA9IGJhbGwueCA+IGdhbWVCb2FyZFdpZHRoO1xuXHRcdGNvbnN0IHNlY29uZFVzZXJHb2FsID0gYmFsbC54IDwgIDA7XG5cblx0XHRpZighZmlyc3RVc2VyR29hbCAmJiAhc2Vjb25kVXNlckdvYWwpe1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZihmaXJzdFVzZXJHb2FsKXtcblx0XHRcdGZpcnN0UGxheWVyU2NvcmUrKztcblx0XHR9XG5cdFx0aWYoc2Vjb25kVXNlckdvYWwpe1xuXHRcdFx0c2Vjb25kUGxheWVyU2NvcmUrKztcblx0XHR9XG5cdFx0dXBkYXRlU2NvcmUoKTtcblx0XHRiYWxsID0gey4uLmJhbGxJbml0aWFsfTtcblx0XHRzZXRCYWxsRGlyZWN0aW9uKCk7XG5cdFx0ZHJhd0JhbGwoKTtcblx0XHRiYWxsU3BlZWQgPSBpbml0aWFsQmFsbFNwZWVkO1xuXHR9XG5cblx0ZnVuY3Rpb24gbW92ZVBhZGRsZXMoZXYgOiBLZXlib2FyZEV2ZW50KXtcblx0XHRjb25zb2xlLmxvZygnaGVlcmVlJyk7XG5cdFx0XG5cdFx0Y29uc3QgZmlyc3RQYWRkbGVHb2luZ1VwID0gZXYua2V5ID09PSBtb3ZlRmlyc3RQYWRkbGVLZXkudXA7XG5cdFx0Y29uc3QgZmlyc3RQYWRkbGVHb2luZ0Rvd24gPSBldi5rZXkgPT09IG1vdmVGaXJzdFBhZGRsZUtleS5kb3duO1xuXHRcdGNvbnN0IHNlY29uZFBhZGRsZUdvaW5nVXAgPSBldi5rZXkgPT09IG1vdmVTZWNvbmRQYWRkbGVLZXkudXA7XG5cdFx0Y29uc3Qgc2Vjb25kUGFkZGxlR29pbmdEb3duID0gZXYua2V5ID09PSBtb3ZlU2Vjb25kUGFkZGxlS2V5LmRvd247XG5cblx0XHRjb25zdCBjYW5GaXJzdFBhZGRsZU1vdmVVcCA9IGZpcnN0UGFkZGxlLnkgPiAwO1xuXHRcdGNvbnN0IGNhbkZpcnN0UGFkZGxlTW92ZURvd24gPSBmaXJzdFBhZGRsZS55IDwgZ2FtZUJvYXJkLmhlaWdodCAtIHBhZGRsZVNpemUuaGVpZ2h0O1xuXHRcdGNvbnN0IGNhblNlY29uZFBhZGRsZU1vdmVVcCA9IHNlY29uZFBhZGRsZS55ID4gMDtcblx0XHRjb25zdCBjYW5TZWNvbmRQYWRkbGVNb3ZlRG93biA9IHNlY29uZFBhZGRsZS55IDwgZ2FtZUJvYXJkLmhlaWdodCAtIHBhZGRsZVNpemUuaGVpZ2h0O1xuXG5cdFx0aWYgKGZpcnN0UGFkZGxlR29pbmdVcCAmJiBjYW5GaXJzdFBhZGRsZU1vdmVVcCl7XG5cdFx0XHRmaXJzdFBhZGRsZS55IC09IHBhZGRsZVNwZWVkO1xuXHRcdH0gZWxzZSBpZiAoZmlyc3RQYWRkbGVHb2luZ0Rvd24gJiYgY2FuRmlyc3RQYWRkbGVNb3ZlRG93bil7XG5cdFx0XHRmaXJzdFBhZGRsZS55ICs9IHBhZGRsZVNwZWVkO1xuXHRcdH0gZWxzZSBpZiAoc2Vjb25kUGFkZGxlR29pbmdVcCAmJiBjYW5TZWNvbmRQYWRkbGVNb3ZlVXApe1xuXHRcdFx0c2Vjb25kUGFkZGxlLnkgLT0gcGFkZGxlU3BlZWQ7XG5cdFx0fSBlbHNlIGlmIChzZWNvbmRQYWRkbGVHb2luZ0Rvd24gJiYgY2FuU2Vjb25kUGFkZGxlTW92ZURvd24pe1xuXHRcdFx0c2Vjb25kUGFkZGxlLnkgKz0gcGFkZGxlU3BlZWQ7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlR2FtZSgpe1xuXHRcdGRyYXdCb2FyZCgpO1xuXHRcdGRyYXdQYWRkbGVzKCk7XG5cdFx0bW92ZUJhbGwoKTtcblx0XHRkcmF3QmFsbCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVzdGFydEdhbWUoKXtcblx0XHRmaXJzdFBsYXllclNjb3JlID0gMDtcblx0XHRzZWNvbmRQbGF5ZXJTY29yZSA9IDA7XG5cdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcblx0XHRiYWxsU3BlZWQgPSBpbml0aWFsQmFsbFNwZWVkO1xuXHRcdGJhbGwgPSB7Li4uYmFsbEluaXRpYWx9O1xuXHRcdGZpcnN0UGFkZGxlID0gey4uLmZpcnN0UGFkZGxlfTtcblx0XHRzZWNvbmRQYWRkbGUgPSB7Li4uc2Vjb25kUGFkZGxlfTtcblx0XHRpbml0R2FtZSgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdEdhbWUoKXtcblx0XHR1cGRhdGVTY29yZSgpO1xuXHRcdHNldEJhbGxEaXJlY3Rpb24oKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixtb3ZlUGFkZGxlcyk7XG5cdFx0aW50ZXJ2YWxJRCA9IHNldEludGVydmFsKHVwZGF0ZUdhbWUsIDIwKTtcblx0XHRyZXN0YXJ0QnRuIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc3RhcnRHYW1lKTtcblx0fVxuXG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGluaXRHYW1lKTtcbn1cblxuXG5cblxuXG4iLCJpbXBvcnQge2J0biwgbWFpbldyYXBwZXJ9IGZyb20gJy4uL2VsZW1lbnRzJztcbmltcG9ydCB7IEVSb3V0ZXMgfSBmcm9tICcuL3R5cGVzJ1xuaW1wb3J0IHsgSVJvdXRlcyB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi9wYWdlcy9nYW1lL2dhbWVcIjtcblxuZnVuY3Rpb24gaG9tZVBhZ2UoKVxue1xuXHRyZXR1cm4gYDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tdCBmcm9tLWJsYWNrIHZpYS1ibGFjayB0by1ncmF5LTgwMCBzcGFjZS15LThcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHgtNiBweS0zIHRleHQtd2hpdGUgYmctYmx1ZS01MDAgcm91bmRlZC1sZyB0ZXh0LXhsIGhvdmVyOmJnLWJsdWUtNzAwIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICBTVEFSVFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxuZnVuY3Rpb24gZ2FtZVBhZ2UoKVxue1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gXCIwXCI7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XG5cdHJldHVybiBgXG4gICAgICAgIDxjYW52YXMgaWQ9XCJnYW1lLWJvYXJkXCIgd2lkdGg9XCI4MDBcIiBoZWlnaHQ9XCI1MDBcIj48L2NhbnZhcz5cbiAgICAgICAgPHAgaWQ9XCJzY29yZS1pbmZvXCIgY2xhc3M9XCJ0ZXh0LTR4bFwiID4gU2NvcmUgPC9wPlxuICAgICAgICA8YnV0dG9uIGlkPVwicmVzdGFydC1idG5cIiBjbGFzcz1cInB4LTMgcHktMSBib3JkZXItMiBib3JkZXItY3JpbXNvbiByb3VuZGVkLVsxMHB4XSBiZy1ncmF5LTUwMCB0ZXh0LXdoaXRlIHRleHQtWzI1cHhdXCI+IFJlc3RhcnQgPC9idXR0b24+YDtcbn1cblxuXG5jb25zdCByb3V0ZXM6IFJlY29yZDwgc3RyaW5nLCAoKSA9PiBzdHJpbmcgPiA9IHtcbiAgICBcIi9cIjogaG9tZVBhZ2UsXG4gICAgXCIvZ2FtZVwiOiBnYW1lUGFnZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJ1blNQQSgpe1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChtYWluV3JhcHBlcik7XG5cdFxuICAgIGZvciAoY29uc3QgayBpbiByb3V0ZXMpIHtcbiAgICAgICAgaWYobG9jYXRpb24ucGF0aG5hbWUgPT09IGspIHtcblxuICAgICAgICAgICAgbWFpbldyYXBwZXIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgICAgICBtYWluV3JhcHBlci5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgbWFpbldyYXBwZXIuaW5uZXJIVE1MID0gcm91dGVzW2tdKCk7XG4gICAgXG4gICAgICAgICAgICBpZihsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9nYW1lJyl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbWFpbldyYXBwZXIuaWQgPSBcImdhbWUtY29udGFpbmVyXCI7XG4gICAgICAgICAgICAgICAgbWFpbldyYXBwZXIuY2xhc3NMaXN0LmFkZChcImgtc2NyZWVuXCIsIFwiZmxleFwiLCBcImZsZXgtY29sXCIsIFwiZ2FwLTIuNVwiLCBcImp1c3RpZnktY2VudGVyXCIsIFwiaXRlbXMtY2VudGVyXCIpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0R2FtZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICBcbiAgICB9XG59XG5cblxuXG5jb25zdCByb3V0ZXIgPSAoaTogbnVtYmVyKSA9PiB7XG5cdC8vIGNvbnN0IGNoYW5nZVBhZ2UgPSByb3V0ZXNbaV1bbG9jYXRpb24ucGF0aG5hbWVdIHx8IG51bGw7XG5cdC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpIS5pbm5lckhUTUwgPSBjaGFuZ2VQYWdlKCk7IFxufVxuXG5yb3V0ZXIoMCk7XG5cbmNvbnN0IG5hdmlnYXRlVG8gPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgXCJcIiwgdXJsKTsgLy8g0JzQtdC90Y/QtdC8IFVSTCDQsdC10Lcg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC4XG4vLyAgIHJvdXRlcigpOyAvLyDQl9Cw0L/Rg9GB0LrQsNC10Lwg0L7RgtGA0LjRgdC+0LLQutGDINGB0YLRgNCw0L3QuNGG0Ytcbn07XG5cbi8vIGZ1bmN0aW9uIGVuYWJsZVJvdXRlQ2hhbmdlKCl7XG4vLyBcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9Pntcbi8vIFx0XHRcdGNvbnN0IGhhc2ggPSBsb2NhdGlvbi5wYXRobmFtZTtcbi8vIFx0XHRcdGNvbnNvbGUubG9nKGhhc2gpO1xuXHRcdFx0XG4vLyBcdFx0fSk7XG4vLyB9XG5cbi8vIGVuYWJsZVJvdXRlQ2hhbmdlKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1Nik7XG4iXSwibmFtZXMiOlsiYnRuIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwibWFpbldyYXBwZXIiLCJzY29yZUluZm8iLCJxdWVyeVNlbGVjdG9yIiwiZ2FtZUJvYXJkIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZXN0YXJ0QnRuIiwiaW50ZXJ2YWxJRCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2FtZUJvYXJkV2lkdGgiLCJ3aWR0aCIsImdhbWVCb2FyZEhlaWdodCIsImhlaWdodCIsIm1vdmVGaXJzdFBhZGRsZUtleSIsIm1vdmVTZWNvbmRQYWRkbGVLZXkiLCJwYWRkbGVTaXplIiwiYmFsbFJhZGl1cyIsImJhbGxTcGVlZCIsImZpcnN0UGxheWVyU2NvcmUiLCJzZWNvbmRQbGF5ZXJTY29yZSIsInNlY29uZFBhZGRsZUluaXRpYWwiLCJ4IiwieSIsImZpcnN0UGFkZGxlIiwic2Vjb25kUGFkZGxlIiwiYmFsbEluaXRpYWwiLCJiYWxsIiwiYmFsbERpcmVjdGlvbiIsImRyYXdQYWRkbGUiLCJwYWRkbGVYIiwicGFkZGxlWSIsImNvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3QmFsbCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGwiLCJjaG9vc2VCYWxsRGlyZWN0aW9uIiwicmFuZG9tIiwic2V0QmFsbERpcmVjdGlvbiIsIm1vdmVCYWxsIiwidG9wQmFsbFJhZGl1cyIsImJvdHRvbUJhbGxSYWRpdXMiLCJoYW5kbGVCb3JkZXJDb2xsaXNpb24iLCJmaXJzdFBhZGRsZUNvbGxpc2lvbiIsInhDb2xsaXNpb24iLCJ5Q29sbGlzaW9uIiwiY2hlY2tGaXJzdFBhZGRsZUNvbGxpc2lvbiIsInNlY29uZFBhZGRsZUNvbGxpc2lvbiIsImNoZWNrU2Vjb25kUGFkZGxlQ29sbGlzaW9uIiwiaGFuZGxlUGFkZGxlQ29sbGlzaW9uIiwiZmlyc3RVc2VyR29hbCIsInNlY29uZFVzZXJHb2FsIiwidXBkYXRlU2NvcmUiLCJoYW5kbGVHb2FsIiwidGV4dENvbnRlbnQiLCJtb3ZlUGFkZGxlcyIsImV2IiwiY29uc29sZSIsImxvZyIsImZpcnN0UGFkZGxlR29pbmdVcCIsImtleSIsImZpcnN0UGFkZGxlR29pbmdEb3duIiwic2Vjb25kUGFkZGxlR29pbmdVcCIsInNlY29uZFBhZGRsZUdvaW5nRG93biIsImNhbkZpcnN0UGFkZGxlTW92ZVVwIiwiY2FuRmlyc3RQYWRkbGVNb3ZlRG93biIsImNhblNlY29uZFBhZGRsZU1vdmVVcCIsImNhblNlY29uZFBhZGRsZU1vdmVEb3duIiwidXBkYXRlR2FtZSIsInJlc3RhcnRHYW1lIiwiY2xlYXJJbnRlcnZhbCIsImluaXRHYW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEludGVydmFsIiwiYm9keSIsImFwcGVuZCIsImsiLCJyb3V0ZXMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicmVtb3ZlQXR0cmlidXRlIiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiaWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsIm1hcmdpbiIsInBhZGRpbmciLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9