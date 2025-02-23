/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Layout/errorPage.ts":
/*!*********************************!*\
  !*** ./src/Layout/errorPage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.errorPage = errorPage;
const elements_1 = __webpack_require__(/*! ../elements */ "./src/elements/index.ts");
function errorPage() {
    document.body.classList.add("bg-gradient-to-t", "from-black", "via-black", "to-gray-800");
    return `
			${(0, elements_1.navigation)()}
			<div class="flex flex-col items-center justify-center min-h-screen">
				<h1 class="text-9xl text-white font-black"> Error 404 </h1>
				<h1 class="text-7xl py-3 text-white" font-medium> This page was not found </h1>
			</div>`;
}


/***/ }),

/***/ "./src/Layout/gamePage.ts":
/*!********************************!*\
  !*** ./src/Layout/gamePage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gamePage = gamePage;
const elements_1 = __webpack_require__(/*! ../elements */ "./src/elements/index.ts");
function gamePage() {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.classList.add("bg-gradient-to-t", "from-black", "via-black", "to-gray-800");
    return `
        ${(0, elements_1.navigation)()}
        <canvas id="game-board" width="800" height="500" class="bg-gray-500 border"></canvas>
        <p id="score-info" class="text-4xl text-white" class="bg-gray-500" > Score </p>
        <button id="restart-btn" class="px-3 py-1 border-2 border-crimson rounded-[10px] bg-gray-500 text-white text-[25px]"> Restart </button>`;
}


/***/ }),

/***/ "./src/Layout/homePage.ts":
/*!********************************!*\
  !*** ./src/Layout/homePage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.homePage = homePage;
const elements_1 = __webpack_require__(/*! ../elements */ "./src/elements/index.ts");
// import  myImg  from "../img/ping-pong.png"
function homePage(mainWrapper) {
    document.body.classList.add("h-screen", "flex", "flex-col", "bg-gradient-to-t", "from-black", "via-black", "to-gray-800", "overflow-hidden");
    // ${navigation()}
    let res = `
        	${(0, elements_1.navigation)()}
        	<div class="container mx-auto p-6 mt-24">
        	    <div class="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-2xl shadow-lg">
        	        <div class="md:w-1/2 p-6">
        	            <h1 class="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">FT_TRANSCENDENSCE</h1>
        	            <p class="mt-4 text-gray-600 text-lg">
        	                Transcendence is a 42 school project, to learn about web developpement and SPA.<br>
							The goal is to create a web app to play Pong, and socialize with other users.<br><br>
        	            </p>
						<p class"mt-4 text-gray-900 text-lg">Developed by novsiann and kilchenk </p>
        	        </div>

        	        <div class="md:w-1/2 flex justify-center p-6">
        	            <img src="../img/ping-pong.png" alt="Rocket for ping pong" class="w-128 h-128 object-cover rounded-xl shadow-md">
        	        </div>
        	    </div>
        	</div>`;
    return res;
}


/***/ }),

/***/ "./src/Layout/index.ts":
/*!*****************************!*\
  !*** ./src/Layout/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./loginPage */ "./src/Layout/loginPage.ts"), exports);
__exportStar(__webpack_require__(/*! ./registrationPage */ "./src/Layout/registrationPage.ts"), exports);
__exportStar(__webpack_require__(/*! ./errorPage */ "./src/Layout/errorPage.ts"), exports);
__exportStar(__webpack_require__(/*! ./gamePage */ "./src/Layout/gamePage.ts"), exports);
__exportStar(__webpack_require__(/*! ./playPage */ "./src/Layout/playPage.ts"), exports);
__exportStar(__webpack_require__(/*! ./homePage */ "./src/Layout/homePage.ts"), exports);
__exportStar(__webpack_require__(/*! ./profilePage */ "./src/Layout/profilePage.ts"), exports);
__exportStar(__webpack_require__(/*! ./settingsPage */ "./src/Layout/settingsPage.ts"), exports);


/***/ }),

/***/ "./src/Layout/loginPage.ts":
/*!*********************************!*\
  !*** ./src/Layout/loginPage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loginPage = loginPage;
function loginPage() {
    document.body.classList.add("h-screen", "flex", "items-center", "justify-center", "bg-gradient-to-t", "from-black", "via-black", "to-gray-800");
    return `
            <div class="max-w-sm mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
                <h2 class="text-xl font-semibold text-gray-700 text-center mb-4">Login</h2>
                <input type="text" placeholder="your email" class="w-full mb-3 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400" id="loginInput">
                <input type="password" placeholder="your password" class="w-full mb-4 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400" id="loginPass">
                <button class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600" id="loginBtn">Login</button>
                <p class="text-center mt-3"><a href="#" class="text-blue-500 hover:underline" id="questionPassForgot">Forgot Password?</a></p>
            </div>
        `;
}


/***/ }),

/***/ "./src/Layout/playPage.ts":
/*!********************************!*\
  !*** ./src/Layout/playPage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.playPage = playPage;
const elements_1 = __webpack_require__(/*! ../elements */ "./src/elements/index.ts");
function playPage(mainWrapper) {
    let res = `
                ${(0, elements_1.navigation)()}
                <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-black via-black to-gray-800 space-y-8">
                    <button class="px-6 py-3 text-white bg-blue-500 rounded-lg text-xl hover:bg-blue-700 focus:outline-none" id="btn-play">
                        START
                    </button>
                </div>`;
    return res;
}


/***/ }),

/***/ "./src/Layout/profilePage.ts":
/*!***********************************!*\
  !*** ./src/Layout/profilePage.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.profilePage = profilePage;
const elements_1 = __webpack_require__(/*! ../elements */ "./src/elements/index.ts");
function profilePage(mainWrapper) {
    document.body.classList.add("h-screen", "flex", "flex-col", "bg-gradient-to-t", "from-black", "via-black", "to-gray-800", "overflow-hidden");
    //mx-auto p-6 mt-64 v container dobavit
    let res = `
        ${(0, elements_1.navigation)()}

    
        <div class="h-full w-full rounded-lg shadow-lg my-auto flex justify-center items-center">
            <div class="w-5/6 h-96 bg-white p-10 rounded-2xl shadow-lg text-center relative">
        
                <div class="absolute -top-20 left-1/2 transform -translate-x-1/2">
                    <img src="img/goat.jpg" alt="Profile Photo" 
                         class="w-36 h-36 rounded-full border-4 border-white shadow-md">
                </div>

                <div class="mt-28">
                    <h2 class="text-4xl font-bold text-gray-800">Username</h2>

                    <div class="mt-8 flex justify-between text-gray-600 text-lg">
                        <div class="w-1/3">
                            <p class="text-2xl font-semibold">0</p>
                            <p class="text-sm">Level</p>
                        </div>
                        <div class="w-1/3">
                            <p class="text-2xl font-semibold">0</p>
                            <p class="text-sm">Friends</p>
                        </div>
                        <div class="w-1/3">
                            <p class="text-2xl font-semibold">0</p>
                            <p class="text-sm">Matches played</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return res;
}


/***/ }),

/***/ "./src/Layout/registrationPage.ts":
/*!****************************************!*\
  !*** ./src/Layout/registrationPage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registrationPage = registrationPage;
function registrationPage() {
    // document.body.classList.add("h-screen", "flex", "items-center", "justify-center", "bg-gradient-to-t", "from-black", "via-black", "to-gray-800");
    document.body.classList.add("h-screen", "flex", "flex-col", "bg-gradient-to-t", "from-black", "via-black", "to-gray-800", "overflow-hidden");
    return `
    
            <div class="mt-10 w-5/5 h-3/5 flex shadow-lg rounded-lg bg-white">
                <div class="w-3/5 p-10 flex flex-col justify-center bg-gradient-to-r from-purple-900 to-blue-900 text-white rounded-l-lg">
                    <h1 class="text-4xl font-bold">Transcendence</h1>
                    <p class="mt-4 text-lg">Join us today and start your journey with our amazing platform.</p>
                </div>
                <div class="w-2/5 p-10 flex flex-col justify-center rounded-r-lg">
                    <h2 class="text-2xl font-bold text-center mb-4">Registration</h2>
                    <form id="registerForm" class="space-y-4">
                        <input id="usernameRegistration" type="text" placeholder="Username" class="w-full p-2 border rounded">
                        <input id="emailRegistration" type="email" placeholder="Your email" class="w-full p-2 border rounded">
                        <input id="passwordRegistration" type="password" placeholder="Your password" class="w-full p-2 border rounded">
                        <input id="submitRegistration" type="submit" value="Register" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer">
                    </form>
                    <p class="text-center mt-4">Already registered? <a class="text-blue-500" id="questionAlreadyRegistr">Sign In</a></p>
                </div>
            </div>
    `;
}


/***/ }),

/***/ "./src/Layout/settingsPage.ts":
/*!************************************!*\
  !*** ./src/Layout/settingsPage.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.settingsPage = settingsPage;
const elements_1 = __webpack_require__(/*! ../elements */ "./src/elements/index.ts");
function settingsPage(mainWrapper) {
    document.body.classList.add("bg-gradient-to-t", "from-black", "via-black", "to-gray-800", "h-full");
    mainWrapper.className = "mx-auto h-screen w-full";
    let res = `
				${(0, elements_1.navigation)()}
				<div class="w-full flex flex-col flex-1 items-center justify-center min-h-screen">
  					<div class="px-6 py-3 text-black bg-white rounded-lg text-xl w-4/5 h-96 text-center">
    					<h1>Settings!</h1>
  					</div>
				</div>`;
    return res;
}


/***/ }),

/***/ "./src/elements/createButton.ts":
/*!**************************************!*\
  !*** ./src/elements/createButton.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.btn = void 0;
exports.btn = document.createElement('button');


/***/ }),

/***/ "./src/elements/createNavigation.ts":
/*!******************************************!*\
  !*** ./src/elements/createNavigation.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.navigation = navigation;
function navigation() {
    return `
		<nav class="top-0 left-0 bg-black text-white h-16 w-full fixed flex items-center px-6">
    		<img src="https://img.icons8.com/plasticine/100/ping-pong--v1.png" alt="Logo" class="h-12 w-12 object-cover" id=imgLogoNavi>


    		<div class="flex-1 flex justify-center space-x-8">
       			<button class="font-mono h-5" id="naviBtn"> Home </button>
        		<button class="font-mono h-5" id="naviBtn"> Game </button>
        		<button class="font-mono h-5" id="naviBtn"> Registration </button>
        		<button class="font-mono h-5" id="naviBtn"> Login </button>
    		</div>


			<div class="relative">
        		<img id="profileIcon" src="https://img.icons8.com/fluency/48/test-account--v1.png" alt="Profile" class="w-12 h-12 rounded-full cursor-pointer">


        		<div id="dropdownMenu" class="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg p-2 hidden">
            		<a class="block px-4 py-2 hover:bg-gray-200">Profile</a>
					<a class="block px-4 py-2 hover:bg-gray-200">Game</a>
					<a class="block px-4 py-2 hover:bg-gray-200">Leaderboard</a>
            		<a class="block px-4 py-2 hover:bg-gray-200">Settings</a>
            		<a class="block px-4 py-2 text-red-600 hover:bg-gray-200">Logout</a>
        		</div>
    		</div>
		</nav>
		`;
}


/***/ }),

/***/ "./src/elements/createWrapper.ts":
/*!***************************************!*\
  !*** ./src/elements/createWrapper.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mainWrapper = void 0;
exports.mainWrapper = document.createElement('div');


/***/ }),

/***/ "./src/elements/index.ts":
/*!*******************************!*\
  !*** ./src/elements/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./createButton */ "./src/elements/createButton.ts"), exports);
__exportStar(__webpack_require__(/*! ./createWrapper */ "./src/elements/createWrapper.ts"), exports);
__exportStar(__webpack_require__(/*! ./createNavigation */ "./src/elements/createNavigation.ts"), exports);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __importDefault(__webpack_require__(/*! ./spaApp/index */ "./src/spaApp/index.ts"));
window.addEventListener("DOMContentLoaded", () => {
    (0, index_1.default)(location.pathname);
});


/***/ }),

/***/ "./src/nagivation/index.ts":
/*!*********************************!*\
  !*** ./src/nagivation/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./navigation */ "./src/nagivation/navigation.ts"), exports);


/***/ }),

/***/ "./src/nagivation/navigation.ts":
/*!**************************************!*\
  !*** ./src/nagivation/navigation.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.navigationHandle = navigationHandle;
const routing_1 = __webpack_require__(/*! ../routing */ "./src/routing/index.ts");
const navigationRoutes_1 = __webpack_require__(/*! ./navigationRoutes */ "./src/nagivation/navigationRoutes.ts");
const navigationRoutes_2 = __webpack_require__(/*! ./navigationRoutes */ "./src/nagivation/navigationRoutes.ts");
function navigationHandle() {
    const naviBtns = document.querySelectorAll("#naviBtn");
    const profileBtn = document.querySelector("#profileIcon");
    const dropdownMenu = document.querySelector("#dropdownMenu");
    const naviDropMenuBtns = document.querySelectorAll("#dropdownMenu a");
    const imgLogo = document.getElementById('imgLogoNavi');
    imgLogo.addEventListener('click', () => {
        (0, routing_1.navigateTo)('/');
    });
    naviBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.innerHTML.trim() in navigationRoutes_1.naviRoutes) {
                (0, routing_1.navigateTo)(navigationRoutes_1.naviRoutes[btn.innerHTML.trim()]);
            }
        });
    });
    naviDropMenuBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.innerHTML.trim() in navigationRoutes_2.dropMenuRoutes) {
                (0, routing_1.navigateTo)(navigationRoutes_2.dropMenuRoutes[btn.innerHTML.trim()]);
            }
        });
    });
    profileBtn.addEventListener('click', () => {
        dropdownMenu.classList.toggle("hidden");
    });
    document.addEventListener('click', (e) => {
        if (e.target !== dropdownMenu && e.target !== profileBtn)
            dropdownMenu.classList.add("hidden");
    });
    document.addEventListener('keydown', (e) => {
        if (e.keyCode == 27)
            dropdownMenu.classList.add("hidden");
    });
}


/***/ }),

/***/ "./src/nagivation/navigationRoutes.ts":
/*!********************************************!*\
  !*** ./src/nagivation/navigationRoutes.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dropMenuRoutes = exports.naviRoutes = void 0;
exports.naviRoutes = {
    "Home": "/",
    "Game": "/game",
    "Registration": "/registration",
    "Login": "/login"
};
exports.dropMenuRoutes = {
    "Profile": "/profile",
    "Game": "/game",
    "Leaderboard": "/leaderboard",
    "Settings": "/settings",
    "Logout": "/logout"
};


/***/ }),

/***/ "./src/pages/errorPage/errorPage.ts":
/*!******************************************!*\
  !*** ./src/pages/errorPage/errorPage.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleErrorPage = handleErrorPage;
const nagivation_1 = __webpack_require__(/*! ../../nagivation */ "./src/nagivation/index.ts");
function handleErrorPage() {
    (0, nagivation_1.navigationHandle)();
}


/***/ }),

/***/ "./src/pages/errorPage/index.ts":
/*!**************************************!*\
  !*** ./src/pages/errorPage/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./errorPage */ "./src/pages/errorPage/errorPage.ts"), exports);


/***/ }),

/***/ "./src/pages/game/game.ts":
/*!********************************!*\
  !*** ./src/pages/game/game.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleGame = handleGame;
const nagivation_1 = __webpack_require__(/*! ../../nagivation */ "./src/nagivation/index.ts");
function handleGame(mainWrapper) {
    (0, nagivation_1.navigationHandle)();
    const scoreInfo = document.querySelector("#score-info");
    const gameBoard = document.getElementById("game-board");
    const restartBtn = document.querySelector("#restart-btn");
    // const mainWrapper = document.getElementById('game-container') as HTMLDivElement;
    let intervalID;
    ;
    mainWrapper.id = "game-container";
    mainWrapper.classList.add("h-screen", "flex", "flex-col", "gap-2.5", "justify-center", "items-center");
    const context = gameBoard === null || gameBoard === void 0 ? void 0 : gameBoard.getContext("2d");
    const gameBoardColor = window.getComputedStyle(gameBoard).backgroundColor;
    const firstPaddleColor = "white";
    const secondPaddleColor = "white";
    const ballColor = "white";
    const gameBoardWidth = gameBoard.width;
    const gameBoardHeight = gameBoard.height;
    const moveFirstPaddleKey = {
        up: "w",
        down: "s",
    };
    const moveSecondPaddleKey = {
        up: "ArrowUp",
        down: "ArrowDown"
    };
    const paddleSize = {
        width: 25,
        height: 120
    };
    const ballRadius = 13;
    const initialBallSpeed = 5;
    let ballSpeed = initialBallSpeed;
    const paddleSpeed = 40;
    let firstPlayerScore = 0;
    let secondPlayerScore = 0;
    const firstPaddleInitial = {
        x: 0,
        y: 0
    };
    const secondPaddleInitial = {
        x: gameBoardWidth - paddleSize.width,
        y: gameBoardHeight - paddleSize.height,
    };
    let firstPaddle = Object.assign({}, firstPaddleInitial);
    let secondPaddle = Object.assign({}, secondPaddleInitial);
    const ballInitial = {
        x: gameBoardWidth / 2,
        y: gameBoardHeight / 2,
    };
    let ball = Object.assign({}, ballInitial);
    const ballDirection = {
        x: 0,
        y: 0,
    };
    function drawBoard() {
        context.fillStyle = gameBoardColor;
        context.fillRect(0, 0, gameBoardWidth, gameBoardHeight);
    }
    function drawPaddle(paddleX, paddleY, color) {
        context.fillStyle = color;
        context.fillRect(paddleX, paddleY, paddleSize.width, paddleSize.height);
    }
    function drawPaddles() {
        drawPaddle(firstPaddle.x, firstPaddle.y, firstPaddleColor);
        drawPaddle(secondPaddle.x, secondPaddle.y, secondPaddleColor);
    }
    function drawBall() {
        context.beginPath();
        context.fillStyle = ballColor;
        context.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
        context.fill();
    }
    function chooseBallDirection() {
        return Math.random() < 0.5;
    }
    function setBallDirection() {
        if (chooseBallDirection()) {
            ballDirection.x = 1;
        }
        else {
            ballDirection.x = -1;
        }
        if (chooseBallDirection()) {
            ballDirection.y = 1;
        }
        else {
            ballDirection.y = -1;
        }
    }
    function handleBorderCollision() {
        const topBallRadius = ball.y <= ballRadius;
        const bottomBallRadius = ball.y >= gameBoardHeight - ballRadius;
        if (topBallRadius || bottomBallRadius) {
            ballDirection.y *= -1;
        }
    }
    function checkFirstPaddleCollision() {
        const xCollision = ball.x <= firstPaddle.x + ballRadius + paddleSize.width;
        const yCollision = ball.y >= firstPaddle.y && ball.y <= firstPaddle.y + paddleSize.height;
        return xCollision && yCollision;
    }
    function checkSecondPaddleCollision() {
        const xCollision = ball.x >= secondPaddle.x - ballRadius;
        const yCollision = ball.y >= secondPaddle.y && ball.y <= secondPaddle.y + paddleSize.height;
        return xCollision && yCollision;
    }
    function handlePaddleCollision() {
        const firstPaddleCollision = checkFirstPaddleCollision();
        const secondPaddleCollision = checkSecondPaddleCollision();
        if (firstPaddleCollision || secondPaddleCollision) {
            ballSpeed *= 1.07;
            ballDirection.x *= -1;
        }
        else {
            return;
        }
        if (firstPaddleCollision) {
            ball.x = firstPaddle.x + paddleSize.width + ballRadius;
        }
        else if (secondPaddleCollision) {
            ball.x = secondPaddle.x - ballRadius;
        }
    }
    function moveBall() {
        ball.x += ballSpeed * ballDirection.x;
        ball.y += ballSpeed * ballDirection.y;
        handleBorderCollision();
        handlePaddleCollision();
        handleGoal();
    }
    function updateScore() {
        scoreInfo.textContent = `${firstPlayerScore} : ${secondPlayerScore}`;
    }
    function handleGoal() {
        const firstUserGoal = ball.x > gameBoardWidth;
        const secondUserGoal = ball.x < 0;
        if (!firstUserGoal && !secondUserGoal) {
            return;
        }
        if (firstUserGoal) {
            firstPlayerScore++;
        }
        if (secondUserGoal) {
            secondPlayerScore++;
        }
        updateScore();
        ball = Object.assign({}, ballInitial);
        setBallDirection();
        drawBall();
        ballSpeed = initialBallSpeed;
    }
    function movePaddles(ev) {
        const firstPaddleGoingUp = ev.key === moveFirstPaddleKey.up;
        const firstPaddleGoingDown = ev.key === moveFirstPaddleKey.down;
        const secondPaddleGoingUp = ev.key === moveSecondPaddleKey.up;
        const secondPaddleGoingDown = ev.key === moveSecondPaddleKey.down;
        const canFirstPaddleMoveUp = firstPaddle.y > 0;
        const canFirstPaddleMoveDown = firstPaddle.y < gameBoard.height - paddleSize.height;
        const canSecondPaddleMoveUp = secondPaddle.y > 0;
        const canSecondPaddleMoveDown = secondPaddle.y < gameBoard.height - paddleSize.height;
        if (firstPaddleGoingUp && canFirstPaddleMoveUp) {
            firstPaddle.y -= paddleSpeed;
        }
        else if (firstPaddleGoingDown && canFirstPaddleMoveDown) {
            firstPaddle.y += paddleSpeed;
        }
        else if (secondPaddleGoingUp && canSecondPaddleMoveUp) {
            secondPaddle.y -= paddleSpeed;
        }
        else if (secondPaddleGoingDown && canSecondPaddleMoveDown) {
            secondPaddle.y += paddleSpeed;
        }
    }
    function updateGame() {
        drawBoard();
        drawPaddles();
        moveBall();
        drawBall();
    }
    function restartGame() {
        firstPlayerScore = 0;
        secondPlayerScore = 0;
        clearInterval(intervalID);
        ballSpeed = initialBallSpeed;
        ball = Object.assign({}, ballInitial);
        firstPaddle = Object.assign({}, firstPaddle);
        secondPaddle = Object.assign({}, secondPaddle);
        initGame();
    }
    function initGame() {
        updateScore();
        setBallDirection();
        window.addEventListener("keydown", movePaddles);
        intervalID = setInterval(updateGame, 20);
        restartBtn.addEventListener('click', restartGame);
    }
    initGame(); // if the game breaks use the line below
    // window.addEventListener("load", initGame);
}


/***/ }),

/***/ "./src/pages/game/index.ts":
/*!*********************************!*\
  !*** ./src/pages/game/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./game */ "./src/pages/game/game.ts"), exports);


/***/ }),

/***/ "./src/pages/home/home.ts":
/*!********************************!*\
  !*** ./src/pages/home/home.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleHomePage = handleHomePage;
const nagivation_1 = __webpack_require__(/*! ../../nagivation */ "./src/nagivation/index.ts");
function handleHomePage(mainWrapper) {
    (0, nagivation_1.navigationHandle)();
}


/***/ }),

/***/ "./src/pages/home/index.ts":
/*!*********************************!*\
  !*** ./src/pages/home/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./home */ "./src/pages/home/home.ts"), exports);


/***/ }),

/***/ "./src/pages/login/index.ts":
/*!**********************************!*\
  !*** ./src/pages/login/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./loginPage */ "./src/pages/login/loginPage.ts"), exports);


/***/ }),

/***/ "./src/pages/login/loginPage.ts":
/*!**************************************!*\
  !*** ./src/pages/login/loginPage.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleLogin = handleLogin;
const routing_1 = __webpack_require__(/*! ../../routing */ "./src/routing/index.ts");
function handleLogin() {
    const loginEmailInput = document.getElementById("loginInput");
    const loginPassInput = document.getElementById("loginPass");
    ;
    const loginBtn = document.getElementById("loginBtn");
    const forgotPassword = document.getElementById("questionPassForgot"); // later implement
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (loginEmailInput.value === 'admin' && loginPassInput.value === 'admin') {
            (0, routing_1.navigateTo)("/");
        }
    });
}


/***/ }),

/***/ "./src/pages/playPage/index.ts":
/*!*************************************!*\
  !*** ./src/pages/playPage/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./playPage */ "./src/pages/playPage/playPage.ts"), exports);


/***/ }),

/***/ "./src/pages/playPage/playPage.ts":
/*!****************************************!*\
  !*** ./src/pages/playPage/playPage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handlePlayPage = handlePlayPage;
const routing_1 = __webpack_require__(/*! ../../routing */ "./src/routing/index.ts");
const nagivation_1 = __webpack_require__(/*! ../../nagivation */ "./src/nagivation/index.ts");
function handlePlayPage() {
    (0, nagivation_1.navigationHandle)();
    document.getElementById("btn-play").addEventListener('click', (e) => {
        e.preventDefault();
        (0, routing_1.routeToGame)();
    });
}


/***/ }),

/***/ "./src/pages/profile/index.ts":
/*!************************************!*\
  !*** ./src/pages/profile/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./profile */ "./src/pages/profile/profile.ts"), exports);


/***/ }),

/***/ "./src/pages/profile/profile.ts":
/*!**************************************!*\
  !*** ./src/pages/profile/profile.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleProfilePage = handleProfilePage;
const nagivation_1 = __webpack_require__(/*! ../../nagivation */ "./src/nagivation/index.ts");
function handleProfilePage() {
    (0, nagivation_1.navigationHandle)();
}


/***/ }),

/***/ "./src/pages/registration/index.ts":
/*!*****************************************!*\
  !*** ./src/pages/registration/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./registration */ "./src/pages/registration/registration.ts"), exports);


/***/ }),

/***/ "./src/pages/registration/registration.ts":
/*!************************************************!*\
  !*** ./src/pages/registration/registration.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleRegistration = handleRegistration;
const index_1 = __webpack_require__(/*! ../../routing/index */ "./src/routing/index.ts");
const index_2 = __webpack_require__(/*! ../../routing/index */ "./src/routing/index.ts");
function handleRegistration() {
    const userNameInput = document.querySelector("#usernameRegistration");
    const emailInput = document.querySelector("#emailRegistration");
    const passwordInput = document.querySelector("#passwordRegistration");
    const btnRegistr = document.querySelector("#submitRegistration");
    const signInBtn = document.querySelector('#questionAlreadyRegistr');
    const inputsUsers = [userNameInput, emailInput, passwordInput];
    // dataBase has to be removed. It's created only for tests :)
    let userData = {
        text: null,
        email: null,
        password: null
    };
    const temporaryDataBase = [];
    // till this string
    btnRegistr.addEventListener('click', (e) => {
        e.preventDefault();
        try {
            inputsUsers.forEach(input => {
                const key = input.type.toLowerCase();
                if (!input.value) {
                    throw new Error("One of your inputs is empty!");
                }
                if (input.value.length < 3) {
                    throw new Error(`${input.placeholder} has to be minimum 3 characters`);
                }
                if (input.type === 'email' && !(input.value.match(/@/g))) {
                    throw new Error(`${input.placeholder} has contain ' @ ' symbol`);
                }
                userData[key] = input.value;
            });
            (0, index_1.routeToHome)();
        }
        catch (error) {
            alert(error);
        }
    });
    signInBtn.addEventListener('click', () => {
        (0, index_2.navigateTo)("/login");
    });
}


/***/ }),

/***/ "./src/pages/settingsPage/index.ts":
/*!*****************************************!*\
  !*** ./src/pages/settingsPage/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./settingsPage */ "./src/pages/settingsPage/settingsPage.ts"), exports);


/***/ }),

/***/ "./src/pages/settingsPage/settingsPage.ts":
/*!************************************************!*\
  !*** ./src/pages/settingsPage/settingsPage.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleSettings = handleSettings;
const nagivation_1 = __webpack_require__(/*! ../../nagivation */ "./src/nagivation/index.ts");
function handleSettings() {
    (0, nagivation_1.navigationHandle)();
}


/***/ }),

/***/ "./src/routing/index.ts":
/*!******************************!*\
  !*** ./src/routing/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./routes */ "./src/routing/routes.ts"), exports);
__exportStar(__webpack_require__(/*! ./routeToSomePage */ "./src/routing/routeToSomePage.ts"), exports);
__exportStar(__webpack_require__(/*! ./navigation */ "./src/routing/navigation.ts"), exports);


/***/ }),

/***/ "./src/routing/navigation.ts":
/*!***********************************!*\
  !*** ./src/routing/navigation.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.navigateTo = navigateTo;
const spaApp_1 = __importDefault(__webpack_require__(/*! ../spaApp */ "./src/spaApp/index.ts"));
function navigateTo(path) {
    history.pushState({}, "", path); // Change URL without reload
    (0, spaApp_1.default)(path); // Draw new Page
}


/***/ }),

/***/ "./src/routing/routeToSomePage.ts":
/*!****************************************!*\
  !*** ./src/routing/routeToSomePage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routeToGame = routeToGame;
exports.routeToHome = routeToHome;
const index_1 = __webpack_require__(/*! ./index */ "./src/routing/index.ts");
function routeToGame() {
    (0, index_1.navigateTo)("/game");
}
function routeToHome() {
    (0, index_1.navigateTo)("/");
}


/***/ }),

/***/ "./src/routing/routes.ts":
/*!*******************************!*\
  !*** ./src/routing/routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routes = void 0;
const index_1 = __webpack_require__(/*! ../Layout/index */ "./src/Layout/index.ts");
const playPage_1 = __webpack_require__(/*! ../pages/playPage */ "./src/pages/playPage/index.ts");
const game_1 = __webpack_require__(/*! ../pages/game */ "./src/pages/game/index.ts");
const registration_1 = __webpack_require__(/*! ../pages/registration */ "./src/pages/registration/index.ts");
const login_1 = __webpack_require__(/*! ../pages/login */ "./src/pages/login/index.ts");
const home_1 = __webpack_require__(/*! ../pages/home */ "./src/pages/home/index.ts");
const profile_1 = __webpack_require__(/*! ../pages/profile */ "./src/pages/profile/index.ts");
const settingsPage_1 = __webpack_require__(/*! ../pages/settingsPage */ "./src/pages/settingsPage/index.ts");
const errorPage_1 = __webpack_require__(/*! ../pages/errorPage */ "./src/pages/errorPage/index.ts");
exports.routes = {
    "/": { layoutCreate: index_1.homePage, handleFunc: home_1.handleHomePage },
    "/play": { layoutCreate: index_1.playPage, handleFunc: playPage_1.handlePlayPage },
    "/game": { layoutCreate: index_1.gamePage, handleFunc: game_1.handleGame },
    "/profile": { layoutCreate: index_1.profilePage, handleFunc: profile_1.handleProfilePage },
    "/registration": { layoutCreate: index_1.registrationPage, handleFunc: registration_1.handleRegistration },
    "/login": { layoutCreate: index_1.loginPage, handleFunc: login_1.handleLogin },
    "/settings": { layoutCreate: index_1.settingsPage, handleFunc: settingsPage_1.handleSettings },
    "/error": { layoutCreate: index_1.errorPage, handleFunc: errorPage_1.handleErrorPage }
};


/***/ }),

/***/ "./src/spaApp/index.ts":
/*!*****************************!*\
  !*** ./src/spaApp/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = runSPA;
const elements_1 = __webpack_require__(/*! ../elements */ "./src/elements/index.ts");
const index_1 = __webpack_require__(/*! ../routing/index */ "./src/routing/index.ts");
function runSPA(path) {
    document.body.append(elements_1.mainWrapper);
    if (location.pathname in index_1.routes) {
        elements_1.mainWrapper.removeAttribute("id");
        // mainWrapper.className = "flex flex-col h-full w-full";
        elements_1.mainWrapper.className = "container mx-auto px-4 h-full w-full";
        document.body.className = "";
        elements_1.mainWrapper.innerHTML = index_1.routes[location.pathname].layoutCreate(elements_1.mainWrapper);
        index_1.routes[location.pathname].handleFunc(elements_1.mainWrapper);
    }
    else {
        elements_1.mainWrapper.innerHTML = index_1.routes['/error'].layoutCreate();
        index_1.routes['/error'].handleFunc();
    }
}
// Forward-Back arrows working properly
window.addEventListener("popstate", () => {
    runSPA(location.pathname);
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCx1Q0FBdUM7QUFDdkMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7SUFDckMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUMsQ0FBQzs7Ozs7OztVQ3pCSDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvTGF5b3V0L2Vycm9yUGFnZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9MYXlvdXQvZ2FtZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvTGF5b3V0L2hvbWVQYWdlLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0xheW91dC9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9MYXlvdXQvbG9naW5QYWdlLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0xheW91dC9wbGF5UGFnZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9MYXlvdXQvcHJvZmlsZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvTGF5b3V0L3JlZ2lzdHJhdGlvblBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvTGF5b3V0L3NldHRpbmdzUGFnZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9lbGVtZW50cy9jcmVhdGVCdXR0b24udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvZWxlbWVudHMvY3JlYXRlTmF2aWdhdGlvbi50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9lbGVtZW50cy9jcmVhdGVXcmFwcGVyLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2VsZW1lbnRzL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL25hZ2l2YXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvbmFnaXZhdGlvbi9uYXZpZ2F0aW9uLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL25hZ2l2YXRpb24vbmF2aWdhdGlvblJvdXRlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9lcnJvclBhZ2UvZXJyb3JQYWdlLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2Vycm9yUGFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9nYW1lL2dhbWUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvZ2FtZS9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9ob21lL2hvbWUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvaG9tZS9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9sb2dpbi9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9sb2dpbi9sb2dpblBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvcGxheVBhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvcGxheVBhZ2UvcGxheVBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvcHJvZmlsZS9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9wcm9maWxlL3Byb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvcmVnaXN0cmF0aW9uL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvc2V0dGluZ3NQYWdlL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL3NldHRpbmdzUGFnZS9zZXR0aW5nc1BhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9yb3V0aW5nL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGluZy9yb3V0ZVRvU29tZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGluZy9yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc3BhQXBwL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuYXZpZ2F0aW9uIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvclBhZ2UoKSB7XG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImJnLWdyYWRpZW50LXRvLXRcIiwgXCJmcm9tLWJsYWNrXCIsIFwidmlhLWJsYWNrXCIsIFwidG8tZ3JheS04MDBcIik7XG5cdHJldHVybiBgXG5cdFx0XHQke25hdmlnYXRpb24oKX1cblx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW5cIj5cblx0XHRcdFx0PGgxIGNsYXNzPVwidGV4dC05eGwgdGV4dC13aGl0ZSBmb250LWJsYWNrXCI+IEVycm9yIDQwNCA8L2gxPlxuXHRcdFx0XHQ8aDEgY2xhc3M9XCJ0ZXh0LTd4bCBweS0zIHRleHQtd2hpdGVcIiBmb250LW1lZGl1bT4gVGhpcyBwYWdlIHdhcyBub3QgZm91bmQgPC9oMT5cblx0XHRcdDwvZGl2PmBcbn0iLCJpbXBvcnQgeyBuYXZpZ2F0aW9uIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lUGFnZSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImJnLWdyYWRpZW50LXRvLXRcIiwgXCJmcm9tLWJsYWNrXCIsIFwidmlhLWJsYWNrXCIsIFwidG8tZ3JheS04MDBcIik7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgJHtuYXZpZ2F0aW9uKCl9XG4gICAgICAgIDxjYW52YXMgaWQ9XCJnYW1lLWJvYXJkXCIgd2lkdGg9XCI4MDBcIiBoZWlnaHQ9XCI1MDBcIiBjbGFzcz1cImJnLWdyYXktNTAwIGJvcmRlclwiPjwvY2FudmFzPlxuICAgICAgICA8cCBpZD1cInNjb3JlLWluZm9cIiBjbGFzcz1cInRleHQtNHhsIHRleHQtd2hpdGVcIiBjbGFzcz1cImJnLWdyYXktNTAwXCIgPiBTY29yZSA8L3A+XG4gICAgICAgIDxidXR0b24gaWQ9XCJyZXN0YXJ0LWJ0blwiIGNsYXNzPVwicHgtMyBweS0xIGJvcmRlci0yIGJvcmRlci1jcmltc29uIHJvdW5kZWQtWzEwcHhdIGJnLWdyYXktNTAwIHRleHQtd2hpdGUgdGV4dC1bMjVweF1cIj4gUmVzdGFydCA8L2J1dHRvbj5gO1xufSIsImltcG9ydCB7IG5hdmlnYXRpb24gfSBmcm9tIFwiLi4vZWxlbWVudHNcIlxuLy8gaW1wb3J0ICBteUltZyAgZnJvbSBcIi4uL2ltZy9waW5nLXBvbmcucG5nXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVQYWdlKG1haW5XcmFwcGVyOiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZCkge1xuXHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJoLXNjcmVlblwiLCBcImZsZXhcIiwgXCJmbGV4LWNvbFwiLCBcImJnLWdyYWRpZW50LXRvLXRcIiwgXCJmcm9tLWJsYWNrXCIsIFwidmlhLWJsYWNrXCIsIFwidG8tZ3JheS04MDBcIiwgXCJvdmVyZmxvdy1oaWRkZW5cIik7XG5cdC8vICR7bmF2aWdhdGlvbigpfVxuXHRsZXQgcmVzID0gYFxuICAgICAgICBcdCR7bmF2aWdhdGlvbigpfVxuICAgICAgICBcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBwLTYgbXQtMjRcIj5cbiAgICAgICAgXHQgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy13aGl0ZSBwLTggcm91bmRlZC0yeGwgc2hhZG93LWxnXCI+XG4gICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6dy0xLzIgcC02XCI+XG4gICAgICAgIFx0ICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC00eGwgZm9udC1ib2xkIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTUwMCB2aWEtcHVycGxlLTUwMCB0by1waW5rLTUwMCB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dFwiPkZUX1RSQU5TQ0VOREVOU0NFPC9oMT5cbiAgICAgICAgXHQgICAgICAgICAgICA8cCBjbGFzcz1cIm10LTQgdGV4dC1ncmF5LTYwMCB0ZXh0LWxnXCI+XG4gICAgICAgIFx0ICAgICAgICAgICAgICAgIFRyYW5zY2VuZGVuY2UgaXMgYSA0MiBzY2hvb2wgcHJvamVjdCwgdG8gbGVhcm4gYWJvdXQgd2ViIGRldmVsb3BwZW1lbnQgYW5kIFNQQS48YnI+XG5cdFx0XHRcdFx0XHRcdFRoZSBnb2FsIGlzIHRvIGNyZWF0ZSBhIHdlYiBhcHAgdG8gcGxheSBQb25nLCBhbmQgc29jaWFsaXplIHdpdGggb3RoZXIgdXNlcnMuPGJyPjxicj5cbiAgICAgICAgXHQgICAgICAgICAgICA8L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc1wibXQtNCB0ZXh0LWdyYXktOTAwIHRleHQtbGdcIj5EZXZlbG9wZWQgYnkgbm92c2lhbm4gYW5kIGtpbGNoZW5rIDwvcD5cbiAgICAgICAgXHQgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6dy0xLzIgZmxleCBqdXN0aWZ5LWNlbnRlciBwLTZcIj5cbiAgICAgICAgXHQgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltZy9waW5nLXBvbmcucG5nXCIgYWx0PVwiUm9ja2V0IGZvciBwaW5nIHBvbmdcIiBjbGFzcz1cInctMTI4IGgtMTI4IG9iamVjdC1jb3ZlciByb3VuZGVkLXhsIHNoYWRvdy1tZFwiPlxuICAgICAgICBcdCAgICAgICAgPC9kaXY+XG4gICAgICAgIFx0ICAgIDwvZGl2PlxuICAgICAgICBcdDwvZGl2PmA7XG5cdHJldHVybiByZXM7XG59IiwiZXhwb3J0ICogZnJvbSBcIi4vbG9naW5QYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlZ2lzdHJhdGlvblBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vZXJyb3JQYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2dhbWVQYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BsYXlQYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hvbWVQYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Byb2ZpbGVQYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NldHRpbmdzUGFnZVwiIiwiZXhwb3J0IGZ1bmN0aW9uIGxvZ2luUGFnZSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJoLXNjcmVlblwiLCBcImZsZXhcIiwgXCJpdGVtcy1jZW50ZXJcIiwgXCJqdXN0aWZ5LWNlbnRlclwiLCBcImJnLWdyYWRpZW50LXRvLXRcIiwgXCJmcm9tLWJsYWNrXCIsIFwidmlhLWJsYWNrXCIsIFwidG8tZ3JheS04MDBcIik7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXgtdy1zbSBteC1hdXRvIG10LTEwIHAtNiBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIHRleHQtY2VudGVyIG1iLTRcIj5Mb2dpbjwvaDI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ5b3VyIGVtYWlsXCIgY2xhc3M9XCJ3LWZ1bGwgbWItMyBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS00MDBcIiBpZD1cImxvZ2luSW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJ5b3VyIHBhc3N3b3JkXCIgY2xhc3M9XCJ3LWZ1bGwgbWItNCBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS00MDBcIiBpZD1cImxvZ2luUGFzc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ3LWZ1bGwgYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcHktMiByb3VuZGVkIGhvdmVyOmJnLWdyZWVuLTYwMFwiIGlkPVwibG9naW5CdG5cIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtM1wiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LWJsdWUtNTAwIGhvdmVyOnVuZGVybGluZVwiIGlkPVwicXVlc3Rpb25QYXNzRm9yZ290XCI+Rm9yZ290IFBhc3N3b3JkPzwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxufSIsImltcG9ydCB7IG5hdmlnYXRpb24gfSBmcm9tIFwiLi4vZWxlbWVudHNcIlxuXG5leHBvcnQgZnVuY3Rpb24gcGxheVBhZ2UobWFpbldyYXBwZXI6IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgbGV0IHJlcyA9IGBcbiAgICAgICAgICAgICAgICAke25hdmlnYXRpb24oKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjayB2aWEtYmxhY2sgdG8tZ3JheS04MDAgc3BhY2UteS04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJweC02IHB5LTMgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCByb3VuZGVkLWxnIHRleHQteGwgaG92ZXI6YmctYmx1ZS03MDAgZm9jdXM6b3V0bGluZS1ub25lXCIgaWQ9XCJidG4tcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU1RBUlRcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICByZXR1cm4gcmVzO1xufSIsImltcG9ydCB7IG5hdmlnYXRpb24gfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2ZpbGVQYWdlKG1haW5XcmFwcGVyOiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgXCJoLXNjcmVlblwiLCBcImZsZXhcIiwgXCJmbGV4LWNvbFwiLFxuICAgICAgICBcImJnLWdyYWRpZW50LXRvLXRcIiwgXCJmcm9tLWJsYWNrXCIsIFwidmlhLWJsYWNrXCIsIFwidG8tZ3JheS04MDBcIixcbiAgICAgICAgXCJvdmVyZmxvdy1oaWRkZW5cIlxuICAgICk7XG5cbiAgICAvL214LWF1dG8gcC02IG10LTY0IHYgY29udGFpbmVyIGRvYmF2aXRcbiAgICBsZXQgcmVzID0gYFxuICAgICAgICAke25hdmlnYXRpb24oKX1cblxuICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHctZnVsbCByb3VuZGVkLWxnIHNoYWRvdy1sZyBteS1hdXRvIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy01LzYgaC05NiBiZy13aGl0ZSBwLTEwIHJvdW5kZWQtMnhsIHNoYWRvdy1sZyB0ZXh0LWNlbnRlciByZWxhdGl2ZVwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgLXRvcC0yMCBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9nb2F0LmpwZ1wiIGFsdD1cIlByb2ZpbGUgUGhvdG9cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctMzYgaC0zNiByb3VuZGVkLWZ1bGwgYm9yZGVyLTQgYm9yZGVyLXdoaXRlIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTI4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXCI+VXNlcm5hbWU8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC04IGZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtZ3JheS02MDAgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+MDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc21cIj5MZXZlbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+MDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc21cIj5GcmllbmRzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj4wPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbVwiPk1hdGNoZXMgcGxheWVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICByZXR1cm4gcmVzO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdHJhdGlvblBhZ2UoKSB7XG4gICAgLy8gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiaC1zY3JlZW5cIiwgXCJmbGV4XCIsIFwiaXRlbXMtY2VudGVyXCIsIFwianVzdGlmeS1jZW50ZXJcIiwgXCJiZy1ncmFkaWVudC10by10XCIsIFwiZnJvbS1ibGFja1wiLCBcInZpYS1ibGFja1wiLCBcInRvLWdyYXktODAwXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgXCJoLXNjcmVlblwiLCBcImZsZXhcIiwgXCJmbGV4LWNvbFwiLFxuICAgICAgICBcImJnLWdyYWRpZW50LXRvLXRcIiwgXCJmcm9tLWJsYWNrXCIsIFwidmlhLWJsYWNrXCIsIFwidG8tZ3JheS04MDBcIixcbiAgICAgICAgXCJvdmVyZmxvdy1oaWRkZW5cIlxuICAgICk7XG5cbiAgICByZXR1cm4gYFxuICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEwIHctNS81IGgtMy81IGZsZXggc2hhZG93LWxnIHJvdW5kZWQtbGcgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0zLzUgcC0xMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtOTAwIHRvLWJsdWUtOTAwIHRleHQtd2hpdGUgcm91bmRlZC1sLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtNHhsIGZvbnQtYm9sZFwiPlRyYW5zY2VuZGVuY2U8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm10LTQgdGV4dC1sZ1wiPkpvaW4gdXMgdG9kYXkgYW5kIHN0YXJ0IHlvdXIgam91cm5leSB3aXRoIG91ciBhbWF6aW5nIHBsYXRmb3JtLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0yLzUgcC0xMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtci1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgbWItNFwiPlJlZ2lzdHJhdGlvbjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwicmVnaXN0ZXJGb3JtXCIgY2xhc3M9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInVzZXJuYW1lUmVnaXN0cmF0aW9uXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgY2xhc3M9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFJlZ2lzdHJhdGlvblwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiIGNsYXNzPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRSZWdpc3RyYXRpb25cIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIllvdXIgcGFzc3dvcmRcIiBjbGFzcz1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInN1Ym1pdFJlZ2lzdHJhdGlvblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlJlZ2lzdGVyXCIgY2xhc3M9XCJ3LWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZCBob3ZlcjpiZy1ibHVlLTYwMCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtNFwiPkFscmVhZHkgcmVnaXN0ZXJlZD8gPGEgY2xhc3M9XCJ0ZXh0LWJsdWUtNTAwXCIgaWQ9XCJxdWVzdGlvbkFscmVhZHlSZWdpc3RyXCI+U2lnbiBJbjwvYT48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICBgXG59IiwiaW1wb3J0IHsgbmF2aWdhdGlvbiB9IGZyb20gXCIuLi9lbGVtZW50c1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR0aW5nc1BhZ2UobWFpbldyYXBwZXI6IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkKSB7XG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImJnLWdyYWRpZW50LXRvLXRcIiwgXCJmcm9tLWJsYWNrXCIsIFwidmlhLWJsYWNrXCIsIFwidG8tZ3JheS04MDBcIiwgXCJoLWZ1bGxcIik7XG5cdG1haW5XcmFwcGVyIS5jbGFzc05hbWUgPSBcIm14LWF1dG8gaC1zY3JlZW4gdy1mdWxsXCI7XG5cdGxldCByZXMgPSBgXG5cdFx0XHRcdCR7bmF2aWdhdGlvbigpfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidy1mdWxsIGZsZXggZmxleC1jb2wgZmxleC0xIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW5cIj5cbiAgXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJweC02IHB5LTMgdGV4dC1ibGFjayBiZy13aGl0ZSByb3VuZGVkLWxnIHRleHQteGwgdy00LzUgaC05NiB0ZXh0LWNlbnRlclwiPlxuICAgIFx0XHRcdFx0XHQ8aDE+U2V0dGluZ3MhPC9oMT5cbiAgXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5gO1xuXHRyZXR1cm4gcmVzO1xufSIsImV4cG9ydCBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW9uKCkge1xuXHRyZXR1cm4gYFxuXHRcdDxuYXYgY2xhc3M9XCJ0b3AtMCBsZWZ0LTAgYmctYmxhY2sgdGV4dC13aGl0ZSBoLTE2IHctZnVsbCBmaXhlZCBmbGV4IGl0ZW1zLWNlbnRlciBweC02XCI+XG4gICAgXHRcdDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9wbGFzdGljaW5lLzEwMC9waW5nLXBvbmctLXYxLnBuZ1wiIGFsdD1cIkxvZ29cIiBjbGFzcz1cImgtMTIgdy0xMiBvYmplY3QtY292ZXJcIiBpZD1pbWdMb2dvTmF2aT5cblxuXG4gICAgXHRcdDxkaXYgY2xhc3M9XCJmbGV4LTEgZmxleCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LThcIj5cbiAgICAgICBcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiZm9udC1tb25vIGgtNVwiIGlkPVwibmF2aUJ0blwiPiBIb21lIDwvYnV0dG9uPlxuICAgICAgICBcdFx0PGJ1dHRvbiBjbGFzcz1cImZvbnQtbW9ubyBoLTVcIiBpZD1cIm5hdmlCdG5cIj4gR2FtZSA8L2J1dHRvbj5cbiAgICAgICAgXHRcdDxidXR0b24gY2xhc3M9XCJmb250LW1vbm8gaC01XCIgaWQ9XCJuYXZpQnRuXCI+IFJlZ2lzdHJhdGlvbiA8L2J1dHRvbj5cbiAgICAgICAgXHRcdDxidXR0b24gY2xhc3M9XCJmb250LW1vbm8gaC01XCIgaWQ9XCJuYXZpQnRuXCI+IExvZ2luIDwvYnV0dG9uPlxuICAgIFx0XHQ8L2Rpdj5cblxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmVsYXRpdmVcIj5cbiAgICAgICAgXHRcdDxpbWcgaWQ9XCJwcm9maWxlSWNvblwiIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vZmx1ZW5jeS80OC90ZXN0LWFjY291bnQtLXYxLnBuZ1wiIGFsdD1cIlByb2ZpbGVcIiBjbGFzcz1cInctMTIgaC0xMiByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXJcIj5cblxuXG4gICAgICAgIFx0XHQ8ZGl2IGlkPVwiZHJvcGRvd25NZW51XCIgY2xhc3M9XCJhYnNvbHV0ZSByaWdodC0wIG10LTIgdy00OCBiZy13aGl0ZSB0ZXh0LWJsYWNrIHNoYWRvdy1sZyByb3VuZGVkLWxnIHAtMiBoaWRkZW5cIj5cbiAgICAgICAgICAgIFx0XHQ8YSBjbGFzcz1cImJsb2NrIHB4LTQgcHktMiBob3ZlcjpiZy1ncmF5LTIwMFwiPlByb2ZpbGU8L2E+XG5cdFx0XHRcdFx0PGEgY2xhc3M9XCJibG9jayBweC00IHB5LTIgaG92ZXI6YmctZ3JheS0yMDBcIj5HYW1lPC9hPlxuXHRcdFx0XHRcdDxhIGNsYXNzPVwiYmxvY2sgcHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMjAwXCI+TGVhZGVyYm9hcmQ8L2E+XG4gICAgICAgICAgICBcdFx0PGEgY2xhc3M9XCJibG9jayBweC00IHB5LTIgaG92ZXI6YmctZ3JheS0yMDBcIj5TZXR0aW5nczwvYT5cbiAgICAgICAgICAgIFx0XHQ8YSBjbGFzcz1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LXJlZC02MDAgaG92ZXI6YmctZ3JheS0yMDBcIj5Mb2dvdXQ8L2E+XG4gICAgICAgIFx0XHQ8L2Rpdj5cbiAgICBcdFx0PC9kaXY+XG5cdFx0PC9uYXY+XG5cdFx0YDtcbn0iLCJleHBvcnQgY29uc3QgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsiLCJleHBvcnQgKiBmcm9tICcuL2NyZWF0ZUJ1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL2NyZWF0ZVdyYXBwZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jcmVhdGVOYXZpZ2F0aW9uJzsiLCJpbXBvcnQgcnVuU3BhIGZyb20gJy4vc3BhQXBwL2luZGV4J1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHJ1blNwYShsb2NhdGlvbi5wYXRobmFtZSk7XG59KTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL25hdmlnYXRpb25cIiIsImltcG9ydCB7IG5hdmlnYXRlVG8gfSBmcm9tIFwiLi4vcm91dGluZ1wiO1xuaW1wb3J0IHsgbmF2aVJvdXRlcyB9IGZyb20gXCIuL25hdmlnYXRpb25Sb3V0ZXNcIjtcbmltcG9ydCB7IGRyb3BNZW51Um91dGVzIH0gZnJvbSBcIi4vbmF2aWdhdGlvblJvdXRlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGlvbkhhbmRsZSgpIHtcblx0Y29uc3QgbmF2aUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI25hdmlCdG5cIik7XG5cdGNvbnN0IHByb2ZpbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVJY29uXCIpO1xuXHRjb25zdCBkcm9wZG93bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duTWVudVwiKTtcblx0Y29uc3QgbmF2aURyb3BNZW51QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZHJvcGRvd25NZW51IGFcIik7XG5cdGNvbnN0IGltZ0xvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nTG9nb05hdmknKTtcblxuXHRpbWdMb2dvIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRuYXZpZ2F0ZVRvKCcvJyk7XG5cdH0pXG5cblx0bmF2aUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0aWYgKGJ0bi5pbm5lckhUTUwudHJpbSgpIGluIG5hdmlSb3V0ZXMpIHtcblx0XHRcdFx0bmF2aWdhdGVUbyhuYXZpUm91dGVzW2J0bi5pbm5lckhUTUwudHJpbSgpXSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pXG5cblx0bmF2aURyb3BNZW51QnRucy5mb3JFYWNoKChidG4pID0+IHtcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRpZiAoYnRuLmlubmVySFRNTC50cmltKCkgaW4gZHJvcE1lbnVSb3V0ZXMpIHtcblx0XHRcdFx0bmF2aWdhdGVUbyhkcm9wTWVudVJvdXRlc1tidG4uaW5uZXJIVE1MLnRyaW0oKV0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KVxuXG5cdHByb2ZpbGVCdG4hLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdGRyb3Bkb3duTWVudSEuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcblx0fSk7XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGlmIChlLnRhcmdldCAhPT0gZHJvcGRvd25NZW51ICYmIGUudGFyZ2V0ICE9PSBwcm9maWxlQnRuKVxuXHRcdFx0ZHJvcGRvd25NZW51IS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHR9KVxuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdGlmIChlLmtleUNvZGUgPT0gMjcpXG5cdFx0XHRkcm9wZG93bk1lbnUhLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cdH0pXG5cbn0iLCJleHBvcnQgY29uc3QgbmF2aVJvdXRlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcblx0XCJIb21lXCI6IFwiL1wiLFxuXHRcIkdhbWVcIjogXCIvZ2FtZVwiLFxuXHRcIlJlZ2lzdHJhdGlvblwiOiBcIi9yZWdpc3RyYXRpb25cIixcblx0XCJMb2dpblwiOiBcIi9sb2dpblwiXG59XG5cbmV4cG9ydCBjb25zdCBkcm9wTWVudVJvdXRlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcblx0XCJQcm9maWxlXCI6IFwiL3Byb2ZpbGVcIixcblx0XCJHYW1lXCI6IFwiL2dhbWVcIixcblx0XCJMZWFkZXJib2FyZFwiOiBcIi9sZWFkZXJib2FyZFwiLFxuXHRcIlNldHRpbmdzXCI6IFwiL3NldHRpbmdzXCIsXG5cdFwiTG9nb3V0XCI6IFwiL2xvZ291dFwiXG59ICAiLCJpbXBvcnQgeyBuYXZpZ2F0aW9uSGFuZGxlIH0gZnJvbSBcIi4uLy4uL25hZ2l2YXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUVycm9yUGFnZSgpIHtcblx0bmF2aWdhdGlvbkhhbmRsZSgpO1xufSIsImV4cG9ydCAqIGZyb20gXCIuL2Vycm9yUGFnZVwiIiwiaW1wb3J0IHsgbmF2aWdhdGlvbkhhbmRsZSB9IGZyb20gXCIuLi8uLi9uYWdpdmF0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVHYW1lKG1haW5XcmFwcGVyOiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZCkge1xuXHRuYXZpZ2F0aW9uSGFuZGxlKCk7XG5cdGNvbnN0IHNjb3JlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2NvcmUtaW5mb1wiKTtcblx0Y29uc3QgZ2FtZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWJvYXJkXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuXHRjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXN0YXJ0LWJ0blwiKTtcblx0Ly8gY29uc3QgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcblx0bGV0IGludGVydmFsSUQ6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPjs7XG5cblx0bWFpbldyYXBwZXIhLmlkID0gXCJnYW1lLWNvbnRhaW5lclwiO1xuXHRtYWluV3JhcHBlciEuY2xhc3NMaXN0LmFkZChcImgtc2NyZWVuXCIsIFwiZmxleFwiLCBcImZsZXgtY29sXCIsIFwiZ2FwLTIuNVwiLCBcImp1c3RpZnktY2VudGVyXCIsIFwiaXRlbXMtY2VudGVyXCIpO1xuXHRjb25zdCBjb250ZXh0ID0gZ2FtZUJvYXJkPy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblx0Y29uc3QgZ2FtZUJvYXJkQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShnYW1lQm9hcmQpLmJhY2tncm91bmRDb2xvcjtcblx0Y29uc3QgZmlyc3RQYWRkbGVDb2xvciA9IFwid2hpdGVcIjtcblx0Y29uc3Qgc2Vjb25kUGFkZGxlQ29sb3IgPSBcIndoaXRlXCI7XG5cdGNvbnN0IGJhbGxDb2xvciA9IFwid2hpdGVcIjtcblxuXHRjb25zdCBnYW1lQm9hcmRXaWR0aCA9IGdhbWVCb2FyZC53aWR0aDtcblx0Y29uc3QgZ2FtZUJvYXJkSGVpZ2h0ID0gZ2FtZUJvYXJkLmhlaWdodDtcblxuXHRjb25zdCBtb3ZlRmlyc3RQYWRkbGVLZXkgPSB7XG5cdFx0dXA6IFwid1wiLFxuXHRcdGRvd246IFwic1wiLFxuXHR9XG5cblx0Y29uc3QgbW92ZVNlY29uZFBhZGRsZUtleSA9IHtcblx0XHR1cDogXCJBcnJvd1VwXCIsXG5cdFx0ZG93bjogXCJBcnJvd0Rvd25cIlxuXHR9XG5cblx0Y29uc3QgcGFkZGxlU2l6ZSA9IHtcblx0XHR3aWR0aDogMjUsXG5cdFx0aGVpZ2h0OiAxMjBcblx0fVxuXG5cdGNvbnN0IGJhbGxSYWRpdXMgPSAxMztcblx0Y29uc3QgaW5pdGlhbEJhbGxTcGVlZCA9IDU7XG5cdGxldCBiYWxsU3BlZWQgPSBpbml0aWFsQmFsbFNwZWVkO1xuXHRjb25zdCBwYWRkbGVTcGVlZCA9IDQwO1xuXHRsZXQgZmlyc3RQbGF5ZXJTY29yZSA9IDA7XG5cdGxldCBzZWNvbmRQbGF5ZXJTY29yZSA9IDA7XG5cblx0Y29uc3QgZmlyc3RQYWRkbGVJbml0aWFsID0ge1xuXHRcdHg6IDAsXG5cdFx0eTogMFxuXHR9XG5cblx0Y29uc3Qgc2Vjb25kUGFkZGxlSW5pdGlhbCA9IHtcblx0XHR4OiBnYW1lQm9hcmRXaWR0aCAtIHBhZGRsZVNpemUud2lkdGgsXG5cdFx0eTogZ2FtZUJvYXJkSGVpZ2h0IC0gcGFkZGxlU2l6ZS5oZWlnaHQsXG5cdH1cblxuXHRsZXQgZmlyc3RQYWRkbGUgPSB7IC4uLmZpcnN0UGFkZGxlSW5pdGlhbCB9O1xuXHRsZXQgc2Vjb25kUGFkZGxlID0geyAuLi5zZWNvbmRQYWRkbGVJbml0aWFsIH07XG5cblx0Y29uc3QgYmFsbEluaXRpYWwgPSB7XG5cdFx0eDogZ2FtZUJvYXJkV2lkdGggLyAyLFxuXHRcdHk6IGdhbWVCb2FyZEhlaWdodCAvIDIsXG5cdH1cblxuXHRsZXQgYmFsbCA9IHsgLi4uYmFsbEluaXRpYWwgfTtcblx0Y29uc3QgYmFsbERpcmVjdGlvbiA9IHtcblx0XHR4OiAwLFxuXHRcdHk6IDAsXG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3Qm9hcmQoKSB7XG5cdFx0Y29udGV4dCEuZmlsbFN0eWxlID0gZ2FtZUJvYXJkQ29sb3I7XG5cdFx0Y29udGV4dCEuZmlsbFJlY3QoMCwgMCwgZ2FtZUJvYXJkV2lkdGgsIGdhbWVCb2FyZEhlaWdodCk7XG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3UGFkZGxlKHBhZGRsZVg6IG51bWJlciwgcGFkZGxlWTogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSB7XG5cdFx0Y29udGV4dCEuZmlsbFN0eWxlID0gY29sb3I7XG5cdFx0Y29udGV4dCEuZmlsbFJlY3QocGFkZGxlWCwgcGFkZGxlWSwgcGFkZGxlU2l6ZS53aWR0aCwgcGFkZGxlU2l6ZS5oZWlnaHQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd1BhZGRsZXMoKSB7XG5cdFx0ZHJhd1BhZGRsZShmaXJzdFBhZGRsZS54LCBmaXJzdFBhZGRsZS55LCBmaXJzdFBhZGRsZUNvbG9yKTtcblx0XHRkcmF3UGFkZGxlKHNlY29uZFBhZGRsZS54LCBzZWNvbmRQYWRkbGUueSwgc2Vjb25kUGFkZGxlQ29sb3IpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd0JhbGwoKSB7XG5cdFx0Y29udGV4dCEuYmVnaW5QYXRoKCk7XG5cdFx0Y29udGV4dCEuZmlsbFN0eWxlID0gYmFsbENvbG9yO1xuXHRcdGNvbnRleHQhLmFyYyhiYWxsLngsIGJhbGwueSwgYmFsbFJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuXHRcdGNvbnRleHQhLmZpbGwoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNob29zZUJhbGxEaXJlY3Rpb24oKSB7XG5cdFx0cmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjU7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRCYWxsRGlyZWN0aW9uKCkge1xuXHRcdGlmIChjaG9vc2VCYWxsRGlyZWN0aW9uKCkpIHtcblx0XHRcdGJhbGxEaXJlY3Rpb24ueCA9IDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJhbGxEaXJlY3Rpb24ueCA9IC0xO1xuXHRcdH1cblxuXHRcdGlmIChjaG9vc2VCYWxsRGlyZWN0aW9uKCkpIHtcblx0XHRcdGJhbGxEaXJlY3Rpb24ueSA9IDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJhbGxEaXJlY3Rpb24ueSA9IC0xO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZUJvcmRlckNvbGxpc2lvbigpIHtcblx0XHRjb25zdCB0b3BCYWxsUmFkaXVzID0gYmFsbC55IDw9IGJhbGxSYWRpdXM7XG5cdFx0Y29uc3QgYm90dG9tQmFsbFJhZGl1cyA9IGJhbGwueSA+PSBnYW1lQm9hcmRIZWlnaHQgLSBiYWxsUmFkaXVzO1xuXHRcdGlmICh0b3BCYWxsUmFkaXVzIHx8IGJvdHRvbUJhbGxSYWRpdXMpIHtcblx0XHRcdGJhbGxEaXJlY3Rpb24ueSAqPSAtMTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjaGVja0ZpcnN0UGFkZGxlQ29sbGlzaW9uKCkge1xuXHRcdGNvbnN0IHhDb2xsaXNpb24gPSBiYWxsLnggPD0gZmlyc3RQYWRkbGUueCArIGJhbGxSYWRpdXMgKyBwYWRkbGVTaXplLndpZHRoO1xuXHRcdGNvbnN0IHlDb2xsaXNpb24gPSBiYWxsLnkgPj0gZmlyc3RQYWRkbGUueSAmJiBiYWxsLnkgPD0gZmlyc3RQYWRkbGUueSArIHBhZGRsZVNpemUuaGVpZ2h0O1xuXHRcdHJldHVybiB4Q29sbGlzaW9uICYmIHlDb2xsaXNpb247XG5cdH1cblxuXHRmdW5jdGlvbiBjaGVja1NlY29uZFBhZGRsZUNvbGxpc2lvbigpIHtcblx0XHRjb25zdCB4Q29sbGlzaW9uID0gYmFsbC54ID49IHNlY29uZFBhZGRsZS54IC0gYmFsbFJhZGl1cztcblx0XHRjb25zdCB5Q29sbGlzaW9uID0gYmFsbC55ID49IHNlY29uZFBhZGRsZS55ICYmIGJhbGwueSA8PSBzZWNvbmRQYWRkbGUueSArIHBhZGRsZVNpemUuaGVpZ2h0O1xuXHRcdHJldHVybiB4Q29sbGlzaW9uICYmIHlDb2xsaXNpb247XG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVQYWRkbGVDb2xsaXNpb24oKSB7XG5cdFx0Y29uc3QgZmlyc3RQYWRkbGVDb2xsaXNpb24gPSBjaGVja0ZpcnN0UGFkZGxlQ29sbGlzaW9uKCk7XG5cdFx0Y29uc3Qgc2Vjb25kUGFkZGxlQ29sbGlzaW9uID0gY2hlY2tTZWNvbmRQYWRkbGVDb2xsaXNpb24oKTtcblxuXHRcdGlmIChmaXJzdFBhZGRsZUNvbGxpc2lvbiB8fCBzZWNvbmRQYWRkbGVDb2xsaXNpb24pIHtcblx0XHRcdGJhbGxTcGVlZCAqPSAxLjA3O1xuXHRcdFx0YmFsbERpcmVjdGlvbi54ICo9IC0xO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChmaXJzdFBhZGRsZUNvbGxpc2lvbikge1xuXHRcdFx0YmFsbC54ID0gZmlyc3RQYWRkbGUueCArIHBhZGRsZVNpemUud2lkdGggKyBiYWxsUmFkaXVzO1xuXHRcdH0gZWxzZSBpZiAoc2Vjb25kUGFkZGxlQ29sbGlzaW9uKSB7XG5cdFx0XHRiYWxsLnggPSBzZWNvbmRQYWRkbGUueCAtIGJhbGxSYWRpdXM7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gbW92ZUJhbGwoKSB7XG5cdFx0YmFsbC54ICs9IGJhbGxTcGVlZCAqIGJhbGxEaXJlY3Rpb24ueDtcblx0XHRiYWxsLnkgKz0gYmFsbFNwZWVkICogYmFsbERpcmVjdGlvbi55O1xuXHRcdGhhbmRsZUJvcmRlckNvbGxpc2lvbigpO1xuXHRcdGhhbmRsZVBhZGRsZUNvbGxpc2lvbigpO1xuXHRcdGhhbmRsZUdvYWwoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVNjb3JlKCkge1xuXHRcdHNjb3JlSW5mbyEudGV4dENvbnRlbnQgPSBgJHtmaXJzdFBsYXllclNjb3JlfSA6ICR7c2Vjb25kUGxheWVyU2NvcmV9YFxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlR29hbCgpIHtcblx0XHRjb25zdCBmaXJzdFVzZXJHb2FsID0gYmFsbC54ID4gZ2FtZUJvYXJkV2lkdGg7XG5cdFx0Y29uc3Qgc2Vjb25kVXNlckdvYWwgPSBiYWxsLnggPCAwO1xuXG5cdFx0aWYgKCFmaXJzdFVzZXJHb2FsICYmICFzZWNvbmRVc2VyR29hbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZmlyc3RVc2VyR29hbCkge1xuXHRcdFx0Zmlyc3RQbGF5ZXJTY29yZSsrO1xuXHRcdH1cblx0XHRpZiAoc2Vjb25kVXNlckdvYWwpIHtcblx0XHRcdHNlY29uZFBsYXllclNjb3JlKys7XG5cdFx0fVxuXHRcdHVwZGF0ZVNjb3JlKCk7XG5cdFx0YmFsbCA9IHsgLi4uYmFsbEluaXRpYWwgfTtcblx0XHRzZXRCYWxsRGlyZWN0aW9uKCk7XG5cdFx0ZHJhd0JhbGwoKTtcblx0XHRiYWxsU3BlZWQgPSBpbml0aWFsQmFsbFNwZWVkO1xuXHR9XG5cblx0ZnVuY3Rpb24gbW92ZVBhZGRsZXMoZXY6IEtleWJvYXJkRXZlbnQpIHtcblxuXHRcdGNvbnN0IGZpcnN0UGFkZGxlR29pbmdVcCA9IGV2LmtleSA9PT0gbW92ZUZpcnN0UGFkZGxlS2V5LnVwO1xuXHRcdGNvbnN0IGZpcnN0UGFkZGxlR29pbmdEb3duID0gZXYua2V5ID09PSBtb3ZlRmlyc3RQYWRkbGVLZXkuZG93bjtcblx0XHRjb25zdCBzZWNvbmRQYWRkbGVHb2luZ1VwID0gZXYua2V5ID09PSBtb3ZlU2Vjb25kUGFkZGxlS2V5LnVwO1xuXHRcdGNvbnN0IHNlY29uZFBhZGRsZUdvaW5nRG93biA9IGV2LmtleSA9PT0gbW92ZVNlY29uZFBhZGRsZUtleS5kb3duO1xuXG5cdFx0Y29uc3QgY2FuRmlyc3RQYWRkbGVNb3ZlVXAgPSBmaXJzdFBhZGRsZS55ID4gMDtcblx0XHRjb25zdCBjYW5GaXJzdFBhZGRsZU1vdmVEb3duID0gZmlyc3RQYWRkbGUueSA8IGdhbWVCb2FyZC5oZWlnaHQgLSBwYWRkbGVTaXplLmhlaWdodDtcblx0XHRjb25zdCBjYW5TZWNvbmRQYWRkbGVNb3ZlVXAgPSBzZWNvbmRQYWRkbGUueSA+IDA7XG5cdFx0Y29uc3QgY2FuU2Vjb25kUGFkZGxlTW92ZURvd24gPSBzZWNvbmRQYWRkbGUueSA8IGdhbWVCb2FyZC5oZWlnaHQgLSBwYWRkbGVTaXplLmhlaWdodDtcblxuXHRcdGlmIChmaXJzdFBhZGRsZUdvaW5nVXAgJiYgY2FuRmlyc3RQYWRkbGVNb3ZlVXApIHtcblx0XHRcdGZpcnN0UGFkZGxlLnkgLT0gcGFkZGxlU3BlZWQ7XG5cdFx0fSBlbHNlIGlmIChmaXJzdFBhZGRsZUdvaW5nRG93biAmJiBjYW5GaXJzdFBhZGRsZU1vdmVEb3duKSB7XG5cdFx0XHRmaXJzdFBhZGRsZS55ICs9IHBhZGRsZVNwZWVkO1xuXHRcdH0gZWxzZSBpZiAoc2Vjb25kUGFkZGxlR29pbmdVcCAmJiBjYW5TZWNvbmRQYWRkbGVNb3ZlVXApIHtcblx0XHRcdHNlY29uZFBhZGRsZS55IC09IHBhZGRsZVNwZWVkO1xuXHRcdH0gZWxzZSBpZiAoc2Vjb25kUGFkZGxlR29pbmdEb3duICYmIGNhblNlY29uZFBhZGRsZU1vdmVEb3duKSB7XG5cdFx0XHRzZWNvbmRQYWRkbGUueSArPSBwYWRkbGVTcGVlZDtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVHYW1lKCkge1xuXHRcdGRyYXdCb2FyZCgpO1xuXHRcdGRyYXdQYWRkbGVzKCk7XG5cdFx0bW92ZUJhbGwoKTtcblx0XHRkcmF3QmFsbCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVzdGFydEdhbWUoKSB7XG5cdFx0Zmlyc3RQbGF5ZXJTY29yZSA9IDA7XG5cdFx0c2Vjb25kUGxheWVyU2NvcmUgPSAwO1xuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG5cdFx0YmFsbFNwZWVkID0gaW5pdGlhbEJhbGxTcGVlZDtcblx0XHRiYWxsID0geyAuLi5iYWxsSW5pdGlhbCB9O1xuXHRcdGZpcnN0UGFkZGxlID0geyAuLi5maXJzdFBhZGRsZSB9O1xuXHRcdHNlY29uZFBhZGRsZSA9IHsgLi4uc2Vjb25kUGFkZGxlIH07XG5cdFx0aW5pdEdhbWUoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXRHYW1lKCkge1xuXHRcdHVwZGF0ZVNjb3JlKCk7XG5cdFx0c2V0QmFsbERpcmVjdGlvbigpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBtb3ZlUGFkZGxlcyk7XG5cdFx0aW50ZXJ2YWxJRCA9IHNldEludGVydmFsKHVwZGF0ZUdhbWUsIDIwKTtcblx0XHRyZXN0YXJ0QnRuIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc3RhcnRHYW1lKTtcblx0fVxuXG5cdGluaXRHYW1lKCk7IC8vIGlmIHRoZSBnYW1lIGJyZWFrcyB1c2UgdGhlIGxpbmUgYmVsb3dcblx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGluaXRHYW1lKTtcbn1cblxuXG5cblxuXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9nYW1lXCIiLCJpbXBvcnQgeyBuYXZpZ2F0aW9uSGFuZGxlIH0gZnJvbSBcIi4uLy4uL25hZ2l2YXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUhvbWVQYWdlKG1haW5XcmFwcGVyOiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZCkge1xuXHRuYXZpZ2F0aW9uSGFuZGxlKCk7XG59IiwiZXhwb3J0ICogZnJvbSBcIi4vaG9tZVwiIiwiZXhwb3J0ICogZnJvbSBcIi4vbG9naW5QYWdlXCIiLCJpbXBvcnQgeyBuYXZpZ2F0ZVRvIH0gZnJvbSBcIi4uLy4uL3JvdXRpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUxvZ2luKCkge1xuICAgIGNvbnN0IGxvZ2luRW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5JbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGxvZ2luUGFzc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblBhc3NcIikgYXMgSFRNTElucHV0RWxlbWVudDs7XG4gICAgY29uc3QgbG9naW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luQnRuXCIpO1xuICAgIGNvbnN0IGZvcmdvdFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdGlvblBhc3NGb3Jnb3RcIik7IC8vIGxhdGVyIGltcGxlbWVudFxuXG4gICAgbG9naW5CdG4hLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChsb2dpbkVtYWlsSW5wdXQudmFsdWUgPT09ICdhZG1pbicgJiYgbG9naW5QYXNzSW5wdXQudmFsdWUgPT09ICdhZG1pbicpIHtcbiAgICAgICAgICAgIG5hdmlnYXRlVG8oXCIvXCIpO1xuICAgICAgICB9XG4gICAgfSlcbn0iLCJleHBvcnQgKiBmcm9tIFwiLi9wbGF5UGFnZVwiIiwiaW1wb3J0IHsgcm91dGVUb0dhbWUgfSBmcm9tIFwiLi4vLi4vcm91dGluZ1wiO1xuaW1wb3J0IHsgbmF2aWdhdGlvbkhhbmRsZSB9IGZyb20gXCIuLi8uLi9uYWdpdmF0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQbGF5UGFnZSgpIHtcblx0bmF2aWdhdGlvbkhhbmRsZSgpO1xuXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXBsYXlcIikhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0cm91dGVUb0dhbWUoKTtcblx0fSk7XG59IiwiZXhwb3J0ICogZnJvbSBcIi4vcHJvZmlsZVwiIiwiaW1wb3J0IHsgbmF2aWdhdGlvbkhhbmRsZSB9IGZyb20gXCIuLi8uLi9uYWdpdmF0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQcm9maWxlUGFnZSgpIHtcblx0bmF2aWdhdGlvbkhhbmRsZSgpO1xufSIsImV4cG9ydCAqIGZyb20gXCIuL3JlZ2lzdHJhdGlvblwiIiwiaW1wb3J0IHsgcm91dGVUb0hvbWUgfSBmcm9tIFwiLi4vLi4vcm91dGluZy9pbmRleFwiXG5pbXBvcnQgeyBuYXZpZ2F0ZVRvIH0gZnJvbSBcIi4uLy4uL3JvdXRpbmcvaW5kZXhcIlxuXG5pbnRlcmZhY2UgSVVzZXJEYXRhVHlwZSB7XG4gICAgdGV4dDogc3RyaW5nIHwgbnVsbCxcbiAgICBlbWFpbDogc3RyaW5nIHwgbnVsbCxcbiAgICBwYXNzd29yZDogc3RyaW5nIHwgbnVsbFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVSZWdpc3RyYXRpb24oKSB7XG4gICAgY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcm5hbWVSZWdpc3RyYXRpb25cIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbFJlZ2lzdHJhdGlvblwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkUmVnaXN0cmF0aW9uXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgYnRuUmVnaXN0ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0UmVnaXN0cmF0aW9uXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGNvbnN0IHNpZ25JbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWVzdGlvbkFscmVhZHlSZWdpc3RyJyk7XG5cbiAgICBjb25zdCBpbnB1dHNVc2VyczogSFRNTElucHV0RWxlbWVudFtdID0gW3VzZXJOYW1lSW5wdXQsIGVtYWlsSW5wdXQsIHBhc3N3b3JkSW5wdXRdO1xuICAgIC8vIGRhdGFCYXNlIGhhcyB0byBiZSByZW1vdmVkLiBJdCdzIGNyZWF0ZWQgb25seSBmb3IgdGVzdHMgOilcbiAgICBsZXQgdXNlckRhdGE6IElVc2VyRGF0YVR5cGUgPSB7XG4gICAgICAgIHRleHQ6IG51bGwsXG4gICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICBwYXNzd29yZDogbnVsbFxuICAgIH07XG4gICAgY29uc3QgdGVtcG9yYXJ5RGF0YUJhc2U6IHN0cmluZ1tdW10gPSBbXTtcbiAgICAvLyB0aWxsIHRoaXMgc3RyaW5nXG5cbiAgICBidG5SZWdpc3RyIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlucHV0c1VzZXJzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGlucHV0LnR5cGUudG9Mb3dlckNhc2UoKSBhcyBrZXlvZiBJVXNlckRhdGFUeXBlO1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT25lIG9mIHlvdXIgaW5wdXRzIGlzIGVtcHR5IVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2lucHV0LnBsYWNlaG9sZGVyfSBoYXMgdG8gYmUgbWluaW11bSAzIGNoYXJhY3RlcnNgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdlbWFpbCcgJiYgIShpbnB1dC52YWx1ZS5tYXRjaCgvQC9nKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2lucHV0LnBsYWNlaG9sZGVyfSBoYXMgY29udGFpbiAnIEAgJyBzeW1ib2xgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXNlckRhdGFba2V5XSA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByb3V0ZVRvSG9tZSgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgc2lnbkluQnRuIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbmF2aWdhdGVUbyhcIi9sb2dpblwiKTtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL3NldHRpbmdzUGFnZVwiIiwiaW1wb3J0IHsgbmF2aWdhdGlvbkhhbmRsZSB9IGZyb20gXCIuLi8uLi9uYWdpdmF0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTZXR0aW5ncygpIHtcblx0bmF2aWdhdGlvbkhhbmRsZSgpO1xufSIsImV4cG9ydCAqIGZyb20gXCIuL3JvdXRlc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9yb3V0ZVRvU29tZVBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbmF2aWdhdGlvblwiIiwiaW1wb3J0IHJ1blNQQSBmcm9tIFwiLi4vc3BhQXBwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVRvKHBhdGg6IHN0cmluZykge1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIlwiLCBwYXRoKTsgLy8gQ2hhbmdlIFVSTCB3aXRob3V0IHJlbG9hZFxuICAgIHJ1blNQQShwYXRoKTsgLy8gRHJhdyBuZXcgUGFnZVxufSIsImltcG9ydCB7IG5hdmlnYXRlVG8gfSBmcm9tIFwiLi9pbmRleFwiXG5cbmV4cG9ydCBmdW5jdGlvbiByb3V0ZVRvR2FtZSgpIHtcblx0bmF2aWdhdGVUbyhcIi9nYW1lXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91dGVUb0hvbWUoKSB7XG5cdG5hdmlnYXRlVG8oXCIvXCIpO1xufSIsImltcG9ydCB7IHBsYXlQYWdlLCBnYW1lUGFnZSwgcmVnaXN0cmF0aW9uUGFnZSwgbG9naW5QYWdlLCBob21lUGFnZSwgcHJvZmlsZVBhZ2UsIHNldHRpbmdzUGFnZSwgZXJyb3JQYWdlIH0gZnJvbSBcIi4uL0xheW91dC9pbmRleFwiXG5pbXBvcnQgeyBoYW5kbGVQbGF5UGFnZSB9IGZyb20gXCIuLi9wYWdlcy9wbGF5UGFnZVwiXG5pbXBvcnQgeyBoYW5kbGVHYW1lIH0gZnJvbSBcIi4uL3BhZ2VzL2dhbWVcIlxuaW1wb3J0IHsgaGFuZGxlUmVnaXN0cmF0aW9uIH0gZnJvbSBcIi4uL3BhZ2VzL3JlZ2lzdHJhdGlvblwiXG5pbXBvcnQgeyBoYW5kbGVMb2dpbiB9IGZyb20gXCIuLi9wYWdlcy9sb2dpblwiXG5pbXBvcnQgeyBoYW5kbGVIb21lUGFnZSB9IGZyb20gXCIuLi9wYWdlcy9ob21lXCJcbmltcG9ydCB7IGhhbmRsZVByb2ZpbGVQYWdlIH0gZnJvbSBcIi4uL3BhZ2VzL3Byb2ZpbGVcIlxuaW1wb3J0IHsgaGFuZGxlU2V0dGluZ3MgfSBmcm9tIFwiLi4vcGFnZXMvc2V0dGluZ3NQYWdlXCJcbmltcG9ydCB7IGhhbmRsZUVycm9yUGFnZSB9IGZyb20gXCIuLi9wYWdlcy9lcnJvclBhZ2VcIlxuXG5pbnRlcmZhY2UgaGFuZGxlRnVuY3Rpb25JIHtcbiAgICBsYXlvdXRDcmVhdGU6IChtYWluV3JhcHBlcj86IEhUTUxEaXZFbGVtZW50KSA9PiBzdHJpbmc7XG4gICAgaGFuZGxlRnVuYzogKG1haW5XcmFwcGVyPzogSFRNTERpdkVsZW1lbnQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJlY29yZDxzdHJpbmcsIGhhbmRsZUZ1bmN0aW9uST4gPSB7XG4gICAgXCIvXCI6IHsgbGF5b3V0Q3JlYXRlOiBob21lUGFnZSwgaGFuZGxlRnVuYzogaGFuZGxlSG9tZVBhZ2UgfSxcbiAgICBcIi9wbGF5XCI6IHsgbGF5b3V0Q3JlYXRlOiBwbGF5UGFnZSwgaGFuZGxlRnVuYzogaGFuZGxlUGxheVBhZ2UgfSxcbiAgICBcIi9nYW1lXCI6IHsgbGF5b3V0Q3JlYXRlOiBnYW1lUGFnZSwgaGFuZGxlRnVuYzogaGFuZGxlR2FtZSB9LFxuICAgIFwiL3Byb2ZpbGVcIjogeyBsYXlvdXRDcmVhdGU6IHByb2ZpbGVQYWdlLCBoYW5kbGVGdW5jOiBoYW5kbGVQcm9maWxlUGFnZSB9LFxuICAgIFwiL3JlZ2lzdHJhdGlvblwiOiB7IGxheW91dENyZWF0ZTogcmVnaXN0cmF0aW9uUGFnZSwgaGFuZGxlRnVuYzogaGFuZGxlUmVnaXN0cmF0aW9uIH0sXG4gICAgXCIvbG9naW5cIjogeyBsYXlvdXRDcmVhdGU6IGxvZ2luUGFnZSwgaGFuZGxlRnVuYzogaGFuZGxlTG9naW4gfSxcbiAgICBcIi9zZXR0aW5nc1wiOiB7bGF5b3V0Q3JlYXRlOiBzZXR0aW5nc1BhZ2UsIGhhbmRsZUZ1bmM6IGhhbmRsZVNldHRpbmdzfSxcbiAgICBcIi9lcnJvclwiOiB7bGF5b3V0Q3JlYXRlOiBlcnJvclBhZ2UsIGhhbmRsZUZ1bmM6IGhhbmRsZUVycm9yUGFnZX1cbn07IiwiaW1wb3J0IHsgbWFpbldyYXBwZXIgfSBmcm9tICcuLi9lbGVtZW50cyc7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tIFwiLi4vcm91dGluZy9pbmRleFwiXG5pbXBvcnQgeyBlcnJvclBhZ2UgfSBmcm9tIFwiLi4vTGF5b3V0L2luZGV4XCJcbmltcG9ydCB7IGhhbmRsZUVycm9yUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2Vycm9yUGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJ1blNQQShwYXRoPzogc3RyaW5nKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobWFpbldyYXBwZXIpO1xuXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lIGluIHJvdXRlcykge1xuICAgICAgICBtYWluV3JhcHBlci5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgICAgLy8gbWFpbldyYXBwZXIuY2xhc3NOYW1lID0gXCJmbGV4IGZsZXgtY29sIGgtZnVsbCB3LWZ1bGxcIjtcbiAgICAgICAgbWFpbldyYXBwZXIuY2xhc3NOYW1lID0gXCJjb250YWluZXIgbXgtYXV0byBweC00IGgtZnVsbCB3LWZ1bGxcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICBtYWluV3JhcHBlci5pbm5lckhUTUwgPSByb3V0ZXNbbG9jYXRpb24ucGF0aG5hbWVdLmxheW91dENyZWF0ZShtYWluV3JhcHBlcik7XG4gICAgICAgIHJvdXRlc1tsb2NhdGlvbi5wYXRobmFtZV0uaGFuZGxlRnVuYyhtYWluV3JhcHBlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWFpbldyYXBwZXIuaW5uZXJIVE1MID0gcm91dGVzWycvZXJyb3InXS5sYXlvdXRDcmVhdGUoKTtcbiAgICAgICAgcm91dGVzWycvZXJyb3InXS5oYW5kbGVGdW5jKCk7XG4gICAgfVxufVxuXG5cbi8vIEZvcndhcmQtQmFjayBhcnJvd3Mgd29ya2luZyBwcm9wZXJseVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCAoKSA9PiB7XG4gICAgcnVuU1BBKGxvY2F0aW9uLnBhdGhuYW1lKTtcbn0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==