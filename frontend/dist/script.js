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
			<div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-black via-black to-gray-800 space-y-8">
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
    let res = `
				${(0, elements_1.navigation)()}
				<div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-black via-black to-gray-800 space-y-8">
					<div class="px-6 py-3 text-white bg-blue-500 rounded-lg text-xl hover:bg-blue-700 focus:outline-none" id="btn-play">
						Settings!
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvTGF5b3V0L2Vycm9yUGFnZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9MYXlvdXQvZ2FtZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvTGF5b3V0L2hvbWVQYWdlLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0xheW91dC9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9MYXlvdXQvbG9naW5QYWdlLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0xheW91dC9wbGF5UGFnZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9MYXlvdXQvcHJvZmlsZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvTGF5b3V0L3JlZ2lzdHJhdGlvblBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvTGF5b3V0L3NldHRpbmdzUGFnZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9lbGVtZW50cy9jcmVhdGVCdXR0b24udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvZWxlbWVudHMvY3JlYXRlTmF2aWdhdGlvbi50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9lbGVtZW50cy9jcmVhdGVXcmFwcGVyLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2VsZW1lbnRzL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL25hZ2l2YXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvbmFnaXZhdGlvbi9uYXZpZ2F0aW9uLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL25hZ2l2YXRpb24vbmF2aWdhdGlvblJvdXRlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9lcnJvclBhZ2UvZXJyb3JQYWdlLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2Vycm9yUGFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9nYW1lL2dhbWUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvZ2FtZS9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9ob21lL2hvbWUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvaG9tZS9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9sb2dpbi9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9sb2dpbi9sb2dpblBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvcGxheVBhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvcGxheVBhZ2UvcGxheVBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvcHJvZmlsZS9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9wcm9maWxlL3Byb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvcmVnaXN0cmF0aW9uL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvc2V0dGluZ3NQYWdlL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL3NldHRpbmdzUGFnZS9zZXR0aW5nc1BhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9yb3V0aW5nL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGluZy9yb3V0ZVRvU29tZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGluZy9yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc3BhQXBwL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuYXZpZ2F0aW9uIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvclBhZ2UoKSB7XG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImJnLWdyYWRpZW50LXRvLXRcIiwgXCJmcm9tLWJsYWNrXCIsIFwidmlhLWJsYWNrXCIsIFwidG8tZ3JheS04MDBcIik7XG5cdHJldHVybiBgXG5cdFx0XHQke25hdmlnYXRpb24oKX1cblx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tdCBmcm9tLWJsYWNrIHZpYS1ibGFjayB0by1ncmF5LTgwMCBzcGFjZS15LThcIj5cblx0XHRcdFx0PGgxIGNsYXNzPVwidGV4dC05eGwgdGV4dC13aGl0ZSBmb250LWJsYWNrXCI+IEVycm9yIDQwNCA8L2gxPlxuXHRcdFx0XHQ8aDEgY2xhc3M9XCJ0ZXh0LTd4bCBweS0zIHRleHQtd2hpdGVcIiBmb250LW1lZGl1bT4gVGhpcyBwYWdlIHdhcyBub3QgZm91bmQgPC9oMT5cblx0XHRcdDwvZGl2PmBcbn0iLCJpbXBvcnQgeyBuYXZpZ2F0aW9uIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lUGFnZSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImJnLWdyYWRpZW50LXRvLXRcIiwgXCJmcm9tLWJsYWNrXCIsIFwidmlhLWJsYWNrXCIsIFwidG8tZ3JheS04MDBcIik7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgJHtuYXZpZ2F0aW9uKCl9XG4gICAgICAgIDxjYW52YXMgaWQ9XCJnYW1lLWJvYXJkXCIgd2lkdGg9XCI4MDBcIiBoZWlnaHQ9XCI1MDBcIiBjbGFzcz1cImJnLWdyYXktNTAwIGJvcmRlclwiPjwvY2FudmFzPlxuICAgICAgICA8cCBpZD1cInNjb3JlLWluZm9cIiBjbGFzcz1cInRleHQtNHhsIHRleHQtd2hpdGVcIiBjbGFzcz1cImJnLWdyYXktNTAwXCIgPiBTY29yZSA8L3A+XG4gICAgICAgIDxidXR0b24gaWQ9XCJyZXN0YXJ0LWJ0blwiIGNsYXNzPVwicHgtMyBweS0xIGJvcmRlci0yIGJvcmRlci1jcmltc29uIHJvdW5kZWQtWzEwcHhdIGJnLWdyYXktNTAwIHRleHQtd2hpdGUgdGV4dC1bMjVweF1cIj4gUmVzdGFydCA8L2J1dHRvbj5gO1xufSIsImltcG9ydCB7IG5hdmlnYXRpb24gfSBmcm9tIFwiLi4vZWxlbWVudHNcIlxuLy8gaW1wb3J0ICBteUltZyAgZnJvbSBcIi4uL2ltZy9waW5nLXBvbmcucG5nXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVQYWdlKG1haW5XcmFwcGVyOiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZCkge1xuXHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJoLXNjcmVlblwiLCBcImZsZXhcIiwgXCJmbGV4LWNvbFwiLCBcImJnLWdyYWRpZW50LXRvLXRcIiwgXCJmcm9tLWJsYWNrXCIsIFwidmlhLWJsYWNrXCIsIFwidG8tZ3JheS04MDBcIiwgXCJvdmVyZmxvdy1oaWRkZW5cIik7XG5cdC8vICR7bmF2aWdhdGlvbigpfVxuXHRsZXQgcmVzID0gYFxuICAgICAgICBcdCR7bmF2aWdhdGlvbigpfVxuICAgICAgICBcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBwLTYgbXQtMjRcIj5cbiAgICAgICAgXHQgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy13aGl0ZSBwLTggcm91bmRlZC0yeGwgc2hhZG93LWxnXCI+XG4gICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6dy0xLzIgcC02XCI+XG4gICAgICAgIFx0ICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC00eGwgZm9udC1ib2xkIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTUwMCB2aWEtcHVycGxlLTUwMCB0by1waW5rLTUwMCB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dFwiPkZUX1RSQU5TQ0VOREVOU0NFPC9oMT5cbiAgICAgICAgXHQgICAgICAgICAgICA8cCBjbGFzcz1cIm10LTQgdGV4dC1ncmF5LTYwMCB0ZXh0LWxnXCI+XG4gICAgICAgIFx0ICAgICAgICAgICAgICAgIFRyYW5zY2VuZGVuY2UgaXMgYSA0MiBzY2hvb2wgcHJvamVjdCwgdG8gbGVhcm4gYWJvdXQgd2ViIGRldmVsb3BwZW1lbnQgYW5kIFNQQS48YnI+XG5cdFx0XHRcdFx0XHRcdFRoZSBnb2FsIGlzIHRvIGNyZWF0ZSBhIHdlYiBhcHAgdG8gcGxheSBQb25nLCBhbmQgc29jaWFsaXplIHdpdGggb3RoZXIgdXNlcnMuPGJyPjxicj5cbiAgICAgICAgXHQgICAgICAgICAgICA8L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc1wibXQtNCB0ZXh0LWdyYXktOTAwIHRleHQtbGdcIj5EZXZlbG9wZWQgYnkgbm92c2lhbm4gYW5kIGtpbGNoZW5rIDwvcD5cbiAgICAgICAgXHQgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6dy0xLzIgZmxleCBqdXN0aWZ5LWNlbnRlciBwLTZcIj5cbiAgICAgICAgXHQgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltZy9waW5nLXBvbmcucG5nXCIgYWx0PVwiUm9ja2V0IGZvciBwaW5nIHBvbmdcIiBjbGFzcz1cInctMTI4IGgtMTI4IG9iamVjdC1jb3ZlciByb3VuZGVkLXhsIHNoYWRvdy1tZFwiPlxuICAgICAgICBcdCAgICAgICAgPC9kaXY+XG4gICAgICAgIFx0ICAgIDwvZGl2PlxuICAgICAgICBcdDwvZGl2PmA7XG5cdHJldHVybiByZXM7XG59IiwiZXhwb3J0ICogZnJvbSBcIi4vbG9naW5QYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlZ2lzdHJhdGlvblBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vZXJyb3JQYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2dhbWVQYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BsYXlQYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hvbWVQYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Byb2ZpbGVQYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NldHRpbmdzUGFnZVwiIiwiZXhwb3J0IGZ1bmN0aW9uIGxvZ2luUGFnZSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJoLXNjcmVlblwiLCBcImZsZXhcIiwgXCJpdGVtcy1jZW50ZXJcIiwgXCJqdXN0aWZ5LWNlbnRlclwiLCBcImJnLWdyYWRpZW50LXRvLXRcIiwgXCJmcm9tLWJsYWNrXCIsIFwidmlhLWJsYWNrXCIsIFwidG8tZ3JheS04MDBcIik7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXgtdy1zbSBteC1hdXRvIG10LTEwIHAtNiBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIHRleHQtY2VudGVyIG1iLTRcIj5Mb2dpbjwvaDI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ5b3VyIGVtYWlsXCIgY2xhc3M9XCJ3LWZ1bGwgbWItMyBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS00MDBcIiBpZD1cImxvZ2luSW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJ5b3VyIHBhc3N3b3JkXCIgY2xhc3M9XCJ3LWZ1bGwgbWItNCBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS00MDBcIiBpZD1cImxvZ2luUGFzc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ3LWZ1bGwgYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcHktMiByb3VuZGVkIGhvdmVyOmJnLWdyZWVuLTYwMFwiIGlkPVwibG9naW5CdG5cIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtM1wiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LWJsdWUtNTAwIGhvdmVyOnVuZGVybGluZVwiIGlkPVwicXVlc3Rpb25QYXNzRm9yZ290XCI+Rm9yZ290IFBhc3N3b3JkPzwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxufSIsImltcG9ydCB7IG5hdmlnYXRpb24gfSBmcm9tIFwiLi4vZWxlbWVudHNcIlxuXG5leHBvcnQgZnVuY3Rpb24gcGxheVBhZ2UobWFpbldyYXBwZXI6IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgbGV0IHJlcyA9IGBcbiAgICAgICAgICAgICAgICAke25hdmlnYXRpb24oKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjayB2aWEtYmxhY2sgdG8tZ3JheS04MDAgc3BhY2UteS04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJweC02IHB5LTMgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCByb3VuZGVkLWxnIHRleHQteGwgaG92ZXI6YmctYmx1ZS03MDAgZm9jdXM6b3V0bGluZS1ub25lXCIgaWQ9XCJidG4tcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU1RBUlRcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICByZXR1cm4gcmVzO1xufSIsImltcG9ydCB7IG5hdmlnYXRpb24gfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2ZpbGVQYWdlKG1haW5XcmFwcGVyOiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgXCJoLXNjcmVlblwiLCBcImZsZXhcIiwgXCJmbGV4LWNvbFwiLFxuICAgICAgICBcImJnLWdyYWRpZW50LXRvLXRcIiwgXCJmcm9tLWJsYWNrXCIsIFwidmlhLWJsYWNrXCIsIFwidG8tZ3JheS04MDBcIixcbiAgICAgICAgXCJvdmVyZmxvdy1oaWRkZW5cIlxuICAgICk7XG5cbiAgICAvL214LWF1dG8gcC02IG10LTY0IHYgY29udGFpbmVyIGRvYmF2aXRcbiAgICBsZXQgcmVzID0gYFxuICAgICAgICAke25hdmlnYXRpb24oKX1cblxuICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHctZnVsbCByb3VuZGVkLWxnIHNoYWRvdy1sZyBteS1hdXRvIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy01LzYgaC05NiBiZy13aGl0ZSBwLTEwIHJvdW5kZWQtMnhsIHNoYWRvdy1sZyB0ZXh0LWNlbnRlciByZWxhdGl2ZVwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgLXRvcC0yMCBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9nb2F0LmpwZ1wiIGFsdD1cIlByb2ZpbGUgUGhvdG9cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctMzYgaC0zNiByb3VuZGVkLWZ1bGwgYm9yZGVyLTQgYm9yZGVyLXdoaXRlIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTI4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXCI+VXNlcm5hbWU8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC04IGZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtZ3JheS02MDAgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+MDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc21cIj5MZXZlbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+MDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc21cIj5GcmllbmRzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj4wPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbVwiPk1hdGNoZXMgcGxheWVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICByZXR1cm4gcmVzO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdHJhdGlvblBhZ2UoKSB7XG4gICAgLy8gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiaC1zY3JlZW5cIiwgXCJmbGV4XCIsIFwiaXRlbXMtY2VudGVyXCIsIFwianVzdGlmeS1jZW50ZXJcIiwgXCJiZy1ncmFkaWVudC10by10XCIsIFwiZnJvbS1ibGFja1wiLCBcInZpYS1ibGFja1wiLCBcInRvLWdyYXktODAwXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgXCJoLXNjcmVlblwiLCBcImZsZXhcIiwgXCJmbGV4LWNvbFwiLFxuICAgICAgICBcImJnLWdyYWRpZW50LXRvLXRcIiwgXCJmcm9tLWJsYWNrXCIsIFwidmlhLWJsYWNrXCIsIFwidG8tZ3JheS04MDBcIixcbiAgICAgICAgXCJvdmVyZmxvdy1oaWRkZW5cIlxuICAgICk7XG5cbiAgICByZXR1cm4gYFxuICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEwIHctNS81IGgtMy81IGZsZXggc2hhZG93LWxnIHJvdW5kZWQtbGcgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0zLzUgcC0xMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtOTAwIHRvLWJsdWUtOTAwIHRleHQtd2hpdGUgcm91bmRlZC1sLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtNHhsIGZvbnQtYm9sZFwiPlRyYW5zY2VuZGVuY2U8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm10LTQgdGV4dC1sZ1wiPkpvaW4gdXMgdG9kYXkgYW5kIHN0YXJ0IHlvdXIgam91cm5leSB3aXRoIG91ciBhbWF6aW5nIHBsYXRmb3JtLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0yLzUgcC0xMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtci1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgbWItNFwiPlJlZ2lzdHJhdGlvbjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwicmVnaXN0ZXJGb3JtXCIgY2xhc3M9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInVzZXJuYW1lUmVnaXN0cmF0aW9uXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgY2xhc3M9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFJlZ2lzdHJhdGlvblwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiIGNsYXNzPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRSZWdpc3RyYXRpb25cIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIllvdXIgcGFzc3dvcmRcIiBjbGFzcz1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInN1Ym1pdFJlZ2lzdHJhdGlvblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlJlZ2lzdGVyXCIgY2xhc3M9XCJ3LWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZCBob3ZlcjpiZy1ibHVlLTYwMCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtNFwiPkFscmVhZHkgcmVnaXN0ZXJlZD8gPGEgY2xhc3M9XCJ0ZXh0LWJsdWUtNTAwXCIgaWQ9XCJxdWVzdGlvbkFscmVhZHlSZWdpc3RyXCI+U2lnbiBJbjwvYT48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICBgXG59IiwiaW1wb3J0IHsgbmF2aWdhdGlvbiB9IGZyb20gXCIuLi9lbGVtZW50c1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR0aW5nc1BhZ2UobWFpbldyYXBwZXI6IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkKSB7XG5cdGxldCByZXMgPSBgXG5cdFx0XHRcdCR7bmF2aWdhdGlvbigpfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjayB2aWEtYmxhY2sgdG8tZ3JheS04MDAgc3BhY2UteS04XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInB4LTYgcHktMyB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtbGcgdGV4dC14bCBob3ZlcjpiZy1ibHVlLTcwMCBmb2N1czpvdXRsaW5lLW5vbmVcIiBpZD1cImJ0bi1wbGF5XCI+XG5cdFx0XHRcdFx0XHRTZXR0aW5ncyFcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+YDtcblx0cmV0dXJuIHJlcztcbn0iLCJleHBvcnQgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4iLCJleHBvcnQgZnVuY3Rpb24gbmF2aWdhdGlvbigpIHtcblx0cmV0dXJuIGBcblx0XHQ8bmF2IGNsYXNzPVwidG9wLTAgbGVmdC0wIGJnLWJsYWNrIHRleHQtd2hpdGUgaC0xNiB3LWZ1bGwgZml4ZWQgZmxleCBpdGVtcy1jZW50ZXIgcHgtNlwiPlxuICAgIFx0XHQ8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vcGxhc3RpY2luZS8xMDAvcGluZy1wb25nLS12MS5wbmdcIiBhbHQ9XCJMb2dvXCIgY2xhc3M9XCJoLTEyIHctMTIgb2JqZWN0LWNvdmVyXCIgaWQ9aW1nTG9nb05hdmk+XG5cblxuICAgIFx0XHQ8ZGl2IGNsYXNzPVwiZmxleC0xIGZsZXgganVzdGlmeS1jZW50ZXIgc3BhY2UteC04XCI+XG4gICAgICAgXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImZvbnQtbW9ubyBoLTVcIiBpZD1cIm5hdmlCdG5cIj4gSG9tZSA8L2J1dHRvbj5cbiAgICAgICAgXHRcdDxidXR0b24gY2xhc3M9XCJmb250LW1vbm8gaC01XCIgaWQ9XCJuYXZpQnRuXCI+IEdhbWUgPC9idXR0b24+XG4gICAgICAgIFx0XHQ8YnV0dG9uIGNsYXNzPVwiZm9udC1tb25vIGgtNVwiIGlkPVwibmF2aUJ0blwiPiBSZWdpc3RyYXRpb24gPC9idXR0b24+XG4gICAgICAgIFx0XHQ8YnV0dG9uIGNsYXNzPVwiZm9udC1tb25vIGgtNVwiIGlkPVwibmF2aUJ0blwiPiBMb2dpbiA8L2J1dHRvbj5cbiAgICBcdFx0PC9kaXY+XG5cblxuXHRcdFx0PGRpdiBjbGFzcz1cInJlbGF0aXZlXCI+XG4gICAgICAgIFx0XHQ8aW1nIGlkPVwicHJvZmlsZUljb25cIiBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2ZsdWVuY3kvNDgvdGVzdC1hY2NvdW50LS12MS5wbmdcIiBhbHQ9XCJQcm9maWxlXCIgY2xhc3M9XCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyXCI+XG5cblxuICAgICAgICBcdFx0PGRpdiBpZD1cImRyb3Bkb3duTWVudVwiIGNsYXNzPVwiYWJzb2x1dGUgcmlnaHQtMCBtdC0yIHctNDggYmctd2hpdGUgdGV4dC1ibGFjayBzaGFkb3ctbGcgcm91bmRlZC1sZyBwLTIgaGlkZGVuXCI+XG4gICAgICAgICAgICBcdFx0PGEgY2xhc3M9XCJibG9jayBweC00IHB5LTIgaG92ZXI6YmctZ3JheS0yMDBcIj5Qcm9maWxlPC9hPlxuXHRcdFx0XHRcdDxhIGNsYXNzPVwiYmxvY2sgcHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMjAwXCI+R2FtZTwvYT5cblx0XHRcdFx0XHQ8YSBjbGFzcz1cImJsb2NrIHB4LTQgcHktMiBob3ZlcjpiZy1ncmF5LTIwMFwiPkxlYWRlcmJvYXJkPC9hPlxuICAgICAgICAgICAgXHRcdDxhIGNsYXNzPVwiYmxvY2sgcHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMjAwXCI+U2V0dGluZ3M8L2E+XG4gICAgICAgICAgICBcdFx0PGEgY2xhc3M9XCJibG9jayBweC00IHB5LTIgdGV4dC1yZWQtNjAwIGhvdmVyOmJnLWdyYXktMjAwXCI+TG9nb3V0PC9hPlxuICAgICAgICBcdFx0PC9kaXY+XG4gICAgXHRcdDwvZGl2PlxuXHRcdDwvbmF2PlxuXHRcdGA7XG59IiwiZXhwb3J0IGNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IiwiZXhwb3J0ICogZnJvbSAnLi9jcmVhdGVCdXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi9jcmVhdGVXcmFwcGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY3JlYXRlTmF2aWdhdGlvbic7IiwiaW1wb3J0IHJ1blNwYSBmcm9tICcuL3NwYUFwcC9pbmRleCdcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBydW5TcGEobG9jYXRpb24ucGF0aG5hbWUpO1xufSk7XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9uYXZpZ2F0aW9uXCIiLCJpbXBvcnQgeyBuYXZpZ2F0ZVRvIH0gZnJvbSBcIi4uL3JvdXRpbmdcIjtcbmltcG9ydCB7IG5hdmlSb3V0ZXMgfSBmcm9tIFwiLi9uYXZpZ2F0aW9uUm91dGVzXCI7XG5pbXBvcnQgeyBkcm9wTWVudVJvdXRlcyB9IGZyb20gXCIuL25hdmlnYXRpb25Sb3V0ZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpb25IYW5kbGUoKSB7XG5cdGNvbnN0IG5hdmlCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNuYXZpQnRuXCIpO1xuXHRjb25zdCBwcm9maWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlSWNvblwiKTtcblx0Y29uc3QgZHJvcGRvd25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bk1lbnVcIik7XG5cdGNvbnN0IG5hdmlEcm9wTWVudUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2Ryb3Bkb3duTWVudSBhXCIpO1xuXHRjb25zdCBpbWdMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ0xvZ29OYXZpJyk7XG5cblx0aW1nTG9nbyEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0bmF2aWdhdGVUbygnLycpO1xuXHR9KVxuXG5cdG5hdmlCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGlmIChidG4uaW5uZXJIVE1MLnRyaW0oKSBpbiBuYXZpUm91dGVzKSB7XG5cdFx0XHRcdG5hdmlnYXRlVG8obmF2aVJvdXRlc1tidG4uaW5uZXJIVE1MLnRyaW0oKV0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KVxuXG5cdG5hdmlEcm9wTWVudUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0aWYgKGJ0bi5pbm5lckhUTUwudHJpbSgpIGluIGRyb3BNZW51Um91dGVzKSB7XG5cdFx0XHRcdG5hdmlnYXRlVG8oZHJvcE1lbnVSb3V0ZXNbYnRuLmlubmVySFRNTC50cmltKCldKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSlcblxuXHRwcm9maWxlQnRuIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRkcm9wZG93bk1lbnUhLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG5cdH0pO1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRpZiAoZS50YXJnZXQgIT09IGRyb3Bkb3duTWVudSAmJiBlLnRhcmdldCAhPT0gcHJvZmlsZUJ0bilcblx0XHRcdGRyb3Bkb3duTWVudSEuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0fSlcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRpZiAoZS5rZXlDb2RlID09IDI3KVxuXHRcdFx0ZHJvcGRvd25NZW51IS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHR9KVxuXG59IiwiZXhwb3J0IGNvbnN0IG5hdmlSb3V0ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG5cdFwiSG9tZVwiOiBcIi9cIixcblx0XCJHYW1lXCI6IFwiL2dhbWVcIixcblx0XCJSZWdpc3RyYXRpb25cIjogXCIvcmVnaXN0cmF0aW9uXCIsXG5cdFwiTG9naW5cIjogXCIvbG9naW5cIlxufVxuXG5leHBvcnQgY29uc3QgZHJvcE1lbnVSb3V0ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG5cdFwiUHJvZmlsZVwiOiBcIi9wcm9maWxlXCIsXG5cdFwiR2FtZVwiOiBcIi9nYW1lXCIsXG5cdFwiTGVhZGVyYm9hcmRcIjogXCIvbGVhZGVyYm9hcmRcIixcblx0XCJTZXR0aW5nc1wiOiBcIi9zZXR0aW5nc1wiLFxuXHRcIkxvZ291dFwiOiBcIi9sb2dvdXRcIlxufSAgIiwiaW1wb3J0IHsgbmF2aWdhdGlvbkhhbmRsZSB9IGZyb20gXCIuLi8uLi9uYWdpdmF0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFcnJvclBhZ2UoKSB7XG5cdG5hdmlnYXRpb25IYW5kbGUoKTtcbn0iLCJleHBvcnQgKiBmcm9tIFwiLi9lcnJvclBhZ2VcIiIsImltcG9ydCB7IG5hdmlnYXRpb25IYW5kbGUgfSBmcm9tIFwiLi4vLi4vbmFnaXZhdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlR2FtZShtYWluV3JhcHBlcjogSFRNTERpdkVsZW1lbnQgfCB1bmRlZmluZWQpIHtcblx0bmF2aWdhdGlvbkhhbmRsZSgpO1xuXHRjb25zdCBzY29yZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Njb3JlLWluZm9cIik7XG5cdGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1ib2FyZFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcblx0Y29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdGFydC1idG5cIik7XG5cdC8vIGNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5cdGxldCBpbnRlcnZhbElEOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD47O1xuXG5cdG1haW5XcmFwcGVyIS5pZCA9IFwiZ2FtZS1jb250YWluZXJcIjtcblx0bWFpbldyYXBwZXIhLmNsYXNzTGlzdC5hZGQoXCJoLXNjcmVlblwiLCBcImZsZXhcIiwgXCJmbGV4LWNvbFwiLCBcImdhcC0yLjVcIiwgXCJqdXN0aWZ5LWNlbnRlclwiLCBcIml0ZW1zLWNlbnRlclwiKTtcblx0Y29uc3QgY29udGV4dCA9IGdhbWVCb2FyZD8uZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cdGNvbnN0IGdhbWVCb2FyZENvbG9yID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZ2FtZUJvYXJkKS5iYWNrZ3JvdW5kQ29sb3I7XG5cdGNvbnN0IGZpcnN0UGFkZGxlQ29sb3IgPSBcIndoaXRlXCI7XG5cdGNvbnN0IHNlY29uZFBhZGRsZUNvbG9yID0gXCJ3aGl0ZVwiO1xuXHRjb25zdCBiYWxsQ29sb3IgPSBcIndoaXRlXCI7XG5cblx0Y29uc3QgZ2FtZUJvYXJkV2lkdGggPSBnYW1lQm9hcmQud2lkdGg7XG5cdGNvbnN0IGdhbWVCb2FyZEhlaWdodCA9IGdhbWVCb2FyZC5oZWlnaHQ7XG5cblx0Y29uc3QgbW92ZUZpcnN0UGFkZGxlS2V5ID0ge1xuXHRcdHVwOiBcIndcIixcblx0XHRkb3duOiBcInNcIixcblx0fVxuXG5cdGNvbnN0IG1vdmVTZWNvbmRQYWRkbGVLZXkgPSB7XG5cdFx0dXA6IFwiQXJyb3dVcFwiLFxuXHRcdGRvd246IFwiQXJyb3dEb3duXCJcblx0fVxuXG5cdGNvbnN0IHBhZGRsZVNpemUgPSB7XG5cdFx0d2lkdGg6IDI1LFxuXHRcdGhlaWdodDogMTIwXG5cdH1cblxuXHRjb25zdCBiYWxsUmFkaXVzID0gMTM7XG5cdGNvbnN0IGluaXRpYWxCYWxsU3BlZWQgPSA1O1xuXHRsZXQgYmFsbFNwZWVkID0gaW5pdGlhbEJhbGxTcGVlZDtcblx0Y29uc3QgcGFkZGxlU3BlZWQgPSA0MDtcblx0bGV0IGZpcnN0UGxheWVyU2NvcmUgPSAwO1xuXHRsZXQgc2Vjb25kUGxheWVyU2NvcmUgPSAwO1xuXG5cdGNvbnN0IGZpcnN0UGFkZGxlSW5pdGlhbCA9IHtcblx0XHR4OiAwLFxuXHRcdHk6IDBcblx0fVxuXG5cdGNvbnN0IHNlY29uZFBhZGRsZUluaXRpYWwgPSB7XG5cdFx0eDogZ2FtZUJvYXJkV2lkdGggLSBwYWRkbGVTaXplLndpZHRoLFxuXHRcdHk6IGdhbWVCb2FyZEhlaWdodCAtIHBhZGRsZVNpemUuaGVpZ2h0LFxuXHR9XG5cblx0bGV0IGZpcnN0UGFkZGxlID0geyAuLi5maXJzdFBhZGRsZUluaXRpYWwgfTtcblx0bGV0IHNlY29uZFBhZGRsZSA9IHsgLi4uc2Vjb25kUGFkZGxlSW5pdGlhbCB9O1xuXG5cdGNvbnN0IGJhbGxJbml0aWFsID0ge1xuXHRcdHg6IGdhbWVCb2FyZFdpZHRoIC8gMixcblx0XHR5OiBnYW1lQm9hcmRIZWlnaHQgLyAyLFxuXHR9XG5cblx0bGV0IGJhbGwgPSB7IC4uLmJhbGxJbml0aWFsIH07XG5cdGNvbnN0IGJhbGxEaXJlY3Rpb24gPSB7XG5cdFx0eDogMCxcblx0XHR5OiAwLFxuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd0JvYXJkKCkge1xuXHRcdGNvbnRleHQhLmZpbGxTdHlsZSA9IGdhbWVCb2FyZENvbG9yO1xuXHRcdGNvbnRleHQhLmZpbGxSZWN0KDAsIDAsIGdhbWVCb2FyZFdpZHRoLCBnYW1lQm9hcmRIZWlnaHQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd1BhZGRsZShwYWRkbGVYOiBudW1iZXIsIHBhZGRsZVk6IG51bWJlciwgY29sb3I6IHN0cmluZykge1xuXHRcdGNvbnRleHQhLmZpbGxTdHlsZSA9IGNvbG9yO1xuXHRcdGNvbnRleHQhLmZpbGxSZWN0KHBhZGRsZVgsIHBhZGRsZVksIHBhZGRsZVNpemUud2lkdGgsIHBhZGRsZVNpemUuaGVpZ2h0KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdQYWRkbGVzKCkge1xuXHRcdGRyYXdQYWRkbGUoZmlyc3RQYWRkbGUueCwgZmlyc3RQYWRkbGUueSwgZmlyc3RQYWRkbGVDb2xvcik7XG5cdFx0ZHJhd1BhZGRsZShzZWNvbmRQYWRkbGUueCwgc2Vjb25kUGFkZGxlLnksIHNlY29uZFBhZGRsZUNvbG9yKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdCYWxsKCkge1xuXHRcdGNvbnRleHQhLmJlZ2luUGF0aCgpO1xuXHRcdGNvbnRleHQhLmZpbGxTdHlsZSA9IGJhbGxDb2xvcjtcblx0XHRjb250ZXh0IS5hcmMoYmFsbC54LCBiYWxsLnksIGJhbGxSYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcblx0XHRjb250ZXh0IS5maWxsKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBjaG9vc2VCYWxsRGlyZWN0aW9uKCkge1xuXHRcdHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41O1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0QmFsbERpcmVjdGlvbigpIHtcblx0XHRpZiAoY2hvb3NlQmFsbERpcmVjdGlvbigpKSB7XG5cdFx0XHRiYWxsRGlyZWN0aW9uLnggPSAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRiYWxsRGlyZWN0aW9uLnggPSAtMTtcblx0XHR9XG5cblx0XHRpZiAoY2hvb3NlQmFsbERpcmVjdGlvbigpKSB7XG5cdFx0XHRiYWxsRGlyZWN0aW9uLnkgPSAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRiYWxsRGlyZWN0aW9uLnkgPSAtMTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVCb3JkZXJDb2xsaXNpb24oKSB7XG5cdFx0Y29uc3QgdG9wQmFsbFJhZGl1cyA9IGJhbGwueSA8PSBiYWxsUmFkaXVzO1xuXHRcdGNvbnN0IGJvdHRvbUJhbGxSYWRpdXMgPSBiYWxsLnkgPj0gZ2FtZUJvYXJkSGVpZ2h0IC0gYmFsbFJhZGl1cztcblx0XHRpZiAodG9wQmFsbFJhZGl1cyB8fCBib3R0b21CYWxsUmFkaXVzKSB7XG5cdFx0XHRiYWxsRGlyZWN0aW9uLnkgKj0gLTE7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY2hlY2tGaXJzdFBhZGRsZUNvbGxpc2lvbigpIHtcblx0XHRjb25zdCB4Q29sbGlzaW9uID0gYmFsbC54IDw9IGZpcnN0UGFkZGxlLnggKyBiYWxsUmFkaXVzICsgcGFkZGxlU2l6ZS53aWR0aDtcblx0XHRjb25zdCB5Q29sbGlzaW9uID0gYmFsbC55ID49IGZpcnN0UGFkZGxlLnkgJiYgYmFsbC55IDw9IGZpcnN0UGFkZGxlLnkgKyBwYWRkbGVTaXplLmhlaWdodDtcblx0XHRyZXR1cm4geENvbGxpc2lvbiAmJiB5Q29sbGlzaW9uO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2hlY2tTZWNvbmRQYWRkbGVDb2xsaXNpb24oKSB7XG5cdFx0Y29uc3QgeENvbGxpc2lvbiA9IGJhbGwueCA+PSBzZWNvbmRQYWRkbGUueCAtIGJhbGxSYWRpdXM7XG5cdFx0Y29uc3QgeUNvbGxpc2lvbiA9IGJhbGwueSA+PSBzZWNvbmRQYWRkbGUueSAmJiBiYWxsLnkgPD0gc2Vjb25kUGFkZGxlLnkgKyBwYWRkbGVTaXplLmhlaWdodDtcblx0XHRyZXR1cm4geENvbGxpc2lvbiAmJiB5Q29sbGlzaW9uO1xuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlUGFkZGxlQ29sbGlzaW9uKCkge1xuXHRcdGNvbnN0IGZpcnN0UGFkZGxlQ29sbGlzaW9uID0gY2hlY2tGaXJzdFBhZGRsZUNvbGxpc2lvbigpO1xuXHRcdGNvbnN0IHNlY29uZFBhZGRsZUNvbGxpc2lvbiA9IGNoZWNrU2Vjb25kUGFkZGxlQ29sbGlzaW9uKCk7XG5cblx0XHRpZiAoZmlyc3RQYWRkbGVDb2xsaXNpb24gfHwgc2Vjb25kUGFkZGxlQ29sbGlzaW9uKSB7XG5cdFx0XHRiYWxsU3BlZWQgKj0gMS4wNztcblx0XHRcdGJhbGxEaXJlY3Rpb24ueCAqPSAtMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZmlyc3RQYWRkbGVDb2xsaXNpb24pIHtcblx0XHRcdGJhbGwueCA9IGZpcnN0UGFkZGxlLnggKyBwYWRkbGVTaXplLndpZHRoICsgYmFsbFJhZGl1cztcblx0XHR9IGVsc2UgaWYgKHNlY29uZFBhZGRsZUNvbGxpc2lvbikge1xuXHRcdFx0YmFsbC54ID0gc2Vjb25kUGFkZGxlLnggLSBiYWxsUmFkaXVzO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG1vdmVCYWxsKCkge1xuXHRcdGJhbGwueCArPSBiYWxsU3BlZWQgKiBiYWxsRGlyZWN0aW9uLng7XG5cdFx0YmFsbC55ICs9IGJhbGxTcGVlZCAqIGJhbGxEaXJlY3Rpb24ueTtcblx0XHRoYW5kbGVCb3JkZXJDb2xsaXNpb24oKTtcblx0XHRoYW5kbGVQYWRkbGVDb2xsaXNpb24oKTtcblx0XHRoYW5kbGVHb2FsKCk7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVTY29yZSgpIHtcblx0XHRzY29yZUluZm8hLnRleHRDb250ZW50ID0gYCR7Zmlyc3RQbGF5ZXJTY29yZX0gOiAke3NlY29uZFBsYXllclNjb3JlfWBcblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZUdvYWwoKSB7XG5cdFx0Y29uc3QgZmlyc3RVc2VyR29hbCA9IGJhbGwueCA+IGdhbWVCb2FyZFdpZHRoO1xuXHRcdGNvbnN0IHNlY29uZFVzZXJHb2FsID0gYmFsbC54IDwgMDtcblxuXHRcdGlmICghZmlyc3RVc2VyR29hbCAmJiAhc2Vjb25kVXNlckdvYWwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGZpcnN0VXNlckdvYWwpIHtcblx0XHRcdGZpcnN0UGxheWVyU2NvcmUrKztcblx0XHR9XG5cdFx0aWYgKHNlY29uZFVzZXJHb2FsKSB7XG5cdFx0XHRzZWNvbmRQbGF5ZXJTY29yZSsrO1xuXHRcdH1cblx0XHR1cGRhdGVTY29yZSgpO1xuXHRcdGJhbGwgPSB7IC4uLmJhbGxJbml0aWFsIH07XG5cdFx0c2V0QmFsbERpcmVjdGlvbigpO1xuXHRcdGRyYXdCYWxsKCk7XG5cdFx0YmFsbFNwZWVkID0gaW5pdGlhbEJhbGxTcGVlZDtcblx0fVxuXG5cdGZ1bmN0aW9uIG1vdmVQYWRkbGVzKGV2OiBLZXlib2FyZEV2ZW50KSB7XG5cblx0XHRjb25zdCBmaXJzdFBhZGRsZUdvaW5nVXAgPSBldi5rZXkgPT09IG1vdmVGaXJzdFBhZGRsZUtleS51cDtcblx0XHRjb25zdCBmaXJzdFBhZGRsZUdvaW5nRG93biA9IGV2LmtleSA9PT0gbW92ZUZpcnN0UGFkZGxlS2V5LmRvd247XG5cdFx0Y29uc3Qgc2Vjb25kUGFkZGxlR29pbmdVcCA9IGV2LmtleSA9PT0gbW92ZVNlY29uZFBhZGRsZUtleS51cDtcblx0XHRjb25zdCBzZWNvbmRQYWRkbGVHb2luZ0Rvd24gPSBldi5rZXkgPT09IG1vdmVTZWNvbmRQYWRkbGVLZXkuZG93bjtcblxuXHRcdGNvbnN0IGNhbkZpcnN0UGFkZGxlTW92ZVVwID0gZmlyc3RQYWRkbGUueSA+IDA7XG5cdFx0Y29uc3QgY2FuRmlyc3RQYWRkbGVNb3ZlRG93biA9IGZpcnN0UGFkZGxlLnkgPCBnYW1lQm9hcmQuaGVpZ2h0IC0gcGFkZGxlU2l6ZS5oZWlnaHQ7XG5cdFx0Y29uc3QgY2FuU2Vjb25kUGFkZGxlTW92ZVVwID0gc2Vjb25kUGFkZGxlLnkgPiAwO1xuXHRcdGNvbnN0IGNhblNlY29uZFBhZGRsZU1vdmVEb3duID0gc2Vjb25kUGFkZGxlLnkgPCBnYW1lQm9hcmQuaGVpZ2h0IC0gcGFkZGxlU2l6ZS5oZWlnaHQ7XG5cblx0XHRpZiAoZmlyc3RQYWRkbGVHb2luZ1VwICYmIGNhbkZpcnN0UGFkZGxlTW92ZVVwKSB7XG5cdFx0XHRmaXJzdFBhZGRsZS55IC09IHBhZGRsZVNwZWVkO1xuXHRcdH0gZWxzZSBpZiAoZmlyc3RQYWRkbGVHb2luZ0Rvd24gJiYgY2FuRmlyc3RQYWRkbGVNb3ZlRG93bikge1xuXHRcdFx0Zmlyc3RQYWRkbGUueSArPSBwYWRkbGVTcGVlZDtcblx0XHR9IGVsc2UgaWYgKHNlY29uZFBhZGRsZUdvaW5nVXAgJiYgY2FuU2Vjb25kUGFkZGxlTW92ZVVwKSB7XG5cdFx0XHRzZWNvbmRQYWRkbGUueSAtPSBwYWRkbGVTcGVlZDtcblx0XHR9IGVsc2UgaWYgKHNlY29uZFBhZGRsZUdvaW5nRG93biAmJiBjYW5TZWNvbmRQYWRkbGVNb3ZlRG93bikge1xuXHRcdFx0c2Vjb25kUGFkZGxlLnkgKz0gcGFkZGxlU3BlZWQ7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlR2FtZSgpIHtcblx0XHRkcmF3Qm9hcmQoKTtcblx0XHRkcmF3UGFkZGxlcygpO1xuXHRcdG1vdmVCYWxsKCk7XG5cdFx0ZHJhd0JhbGwoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlc3RhcnRHYW1lKCkge1xuXHRcdGZpcnN0UGxheWVyU2NvcmUgPSAwO1xuXHRcdHNlY29uZFBsYXllclNjb3JlID0gMDtcblx0XHRjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuXHRcdGJhbGxTcGVlZCA9IGluaXRpYWxCYWxsU3BlZWQ7XG5cdFx0YmFsbCA9IHsgLi4uYmFsbEluaXRpYWwgfTtcblx0XHRmaXJzdFBhZGRsZSA9IHsgLi4uZmlyc3RQYWRkbGUgfTtcblx0XHRzZWNvbmRQYWRkbGUgPSB7IC4uLnNlY29uZFBhZGRsZSB9O1xuXHRcdGluaXRHYW1lKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0R2FtZSgpIHtcblx0XHR1cGRhdGVTY29yZSgpO1xuXHRcdHNldEJhbGxEaXJlY3Rpb24oKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgbW92ZVBhZGRsZXMpO1xuXHRcdGludGVydmFsSUQgPSBzZXRJbnRlcnZhbCh1cGRhdGVHYW1lLCAyMCk7XG5cdFx0cmVzdGFydEJ0biEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0R2FtZSk7XG5cdH1cblxuXHRpbml0R2FtZSgpOyAvLyBpZiB0aGUgZ2FtZSBicmVha3MgdXNlIHRoZSBsaW5lIGJlbG93XG5cdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbml0R2FtZSk7XG59XG5cblxuXG5cblxuIiwiZXhwb3J0ICogZnJvbSBcIi4vZ2FtZVwiIiwiaW1wb3J0IHsgbmF2aWdhdGlvbkhhbmRsZSB9IGZyb20gXCIuLi8uLi9uYWdpdmF0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVIb21lUGFnZShtYWluV3JhcHBlcjogSFRNTERpdkVsZW1lbnQgfCB1bmRlZmluZWQpIHtcblx0bmF2aWdhdGlvbkhhbmRsZSgpO1xufSIsImV4cG9ydCAqIGZyb20gXCIuL2hvbWVcIiIsImV4cG9ydCAqIGZyb20gXCIuL2xvZ2luUGFnZVwiIiwiaW1wb3J0IHsgbmF2aWdhdGVUbyB9IGZyb20gXCIuLi8uLi9yb3V0aW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVMb2dpbigpIHtcbiAgICBjb25zdCBsb2dpbkVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luSW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBsb2dpblBhc3NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5QYXNzXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7O1xuICAgIGNvbnN0IGxvZ2luQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbkJ0blwiKTtcbiAgICBjb25zdCBmb3Jnb3RQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3Rpb25QYXNzRm9yZ290XCIpOyAvLyBsYXRlciBpbXBsZW1lbnRcblxuICAgIGxvZ2luQnRuIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAobG9naW5FbWFpbElucHV0LnZhbHVlID09PSAnYWRtaW4nICYmIGxvZ2luUGFzc0lucHV0LnZhbHVlID09PSAnYWRtaW4nKSB7XG4gICAgICAgICAgICBuYXZpZ2F0ZVRvKFwiL1wiKTtcbiAgICAgICAgfVxuICAgIH0pXG59IiwiZXhwb3J0ICogZnJvbSBcIi4vcGxheVBhZ2VcIiIsImltcG9ydCB7IHJvdXRlVG9HYW1lIH0gZnJvbSBcIi4uLy4uL3JvdXRpbmdcIjtcbmltcG9ydCB7IG5hdmlnYXRpb25IYW5kbGUgfSBmcm9tIFwiLi4vLi4vbmFnaXZhdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUGxheVBhZ2UoKSB7XG5cdG5hdmlnYXRpb25IYW5kbGUoKTtcblxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1wbGF5XCIpIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHJvdXRlVG9HYW1lKCk7XG5cdH0pO1xufSIsImV4cG9ydCAqIGZyb20gXCIuL3Byb2ZpbGVcIiIsImltcG9ydCB7IG5hdmlnYXRpb25IYW5kbGUgfSBmcm9tIFwiLi4vLi4vbmFnaXZhdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUHJvZmlsZVBhZ2UoKSB7XG5cdG5hdmlnYXRpb25IYW5kbGUoKTtcbn0iLCJleHBvcnQgKiBmcm9tIFwiLi9yZWdpc3RyYXRpb25cIiIsImltcG9ydCB7IHJvdXRlVG9Ib21lIH0gZnJvbSBcIi4uLy4uL3JvdXRpbmcvaW5kZXhcIlxuaW1wb3J0IHsgbmF2aWdhdGVUbyB9IGZyb20gXCIuLi8uLi9yb3V0aW5nL2luZGV4XCJcblxuaW50ZXJmYWNlIElVc2VyRGF0YVR5cGUge1xuICAgIHRleHQ6IHN0cmluZyB8IG51bGwsXG4gICAgZW1haWw6IHN0cmluZyB8IG51bGwsXG4gICAgcGFzc3dvcmQ6IHN0cmluZyB8IG51bGxcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUmVnaXN0cmF0aW9uKCkge1xuICAgIGNvbnN0IHVzZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJuYW1lUmVnaXN0cmF0aW9uXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxSZWdpc3RyYXRpb25cIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZFJlZ2lzdHJhdGlvblwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGJ0blJlZ2lzdHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFJlZ2lzdHJhdGlvblwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdCBzaWduSW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVlc3Rpb25BbHJlYWR5UmVnaXN0cicpO1xuXG4gICAgY29uc3QgaW5wdXRzVXNlcnM6IEhUTUxJbnB1dEVsZW1lbnRbXSA9IFt1c2VyTmFtZUlucHV0LCBlbWFpbElucHV0LCBwYXNzd29yZElucHV0XTtcbiAgICAvLyBkYXRhQmFzZSBoYXMgdG8gYmUgcmVtb3ZlZC4gSXQncyBjcmVhdGVkIG9ubHkgZm9yIHRlc3RzIDopXG4gICAgbGV0IHVzZXJEYXRhOiBJVXNlckRhdGFUeXBlID0ge1xuICAgICAgICB0ZXh0OiBudWxsLFxuICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgICAgcGFzc3dvcmQ6IG51bGxcbiAgICB9O1xuICAgIGNvbnN0IHRlbXBvcmFyeURhdGFCYXNlOiBzdHJpbmdbXVtdID0gW107XG4gICAgLy8gdGlsbCB0aGlzIHN0cmluZ1xuXG4gICAgYnRuUmVnaXN0ciEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpbnB1dHNVc2Vycy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBpbnB1dC50eXBlLnRvTG93ZXJDYXNlKCkgYXMga2V5b2YgSVVzZXJEYXRhVHlwZTtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9uZSBvZiB5b3VyIGlucHV0cyBpcyBlbXB0eSFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtpbnB1dC5wbGFjZWhvbGRlcn0gaGFzIHRvIGJlIG1pbmltdW0gMyBjaGFyYWN0ZXJzYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC50eXBlID09PSAnZW1haWwnICYmICEoaW5wdXQudmFsdWUubWF0Y2goL0AvZykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtpbnB1dC5wbGFjZWhvbGRlcn0gaGFzIGNvbnRhaW4gJyBAICcgc3ltYm9sYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVzZXJEYXRhW2tleV0gPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcm91dGVUb0hvbWUoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHNpZ25JbkJ0biEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRlVG8oXCIvbG9naW5cIik7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9zZXR0aW5nc1BhZ2VcIiIsImltcG9ydCB7IG5hdmlnYXRpb25IYW5kbGUgfSBmcm9tIFwiLi4vLi4vbmFnaXZhdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU2V0dGluZ3MoKSB7XG5cdG5hdmlnYXRpb25IYW5kbGUoKTtcbn0iLCJleHBvcnQgKiBmcm9tIFwiLi9yb3V0ZXNcIlxuZXhwb3J0ICogZnJvbSBcIi4vcm91dGVUb1NvbWVQYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL25hdmlnYXRpb25cIiIsImltcG9ydCBydW5TUEEgZnJvbSBcIi4uL3NwYUFwcFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVUbyhwYXRoOiBzdHJpbmcpIHtcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgcGF0aCk7IC8vIENoYW5nZSBVUkwgd2l0aG91dCByZWxvYWRcbiAgICBydW5TUEEocGF0aCk7IC8vIERyYXcgbmV3IFBhZ2Vcbn0iLCJpbXBvcnQgeyBuYXZpZ2F0ZVRvIH0gZnJvbSBcIi4vaW5kZXhcIlxuXG5leHBvcnQgZnVuY3Rpb24gcm91dGVUb0dhbWUoKSB7XG5cdG5hdmlnYXRlVG8oXCIvZ2FtZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlVG9Ib21lKCkge1xuXHRuYXZpZ2F0ZVRvKFwiL1wiKTtcbn0iLCJpbXBvcnQgeyBwbGF5UGFnZSwgZ2FtZVBhZ2UsIHJlZ2lzdHJhdGlvblBhZ2UsIGxvZ2luUGFnZSwgaG9tZVBhZ2UsIHByb2ZpbGVQYWdlLCBzZXR0aW5nc1BhZ2UsIGVycm9yUGFnZSB9IGZyb20gXCIuLi9MYXlvdXQvaW5kZXhcIlxuaW1wb3J0IHsgaGFuZGxlUGxheVBhZ2UgfSBmcm9tIFwiLi4vcGFnZXMvcGxheVBhZ2VcIlxuaW1wb3J0IHsgaGFuZGxlR2FtZSB9IGZyb20gXCIuLi9wYWdlcy9nYW1lXCJcbmltcG9ydCB7IGhhbmRsZVJlZ2lzdHJhdGlvbiB9IGZyb20gXCIuLi9wYWdlcy9yZWdpc3RyYXRpb25cIlxuaW1wb3J0IHsgaGFuZGxlTG9naW4gfSBmcm9tIFwiLi4vcGFnZXMvbG9naW5cIlxuaW1wb3J0IHsgaGFuZGxlSG9tZVBhZ2UgfSBmcm9tIFwiLi4vcGFnZXMvaG9tZVwiXG5pbXBvcnQgeyBoYW5kbGVQcm9maWxlUGFnZSB9IGZyb20gXCIuLi9wYWdlcy9wcm9maWxlXCJcbmltcG9ydCB7IGhhbmRsZVNldHRpbmdzIH0gZnJvbSBcIi4uL3BhZ2VzL3NldHRpbmdzUGFnZVwiXG5pbXBvcnQgeyBoYW5kbGVFcnJvclBhZ2UgfSBmcm9tIFwiLi4vcGFnZXMvZXJyb3JQYWdlXCJcblxuaW50ZXJmYWNlIGhhbmRsZUZ1bmN0aW9uSSB7XG4gICAgbGF5b3V0Q3JlYXRlOiAobWFpbldyYXBwZXI/OiBIVE1MRGl2RWxlbWVudCkgPT4gc3RyaW5nO1xuICAgIGhhbmRsZUZ1bmM6IChtYWluV3JhcHBlcj86IEhUTUxEaXZFbGVtZW50KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSZWNvcmQ8c3RyaW5nLCBoYW5kbGVGdW5jdGlvbkk+ID0ge1xuICAgIFwiL1wiOiB7IGxheW91dENyZWF0ZTogaG9tZVBhZ2UsIGhhbmRsZUZ1bmM6IGhhbmRsZUhvbWVQYWdlIH0sXG4gICAgXCIvcGxheVwiOiB7IGxheW91dENyZWF0ZTogcGxheVBhZ2UsIGhhbmRsZUZ1bmM6IGhhbmRsZVBsYXlQYWdlIH0sXG4gICAgXCIvZ2FtZVwiOiB7IGxheW91dENyZWF0ZTogZ2FtZVBhZ2UsIGhhbmRsZUZ1bmM6IGhhbmRsZUdhbWUgfSxcbiAgICBcIi9wcm9maWxlXCI6IHsgbGF5b3V0Q3JlYXRlOiBwcm9maWxlUGFnZSwgaGFuZGxlRnVuYzogaGFuZGxlUHJvZmlsZVBhZ2UgfSxcbiAgICBcIi9yZWdpc3RyYXRpb25cIjogeyBsYXlvdXRDcmVhdGU6IHJlZ2lzdHJhdGlvblBhZ2UsIGhhbmRsZUZ1bmM6IGhhbmRsZVJlZ2lzdHJhdGlvbiB9LFxuICAgIFwiL2xvZ2luXCI6IHsgbGF5b3V0Q3JlYXRlOiBsb2dpblBhZ2UsIGhhbmRsZUZ1bmM6IGhhbmRsZUxvZ2luIH0sXG4gICAgXCIvc2V0dGluZ3NcIjoge2xheW91dENyZWF0ZTogc2V0dGluZ3NQYWdlLCBoYW5kbGVGdW5jOiBoYW5kbGVTZXR0aW5nc30sXG4gICAgXCIvZXJyb3JcIjoge2xheW91dENyZWF0ZTogZXJyb3JQYWdlLCBoYW5kbGVGdW5jOiBoYW5kbGVFcnJvclBhZ2V9XG59OyIsImltcG9ydCB7IG1haW5XcmFwcGVyIH0gZnJvbSAnLi4vZWxlbWVudHMnO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSBcIi4uL3JvdXRpbmcvaW5kZXhcIlxuaW1wb3J0IHsgZXJyb3JQYWdlIH0gZnJvbSBcIi4uL0xheW91dC9pbmRleFwiXG5pbXBvcnQgeyBoYW5kbGVFcnJvclBhZ2UgfSBmcm9tICcuLi9wYWdlcy9lcnJvclBhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBydW5TUEEocGF0aD86IHN0cmluZykge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1haW5XcmFwcGVyKTtcblxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSBpbiByb3V0ZXMpIHtcbiAgICAgICAgbWFpbldyYXBwZXIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgIC8vIG1haW5XcmFwcGVyLmNsYXNzTmFtZSA9IFwiZmxleCBmbGV4LWNvbCBoLWZ1bGwgdy1mdWxsXCI7XG4gICAgICAgIG1haW5XcmFwcGVyLmNsYXNzTmFtZSA9IFwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBoLWZ1bGwgdy1mdWxsXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgbWFpbldyYXBwZXIuaW5uZXJIVE1MID0gcm91dGVzW2xvY2F0aW9uLnBhdGhuYW1lXS5sYXlvdXRDcmVhdGUobWFpbldyYXBwZXIpO1xuICAgICAgICByb3V0ZXNbbG9jYXRpb24ucGF0aG5hbWVdLmhhbmRsZUZ1bmMobWFpbldyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1haW5XcmFwcGVyLmlubmVySFRNTCA9IHJvdXRlc1snL2Vycm9yJ10ubGF5b3V0Q3JlYXRlKCk7XG4gICAgICAgIHJvdXRlc1snL2Vycm9yJ10uaGFuZGxlRnVuYygpO1xuICAgIH1cbn1cblxuXG4vLyBGb3J3YXJkLUJhY2sgYXJyb3dzIHdvcmtpbmcgcHJvcGVybHlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgKCkgPT4ge1xuICAgIHJ1blNQQShsb2NhdGlvbi5wYXRobmFtZSk7XG59KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=