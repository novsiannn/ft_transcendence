/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Layout/errorPage.ts":
/*!*********************************!*\
  !*** ./src/Layout/errorPage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.errorPage = errorPage;
function errorPage() {
    document.body.classList.add("bg-gradient-to-t", "from-black", "via-black", "to-gray-800");
    return `<div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-black via-black to-gray-800 space-y-8">
				<h1 class="text-9xl text-white font-black"> Error 404 </h1>
				<h1 class="text-7xl py-3 text-white" font-medium> This page was not found </h1>
			</div>`;
}


/***/ }),

/***/ "./src/Layout/gamePage.ts":
/*!********************************!*\
  !*** ./src/Layout/gamePage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gamePage = gamePage;
function gamePage() {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.classList.add("bg-gradient-to-t", "from-black", "via-black", "to-gray-800");
    return `
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

/***/ "./src/pages/game/game.ts":
/*!********************************!*\
  !*** ./src/pages/game/game.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleGame = handleGame;
function handleGame(mainWrapper) {
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
// import Page from '../../core/templates/page'
// import { PageIds } from '../../shared';
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
exports.routes = {
    "/": { layoutCreate: index_1.homePage, handleFunc: home_1.handleHomePage },
    "/play": { layoutCreate: index_1.playPage, handleFunc: playPage_1.handlePlayPage },
    "/game": { layoutCreate: index_1.gamePage, handleFunc: game_1.handleGame },
    "/profile": { layoutCreate: index_1.profilePage, handleFunc: profile_1.handleProfilePage },
    "/registration": { layoutCreate: index_1.registrationPage, handleFunc: registration_1.handleRegistration },
    "/login": { layoutCreate: index_1.loginPage, handleFunc: login_1.handleLogin },
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
const index_2 = __webpack_require__(/*! ../Layout/index */ "./src/Layout/index.ts");
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
        elements_1.mainWrapper.innerHTML = (0, index_2.errorPage)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQztRQUNKLHNCQUFXLENBQUMsU0FBUyxHQUFHLHFCQUFTLEdBQUUsQ0FBQztJQUN4QyxDQUFDO0FBQ0wsQ0FBQztBQUdELHVDQUF1QztBQUN2QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtJQUNyQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O1VDdkJIO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9MYXlvdXQvZXJyb3JQYWdlLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0xheW91dC9nYW1lUGFnZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9MYXlvdXQvaG9tZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvTGF5b3V0L2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0xheW91dC9sb2dpblBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvTGF5b3V0L3BsYXlQYWdlLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0xheW91dC9wcm9maWxlUGFnZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9MYXlvdXQvcmVnaXN0cmF0aW9uUGFnZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9lbGVtZW50cy9jcmVhdGVCdXR0b24udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvZWxlbWVudHMvY3JlYXRlTmF2aWdhdGlvbi50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9lbGVtZW50cy9jcmVhdGVXcmFwcGVyLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2VsZW1lbnRzL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL25hZ2l2YXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvbmFnaXZhdGlvbi9uYXZpZ2F0aW9uLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL25hZ2l2YXRpb24vbmF2aWdhdGlvblJvdXRlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9nYW1lL2dhbWUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvZ2FtZS9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9ob21lL2hvbWUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvaG9tZS9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9sb2dpbi9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9sb2dpbi9sb2dpblBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvcGxheVBhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvcGxheVBhZ2UvcGxheVBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvcHJvZmlsZS9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9wcm9maWxlL3Byb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvcmVnaXN0cmF0aW9uL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9yb3V0aW5nL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGluZy9yb3V0ZVRvU29tZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGluZy9yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc3BhQXBwL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZXJyb3JQYWdlKCkge1xuXHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJiZy1ncmFkaWVudC10by10XCIsIFwiZnJvbS1ibGFja1wiLCBcInZpYS1ibGFja1wiLCBcInRvLWdyYXktODAwXCIpO1xuXHRyZXR1cm4gYDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tdCBmcm9tLWJsYWNrIHZpYS1ibGFjayB0by1ncmF5LTgwMCBzcGFjZS15LThcIj5cblx0XHRcdFx0PGgxIGNsYXNzPVwidGV4dC05eGwgdGV4dC13aGl0ZSBmb250LWJsYWNrXCI+IEVycm9yIDQwNCA8L2gxPlxuXHRcdFx0XHQ8aDEgY2xhc3M9XCJ0ZXh0LTd4bCBweS0zIHRleHQtd2hpdGVcIiBmb250LW1lZGl1bT4gVGhpcyBwYWdlIHdhcyBub3QgZm91bmQgPC9oMT5cblx0XHRcdDwvZGl2PmBcbn0iLCJleHBvcnQgZnVuY3Rpb24gZ2FtZVBhZ2UoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJiZy1ncmFkaWVudC10by10XCIsIFwiZnJvbS1ibGFja1wiLCBcInZpYS1ibGFja1wiLCBcInRvLWdyYXktODAwXCIpO1xuICAgIHJldHVybiBgXG4gICAgICAgIDxjYW52YXMgaWQ9XCJnYW1lLWJvYXJkXCIgd2lkdGg9XCI4MDBcIiBoZWlnaHQ9XCI1MDBcIiBjbGFzcz1cImJnLWdyYXktNTAwIGJvcmRlclwiPjwvY2FudmFzPlxuICAgICAgICA8cCBpZD1cInNjb3JlLWluZm9cIiBjbGFzcz1cInRleHQtNHhsIHRleHQtd2hpdGVcIiBjbGFzcz1cImJnLWdyYXktNTAwXCIgPiBTY29yZSA8L3A+XG4gICAgICAgIDxidXR0b24gaWQ9XCJyZXN0YXJ0LWJ0blwiIGNsYXNzPVwicHgtMyBweS0xIGJvcmRlci0yIGJvcmRlci1jcmltc29uIHJvdW5kZWQtWzEwcHhdIGJnLWdyYXktNTAwIHRleHQtd2hpdGUgdGV4dC1bMjVweF1cIj4gUmVzdGFydCA8L2J1dHRvbj5gO1xufSIsImltcG9ydCB7IG5hdmlnYXRpb24gfSBmcm9tIFwiLi4vZWxlbWVudHNcIlxuLy8gaW1wb3J0ICBteUltZyAgZnJvbSBcIi4uL2ltZy9waW5nLXBvbmcucG5nXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVQYWdlKG1haW5XcmFwcGVyOiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZCkge1xuXHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJoLXNjcmVlblwiLCBcImZsZXhcIiwgXCJmbGV4LWNvbFwiLCBcImJnLWdyYWRpZW50LXRvLXRcIiwgXCJmcm9tLWJsYWNrXCIsIFwidmlhLWJsYWNrXCIsIFwidG8tZ3JheS04MDBcIiwgXCJvdmVyZmxvdy1oaWRkZW5cIik7XG5cdC8vICR7bmF2aWdhdGlvbigpfVxuXHRsZXQgcmVzID0gYFxuICAgICAgICBcdCR7bmF2aWdhdGlvbigpfVxuICAgICAgICBcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBwLTYgbXQtMjRcIj5cbiAgICAgICAgXHQgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy13aGl0ZSBwLTggcm91bmRlZC0yeGwgc2hhZG93LWxnXCI+XG4gICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6dy0xLzIgcC02XCI+XG4gICAgICAgIFx0ICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC00eGwgZm9udC1ib2xkIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTUwMCB2aWEtcHVycGxlLTUwMCB0by1waW5rLTUwMCB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dFwiPkZUX1RSQU5TQ0VOREVOU0NFPC9oMT5cbiAgICAgICAgXHQgICAgICAgICAgICA8cCBjbGFzcz1cIm10LTQgdGV4dC1ncmF5LTYwMCB0ZXh0LWxnXCI+XG4gICAgICAgIFx0ICAgICAgICAgICAgICAgIFRyYW5zY2VuZGVuY2UgaXMgYSA0MiBzY2hvb2wgcHJvamVjdCwgdG8gbGVhcm4gYWJvdXQgd2ViIGRldmVsb3BwZW1lbnQgYW5kIFNQQS48YnI+XG5cdFx0XHRcdFx0XHRcdFRoZSBnb2FsIGlzIHRvIGNyZWF0ZSBhIHdlYiBhcHAgdG8gcGxheSBQb25nLCBhbmQgc29jaWFsaXplIHdpdGggb3RoZXIgdXNlcnMuPGJyPjxicj5cbiAgICAgICAgXHQgICAgICAgICAgICA8L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc1wibXQtNCB0ZXh0LWdyYXktOTAwIHRleHQtbGdcIj5EZXZlbG9wZWQgYnkgbm92c2lhbm4gYW5kIGtpbGNoZW5rIDwvcD5cbiAgICAgICAgXHQgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6dy0xLzIgZmxleCBqdXN0aWZ5LWNlbnRlciBwLTZcIj5cbiAgICAgICAgXHQgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltZy9waW5nLXBvbmcucG5nXCIgYWx0PVwiUm9ja2V0IGZvciBwaW5nIHBvbmdcIiBjbGFzcz1cInctMTI4IGgtMTI4IG9iamVjdC1jb3ZlciByb3VuZGVkLXhsIHNoYWRvdy1tZFwiPlxuICAgICAgICBcdCAgICAgICAgPC9kaXY+XG4gICAgICAgIFx0ICAgIDwvZGl2PlxuICAgICAgICBcdDwvZGl2PmA7XG5cdHJldHVybiByZXM7XG59IiwiZXhwb3J0ICogZnJvbSBcIi4vbG9naW5QYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlZ2lzdHJhdGlvblBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vZXJyb3JQYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2dhbWVQYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BsYXlQYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hvbWVQYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Byb2ZpbGVQYWdlXCIiLCJleHBvcnQgZnVuY3Rpb24gbG9naW5QYWdlKCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImgtc2NyZWVuXCIsIFwiZmxleFwiLCBcIml0ZW1zLWNlbnRlclwiLCBcImp1c3RpZnktY2VudGVyXCIsIFwiYmctZ3JhZGllbnQtdG8tdFwiLCBcImZyb20tYmxhY2tcIiwgXCJ2aWEtYmxhY2tcIiwgXCJ0by1ncmF5LTgwMFwiKTtcbiAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1heC13LXNtIG14LWF1dG8gbXQtMTAgcC02IGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDAgdGV4dC1jZW50ZXIgbWItNFwiPkxvZ2luPC9oMj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInlvdXIgZW1haWxcIiBjbGFzcz1cInctZnVsbCBtYi0zIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTQwMFwiIGlkPVwibG9naW5JbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInlvdXIgcGFzc3dvcmRcIiBjbGFzcz1cInctZnVsbCBtYi00IHB4LTMgcHktMiBib3JkZXIgcm91bmRlZCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTQwMFwiIGlkPVwibG9naW5QYXNzXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInctZnVsbCBiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBweS0yIHJvdW5kZWQgaG92ZXI6YmctZ3JlZW4tNjAwXCIgaWQ9XCJsb2dpbkJ0blwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC0zXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lXCIgaWQ9XCJxdWVzdGlvblBhc3NGb3Jnb3RcIj5Gb3Jnb3QgUGFzc3dvcmQ/PC9hPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG59IiwiaW1wb3J0IHsgbmF2aWdhdGlvbiB9IGZyb20gXCIuLi9lbGVtZW50c1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5UGFnZShtYWluV3JhcHBlcjogSFRNTERpdkVsZW1lbnQgfCB1bmRlZmluZWQpIHtcbiAgICBsZXQgcmVzID0gYFxuICAgICAgICAgICAgICAgICR7bmF2aWdhdGlvbigpfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tdCBmcm9tLWJsYWNrIHZpYS1ibGFjayB0by1ncmF5LTgwMCBzcGFjZS15LThcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInB4LTYgcHktMyB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtbGcgdGV4dC14bCBob3ZlcjpiZy1ibHVlLTcwMCBmb2N1czpvdXRsaW5lLW5vbmVcIiBpZD1cImJ0bi1wbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTVEFSVFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgIHJldHVybiByZXM7XG59IiwiaW1wb3J0IHsgbmF2aWdhdGlvbiB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvZmlsZVBhZ2UobWFpbldyYXBwZXI6IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBcImgtc2NyZWVuXCIsIFwiZmxleFwiLCBcImZsZXgtY29sXCIsXG4gICAgICAgIFwiYmctZ3JhZGllbnQtdG8tdFwiLCBcImZyb20tYmxhY2tcIiwgXCJ2aWEtYmxhY2tcIiwgXCJ0by1ncmF5LTgwMFwiLFxuICAgICAgICBcIm92ZXJmbG93LWhpZGRlblwiXG4gICAgKTtcblxuICAgIC8vbXgtYXV0byBwLTYgbXQtNjQgdiBjb250YWluZXIgZG9iYXZpdFxuICAgIGxldCByZXMgPSBgXG4gICAgICAgICR7bmF2aWdhdGlvbigpfVxuXG4gICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtbGcgc2hhZG93LWxnIG15LWF1dG8gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTUvNiBoLTk2IGJnLXdoaXRlIHAtMTAgcm91bmRlZC0yeGwgc2hhZG93LWxnIHRleHQtY2VudGVyIHJlbGF0aXZlXCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSAtdG9wLTIwIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2dvYXQuanBnXCIgYWx0PVwiUHJvZmlsZSBQaG90b1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy0zNiBoLTM2IHJvdW5kZWQtZnVsbCBib3JkZXItNCBib3JkZXItd2hpdGUgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMjhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDBcIj5Vc2VybmFtZTwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTggZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1ncmF5LTYwMCB0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj4wPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbVwiPkxldmVsPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj4wPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbVwiPkZyaWVuZHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPjA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtXCI+TWF0Y2hlcyBwbGF5ZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIHJldHVybiByZXM7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcmVnaXN0cmF0aW9uUGFnZSgpIHtcbiAgICAvLyBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJoLXNjcmVlblwiLCBcImZsZXhcIiwgXCJpdGVtcy1jZW50ZXJcIiwgXCJqdXN0aWZ5LWNlbnRlclwiLCBcImJnLWdyYWRpZW50LXRvLXRcIiwgXCJmcm9tLWJsYWNrXCIsIFwidmlhLWJsYWNrXCIsIFwidG8tZ3JheS04MDBcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBcImgtc2NyZWVuXCIsIFwiZmxleFwiLCBcImZsZXgtY29sXCIsXG4gICAgICAgIFwiYmctZ3JhZGllbnQtdG8tdFwiLCBcImZyb20tYmxhY2tcIiwgXCJ2aWEtYmxhY2tcIiwgXCJ0by1ncmF5LTgwMFwiLFxuICAgICAgICBcIm92ZXJmbG93LWhpZGRlblwiXG4gICAgKTtcblxuICAgIHJldHVybiBgXG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMTAgdy01LzUgaC0zLzUgZmxleCBzaGFkb3ctbGcgcm91bmRlZC1sZyBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTMvNSBwLTEwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgYmctZ3JhZGllbnQtdG8tciBmcm9tLXB1cnBsZS05MDAgdG8tYmx1ZS05MDAgdGV4dC13aGl0ZSByb3VuZGVkLWwtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC00eGwgZm9udC1ib2xkXCI+VHJhbnNjZW5kZW5jZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibXQtNCB0ZXh0LWxnXCI+Sm9pbiB1cyB0b2RheSBhbmQgc3RhcnQgeW91ciBqb3VybmV5IHdpdGggb3VyIGFtYXppbmcgcGxhdGZvcm0uPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTIvNSBwLTEwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcm91bmRlZC1yLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi00XCI+UmVnaXN0cmF0aW9uPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJyZWdpc3RlckZvcm1cIiBjbGFzcz1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidXNlcm5hbWVSZWdpc3RyYXRpb25cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiBjbGFzcz1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsUmVnaXN0cmF0aW9uXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCIgY2xhc3M9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFJlZ2lzdHJhdGlvblwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiIGNsYXNzPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwic3VibWl0UmVnaXN0cmF0aW9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUmVnaXN0ZXJcIiBjbGFzcz1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkIGhvdmVyOmJnLWJsdWUtNjAwIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC00XCI+QWxyZWFkeSByZWdpc3RlcmVkPyA8YSBjbGFzcz1cInRleHQtYmx1ZS01MDBcIiBpZD1cInF1ZXN0aW9uQWxyZWFkeVJlZ2lzdHJcIj5TaWduIEluPC9hPjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4iLCJleHBvcnQgZnVuY3Rpb24gbmF2aWdhdGlvbigpIHtcblx0cmV0dXJuIGBcblx0XHQ8bmF2IGNsYXNzPVwidG9wLTAgbGVmdC0wIGJnLWJsYWNrIHRleHQtd2hpdGUgaC0xNiB3LWZ1bGwgZml4ZWQgZmxleCBpdGVtcy1jZW50ZXIgcHgtNlwiPlxuICAgIFx0XHQ8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vcGxhc3RpY2luZS8xMDAvcGluZy1wb25nLS12MS5wbmdcIiBhbHQ9XCJMb2dvXCIgY2xhc3M9XCJoLTEyIHctMTIgb2JqZWN0LWNvdmVyXCIgaWQ9aW1nTG9nb05hdmk+XG5cblxuICAgIFx0XHQ8ZGl2IGNsYXNzPVwiZmxleC0xIGZsZXgganVzdGlmeS1jZW50ZXIgc3BhY2UteC04XCI+XG4gICAgICAgXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImZvbnQtbW9ubyBoLTVcIiBpZD1cIm5hdmlCdG5cIj4gSG9tZSA8L2J1dHRvbj5cbiAgICAgICAgXHRcdDxidXR0b24gY2xhc3M9XCJmb250LW1vbm8gaC01XCIgaWQ9XCJuYXZpQnRuXCI+IEdhbWUgPC9idXR0b24+XG4gICAgICAgIFx0XHQ8YnV0dG9uIGNsYXNzPVwiZm9udC1tb25vIGgtNVwiIGlkPVwibmF2aUJ0blwiPiBSZWdpc3RyYXRpb24gPC9idXR0b24+XG4gICAgICAgIFx0XHQ8YnV0dG9uIGNsYXNzPVwiZm9udC1tb25vIGgtNVwiIGlkPVwibmF2aUJ0blwiPiBMb2dpbiA8L2J1dHRvbj5cbiAgICBcdFx0PC9kaXY+XG5cblxuXHRcdFx0PGRpdiBjbGFzcz1cInJlbGF0aXZlXCI+XG4gICAgICAgIFx0XHQ8aW1nIGlkPVwicHJvZmlsZUljb25cIiBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2ZsdWVuY3kvNDgvdGVzdC1hY2NvdW50LS12MS5wbmdcIiBhbHQ9XCJQcm9maWxlXCIgY2xhc3M9XCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyXCI+XG5cblxuICAgICAgICBcdFx0PGRpdiBpZD1cImRyb3Bkb3duTWVudVwiIGNsYXNzPVwiYWJzb2x1dGUgcmlnaHQtMCBtdC0yIHctNDggYmctd2hpdGUgdGV4dC1ibGFjayBzaGFkb3ctbGcgcm91bmRlZC1sZyBwLTIgaGlkZGVuXCI+XG4gICAgICAgICAgICBcdFx0PGEgY2xhc3M9XCJibG9jayBweC00IHB5LTIgaG92ZXI6YmctZ3JheS0yMDBcIj5Qcm9maWxlPC9hPlxuXHRcdFx0XHRcdDxhIGNsYXNzPVwiYmxvY2sgcHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMjAwXCI+R2FtZTwvYT5cblx0XHRcdFx0XHQ8YSBjbGFzcz1cImJsb2NrIHB4LTQgcHktMiBob3ZlcjpiZy1ncmF5LTIwMFwiPkxlYWRlcmJvYXJkPC9hPlxuICAgICAgICAgICAgXHRcdDxhIGNsYXNzPVwiYmxvY2sgcHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMjAwXCI+U2V0dGluZ3M8L2E+XG4gICAgICAgICAgICBcdFx0PGEgY2xhc3M9XCJibG9jayBweC00IHB5LTIgdGV4dC1yZWQtNjAwIGhvdmVyOmJnLWdyYXktMjAwXCI+TG9nb3V0PC9hPlxuICAgICAgICBcdFx0PC9kaXY+XG4gICAgXHRcdDwvZGl2PlxuXHRcdDwvbmF2PlxuXHRcdGA7XG59IiwiZXhwb3J0IGNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IiwiZXhwb3J0ICogZnJvbSAnLi9jcmVhdGVCdXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi9jcmVhdGVXcmFwcGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY3JlYXRlTmF2aWdhdGlvbic7IiwiaW1wb3J0IHJ1blNwYSBmcm9tICcuL3NwYUFwcC9pbmRleCdcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBydW5TcGEobG9jYXRpb24ucGF0aG5hbWUpO1xufSk7XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9uYXZpZ2F0aW9uXCIiLCJpbXBvcnQgeyBuYXZpZ2F0ZVRvIH0gZnJvbSBcIi4uL3JvdXRpbmdcIjtcbmltcG9ydCB7IG5hdmlSb3V0ZXMgfSBmcm9tIFwiLi9uYXZpZ2F0aW9uUm91dGVzXCI7XG5pbXBvcnQgeyBkcm9wTWVudVJvdXRlcyB9IGZyb20gXCIuL25hdmlnYXRpb25Sb3V0ZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpb25IYW5kbGUoKSB7XG5cdGNvbnN0IG5hdmlCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNuYXZpQnRuXCIpO1xuXHRjb25zdCBwcm9maWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlSWNvblwiKTtcblx0Y29uc3QgZHJvcGRvd25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bk1lbnVcIik7XG5cdGNvbnN0IG5hdmlEcm9wTWVudUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2Ryb3Bkb3duTWVudSBhXCIpO1xuXHRjb25zdCBpbWdMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ0xvZ29OYXZpJyk7XG5cblx0aW1nTG9nbyEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0bmF2aWdhdGVUbygnLycpO1xuXHR9KVxuXG5cdG5hdmlCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGlmIChidG4uaW5uZXJIVE1MLnRyaW0oKSBpbiBuYXZpUm91dGVzKSB7XG5cdFx0XHRcdG5hdmlnYXRlVG8obmF2aVJvdXRlc1tidG4uaW5uZXJIVE1MLnRyaW0oKV0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KVxuXG5cdG5hdmlEcm9wTWVudUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0aWYgKGJ0bi5pbm5lckhUTUwudHJpbSgpIGluIGRyb3BNZW51Um91dGVzKSB7XG5cdFx0XHRcdG5hdmlnYXRlVG8oZHJvcE1lbnVSb3V0ZXNbYnRuLmlubmVySFRNTC50cmltKCldKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSlcblxuXHRwcm9maWxlQnRuIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRkcm9wZG93bk1lbnUhLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG5cdH0pO1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRpZiAoZS50YXJnZXQgIT09IGRyb3Bkb3duTWVudSAmJiBlLnRhcmdldCAhPT0gcHJvZmlsZUJ0bilcblx0XHRcdGRyb3Bkb3duTWVudSEuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0fSlcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRpZiAoZS5rZXlDb2RlID09IDI3KVxuXHRcdFx0ZHJvcGRvd25NZW51IS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHR9KVxuXG59IiwiZXhwb3J0IGNvbnN0IG5hdmlSb3V0ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG5cdFwiSG9tZVwiOiBcIi9cIixcblx0XCJHYW1lXCI6IFwiL2dhbWVcIixcblx0XCJSZWdpc3RyYXRpb25cIjogXCIvcmVnaXN0cmF0aW9uXCIsXG5cdFwiTG9naW5cIjogXCIvbG9naW5cIlxufVxuXG5leHBvcnQgY29uc3QgZHJvcE1lbnVSb3V0ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG5cdFwiUHJvZmlsZVwiOiBcIi9wcm9maWxlXCIsXG5cdFwiR2FtZVwiOiBcIi9nYW1lXCIsXG5cdFwiTGVhZGVyYm9hcmRcIjogXCIvbGVhZGVyYm9hcmRcIixcblx0XCJTZXR0aW5nc1wiOiBcIi9zZXR0aW5nc1wiLFxuXHRcIkxvZ291dFwiOiBcIi9sb2dvdXRcIlxufSAgIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUdhbWUobWFpbldyYXBwZXI6IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkKSB7XG5cdGNvbnN0IHNjb3JlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2NvcmUtaW5mb1wiKTtcblx0Y29uc3QgZ2FtZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWJvYXJkXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuXHRjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXN0YXJ0LWJ0blwiKTtcblx0Ly8gY29uc3QgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcblx0bGV0IGludGVydmFsSUQ6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPjs7XG5cblx0bWFpbldyYXBwZXIhLmlkID0gXCJnYW1lLWNvbnRhaW5lclwiO1xuXHRtYWluV3JhcHBlciEuY2xhc3NMaXN0LmFkZChcImgtc2NyZWVuXCIsIFwiZmxleFwiLCBcImZsZXgtY29sXCIsIFwiZ2FwLTIuNVwiLCBcImp1c3RpZnktY2VudGVyXCIsIFwiaXRlbXMtY2VudGVyXCIpO1xuXHRjb25zdCBjb250ZXh0ID0gZ2FtZUJvYXJkPy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblx0Y29uc3QgZ2FtZUJvYXJkQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShnYW1lQm9hcmQpLmJhY2tncm91bmRDb2xvcjtcblx0Y29uc3QgZmlyc3RQYWRkbGVDb2xvciA9IFwid2hpdGVcIjtcblx0Y29uc3Qgc2Vjb25kUGFkZGxlQ29sb3IgPSBcIndoaXRlXCI7XG5cdGNvbnN0IGJhbGxDb2xvciA9IFwid2hpdGVcIjtcblxuXHRjb25zdCBnYW1lQm9hcmRXaWR0aCA9IGdhbWVCb2FyZC53aWR0aDtcblx0Y29uc3QgZ2FtZUJvYXJkSGVpZ2h0ID0gZ2FtZUJvYXJkLmhlaWdodDtcblxuXHRjb25zdCBtb3ZlRmlyc3RQYWRkbGVLZXkgPSB7XG5cdFx0dXA6IFwid1wiLFxuXHRcdGRvd246IFwic1wiLFxuXHR9XG5cblx0Y29uc3QgbW92ZVNlY29uZFBhZGRsZUtleSA9IHtcblx0XHR1cDogXCJBcnJvd1VwXCIsXG5cdFx0ZG93bjogXCJBcnJvd0Rvd25cIlxuXHR9XG5cblx0Y29uc3QgcGFkZGxlU2l6ZSA9IHtcblx0XHR3aWR0aDogMjUsXG5cdFx0aGVpZ2h0OiAxMjBcblx0fVxuXG5cdGNvbnN0IGJhbGxSYWRpdXMgPSAxMztcblx0Y29uc3QgaW5pdGlhbEJhbGxTcGVlZCA9IDU7XG5cdGxldCBiYWxsU3BlZWQgPSBpbml0aWFsQmFsbFNwZWVkO1xuXHRjb25zdCBwYWRkbGVTcGVlZCA9IDQwO1xuXHRsZXQgZmlyc3RQbGF5ZXJTY29yZSA9IDA7XG5cdGxldCBzZWNvbmRQbGF5ZXJTY29yZSA9IDA7XG5cblx0Y29uc3QgZmlyc3RQYWRkbGVJbml0aWFsID0ge1xuXHRcdHg6IDAsXG5cdFx0eTogMFxuXHR9XG5cblx0Y29uc3Qgc2Vjb25kUGFkZGxlSW5pdGlhbCA9IHtcblx0XHR4OiBnYW1lQm9hcmRXaWR0aCAtIHBhZGRsZVNpemUud2lkdGgsXG5cdFx0eTogZ2FtZUJvYXJkSGVpZ2h0IC0gcGFkZGxlU2l6ZS5oZWlnaHQsXG5cdH1cblxuXHRsZXQgZmlyc3RQYWRkbGUgPSB7IC4uLmZpcnN0UGFkZGxlSW5pdGlhbCB9O1xuXHRsZXQgc2Vjb25kUGFkZGxlID0geyAuLi5zZWNvbmRQYWRkbGVJbml0aWFsIH07XG5cblx0Y29uc3QgYmFsbEluaXRpYWwgPSB7XG5cdFx0eDogZ2FtZUJvYXJkV2lkdGggLyAyLFxuXHRcdHk6IGdhbWVCb2FyZEhlaWdodCAvIDIsXG5cdH1cblxuXHRsZXQgYmFsbCA9IHsgLi4uYmFsbEluaXRpYWwgfTtcblx0Y29uc3QgYmFsbERpcmVjdGlvbiA9IHtcblx0XHR4OiAwLFxuXHRcdHk6IDAsXG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3Qm9hcmQoKSB7XG5cdFx0Y29udGV4dCEuZmlsbFN0eWxlID0gZ2FtZUJvYXJkQ29sb3I7XG5cdFx0Y29udGV4dCEuZmlsbFJlY3QoMCwgMCwgZ2FtZUJvYXJkV2lkdGgsIGdhbWVCb2FyZEhlaWdodCk7XG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3UGFkZGxlKHBhZGRsZVg6IG51bWJlciwgcGFkZGxlWTogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSB7XG5cdFx0Y29udGV4dCEuZmlsbFN0eWxlID0gY29sb3I7XG5cdFx0Y29udGV4dCEuZmlsbFJlY3QocGFkZGxlWCwgcGFkZGxlWSwgcGFkZGxlU2l6ZS53aWR0aCwgcGFkZGxlU2l6ZS5oZWlnaHQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd1BhZGRsZXMoKSB7XG5cdFx0ZHJhd1BhZGRsZShmaXJzdFBhZGRsZS54LCBmaXJzdFBhZGRsZS55LCBmaXJzdFBhZGRsZUNvbG9yKTtcblx0XHRkcmF3UGFkZGxlKHNlY29uZFBhZGRsZS54LCBzZWNvbmRQYWRkbGUueSwgc2Vjb25kUGFkZGxlQ29sb3IpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd0JhbGwoKSB7XG5cdFx0Y29udGV4dCEuYmVnaW5QYXRoKCk7XG5cdFx0Y29udGV4dCEuZmlsbFN0eWxlID0gYmFsbENvbG9yO1xuXHRcdGNvbnRleHQhLmFyYyhiYWxsLngsIGJhbGwueSwgYmFsbFJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuXHRcdGNvbnRleHQhLmZpbGwoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNob29zZUJhbGxEaXJlY3Rpb24oKSB7XG5cdFx0cmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjU7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRCYWxsRGlyZWN0aW9uKCkge1xuXHRcdGlmIChjaG9vc2VCYWxsRGlyZWN0aW9uKCkpIHtcblx0XHRcdGJhbGxEaXJlY3Rpb24ueCA9IDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJhbGxEaXJlY3Rpb24ueCA9IC0xO1xuXHRcdH1cblxuXHRcdGlmIChjaG9vc2VCYWxsRGlyZWN0aW9uKCkpIHtcblx0XHRcdGJhbGxEaXJlY3Rpb24ueSA9IDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJhbGxEaXJlY3Rpb24ueSA9IC0xO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZUJvcmRlckNvbGxpc2lvbigpIHtcblx0XHRjb25zdCB0b3BCYWxsUmFkaXVzID0gYmFsbC55IDw9IGJhbGxSYWRpdXM7XG5cdFx0Y29uc3QgYm90dG9tQmFsbFJhZGl1cyA9IGJhbGwueSA+PSBnYW1lQm9hcmRIZWlnaHQgLSBiYWxsUmFkaXVzO1xuXHRcdGlmICh0b3BCYWxsUmFkaXVzIHx8IGJvdHRvbUJhbGxSYWRpdXMpIHtcblx0XHRcdGJhbGxEaXJlY3Rpb24ueSAqPSAtMTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjaGVja0ZpcnN0UGFkZGxlQ29sbGlzaW9uKCkge1xuXHRcdGNvbnN0IHhDb2xsaXNpb24gPSBiYWxsLnggPD0gZmlyc3RQYWRkbGUueCArIGJhbGxSYWRpdXMgKyBwYWRkbGVTaXplLndpZHRoO1xuXHRcdGNvbnN0IHlDb2xsaXNpb24gPSBiYWxsLnkgPj0gZmlyc3RQYWRkbGUueSAmJiBiYWxsLnkgPD0gZmlyc3RQYWRkbGUueSArIHBhZGRsZVNpemUuaGVpZ2h0O1xuXHRcdHJldHVybiB4Q29sbGlzaW9uICYmIHlDb2xsaXNpb247XG5cdH1cblxuXHRmdW5jdGlvbiBjaGVja1NlY29uZFBhZGRsZUNvbGxpc2lvbigpIHtcblx0XHRjb25zdCB4Q29sbGlzaW9uID0gYmFsbC54ID49IHNlY29uZFBhZGRsZS54IC0gYmFsbFJhZGl1cztcblx0XHRjb25zdCB5Q29sbGlzaW9uID0gYmFsbC55ID49IHNlY29uZFBhZGRsZS55ICYmIGJhbGwueSA8PSBzZWNvbmRQYWRkbGUueSArIHBhZGRsZVNpemUuaGVpZ2h0O1xuXHRcdHJldHVybiB4Q29sbGlzaW9uICYmIHlDb2xsaXNpb247XG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVQYWRkbGVDb2xsaXNpb24oKSB7XG5cdFx0Y29uc3QgZmlyc3RQYWRkbGVDb2xsaXNpb24gPSBjaGVja0ZpcnN0UGFkZGxlQ29sbGlzaW9uKCk7XG5cdFx0Y29uc3Qgc2Vjb25kUGFkZGxlQ29sbGlzaW9uID0gY2hlY2tTZWNvbmRQYWRkbGVDb2xsaXNpb24oKTtcblxuXHRcdGlmIChmaXJzdFBhZGRsZUNvbGxpc2lvbiB8fCBzZWNvbmRQYWRkbGVDb2xsaXNpb24pIHtcblx0XHRcdGJhbGxTcGVlZCAqPSAxLjA3O1xuXHRcdFx0YmFsbERpcmVjdGlvbi54ICo9IC0xO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChmaXJzdFBhZGRsZUNvbGxpc2lvbikge1xuXHRcdFx0YmFsbC54ID0gZmlyc3RQYWRkbGUueCArIHBhZGRsZVNpemUud2lkdGggKyBiYWxsUmFkaXVzO1xuXHRcdH0gZWxzZSBpZiAoc2Vjb25kUGFkZGxlQ29sbGlzaW9uKSB7XG5cdFx0XHRiYWxsLnggPSBzZWNvbmRQYWRkbGUueCAtIGJhbGxSYWRpdXM7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gbW92ZUJhbGwoKSB7XG5cdFx0YmFsbC54ICs9IGJhbGxTcGVlZCAqIGJhbGxEaXJlY3Rpb24ueDtcblx0XHRiYWxsLnkgKz0gYmFsbFNwZWVkICogYmFsbERpcmVjdGlvbi55O1xuXHRcdGhhbmRsZUJvcmRlckNvbGxpc2lvbigpO1xuXHRcdGhhbmRsZVBhZGRsZUNvbGxpc2lvbigpO1xuXHRcdGhhbmRsZUdvYWwoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVNjb3JlKCkge1xuXHRcdHNjb3JlSW5mbyEudGV4dENvbnRlbnQgPSBgJHtmaXJzdFBsYXllclNjb3JlfSA6ICR7c2Vjb25kUGxheWVyU2NvcmV9YFxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlR29hbCgpIHtcblx0XHRjb25zdCBmaXJzdFVzZXJHb2FsID0gYmFsbC54ID4gZ2FtZUJvYXJkV2lkdGg7XG5cdFx0Y29uc3Qgc2Vjb25kVXNlckdvYWwgPSBiYWxsLnggPCAwO1xuXG5cdFx0aWYgKCFmaXJzdFVzZXJHb2FsICYmICFzZWNvbmRVc2VyR29hbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZmlyc3RVc2VyR29hbCkge1xuXHRcdFx0Zmlyc3RQbGF5ZXJTY29yZSsrO1xuXHRcdH1cblx0XHRpZiAoc2Vjb25kVXNlckdvYWwpIHtcblx0XHRcdHNlY29uZFBsYXllclNjb3JlKys7XG5cdFx0fVxuXHRcdHVwZGF0ZVNjb3JlKCk7XG5cdFx0YmFsbCA9IHsgLi4uYmFsbEluaXRpYWwgfTtcblx0XHRzZXRCYWxsRGlyZWN0aW9uKCk7XG5cdFx0ZHJhd0JhbGwoKTtcblx0XHRiYWxsU3BlZWQgPSBpbml0aWFsQmFsbFNwZWVkO1xuXHR9XG5cblx0ZnVuY3Rpb24gbW92ZVBhZGRsZXMoZXY6IEtleWJvYXJkRXZlbnQpIHtcblxuXHRcdGNvbnN0IGZpcnN0UGFkZGxlR29pbmdVcCA9IGV2LmtleSA9PT0gbW92ZUZpcnN0UGFkZGxlS2V5LnVwO1xuXHRcdGNvbnN0IGZpcnN0UGFkZGxlR29pbmdEb3duID0gZXYua2V5ID09PSBtb3ZlRmlyc3RQYWRkbGVLZXkuZG93bjtcblx0XHRjb25zdCBzZWNvbmRQYWRkbGVHb2luZ1VwID0gZXYua2V5ID09PSBtb3ZlU2Vjb25kUGFkZGxlS2V5LnVwO1xuXHRcdGNvbnN0IHNlY29uZFBhZGRsZUdvaW5nRG93biA9IGV2LmtleSA9PT0gbW92ZVNlY29uZFBhZGRsZUtleS5kb3duO1xuXG5cdFx0Y29uc3QgY2FuRmlyc3RQYWRkbGVNb3ZlVXAgPSBmaXJzdFBhZGRsZS55ID4gMDtcblx0XHRjb25zdCBjYW5GaXJzdFBhZGRsZU1vdmVEb3duID0gZmlyc3RQYWRkbGUueSA8IGdhbWVCb2FyZC5oZWlnaHQgLSBwYWRkbGVTaXplLmhlaWdodDtcblx0XHRjb25zdCBjYW5TZWNvbmRQYWRkbGVNb3ZlVXAgPSBzZWNvbmRQYWRkbGUueSA+IDA7XG5cdFx0Y29uc3QgY2FuU2Vjb25kUGFkZGxlTW92ZURvd24gPSBzZWNvbmRQYWRkbGUueSA8IGdhbWVCb2FyZC5oZWlnaHQgLSBwYWRkbGVTaXplLmhlaWdodDtcblxuXHRcdGlmIChmaXJzdFBhZGRsZUdvaW5nVXAgJiYgY2FuRmlyc3RQYWRkbGVNb3ZlVXApIHtcblx0XHRcdGZpcnN0UGFkZGxlLnkgLT0gcGFkZGxlU3BlZWQ7XG5cdFx0fSBlbHNlIGlmIChmaXJzdFBhZGRsZUdvaW5nRG93biAmJiBjYW5GaXJzdFBhZGRsZU1vdmVEb3duKSB7XG5cdFx0XHRmaXJzdFBhZGRsZS55ICs9IHBhZGRsZVNwZWVkO1xuXHRcdH0gZWxzZSBpZiAoc2Vjb25kUGFkZGxlR29pbmdVcCAmJiBjYW5TZWNvbmRQYWRkbGVNb3ZlVXApIHtcblx0XHRcdHNlY29uZFBhZGRsZS55IC09IHBhZGRsZVNwZWVkO1xuXHRcdH0gZWxzZSBpZiAoc2Vjb25kUGFkZGxlR29pbmdEb3duICYmIGNhblNlY29uZFBhZGRsZU1vdmVEb3duKSB7XG5cdFx0XHRzZWNvbmRQYWRkbGUueSArPSBwYWRkbGVTcGVlZDtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVHYW1lKCkge1xuXHRcdGRyYXdCb2FyZCgpO1xuXHRcdGRyYXdQYWRkbGVzKCk7XG5cdFx0bW92ZUJhbGwoKTtcblx0XHRkcmF3QmFsbCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVzdGFydEdhbWUoKSB7XG5cdFx0Zmlyc3RQbGF5ZXJTY29yZSA9IDA7XG5cdFx0c2Vjb25kUGxheWVyU2NvcmUgPSAwO1xuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG5cdFx0YmFsbFNwZWVkID0gaW5pdGlhbEJhbGxTcGVlZDtcblx0XHRiYWxsID0geyAuLi5iYWxsSW5pdGlhbCB9O1xuXHRcdGZpcnN0UGFkZGxlID0geyAuLi5maXJzdFBhZGRsZSB9O1xuXHRcdHNlY29uZFBhZGRsZSA9IHsgLi4uc2Vjb25kUGFkZGxlIH07XG5cdFx0aW5pdEdhbWUoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXRHYW1lKCkge1xuXHRcdHVwZGF0ZVNjb3JlKCk7XG5cdFx0c2V0QmFsbERpcmVjdGlvbigpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBtb3ZlUGFkZGxlcyk7XG5cdFx0aW50ZXJ2YWxJRCA9IHNldEludGVydmFsKHVwZGF0ZUdhbWUsIDIwKTtcblx0XHRyZXN0YXJ0QnRuIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc3RhcnRHYW1lKTtcblx0fVxuXG5cdGluaXRHYW1lKCk7IC8vIGlmIHRoZSBnYW1lIGJyZWFrcyB1c2UgdGhlIGxpbmUgYmVsb3dcblx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGluaXRHYW1lKTtcbn1cblxuXG5cblxuXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9nYW1lXCIiLCJpbXBvcnQgeyBuYXZpZ2F0aW9uSGFuZGxlIH0gZnJvbSBcIi4uLy4uL25hZ2l2YXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUhvbWVQYWdlKG1haW5XcmFwcGVyOiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZCkge1xuXHRuYXZpZ2F0aW9uSGFuZGxlKCk7XG59IiwiZXhwb3J0ICogZnJvbSBcIi4vaG9tZVwiIiwiZXhwb3J0ICogZnJvbSBcIi4vbG9naW5QYWdlXCIiLCJpbXBvcnQgeyBuYXZpZ2F0ZVRvIH0gZnJvbSBcIi4uLy4uL3JvdXRpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUxvZ2luKCkge1xuICAgIGNvbnN0IGxvZ2luRW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5JbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGxvZ2luUGFzc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblBhc3NcIikgYXMgSFRNTElucHV0RWxlbWVudDs7XG4gICAgY29uc3QgbG9naW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luQnRuXCIpO1xuICAgIGNvbnN0IGZvcmdvdFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdGlvblBhc3NGb3Jnb3RcIik7IC8vIGxhdGVyIGltcGxlbWVudFxuXG4gICAgbG9naW5CdG4hLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChsb2dpbkVtYWlsSW5wdXQudmFsdWUgPT09ICdhZG1pbicgJiYgbG9naW5QYXNzSW5wdXQudmFsdWUgPT09ICdhZG1pbicpIHtcbiAgICAgICAgICAgIG5hdmlnYXRlVG8oXCIvXCIpO1xuICAgICAgICB9XG4gICAgfSlcbn0iLCJleHBvcnQgKiBmcm9tIFwiLi9wbGF5UGFnZVwiIiwiaW1wb3J0IHsgcm91dGVUb0dhbWUgfSBmcm9tIFwiLi4vLi4vcm91dGluZ1wiO1xuaW1wb3J0IHsgbmF2aWdhdGlvbkhhbmRsZSB9IGZyb20gXCIuLi8uLi9uYWdpdmF0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQbGF5UGFnZSgpIHtcblx0bmF2aWdhdGlvbkhhbmRsZSgpO1xuXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXBsYXlcIikhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0cm91dGVUb0dhbWUoKTtcblx0fSk7XG59IiwiZXhwb3J0ICogZnJvbSBcIi4vcHJvZmlsZVwiIiwiaW1wb3J0IHsgcm91dGVUb0dhbWUgfSBmcm9tIFwiLi4vLi4vcm91dGluZ1wiO1xuaW1wb3J0IHsgbmF2aWdhdGlvbkhhbmRsZSB9IGZyb20gXCIuLi8uLi9uYWdpdmF0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQcm9maWxlUGFnZSgpIHtcblx0bmF2aWdhdGlvbkhhbmRsZSgpO1xufSIsImV4cG9ydCAqIGZyb20gXCIuL3JlZ2lzdHJhdGlvblwiIiwiLy8gaW1wb3J0IFBhZ2UgZnJvbSAnLi4vLi4vY29yZS90ZW1wbGF0ZXMvcGFnZSdcbi8vIGltcG9ydCB7IFBhZ2VJZHMgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgcm91dGVUb0hvbWUgfSBmcm9tIFwiLi4vLi4vcm91dGluZy9pbmRleFwiXG5pbXBvcnQgeyBuYXZpZ2F0ZVRvIH0gZnJvbSBcIi4uLy4uL3JvdXRpbmcvaW5kZXhcIlxuXG5pbnRlcmZhY2UgSVVzZXJEYXRhVHlwZSB7XG4gICAgdGV4dDogc3RyaW5nIHwgbnVsbCxcbiAgICBlbWFpbDogc3RyaW5nIHwgbnVsbCxcbiAgICBwYXNzd29yZDogc3RyaW5nIHwgbnVsbFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVSZWdpc3RyYXRpb24oKSB7XG4gICAgY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcm5hbWVSZWdpc3RyYXRpb25cIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbFJlZ2lzdHJhdGlvblwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkUmVnaXN0cmF0aW9uXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgYnRuUmVnaXN0ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0UmVnaXN0cmF0aW9uXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGNvbnN0IHNpZ25JbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWVzdGlvbkFscmVhZHlSZWdpc3RyJyk7XG5cbiAgICBjb25zdCBpbnB1dHNVc2VyczogSFRNTElucHV0RWxlbWVudFtdID0gW3VzZXJOYW1lSW5wdXQsIGVtYWlsSW5wdXQsIHBhc3N3b3JkSW5wdXRdO1xuICAgIC8vIGRhdGFCYXNlIGhhcyB0byBiZSByZW1vdmVkLiBJdCdzIGNyZWF0ZWQgb25seSBmb3IgdGVzdHMgOilcbiAgICBsZXQgdXNlckRhdGE6IElVc2VyRGF0YVR5cGUgPSB7XG4gICAgICAgIHRleHQ6IG51bGwsXG4gICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICBwYXNzd29yZDogbnVsbFxuICAgIH07XG4gICAgY29uc3QgdGVtcG9yYXJ5RGF0YUJhc2U6IHN0cmluZ1tdW10gPSBbXTtcbiAgICAvLyB0aWxsIHRoaXMgc3RyaW5nXG5cbiAgICBidG5SZWdpc3RyIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlucHV0c1VzZXJzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGlucHV0LnR5cGUudG9Mb3dlckNhc2UoKSBhcyBrZXlvZiBJVXNlckRhdGFUeXBlO1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT25lIG9mIHlvdXIgaW5wdXRzIGlzIGVtcHR5IVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2lucHV0LnBsYWNlaG9sZGVyfSBoYXMgdG8gYmUgbWluaW11bSAzIGNoYXJhY3RlcnNgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdlbWFpbCcgJiYgIShpbnB1dC52YWx1ZS5tYXRjaCgvQC9nKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2lucHV0LnBsYWNlaG9sZGVyfSBoYXMgY29udGFpbiAnIEAgJyBzeW1ib2xgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXNlckRhdGFba2V5XSA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByb3V0ZVRvSG9tZSgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgc2lnbkluQnRuIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbmF2aWdhdGVUbyhcIi9sb2dpblwiKTtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL3JvdXRlc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9yb3V0ZVRvU29tZVBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbmF2aWdhdGlvblwiIiwiaW1wb3J0IHJ1blNQQSBmcm9tIFwiLi4vc3BhQXBwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVRvKHBhdGg6IHN0cmluZykge1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIlwiLCBwYXRoKTsgLy8gQ2hhbmdlIFVSTCB3aXRob3V0IHJlbG9hZFxuICAgIHJ1blNQQShwYXRoKTsgLy8gRHJhdyBuZXcgUGFnZVxufSIsImltcG9ydCB7IG5hdmlnYXRlVG8gfSBmcm9tIFwiLi9pbmRleFwiXG5cbmV4cG9ydCBmdW5jdGlvbiByb3V0ZVRvR2FtZSgpIHtcblx0bmF2aWdhdGVUbyhcIi9nYW1lXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91dGVUb0hvbWUoKSB7XG5cdG5hdmlnYXRlVG8oXCIvXCIpO1xufSIsImltcG9ydCB7IHBsYXlQYWdlLCBnYW1lUGFnZSwgcmVnaXN0cmF0aW9uUGFnZSwgbG9naW5QYWdlLCBob21lUGFnZSwgcHJvZmlsZVBhZ2UgfSBmcm9tIFwiLi4vTGF5b3V0L2luZGV4XCJcbmltcG9ydCB7IGhhbmRsZVBsYXlQYWdlIH0gZnJvbSBcIi4uL3BhZ2VzL3BsYXlQYWdlXCJcbmltcG9ydCB7IGhhbmRsZUdhbWUgfSBmcm9tIFwiLi4vcGFnZXMvZ2FtZVwiXG5pbXBvcnQgeyBoYW5kbGVSZWdpc3RyYXRpb24gfSBmcm9tIFwiLi4vcGFnZXMvcmVnaXN0cmF0aW9uXCJcbmltcG9ydCB7IGhhbmRsZUxvZ2luIH0gZnJvbSBcIi4uL3BhZ2VzL2xvZ2luXCJcbmltcG9ydCB7IGhhbmRsZUhvbWVQYWdlIH0gZnJvbSBcIi4uL3BhZ2VzL2hvbWVcIlxuaW1wb3J0IHsgaGFuZGxlUHJvZmlsZVBhZ2UgfSBmcm9tIFwiLi4vcGFnZXMvcHJvZmlsZVwiXG5cbmludGVyZmFjZSBoYW5kbGVGdW5jdGlvbkkge1xuICAgIGxheW91dENyZWF0ZTogKG1haW5XcmFwcGVyPzogSFRNTERpdkVsZW1lbnQpID0+IHN0cmluZztcbiAgICBoYW5kbGVGdW5jOiAobWFpbldyYXBwZXI/OiBIVE1MRGl2RWxlbWVudCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUmVjb3JkPHN0cmluZywgaGFuZGxlRnVuY3Rpb25JPiA9IHtcbiAgICBcIi9cIjogeyBsYXlvdXRDcmVhdGU6IGhvbWVQYWdlLCBoYW5kbGVGdW5jOiBoYW5kbGVIb21lUGFnZSB9LFxuICAgIFwiL3BsYXlcIjogeyBsYXlvdXRDcmVhdGU6IHBsYXlQYWdlLCBoYW5kbGVGdW5jOiBoYW5kbGVQbGF5UGFnZSB9LFxuICAgIFwiL2dhbWVcIjogeyBsYXlvdXRDcmVhdGU6IGdhbWVQYWdlLCBoYW5kbGVGdW5jOiBoYW5kbGVHYW1lIH0sXG4gICAgXCIvcHJvZmlsZVwiOiB7IGxheW91dENyZWF0ZTogcHJvZmlsZVBhZ2UsIGhhbmRsZUZ1bmM6IGhhbmRsZVByb2ZpbGVQYWdlIH0sXG4gICAgXCIvcmVnaXN0cmF0aW9uXCI6IHsgbGF5b3V0Q3JlYXRlOiByZWdpc3RyYXRpb25QYWdlLCBoYW5kbGVGdW5jOiBoYW5kbGVSZWdpc3RyYXRpb24gfSxcbiAgICBcIi9sb2dpblwiOiB7IGxheW91dENyZWF0ZTogbG9naW5QYWdlLCBoYW5kbGVGdW5jOiBoYW5kbGVMb2dpbiB9LFxufTsiLCJpbXBvcnQgeyBtYWluV3JhcHBlciB9IGZyb20gJy4uL2VsZW1lbnRzJztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gXCIuLi9yb3V0aW5nL2luZGV4XCJcbmltcG9ydCB7IGVycm9yUGFnZSB9IGZyb20gXCIuLi9MYXlvdXQvaW5kZXhcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBydW5TUEEocGF0aD86IHN0cmluZykge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1haW5XcmFwcGVyKTtcblxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSBpbiByb3V0ZXMpIHtcbiAgICAgICAgbWFpbldyYXBwZXIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgIC8vIG1haW5XcmFwcGVyLmNsYXNzTmFtZSA9IFwiZmxleCBmbGV4LWNvbCBoLWZ1bGwgdy1mdWxsXCI7XG4gICAgICAgIG1haW5XcmFwcGVyLmNsYXNzTmFtZSA9IFwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBoLWZ1bGwgdy1mdWxsXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgbWFpbldyYXBwZXIuaW5uZXJIVE1MID0gcm91dGVzW2xvY2F0aW9uLnBhdGhuYW1lXS5sYXlvdXRDcmVhdGUobWFpbldyYXBwZXIpO1xuICAgICAgICByb3V0ZXNbbG9jYXRpb24ucGF0aG5hbWVdLmhhbmRsZUZ1bmMobWFpbldyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1haW5XcmFwcGVyLmlubmVySFRNTCA9IGVycm9yUGFnZSgpO1xuICAgIH1cbn1cblxuXG4vLyBGb3J3YXJkLUJhY2sgYXJyb3dzIHdvcmtpbmcgcHJvcGVybHlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgKCkgPT4ge1xuICAgIHJ1blNQQShsb2NhdGlvbi5wYXRobmFtZSk7XG59KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=