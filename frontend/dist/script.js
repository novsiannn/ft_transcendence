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
                <input type="email" placeholder="your email" class="w-full mb-3 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400" id="loginInput">
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
    // document.body.classList.add(
    //     "h-screen", "flex", "flex-col",
    //     "bg-gradient-to-t", "from-black", "via-black", "to-gray-800",
    //     "overflow-hidden"
    // );
    document.body.classList.add("bg-gradient-to-t", "from-black", "via-black", "to-gray-800", "h-full");
    mainWrapper.className = "h-screen w-full flex items-center";
    //mx-auto p-6 mt-64 v container dobavit
    let res = `
        ${(0, elements_1.navigation)()}

            <div class="flex items-center justify-center w-full h-full  rounded-2xl text-center">
                <div class="grid grid-cols-8 grid-rows-4 w-2/3 h-2/3  mt-28 bg-white rounded-3xl">
                    <div class="my-5 col-start-4 col-span-2">
                            <img src="img/goat.jpg" alt="Profile Photo" 
                         class="mx-auto w-36 h-36 rounded-full border-4 border-white">
                    </div>

                    <div class="flex justify-center items-center col-start-4 col-span-2 ">
                        <h2 class="text-4xl font-bold text-gray-800">Username</h2>
                    </div>

                    <div class=" flex justify-center items-center col-start-2 col-span-6   flex justify-between text-gray-600 text-lg">
                        <div class="w-1/3 ">
                            <p class="text-2xl">0</p>
                            <p class="text-sm">Level</p>
                        </div>
                        <div class="w-1/3 ">
                            <p class="text-2xl ">0</p>
                            <p class="text-sm">Friends</p>
                        </div>
                        <div class="w-1/3 ">
                            <p class="text-2xl">0</p>
                            <p class="text-sm">Matches played</p>
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
				<div class="w-full h-full flex flex-col flex-1 items-center justify-center min-h-screen font-mono my-5">
  					<div class="px-6 py-3 text-black bg-white rounded-lg text-xl w-4/5 h-4/5 text-center">
						<h1 class="font-bold text-3xl">Your Profile</h1>
						<div class="grid grid-cols-10 grid-rows-5 gap-4 w-5/5 h-4/5 my-5 py-2 px-2 text-gray-500">
    						<div class=" col-start-5 col-span-2 row-start-1 row-span-2" id="profileImgContainer">
								<img class="w-full h-full rounded-full" src="https://sun9-70.userapi.com/s/v1/if1/0dnizdWPQ3cONuoV4XvoRgGaRgww_soAiuiKggxtK0osPEztZJ1whUCW7aRW2dtqjpipv5OX.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x481,540x541,640x641,720x721,750x751&from=bu&u=31RWzUJ62kF-wUgdT29B-pOeb1nh3a-qir5gcRCZFf4&cs=750x751" alt="Joe Biden">
							</div>
							<div class=" col-start-2 col-span-4 row-start-3">
								<p >Your first name</p>
								<input placeholder="first name" class="border-2 border-blue-700 max-w-xs p-1 m-1" id="inputUserInfo"> </input>
							</div>
							<div class="col-start-6 col-span-4" >
								<p >Your last name</p>
								<input placeholder="last name" class="border-2 border-blue-700 max-w-xs p-1 m-1" id="inputUserInfo"> </input>
							</div>
							<div class=" col-start-2 col-span-4">
								<p >Your username</p>
								<input placeholder="user name" class="border-2 border-blue-700 max-w-xs p-1 m-1" id="inputUserInfo"> </input>
							</div>
							<div class=" col-start-6 col-span-4">
								<p >Your email</p>
								<input placeholder="email" class="border-2 border-blue-700 max-w-xs p-1 m-1" id="inputUserInfo"> </input>
							</div>
							<div class="grid col-start-2 col-span-4 place-items-center max-w-s ">
								<p >Your phone number</p>
								<input placeholder="phone number" class="border-2 border-blue-700 max-w-xs p-1 m-1" id="inputUserInfo"> </input>
							</div>
							<div class="col-start-6 col-span-4 max-w-s">
								<p >Upload Profile Image</p>
								<input type="file" accept="image/*" class=" border-2 border-blue-700 max-w-xs p-1 m-1" id="uploadImgBtn"/>
							</div>
							<div class=" col-start-5 col-span-2"><button class="w-full h-full text-white focus:outline-none bg-blue-300" id="saveChangesSettings"> SAVE CHANGES </button></div>
						</div>
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
       			<button class=" h-5 focus:outline-none transition delay-100 hover:text-green-500" id="naviBtn"> Home </button>
        		<button class=" h-5 focus:outline-none transition delay-100 hover:text-green-500" id="naviBtn"> Game </button>
        		<button class=" h-5 focus:outline-none transition delay-100 hover:text-green-500" id="naviBtn"> Registration </button>
        		<button class=" h-5 focus:outline-none transition delay-100 hover:text-green-500" id="naviBtn"> Login </button>
    		</div>


			<div class="relative">
        		<img id="profileIcon" src="https://img.icons8.com/fluency/48/test-account--v1.png" alt="Profile" class="w-12 h-12 rounded-full cursor-pointer">


        		<div id="dropdownMenu" class="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg p-2 hidden">
            		<a class="block px-4 py-2 hover:bg-gray-200 focus:outline-none">Profile</a>
					<a class="block px-4 py-2 hover:bg-gray-200 focus:outline-none">Game</a>
					<a class="block px-4 py-2 hover:bg-gray-200 focus:outline-none">Leaderboard</a>
            		<a class="block px-4 py-2 hover:bg-gray-200 focus:outline-none">Settings</a>
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
// import { postDatas } from "../../services/api";
const shared_1 = __webpack_require__(/*! ../../shared */ "./src/shared/index.ts");
const routing_1 = __webpack_require__(/*! ../../routing */ "./src/routing/index.ts");
const api_1 = __webpack_require__(/*! ../../services/api */ "./src/services/api/index.ts");
// Post datas !!! Delete userAPI if u are using fetch request
function handleLogin() {
    const loginEmailInput = document.getElementById("loginInput");
    const loginPassInput = document.getElementById("loginPass");
    ;
    const loginBtn = document.getElementById("loginBtn");
    const forgotPassword = document.getElementById("questionPassForgot"); // later implement
    const LoginBtns = [loginEmailInput, loginPassInput];
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        try {
            LoginBtns.forEach((input) => {
                const key = input.type.toLowerCase();
                if (!input.value) {
                    throw new Error("One of your inputs is empty!");
                }
                shared_1.userDataLogin[key] = input.value;
            });
            api_1.userAPI.postDatas(shared_1.userDataLogin);
            (0, routing_1.routeToHome)();
        }
        catch (error) {
            alert(error);
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
const shared_1 = __webpack_require__(/*! ../../shared */ "./src/shared/index.ts");
const api_1 = __webpack_require__(/*! ../../services/api */ "./src/services/api/index.ts");
function handleRegistration() {
    const userNameInput = document.querySelector("#usernameRegistration");
    const emailInput = document.querySelector("#emailRegistration");
    const passwordInput = document.querySelector("#passwordRegistration");
    const btnRegistr = document.querySelector("#submitRegistration");
    const signInBtn = document.querySelector('#questionAlreadyRegistr');
    const inputsUsers = [userNameInput, emailInput, passwordInput];
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
                shared_1.userDataRegistration[key] = input.value;
            });
            api_1.userAPI.postDatas(shared_1.userDataRegistration);
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
const api_1 = __webpack_require__(/*! ../../services/api */ "./src/services/api/index.ts");
function handleSettings() {
    (0, nagivation_1.navigationHandle)();
    const inputs = document.querySelectorAll("#inputUserInfo");
    const btnSave = document.querySelector("#saveChangesSettings");
    const profileImgContainer = document.querySelector("#profileImgContainer");
    const uploadImgBtn = document.querySelector("#uploadImgBtn");
    const data = {};
    // uploadImgBtn!.addEventListener('change', async (event) => {
    // 	const input = event.target as HTMLInputElement;
    // 	if(input.files!.length > 0){
    // 		const imgFile = input.files![0];
    // 		const isImageType = imgFile!.type.startsWith("image");
    // 	}
    // })
    btnSave.addEventListener('click', () => {
        try {
            inputs.forEach((input) => {
                if (!input.value)
                    throw new Error("empty area!");
                data[input.placeholder.split(" ").join("")] = input.value;
            });
            api_1.userAPI.postDatas(data);
        }
        catch (error) {
            alert(error);
        }
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

/***/ "./src/services/api/index.ts":
/*!***********************************!*\
  !*** ./src/services/api/index.ts ***!
  \***********************************/
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
__exportStar(__webpack_require__(/*! ./posts */ "./src/services/api/posts.ts"), exports);


/***/ }),

/***/ "./src/services/api/posts.ts":
/*!***********************************!*\
  !*** ./src/services/api/posts.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userAPI = void 0;
// FETCH REQUEST - - - - - - - - - - - - 
exports.userAPI = {
    postDatas: (data) => {
        //	change in future url (when database will be ready to use) 
        let url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then((result) => console.log("Data successfully delivered:", result))
            .catch((error) => console.log("Error posting data: " + error));
    },
    getDatas: () => {
        //	change in future url (when database will be ready to use) 
        let url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log('Error fetching data: ' + error));
    }
};
// AXIOS REQUEST - - - - - - - - - - - - 
// console.log("axios works properly");
// const instance = axios.create({
// 	baseURL: "https://jsonplaceholder.typicode.com/posts",
// });
// export const userAPI = {
// 	getDatas: () => {
// 		//	change in future url (when database will be ready to use) 
// 		return instance.get("")
// 			.then(response => console.log(response.data))
// 	},
// 	postDatas: (data: Object) => {
// 		//	change in future url (when database will be ready to use) 
// 		instance.post("", data)
// 			.then(response => console.log(response))
// 			.then((result) => console.log("Data successfully delivered: with axios", result))
// 			.catch((error) => console.log("Error posting data: " + error));
// 	},
// }


/***/ }),

/***/ "./src/shared/data.ts":
/*!****************************!*\
  !*** ./src/shared/data.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userDataLogin = exports.userDataRegistration = void 0;
exports.userDataRegistration = {
    text: null,
    email: null,
    password: null
};
exports.userDataLogin = {
    email: null,
    password: null
};


/***/ }),

/***/ "./src/shared/index.ts":
/*!*****************************!*\
  !*** ./src/shared/index.ts ***!
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
__exportStar(__webpack_require__(/*! ./types */ "./src/shared/types.ts"), exports);
__exportStar(__webpack_require__(/*! ./interfaces */ "./src/shared/interfaces.ts"), exports);
__exportStar(__webpack_require__(/*! ./data */ "./src/shared/data.ts"), exports);


/***/ }),

/***/ "./src/shared/interfaces.ts":
/*!**********************************!*\
  !*** ./src/shared/interfaces.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/shared/types.ts":
/*!*****************************!*\
  !*** ./src/shared/types.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


// don't need now
Object.defineProperty(exports, "__esModule", ({ value: true }));


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
        document.body.className = "font-mono";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ3JDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7VUN6Qkg7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0xheW91dC9lcnJvclBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvTGF5b3V0L2dhbWVQYWdlLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0xheW91dC9ob21lUGFnZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9MYXlvdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvTGF5b3V0L2xvZ2luUGFnZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9MYXlvdXQvcGxheVBhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvTGF5b3V0L3Byb2ZpbGVQYWdlLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0xheW91dC9yZWdpc3RyYXRpb25QYWdlLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0xheW91dC9zZXR0aW5nc1BhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvZWxlbWVudHMvY3JlYXRlQnV0dG9uLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2VsZW1lbnRzL2NyZWF0ZU5hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvZWxlbWVudHMvY3JlYXRlV3JhcHBlci50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9lbGVtZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9uYWdpdmF0aW9uL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL25hZ2l2YXRpb24vbmF2aWdhdGlvbi50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9uYWdpdmF0aW9uL25hdmlnYXRpb25Sb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvZXJyb3JQYWdlL2Vycm9yUGFnZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9lcnJvclBhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvZ2FtZS9nYW1lLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2dhbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvaG9tZS9ob21lLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2hvbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvbG9naW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvbG9naW4vbG9naW5QYWdlLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL3BsYXlQYWdlL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL3BsYXlQYWdlL3BsYXlQYWdlLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL3Byb2ZpbGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL3JlZ2lzdHJhdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL3NldHRpbmdzUGFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9zZXR0aW5nc1BhZ2Uvc2V0dGluZ3NQYWdlLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3JvdXRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGluZy9uYXZpZ2F0aW9uLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3JvdXRpbmcvcm91dGVUb1NvbWVQYWdlLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3JvdXRpbmcvcm91dGVzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NlcnZpY2VzL2FwaS9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zZXJ2aWNlcy9hcGkvcG9zdHMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2hhcmVkL2RhdGEudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2hhcmVkL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NoYXJlZC90eXBlcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zcGFBcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5hdmlnYXRpb24gfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yUGFnZSgpIHtcblx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYmctZ3JhZGllbnQtdG8tdFwiLCBcImZyb20tYmxhY2tcIiwgXCJ2aWEtYmxhY2tcIiwgXCJ0by1ncmF5LTgwMFwiKTtcblx0cmV0dXJuIGBcblx0XHRcdCR7bmF2aWdhdGlvbigpfVxuXHRcdFx0PGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlblwiPlxuXHRcdFx0XHQ8aDEgY2xhc3M9XCJ0ZXh0LTl4bCB0ZXh0LXdoaXRlIGZvbnQtYmxhY2tcIj4gRXJyb3IgNDA0IDwvaDE+XG5cdFx0XHRcdDxoMSBjbGFzcz1cInRleHQtN3hsIHB5LTMgdGV4dC13aGl0ZVwiIGZvbnQtbWVkaXVtPiBUaGlzIHBhZ2Ugd2FzIG5vdCBmb3VuZCA8L2gxPlxuXHRcdFx0PC9kaXY+YFxufSIsImltcG9ydCB7IG5hdmlnYXRpb24gfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVQYWdlKCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gXCIwXCI7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYmctZ3JhZGllbnQtdG8tdFwiLCBcImZyb20tYmxhY2tcIiwgXCJ2aWEtYmxhY2tcIiwgXCJ0by1ncmF5LTgwMFwiKTtcbiAgICByZXR1cm4gYFxuICAgICAgICAke25hdmlnYXRpb24oKX1cbiAgICAgICAgPGNhbnZhcyBpZD1cImdhbWUtYm9hcmRcIiB3aWR0aD1cIjgwMFwiIGhlaWdodD1cIjUwMFwiIGNsYXNzPVwiYmctZ3JheS01MDAgYm9yZGVyXCI+PC9jYW52YXM+XG4gICAgICAgIDxwIGlkPVwic2NvcmUtaW5mb1wiIGNsYXNzPVwidGV4dC00eGwgdGV4dC13aGl0ZVwiIGNsYXNzPVwiYmctZ3JheS01MDBcIiA+IFNjb3JlIDwvcD5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInJlc3RhcnQtYnRuXCIgY2xhc3M9XCJweC0zIHB5LTEgYm9yZGVyLTIgYm9yZGVyLWNyaW1zb24gcm91bmRlZC1bMTBweF0gYmctZ3JheS01MDAgdGV4dC13aGl0ZSB0ZXh0LVsyNXB4XVwiPiBSZXN0YXJ0IDwvYnV0dG9uPmA7XG59IiwiaW1wb3J0IHsgbmF2aWdhdGlvbiB9IGZyb20gXCIuLi9lbGVtZW50c1wiXG4vLyBpbXBvcnQgIG15SW1nICBmcm9tIFwiLi4vaW1nL3BpbmctcG9uZy5wbmdcIlxuXG5leHBvcnQgZnVuY3Rpb24gaG9tZVBhZ2UobWFpbldyYXBwZXI6IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkKSB7XG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImgtc2NyZWVuXCIsIFwiZmxleFwiLCBcImZsZXgtY29sXCIsIFwiYmctZ3JhZGllbnQtdG8tdFwiLCBcImZyb20tYmxhY2tcIiwgXCJ2aWEtYmxhY2tcIiwgXCJ0by1ncmF5LTgwMFwiLCBcIm92ZXJmbG93LWhpZGRlblwiKTtcblx0Ly8gJHtuYXZpZ2F0aW9uKCl9XG5cdGxldCByZXMgPSBgXG4gICAgICAgIFx0JHtuYXZpZ2F0aW9uKCl9XG4gICAgICAgIFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIHAtNiBtdC0yNFwiPlxuICAgICAgICBcdCAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLXdoaXRlIHAtOCByb3VuZGVkLTJ4bCBzaGFkb3ctbGdcIj5cbiAgICAgICAgXHQgICAgICAgIDxkaXYgY2xhc3M9XCJtZDp3LTEvMiBwLTZcIj5cbiAgICAgICAgXHQgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LTR4bCBmb250LWJvbGQgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNTAwIHZpYS1wdXJwbGUtNTAwIHRvLXBpbmstNTAwIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0XCI+RlRfVFJBTlNDRU5ERU5TQ0U8L2gxPlxuICAgICAgICBcdCAgICAgICAgICAgIDxwIGNsYXNzPVwibXQtNCB0ZXh0LWdyYXktNjAwIHRleHQtbGdcIj5cbiAgICAgICAgXHQgICAgICAgICAgICAgICAgVHJhbnNjZW5kZW5jZSBpcyBhIDQyIHNjaG9vbCBwcm9qZWN0LCB0byBsZWFybiBhYm91dCB3ZWIgZGV2ZWxvcHBlbWVudCBhbmQgU1BBLjxicj5cblx0XHRcdFx0XHRcdFx0VGhlIGdvYWwgaXMgdG8gY3JlYXRlIGEgd2ViIGFwcCB0byBwbGF5IFBvbmcsIGFuZCBzb2NpYWxpemUgd2l0aCBvdGhlciB1c2Vycy48YnI+PGJyPlxuICAgICAgICBcdCAgICAgICAgICAgIDwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzXCJtdC00IHRleHQtZ3JheS05MDAgdGV4dC1sZ1wiPkRldmVsb3BlZCBieSBub3ZzaWFubiBhbmQga2lsY2hlbmsgPC9wPlxuICAgICAgICBcdCAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgXHQgICAgICAgIDxkaXYgY2xhc3M9XCJtZDp3LTEvMiBmbGV4IGp1c3RpZnktY2VudGVyIHAtNlwiPlxuICAgICAgICBcdCAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1nL3BpbmctcG9uZy5wbmdcIiBhbHQ9XCJSb2NrZXQgZm9yIHBpbmcgcG9uZ1wiIGNsYXNzPVwidy0xMjggaC0xMjggb2JqZWN0LWNvdmVyIHJvdW5kZWQteGwgc2hhZG93LW1kXCI+XG4gICAgICAgIFx0ICAgICAgICA8L2Rpdj5cbiAgICAgICAgXHQgICAgPC9kaXY+XG4gICAgICAgIFx0PC9kaXY+YDtcblx0cmV0dXJuIHJlcztcbn0iLCJleHBvcnQgKiBmcm9tIFwiLi9sb2dpblBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmVnaXN0cmF0aW9uUGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9lcnJvclBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vZ2FtZVBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGxheVBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaG9tZVBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vcHJvZmlsZVBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2V0dGluZ3NQYWdlXCIiLCJleHBvcnQgZnVuY3Rpb24gbG9naW5QYWdlKCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImgtc2NyZWVuXCIsIFwiZmxleFwiLCBcIml0ZW1zLWNlbnRlclwiLCBcImp1c3RpZnktY2VudGVyXCIsIFwiYmctZ3JhZGllbnQtdG8tdFwiLCBcImZyb20tYmxhY2tcIiwgXCJ2aWEtYmxhY2tcIiwgXCJ0by1ncmF5LTgwMFwiKTtcbiAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1heC13LXNtIG14LWF1dG8gbXQtMTAgcC02IGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDAgdGV4dC1jZW50ZXIgbWItNFwiPkxvZ2luPC9oMj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJ5b3VyIGVtYWlsXCIgY2xhc3M9XCJ3LWZ1bGwgbWItMyBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS00MDBcIiBpZD1cImxvZ2luSW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJ5b3VyIHBhc3N3b3JkXCIgY2xhc3M9XCJ3LWZ1bGwgbWItNCBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS00MDBcIiBpZD1cImxvZ2luUGFzc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ3LWZ1bGwgYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcHktMiByb3VuZGVkIGhvdmVyOmJnLWdyZWVuLTYwMFwiIGlkPVwibG9naW5CdG5cIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtM1wiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LWJsdWUtNTAwIGhvdmVyOnVuZGVybGluZVwiIGlkPVwicXVlc3Rpb25QYXNzRm9yZ290XCI+Rm9yZ290IFBhc3N3b3JkPzwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxufSIsImltcG9ydCB7IG5hdmlnYXRpb24gfSBmcm9tIFwiLi4vZWxlbWVudHNcIlxuXG5leHBvcnQgZnVuY3Rpb24gcGxheVBhZ2UobWFpbldyYXBwZXI6IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgbGV0IHJlcyA9IGBcbiAgICAgICAgICAgICAgICAke25hdmlnYXRpb24oKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjayB2aWEtYmxhY2sgdG8tZ3JheS04MDAgc3BhY2UteS04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJweC02IHB5LTMgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCByb3VuZGVkLWxnIHRleHQteGwgaG92ZXI6YmctYmx1ZS03MDAgZm9jdXM6b3V0bGluZS1ub25lXCIgaWQ9XCJidG4tcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU1RBUlRcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICByZXR1cm4gcmVzO1xufSIsImltcG9ydCB7IG5hdmlnYXRpb24gfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2ZpbGVQYWdlKG1haW5XcmFwcGVyOiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZCkge1xuICAgIC8vIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcbiAgICAvLyAgICAgXCJoLXNjcmVlblwiLCBcImZsZXhcIiwgXCJmbGV4LWNvbFwiLFxuICAgIC8vICAgICBcImJnLWdyYWRpZW50LXRvLXRcIiwgXCJmcm9tLWJsYWNrXCIsIFwidmlhLWJsYWNrXCIsIFwidG8tZ3JheS04MDBcIixcbiAgICAvLyAgICAgXCJvdmVyZmxvdy1oaWRkZW5cIlxuICAgIC8vICk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYmctZ3JhZGllbnQtdG8tdFwiLCBcImZyb20tYmxhY2tcIiwgXCJ2aWEtYmxhY2tcIiwgXCJ0by1ncmF5LTgwMFwiLCBcImgtZnVsbFwiKTtcbiAgICBtYWluV3JhcHBlciEuY2xhc3NOYW1lID0gXCJoLXNjcmVlbiB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXJcIjtcblxuICAgIC8vbXgtYXV0byBwLTYgbXQtNjQgdiBjb250YWluZXIgZG9iYXZpdFxuICAgIGxldCByZXMgPSBgXG4gICAgICAgICR7bmF2aWdhdGlvbigpfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbCAgcm91bmRlZC0yeGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtOCBncmlkLXJvd3MtNCB3LTIvMyBoLTIvMyAgbXQtMjggYmctd2hpdGUgcm91bmRlZC0zeGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm15LTUgY29sLXN0YXJ0LTQgY29sLXNwYW4tMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2dvYXQuanBnXCIgYWx0PVwiUHJvZmlsZSBQaG90b1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXgtYXV0byB3LTM2IGgtMzYgcm91bmRlZC1mdWxsIGJvcmRlci00IGJvcmRlci13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY29sLXN0YXJ0LTQgY29sLXNwYW4tMiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXCI+VXNlcm5hbWU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGNvbC1zdGFydC0yIGNvbC1zcGFuLTYgICBmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LWdyYXktNjAwIHRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvMyBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtMnhsXCI+MDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc21cIj5MZXZlbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS8zIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC0yeGwgXCI+MDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc21cIj5GcmllbmRzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzMgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LTJ4bFwiPjA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtXCI+TWF0Y2hlcyBwbGF5ZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgYDtcblxuICAgIHJldHVybiByZXM7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcmVnaXN0cmF0aW9uUGFnZSgpIHtcbiAgICAvLyBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJoLXNjcmVlblwiLCBcImZsZXhcIiwgXCJpdGVtcy1jZW50ZXJcIiwgXCJqdXN0aWZ5LWNlbnRlclwiLCBcImJnLWdyYWRpZW50LXRvLXRcIiwgXCJmcm9tLWJsYWNrXCIsIFwidmlhLWJsYWNrXCIsIFwidG8tZ3JheS04MDBcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBcImgtc2NyZWVuXCIsIFwiZmxleFwiLCBcImZsZXgtY29sXCIsXG4gICAgICAgIFwiYmctZ3JhZGllbnQtdG8tdFwiLCBcImZyb20tYmxhY2tcIiwgXCJ2aWEtYmxhY2tcIiwgXCJ0by1ncmF5LTgwMFwiLFxuICAgICAgICBcIm92ZXJmbG93LWhpZGRlblwiXG4gICAgKTtcblxuICAgIHJldHVybiBgXG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMTAgdy01LzUgaC0zLzUgZmxleCBzaGFkb3ctbGcgcm91bmRlZC1sZyBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTMvNSBwLTEwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgYmctZ3JhZGllbnQtdG8tciBmcm9tLXB1cnBsZS05MDAgdG8tYmx1ZS05MDAgdGV4dC13aGl0ZSByb3VuZGVkLWwtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC00eGwgZm9udC1ib2xkXCI+VHJhbnNjZW5kZW5jZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibXQtNCB0ZXh0LWxnXCI+Sm9pbiB1cyB0b2RheSBhbmQgc3RhcnQgeW91ciBqb3VybmV5IHdpdGggb3VyIGFtYXppbmcgcGxhdGZvcm0uPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTIvNSBwLTEwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcm91bmRlZC1yLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi00XCI+UmVnaXN0cmF0aW9uPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJyZWdpc3RlckZvcm1cIiBjbGFzcz1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidXNlcm5hbWVSZWdpc3RyYXRpb25cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiBjbGFzcz1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsUmVnaXN0cmF0aW9uXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCIgY2xhc3M9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFJlZ2lzdHJhdGlvblwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiIGNsYXNzPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwic3VibWl0UmVnaXN0cmF0aW9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUmVnaXN0ZXJcIiBjbGFzcz1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkIGhvdmVyOmJnLWJsdWUtNjAwIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC00XCI+QWxyZWFkeSByZWdpc3RlcmVkPyA8YSBjbGFzcz1cInRleHQtYmx1ZS01MDBcIiBpZD1cInF1ZXN0aW9uQWxyZWFkeVJlZ2lzdHJcIj5TaWduIEluPC9hPjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJpbXBvcnQgeyBuYXZpZ2F0aW9uIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHRpbmdzUGFnZShtYWluV3JhcHBlcjogSFRNTERpdkVsZW1lbnQgfCB1bmRlZmluZWQpIHtcblx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYmctZ3JhZGllbnQtdG8tdFwiLCBcImZyb20tYmxhY2tcIiwgXCJ2aWEtYmxhY2tcIiwgXCJ0by1ncmF5LTgwMFwiLCBcImgtZnVsbFwiKTtcblx0bWFpbldyYXBwZXIhLmNsYXNzTmFtZSA9IFwibXgtYXV0byBoLXNjcmVlbiB3LWZ1bGxcIjtcblx0bGV0IHJlcyA9IGBcblx0XHRcdFx0JHtuYXZpZ2F0aW9uKCl9XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LWZ1bGwgaC1mdWxsIGZsZXggZmxleC1jb2wgZmxleC0xIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gZm9udC1tb25vIG15LTVcIj5cbiAgXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJweC02IHB5LTMgdGV4dC1ibGFjayBiZy13aGl0ZSByb3VuZGVkLWxnIHRleHQteGwgdy00LzUgaC00LzUgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LTN4bFwiPllvdXIgUHJvZmlsZTwvaDE+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtMTAgZ3JpZC1yb3dzLTUgZ2FwLTQgdy01LzUgaC00LzUgbXktNSBweS0yIHB4LTIgdGV4dC1ncmF5LTUwMFwiPlxuICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCIgY29sLXN0YXJ0LTUgY29sLXNwYW4tMiByb3ctc3RhcnQtMSByb3ctc3Bhbi0yXCIgaWQ9XCJwcm9maWxlSW1nQ29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzcz1cInctZnVsbCBoLWZ1bGwgcm91bmRlZC1mdWxsXCIgc3JjPVwiaHR0cHM6Ly9zdW45LTcwLnVzZXJhcGkuY29tL3MvdjEvaWYxLzBkbml6ZFdQUTNjT051b1Y0WHZvUmdHYVJnd3dfc29BaXVpS2dneHRLMG9zUEV6dFpKMXdoVUNXN2FSVzJkdHFqcGlwdjVPWC5qcGc/cXVhbGl0eT05NiZhcz0zMngzMiw0OHg0OCw3Mng3MiwxMDh4MTA4LDE2MHgxNjAsMjQweDI0MCwzNjB4MzYwLDQ4MHg0ODEsNTQweDU0MSw2NDB4NjQxLDcyMHg3MjEsNzUweDc1MSZmcm9tPWJ1JnU9MzFSV3pVSjYya0Ytd1VnZFQyOUItcE9lYjFuaDNhLXFpcjVnY1JDWkZmNCZjcz03NTB4NzUxXCIgYWx0PVwiSm9lIEJpZGVuXCI+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiIGNvbC1zdGFydC0yIGNvbC1zcGFuLTQgcm93LXN0YXJ0LTNcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCA+WW91ciBmaXJzdCBuYW1lPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cImZpcnN0IG5hbWVcIiBjbGFzcz1cImJvcmRlci0yIGJvcmRlci1ibHVlLTcwMCBtYXgtdy14cyBwLTEgbS0xXCIgaWQ9XCJpbnB1dFVzZXJJbmZvXCI+IDwvaW5wdXQ+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXN0YXJ0LTYgY29sLXNwYW4tNFwiID5cblx0XHRcdFx0XHRcdFx0XHQ8cCA+WW91ciBsYXN0IG5hbWU8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwibGFzdCBuYW1lXCIgY2xhc3M9XCJib3JkZXItMiBib3JkZXItYmx1ZS03MDAgbWF4LXcteHMgcC0xIG0tMVwiIGlkPVwiaW5wdXRVc2VySW5mb1wiPiA8L2lucHV0PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIiBjb2wtc3RhcnQtMiBjb2wtc3Bhbi00XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgPllvdXIgdXNlcm5hbWU8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwidXNlciBuYW1lXCIgY2xhc3M9XCJib3JkZXItMiBib3JkZXItYmx1ZS03MDAgbWF4LXcteHMgcC0xIG0tMVwiIGlkPVwiaW5wdXRVc2VySW5mb1wiPiA8L2lucHV0PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIiBjb2wtc3RhcnQtNiBjb2wtc3Bhbi00XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgPllvdXIgZW1haWw8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwiZW1haWxcIiBjbGFzcz1cImJvcmRlci0yIGJvcmRlci1ibHVlLTcwMCBtYXgtdy14cyBwLTEgbS0xXCIgaWQ9XCJpbnB1dFVzZXJJbmZvXCI+IDwvaW5wdXQ+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3JpZCBjb2wtc3RhcnQtMiBjb2wtc3Bhbi00IHBsYWNlLWl0ZW1zLWNlbnRlciBtYXgtdy1zIFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwID5Zb3VyIHBob25lIG51bWJlcjwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCJwaG9uZSBudW1iZXJcIiBjbGFzcz1cImJvcmRlci0yIGJvcmRlci1ibHVlLTcwMCBtYXgtdy14cyBwLTEgbS0xXCIgaWQ9XCJpbnB1dFVzZXJJbmZvXCI+IDwvaW5wdXQ+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXN0YXJ0LTYgY29sLXNwYW4tNCBtYXgtdy1zXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgPlVwbG9hZCBQcm9maWxlIEltYWdlPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBjbGFzcz1cIiBib3JkZXItMiBib3JkZXItYmx1ZS03MDAgbWF4LXcteHMgcC0xIG0tMVwiIGlkPVwidXBsb2FkSW1nQnRuXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIiBjb2wtc3RhcnQtNSBjb2wtc3Bhbi0yXCI+PGJ1dHRvbiBjbGFzcz1cInctZnVsbCBoLWZ1bGwgdGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgYmctYmx1ZS0zMDBcIiBpZD1cInNhdmVDaGFuZ2VzU2V0dGluZ3NcIj4gU0FWRSBDSEFOR0VTIDwvYnV0dG9uPjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG4gIFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+YDtcblx0cmV0dXJuIHJlcztcbn0iLCJleHBvcnQgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4iLCJleHBvcnQgZnVuY3Rpb24gbmF2aWdhdGlvbigpIHtcblx0cmV0dXJuIGBcblx0XHQ8bmF2IGNsYXNzPVwidG9wLTAgbGVmdC0wIGJnLWJsYWNrIHRleHQtd2hpdGUgaC0xNiB3LWZ1bGwgZml4ZWQgZmxleCBpdGVtcy1jZW50ZXIgcHgtNlwiPlxuICAgIFx0XHQ8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vcGxhc3RpY2luZS8xMDAvcGluZy1wb25nLS12MS5wbmdcIiBhbHQ9XCJMb2dvXCIgY2xhc3M9XCJoLTEyIHctMTIgb2JqZWN0LWNvdmVyXCIgaWQ9aW1nTG9nb05hdmk+XG5cblxuICAgIFx0XHQ8ZGl2IGNsYXNzPVwiZmxleC0xIGZsZXgganVzdGlmeS1jZW50ZXIgc3BhY2UteC04XCI+XG4gICAgICAgXHRcdFx0PGJ1dHRvbiBjbGFzcz1cIiBoLTUgZm9jdXM6b3V0bGluZS1ub25lIHRyYW5zaXRpb24gZGVsYXktMTAwIGhvdmVyOnRleHQtZ3JlZW4tNTAwXCIgaWQ9XCJuYXZpQnRuXCI+IEhvbWUgPC9idXR0b24+XG4gICAgICAgIFx0XHQ8YnV0dG9uIGNsYXNzPVwiIGgtNSBmb2N1czpvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbiBkZWxheS0xMDAgaG92ZXI6dGV4dC1ncmVlbi01MDBcIiBpZD1cIm5hdmlCdG5cIj4gR2FtZSA8L2J1dHRvbj5cbiAgICAgICAgXHRcdDxidXR0b24gY2xhc3M9XCIgaC01IGZvY3VzOm91dGxpbmUtbm9uZSB0cmFuc2l0aW9uIGRlbGF5LTEwMCBob3Zlcjp0ZXh0LWdyZWVuLTUwMFwiIGlkPVwibmF2aUJ0blwiPiBSZWdpc3RyYXRpb24gPC9idXR0b24+XG4gICAgICAgIFx0XHQ8YnV0dG9uIGNsYXNzPVwiIGgtNSBmb2N1czpvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbiBkZWxheS0xMDAgaG92ZXI6dGV4dC1ncmVlbi01MDBcIiBpZD1cIm5hdmlCdG5cIj4gTG9naW4gPC9idXR0b24+XG4gICAgXHRcdDwvZGl2PlxuXG5cblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhdGl2ZVwiPlxuICAgICAgICBcdFx0PGltZyBpZD1cInByb2ZpbGVJY29uXCIgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9mbHVlbmN5LzQ4L3Rlc3QtYWNjb3VudC0tdjEucG5nXCIgYWx0PVwiUHJvZmlsZVwiIGNsYXNzPVwidy0xMiBoLTEyIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlclwiPlxuXG5cbiAgICAgICAgXHRcdDxkaXYgaWQ9XCJkcm9wZG93bk1lbnVcIiBjbGFzcz1cImFic29sdXRlIHJpZ2h0LTAgbXQtMiB3LTQ4IGJnLXdoaXRlIHRleHQtYmxhY2sgc2hhZG93LWxnIHJvdW5kZWQtbGcgcC0yIGhpZGRlblwiPlxuICAgICAgICAgICAgXHRcdDxhIGNsYXNzPVwiYmxvY2sgcHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMjAwIGZvY3VzOm91dGxpbmUtbm9uZVwiPlByb2ZpbGU8L2E+XG5cdFx0XHRcdFx0PGEgY2xhc3M9XCJibG9jayBweC00IHB5LTIgaG92ZXI6YmctZ3JheS0yMDAgZm9jdXM6b3V0bGluZS1ub25lXCI+R2FtZTwvYT5cblx0XHRcdFx0XHQ8YSBjbGFzcz1cImJsb2NrIHB4LTQgcHktMiBob3ZlcjpiZy1ncmF5LTIwMCBmb2N1czpvdXRsaW5lLW5vbmVcIj5MZWFkZXJib2FyZDwvYT5cbiAgICAgICAgICAgIFx0XHQ8YSBjbGFzcz1cImJsb2NrIHB4LTQgcHktMiBob3ZlcjpiZy1ncmF5LTIwMCBmb2N1czpvdXRsaW5lLW5vbmVcIj5TZXR0aW5nczwvYT5cbiAgICAgICAgICAgIFx0XHQ8YSBjbGFzcz1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LXJlZC02MDAgaG92ZXI6YmctZ3JheS0yMDBcIj5Mb2dvdXQ8L2E+XG4gICAgICAgIFx0XHQ8L2Rpdj5cbiAgICBcdFx0PC9kaXY+XG5cdFx0PC9uYXY+XG5cdFx0YDtcbn0iLCJleHBvcnQgY29uc3QgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsiLCJleHBvcnQgKiBmcm9tICcuL2NyZWF0ZUJ1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL2NyZWF0ZVdyYXBwZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jcmVhdGVOYXZpZ2F0aW9uJzsiLCJpbXBvcnQgcnVuU3BhIGZyb20gJy4vc3BhQXBwL2luZGV4J1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHJ1blNwYShsb2NhdGlvbi5wYXRobmFtZSk7XG59KTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL25hdmlnYXRpb25cIiIsImltcG9ydCB7IG5hdmlnYXRlVG8gfSBmcm9tIFwiLi4vcm91dGluZ1wiO1xuaW1wb3J0IHsgbmF2aVJvdXRlcyB9IGZyb20gXCIuL25hdmlnYXRpb25Sb3V0ZXNcIjtcbmltcG9ydCB7IGRyb3BNZW51Um91dGVzIH0gZnJvbSBcIi4vbmF2aWdhdGlvblJvdXRlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGlvbkhhbmRsZSgpIHtcblx0Y29uc3QgbmF2aUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI25hdmlCdG5cIik7XG5cdGNvbnN0IHByb2ZpbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVJY29uXCIpO1xuXHRjb25zdCBkcm9wZG93bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duTWVudVwiKTtcblx0Y29uc3QgbmF2aURyb3BNZW51QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZHJvcGRvd25NZW51IGFcIik7XG5cdGNvbnN0IGltZ0xvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nTG9nb05hdmknKTtcblxuXHRpbWdMb2dvIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRuYXZpZ2F0ZVRvKCcvJyk7XG5cdH0pXG5cblx0bmF2aUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1x0XHRcdFxuXHRcdFx0aWYgKGJ0bi5pbm5lckhUTUwudHJpbSgpIGluIG5hdmlSb3V0ZXMpIHtcblx0XHRcdFx0bmF2aWdhdGVUbyhuYXZpUm91dGVzW2J0bi5pbm5lckhUTUwudHJpbSgpXSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pXG5cblx0bmF2aURyb3BNZW51QnRucy5mb3JFYWNoKChidG4pID0+IHtcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRpZiAoYnRuLmlubmVySFRNTC50cmltKCkgaW4gZHJvcE1lbnVSb3V0ZXMpIHtcblx0XHRcdFx0bmF2aWdhdGVUbyhkcm9wTWVudVJvdXRlc1tidG4uaW5uZXJIVE1MLnRyaW0oKV0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KVxuXG5cdHByb2ZpbGVCdG4hLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdGRyb3Bkb3duTWVudSEuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcblx0fSk7XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGlmIChlLnRhcmdldCAhPT0gZHJvcGRvd25NZW51ICYmIGUudGFyZ2V0ICE9PSBwcm9maWxlQnRuKVxuXHRcdFx0ZHJvcGRvd25NZW51IS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHR9KVxuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdGlmIChlLmtleUNvZGUgPT0gMjcpXG5cdFx0XHRkcm9wZG93bk1lbnUhLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cdH0pXG5cbn0iLCJleHBvcnQgY29uc3QgbmF2aVJvdXRlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcblx0XCJIb21lXCI6IFwiL1wiLFxuXHRcIkdhbWVcIjogXCIvZ2FtZVwiLFxuXHRcIlJlZ2lzdHJhdGlvblwiOiBcIi9yZWdpc3RyYXRpb25cIixcblx0XCJMb2dpblwiOiBcIi9sb2dpblwiXG59XG5cbmV4cG9ydCBjb25zdCBkcm9wTWVudVJvdXRlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcblx0XCJQcm9maWxlXCI6IFwiL3Byb2ZpbGVcIixcblx0XCJHYW1lXCI6IFwiL2dhbWVcIixcblx0XCJMZWFkZXJib2FyZFwiOiBcIi9sZWFkZXJib2FyZFwiLFxuXHRcIlNldHRpbmdzXCI6IFwiL3NldHRpbmdzXCIsXG5cdFwiTG9nb3V0XCI6IFwiL2xvZ291dFwiXG59ICAiLCJpbXBvcnQgeyBuYXZpZ2F0aW9uSGFuZGxlIH0gZnJvbSBcIi4uLy4uL25hZ2l2YXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUVycm9yUGFnZSgpIHtcblx0bmF2aWdhdGlvbkhhbmRsZSgpO1xufSIsImV4cG9ydCAqIGZyb20gXCIuL2Vycm9yUGFnZVwiIiwiaW1wb3J0IHsgbmF2aWdhdGlvbkhhbmRsZSB9IGZyb20gXCIuLi8uLi9uYWdpdmF0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVHYW1lKG1haW5XcmFwcGVyOiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZCkge1xuXHRuYXZpZ2F0aW9uSGFuZGxlKCk7XG5cdGNvbnN0IHNjb3JlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2NvcmUtaW5mb1wiKTtcblx0Y29uc3QgZ2FtZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWJvYXJkXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuXHRjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXN0YXJ0LWJ0blwiKTtcblx0Ly8gY29uc3QgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcblx0bGV0IGludGVydmFsSUQ6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPjs7XG5cblx0bWFpbldyYXBwZXIhLmlkID0gXCJnYW1lLWNvbnRhaW5lclwiO1xuXHRtYWluV3JhcHBlciEuY2xhc3NMaXN0LmFkZChcImgtc2NyZWVuXCIsIFwiZmxleFwiLCBcImZsZXgtY29sXCIsIFwiZ2FwLTIuNVwiLCBcImp1c3RpZnktY2VudGVyXCIsIFwiaXRlbXMtY2VudGVyXCIpO1xuXHRjb25zdCBjb250ZXh0ID0gZ2FtZUJvYXJkPy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblx0Y29uc3QgZ2FtZUJvYXJkQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShnYW1lQm9hcmQpLmJhY2tncm91bmRDb2xvcjtcblx0Y29uc3QgZmlyc3RQYWRkbGVDb2xvciA9IFwid2hpdGVcIjtcblx0Y29uc3Qgc2Vjb25kUGFkZGxlQ29sb3IgPSBcIndoaXRlXCI7XG5cdGNvbnN0IGJhbGxDb2xvciA9IFwid2hpdGVcIjtcblxuXHRjb25zdCBnYW1lQm9hcmRXaWR0aCA9IGdhbWVCb2FyZC53aWR0aDtcblx0Y29uc3QgZ2FtZUJvYXJkSGVpZ2h0ID0gZ2FtZUJvYXJkLmhlaWdodDtcblxuXHRjb25zdCBtb3ZlRmlyc3RQYWRkbGVLZXkgPSB7XG5cdFx0dXA6IFwid1wiLFxuXHRcdGRvd246IFwic1wiLFxuXHR9XG5cblx0Y29uc3QgbW92ZVNlY29uZFBhZGRsZUtleSA9IHtcblx0XHR1cDogXCJBcnJvd1VwXCIsXG5cdFx0ZG93bjogXCJBcnJvd0Rvd25cIlxuXHR9XG5cblx0Y29uc3QgcGFkZGxlU2l6ZSA9IHtcblx0XHR3aWR0aDogMjUsXG5cdFx0aGVpZ2h0OiAxMjBcblx0fVxuXG5cdGNvbnN0IGJhbGxSYWRpdXMgPSAxMztcblx0Y29uc3QgaW5pdGlhbEJhbGxTcGVlZCA9IDU7XG5cdGxldCBiYWxsU3BlZWQgPSBpbml0aWFsQmFsbFNwZWVkO1xuXHRjb25zdCBwYWRkbGVTcGVlZCA9IDQwO1xuXHRsZXQgZmlyc3RQbGF5ZXJTY29yZSA9IDA7XG5cdGxldCBzZWNvbmRQbGF5ZXJTY29yZSA9IDA7XG5cblx0Y29uc3QgZmlyc3RQYWRkbGVJbml0aWFsID0ge1xuXHRcdHg6IDAsXG5cdFx0eTogMFxuXHR9XG5cblx0Y29uc3Qgc2Vjb25kUGFkZGxlSW5pdGlhbCA9IHtcblx0XHR4OiBnYW1lQm9hcmRXaWR0aCAtIHBhZGRsZVNpemUud2lkdGgsXG5cdFx0eTogZ2FtZUJvYXJkSGVpZ2h0IC0gcGFkZGxlU2l6ZS5oZWlnaHQsXG5cdH1cblxuXHRsZXQgZmlyc3RQYWRkbGUgPSB7IC4uLmZpcnN0UGFkZGxlSW5pdGlhbCB9O1xuXHRsZXQgc2Vjb25kUGFkZGxlID0geyAuLi5zZWNvbmRQYWRkbGVJbml0aWFsIH07XG5cblx0Y29uc3QgYmFsbEluaXRpYWwgPSB7XG5cdFx0eDogZ2FtZUJvYXJkV2lkdGggLyAyLFxuXHRcdHk6IGdhbWVCb2FyZEhlaWdodCAvIDIsXG5cdH1cblxuXHRsZXQgYmFsbCA9IHsgLi4uYmFsbEluaXRpYWwgfTtcblx0Y29uc3QgYmFsbERpcmVjdGlvbiA9IHtcblx0XHR4OiAwLFxuXHRcdHk6IDAsXG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3Qm9hcmQoKSB7XG5cdFx0Y29udGV4dCEuZmlsbFN0eWxlID0gZ2FtZUJvYXJkQ29sb3I7XG5cdFx0Y29udGV4dCEuZmlsbFJlY3QoMCwgMCwgZ2FtZUJvYXJkV2lkdGgsIGdhbWVCb2FyZEhlaWdodCk7XG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3UGFkZGxlKHBhZGRsZVg6IG51bWJlciwgcGFkZGxlWTogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSB7XG5cdFx0Y29udGV4dCEuZmlsbFN0eWxlID0gY29sb3I7XG5cdFx0Y29udGV4dCEuZmlsbFJlY3QocGFkZGxlWCwgcGFkZGxlWSwgcGFkZGxlU2l6ZS53aWR0aCwgcGFkZGxlU2l6ZS5oZWlnaHQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd1BhZGRsZXMoKSB7XG5cdFx0ZHJhd1BhZGRsZShmaXJzdFBhZGRsZS54LCBmaXJzdFBhZGRsZS55LCBmaXJzdFBhZGRsZUNvbG9yKTtcblx0XHRkcmF3UGFkZGxlKHNlY29uZFBhZGRsZS54LCBzZWNvbmRQYWRkbGUueSwgc2Vjb25kUGFkZGxlQ29sb3IpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd0JhbGwoKSB7XG5cdFx0Y29udGV4dCEuYmVnaW5QYXRoKCk7XG5cdFx0Y29udGV4dCEuZmlsbFN0eWxlID0gYmFsbENvbG9yO1xuXHRcdGNvbnRleHQhLmFyYyhiYWxsLngsIGJhbGwueSwgYmFsbFJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuXHRcdGNvbnRleHQhLmZpbGwoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNob29zZUJhbGxEaXJlY3Rpb24oKSB7XG5cdFx0cmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjU7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRCYWxsRGlyZWN0aW9uKCkge1xuXHRcdGlmIChjaG9vc2VCYWxsRGlyZWN0aW9uKCkpIHtcblx0XHRcdGJhbGxEaXJlY3Rpb24ueCA9IDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJhbGxEaXJlY3Rpb24ueCA9IC0xO1xuXHRcdH1cblxuXHRcdGlmIChjaG9vc2VCYWxsRGlyZWN0aW9uKCkpIHtcblx0XHRcdGJhbGxEaXJlY3Rpb24ueSA9IDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJhbGxEaXJlY3Rpb24ueSA9IC0xO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZUJvcmRlckNvbGxpc2lvbigpIHtcblx0XHRjb25zdCB0b3BCYWxsUmFkaXVzID0gYmFsbC55IDw9IGJhbGxSYWRpdXM7XG5cdFx0Y29uc3QgYm90dG9tQmFsbFJhZGl1cyA9IGJhbGwueSA+PSBnYW1lQm9hcmRIZWlnaHQgLSBiYWxsUmFkaXVzO1xuXHRcdGlmICh0b3BCYWxsUmFkaXVzIHx8IGJvdHRvbUJhbGxSYWRpdXMpIHtcblx0XHRcdGJhbGxEaXJlY3Rpb24ueSAqPSAtMTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjaGVja0ZpcnN0UGFkZGxlQ29sbGlzaW9uKCkge1xuXHRcdGNvbnN0IHhDb2xsaXNpb24gPSBiYWxsLnggPD0gZmlyc3RQYWRkbGUueCArIGJhbGxSYWRpdXMgKyBwYWRkbGVTaXplLndpZHRoO1xuXHRcdGNvbnN0IHlDb2xsaXNpb24gPSBiYWxsLnkgPj0gZmlyc3RQYWRkbGUueSAmJiBiYWxsLnkgPD0gZmlyc3RQYWRkbGUueSArIHBhZGRsZVNpemUuaGVpZ2h0O1xuXHRcdHJldHVybiB4Q29sbGlzaW9uICYmIHlDb2xsaXNpb247XG5cdH1cblxuXHRmdW5jdGlvbiBjaGVja1NlY29uZFBhZGRsZUNvbGxpc2lvbigpIHtcblx0XHRjb25zdCB4Q29sbGlzaW9uID0gYmFsbC54ID49IHNlY29uZFBhZGRsZS54IC0gYmFsbFJhZGl1cztcblx0XHRjb25zdCB5Q29sbGlzaW9uID0gYmFsbC55ID49IHNlY29uZFBhZGRsZS55ICYmIGJhbGwueSA8PSBzZWNvbmRQYWRkbGUueSArIHBhZGRsZVNpemUuaGVpZ2h0O1xuXHRcdHJldHVybiB4Q29sbGlzaW9uICYmIHlDb2xsaXNpb247XG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVQYWRkbGVDb2xsaXNpb24oKSB7XG5cdFx0Y29uc3QgZmlyc3RQYWRkbGVDb2xsaXNpb24gPSBjaGVja0ZpcnN0UGFkZGxlQ29sbGlzaW9uKCk7XG5cdFx0Y29uc3Qgc2Vjb25kUGFkZGxlQ29sbGlzaW9uID0gY2hlY2tTZWNvbmRQYWRkbGVDb2xsaXNpb24oKTtcblxuXHRcdGlmIChmaXJzdFBhZGRsZUNvbGxpc2lvbiB8fCBzZWNvbmRQYWRkbGVDb2xsaXNpb24pIHtcblx0XHRcdGJhbGxTcGVlZCAqPSAxLjA3O1xuXHRcdFx0YmFsbERpcmVjdGlvbi54ICo9IC0xO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChmaXJzdFBhZGRsZUNvbGxpc2lvbikge1xuXHRcdFx0YmFsbC54ID0gZmlyc3RQYWRkbGUueCArIHBhZGRsZVNpemUud2lkdGggKyBiYWxsUmFkaXVzO1xuXHRcdH0gZWxzZSBpZiAoc2Vjb25kUGFkZGxlQ29sbGlzaW9uKSB7XG5cdFx0XHRiYWxsLnggPSBzZWNvbmRQYWRkbGUueCAtIGJhbGxSYWRpdXM7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gbW92ZUJhbGwoKSB7XG5cdFx0YmFsbC54ICs9IGJhbGxTcGVlZCAqIGJhbGxEaXJlY3Rpb24ueDtcblx0XHRiYWxsLnkgKz0gYmFsbFNwZWVkICogYmFsbERpcmVjdGlvbi55O1xuXHRcdGhhbmRsZUJvcmRlckNvbGxpc2lvbigpO1xuXHRcdGhhbmRsZVBhZGRsZUNvbGxpc2lvbigpO1xuXHRcdGhhbmRsZUdvYWwoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVNjb3JlKCkge1xuXHRcdHNjb3JlSW5mbyEudGV4dENvbnRlbnQgPSBgJHtmaXJzdFBsYXllclNjb3JlfSA6ICR7c2Vjb25kUGxheWVyU2NvcmV9YFxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlR29hbCgpIHtcblx0XHRjb25zdCBmaXJzdFVzZXJHb2FsID0gYmFsbC54ID4gZ2FtZUJvYXJkV2lkdGg7XG5cdFx0Y29uc3Qgc2Vjb25kVXNlckdvYWwgPSBiYWxsLnggPCAwO1xuXG5cdFx0aWYgKCFmaXJzdFVzZXJHb2FsICYmICFzZWNvbmRVc2VyR29hbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZmlyc3RVc2VyR29hbCkge1xuXHRcdFx0Zmlyc3RQbGF5ZXJTY29yZSsrO1xuXHRcdH1cblx0XHRpZiAoc2Vjb25kVXNlckdvYWwpIHtcblx0XHRcdHNlY29uZFBsYXllclNjb3JlKys7XG5cdFx0fVxuXHRcdHVwZGF0ZVNjb3JlKCk7XG5cdFx0YmFsbCA9IHsgLi4uYmFsbEluaXRpYWwgfTtcblx0XHRzZXRCYWxsRGlyZWN0aW9uKCk7XG5cdFx0ZHJhd0JhbGwoKTtcblx0XHRiYWxsU3BlZWQgPSBpbml0aWFsQmFsbFNwZWVkO1xuXHR9XG5cblx0ZnVuY3Rpb24gbW92ZVBhZGRsZXMoZXY6IEtleWJvYXJkRXZlbnQpIHtcblxuXHRcdGNvbnN0IGZpcnN0UGFkZGxlR29pbmdVcCA9IGV2LmtleSA9PT0gbW92ZUZpcnN0UGFkZGxlS2V5LnVwO1xuXHRcdGNvbnN0IGZpcnN0UGFkZGxlR29pbmdEb3duID0gZXYua2V5ID09PSBtb3ZlRmlyc3RQYWRkbGVLZXkuZG93bjtcblx0XHRjb25zdCBzZWNvbmRQYWRkbGVHb2luZ1VwID0gZXYua2V5ID09PSBtb3ZlU2Vjb25kUGFkZGxlS2V5LnVwO1xuXHRcdGNvbnN0IHNlY29uZFBhZGRsZUdvaW5nRG93biA9IGV2LmtleSA9PT0gbW92ZVNlY29uZFBhZGRsZUtleS5kb3duO1xuXG5cdFx0Y29uc3QgY2FuRmlyc3RQYWRkbGVNb3ZlVXAgPSBmaXJzdFBhZGRsZS55ID4gMDtcblx0XHRjb25zdCBjYW5GaXJzdFBhZGRsZU1vdmVEb3duID0gZmlyc3RQYWRkbGUueSA8IGdhbWVCb2FyZC5oZWlnaHQgLSBwYWRkbGVTaXplLmhlaWdodDtcblx0XHRjb25zdCBjYW5TZWNvbmRQYWRkbGVNb3ZlVXAgPSBzZWNvbmRQYWRkbGUueSA+IDA7XG5cdFx0Y29uc3QgY2FuU2Vjb25kUGFkZGxlTW92ZURvd24gPSBzZWNvbmRQYWRkbGUueSA8IGdhbWVCb2FyZC5oZWlnaHQgLSBwYWRkbGVTaXplLmhlaWdodDtcblxuXHRcdGlmIChmaXJzdFBhZGRsZUdvaW5nVXAgJiYgY2FuRmlyc3RQYWRkbGVNb3ZlVXApIHtcblx0XHRcdGZpcnN0UGFkZGxlLnkgLT0gcGFkZGxlU3BlZWQ7XG5cdFx0fSBlbHNlIGlmIChmaXJzdFBhZGRsZUdvaW5nRG93biAmJiBjYW5GaXJzdFBhZGRsZU1vdmVEb3duKSB7XG5cdFx0XHRmaXJzdFBhZGRsZS55ICs9IHBhZGRsZVNwZWVkO1xuXHRcdH0gZWxzZSBpZiAoc2Vjb25kUGFkZGxlR29pbmdVcCAmJiBjYW5TZWNvbmRQYWRkbGVNb3ZlVXApIHtcblx0XHRcdHNlY29uZFBhZGRsZS55IC09IHBhZGRsZVNwZWVkO1xuXHRcdH0gZWxzZSBpZiAoc2Vjb25kUGFkZGxlR29pbmdEb3duICYmIGNhblNlY29uZFBhZGRsZU1vdmVEb3duKSB7XG5cdFx0XHRzZWNvbmRQYWRkbGUueSArPSBwYWRkbGVTcGVlZDtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVHYW1lKCkge1xuXHRcdGRyYXdCb2FyZCgpO1xuXHRcdGRyYXdQYWRkbGVzKCk7XG5cdFx0bW92ZUJhbGwoKTtcblx0XHRkcmF3QmFsbCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVzdGFydEdhbWUoKSB7XG5cdFx0Zmlyc3RQbGF5ZXJTY29yZSA9IDA7XG5cdFx0c2Vjb25kUGxheWVyU2NvcmUgPSAwO1xuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG5cdFx0YmFsbFNwZWVkID0gaW5pdGlhbEJhbGxTcGVlZDtcblx0XHRiYWxsID0geyAuLi5iYWxsSW5pdGlhbCB9O1xuXHRcdGZpcnN0UGFkZGxlID0geyAuLi5maXJzdFBhZGRsZSB9O1xuXHRcdHNlY29uZFBhZGRsZSA9IHsgLi4uc2Vjb25kUGFkZGxlIH07XG5cdFx0aW5pdEdhbWUoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXRHYW1lKCkge1xuXHRcdHVwZGF0ZVNjb3JlKCk7XG5cdFx0c2V0QmFsbERpcmVjdGlvbigpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBtb3ZlUGFkZGxlcyk7XG5cdFx0aW50ZXJ2YWxJRCA9IHNldEludGVydmFsKHVwZGF0ZUdhbWUsIDIwKTtcblx0XHRyZXN0YXJ0QnRuIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc3RhcnRHYW1lKTtcblx0fVxuXG5cdGluaXRHYW1lKCk7IC8vIGlmIHRoZSBnYW1lIGJyZWFrcyB1c2UgdGhlIGxpbmUgYmVsb3dcblx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGluaXRHYW1lKTtcbn1cblxuXG5cblxuXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9nYW1lXCIiLCJpbXBvcnQgeyBuYXZpZ2F0aW9uSGFuZGxlIH0gZnJvbSBcIi4uLy4uL25hZ2l2YXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUhvbWVQYWdlKG1haW5XcmFwcGVyOiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZCkge1xuXHRuYXZpZ2F0aW9uSGFuZGxlKCk7XG59IiwiZXhwb3J0ICogZnJvbSBcIi4vaG9tZVwiIiwiZXhwb3J0ICogZnJvbSBcIi4vbG9naW5QYWdlXCIiLCIvLyBpbXBvcnQgeyBwb3N0RGF0YXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpXCI7XG5pbXBvcnQgeyB1c2VyRGF0YUxvZ2luIH0gZnJvbSBcIi4uLy4uL3NoYXJlZFwiO1xuaW1wb3J0IHsgSVVzZXJEYXRhVHlwZUxvZ2luIH0gZnJvbSBcIi4uLy4uL3NoYXJlZFwiO1xuaW1wb3J0IHsgcm91dGVUb0hvbWUgfSBmcm9tIFwiLi4vLi4vcm91dGluZ1wiO1xuaW1wb3J0IHsgdXNlckFQSSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGlcIjtcblxuXG4vLyBQb3N0IGRhdGFzICEhISBEZWxldGUgdXNlckFQSSBpZiB1IGFyZSB1c2luZyBmZXRjaCByZXF1ZXN0XG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTG9naW4oKSB7XG4gICAgY29uc3QgbG9naW5FbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbklucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgbG9naW5QYXNzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luUGFzc1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50OztcbiAgICBjb25zdCBsb2dpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5CdG5cIik7XG4gICAgY29uc3QgZm9yZ290UGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9uUGFzc0ZvcmdvdFwiKTsgLy8gbGF0ZXIgaW1wbGVtZW50XG5cbiAgICBjb25zdCBMb2dpbkJ0bnM6IEhUTUxJbnB1dEVsZW1lbnRbXSA9IFtsb2dpbkVtYWlsSW5wdXQsIGxvZ2luUGFzc0lucHV0XTtcblxuICAgIGxvZ2luQnRuIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgTG9naW5CdG5zLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gaW5wdXQudHlwZS50b0xvd2VyQ2FzZSgpIGFzIGtleW9mIElVc2VyRGF0YVR5cGVMb2dpbjtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9uZSBvZiB5b3VyIGlucHV0cyBpcyBlbXB0eSFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVzZXJEYXRhTG9naW5ba2V5XSA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1c2VyQVBJLnBvc3REYXRhcyh1c2VyRGF0YUxvZ2luKTtcbiAgICAgICAgICAgIHJvdXRlVG9Ib21lKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgIH1cblxuXG5cbiAgICB9KVxufSIsImV4cG9ydCAqIGZyb20gXCIuL3BsYXlQYWdlXCIiLCJpbXBvcnQgeyByb3V0ZVRvR2FtZSB9IGZyb20gXCIuLi8uLi9yb3V0aW5nXCI7XG5pbXBvcnQgeyBuYXZpZ2F0aW9uSGFuZGxlIH0gZnJvbSBcIi4uLy4uL25hZ2l2YXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVBsYXlQYWdlKCkge1xuXHRuYXZpZ2F0aW9uSGFuZGxlKCk7XG5cblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tcGxheVwiKSEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRyb3V0ZVRvR2FtZSgpO1xuXHR9KTtcbn0iLCJleHBvcnQgKiBmcm9tIFwiLi9wcm9maWxlXCIiLCJpbXBvcnQgeyBuYXZpZ2F0aW9uSGFuZGxlIH0gZnJvbSBcIi4uLy4uL25hZ2l2YXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVByb2ZpbGVQYWdlKCkge1xuXHRuYXZpZ2F0aW9uSGFuZGxlKCk7XG59IiwiZXhwb3J0ICogZnJvbSBcIi4vcmVnaXN0cmF0aW9uXCIiLCJpbXBvcnQgeyByb3V0ZVRvSG9tZSB9IGZyb20gXCIuLi8uLi9yb3V0aW5nL2luZGV4XCJcbmltcG9ydCB7IG5hdmlnYXRlVG8gfSBmcm9tIFwiLi4vLi4vcm91dGluZy9pbmRleFwiXG4vLyBpbXBvcnQgeyBwb3N0RGF0YXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpXCI7XG5pbXBvcnQgeyBJVXNlckRhdGFSZWdpc3RyYXRpb25UeXBlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZFwiO1xuaW1wb3J0IHsgdXNlckRhdGFSZWdpc3RyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2hhcmVkXCI7XG5pbXBvcnQgeyB1c2VyQVBJIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaVwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVSZWdpc3RyYXRpb24oKSB7XG4gICAgY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcm5hbWVSZWdpc3RyYXRpb25cIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbFJlZ2lzdHJhdGlvblwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkUmVnaXN0cmF0aW9uXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgYnRuUmVnaXN0ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0UmVnaXN0cmF0aW9uXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGNvbnN0IHNpZ25JbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWVzdGlvbkFscmVhZHlSZWdpc3RyJyk7XG5cbiAgICBjb25zdCBpbnB1dHNVc2VyczogSFRNTElucHV0RWxlbWVudFtdID0gW3VzZXJOYW1lSW5wdXQsIGVtYWlsSW5wdXQsIHBhc3N3b3JkSW5wdXRdO1xuXG4gICAgYnRuUmVnaXN0ciEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpbnB1dHNVc2Vycy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBpbnB1dC50eXBlLnRvTG93ZXJDYXNlKCkgYXMga2V5b2YgSVVzZXJEYXRhUmVnaXN0cmF0aW9uVHlwZTtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9uZSBvZiB5b3VyIGlucHV0cyBpcyBlbXB0eSFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtpbnB1dC5wbGFjZWhvbGRlcn0gaGFzIHRvIGJlIG1pbmltdW0gMyBjaGFyYWN0ZXJzYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC50eXBlID09PSAnZW1haWwnICYmICEoaW5wdXQudmFsdWUubWF0Y2goL0AvZykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtpbnB1dC5wbGFjZWhvbGRlcn0gaGFzIGNvbnRhaW4gJyBAICcgc3ltYm9sYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVzZXJEYXRhUmVnaXN0cmF0aW9uW2tleV0gPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdXNlckFQSS5wb3N0RGF0YXModXNlckRhdGFSZWdpc3RyYXRpb24pO1xuICAgICAgICAgICAgcm91dGVUb0hvbWUoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHNpZ25JbkJ0biEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRlVG8oXCIvbG9naW5cIik7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9zZXR0aW5nc1BhZ2VcIiIsImltcG9ydCB7IG5hdmlnYXRpb25IYW5kbGUgfSBmcm9tIFwiLi4vLi4vbmFnaXZhdGlvblwiO1xuaW1wb3J0IHsgdXNlckFQSSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVNldHRpbmdzKCkge1xuXHRuYXZpZ2F0aW9uSGFuZGxlKCk7XG5cdGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTElucHV0RWxlbWVudD4oXCIjaW5wdXRVc2VySW5mb1wiKTtcblx0Y29uc3QgYnRuU2F2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI3NhdmVDaGFuZ2VzU2V0dGluZ3NcIik7XG5cdGNvbnN0IHByb2ZpbGVJbWdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihcIiNwcm9maWxlSW1nQ29udGFpbmVyXCIpO1xuXHRjb25zdCB1cGxvYWRJbWdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI3VwbG9hZEltZ0J0blwiKTtcdFxuXHRcblx0Y29uc3QgZGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG5cdC8vIHVwbG9hZEltZ0J0biEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgYXN5bmMgKGV2ZW50KSA9PiB7XG5cdC8vIFx0Y29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcblx0XHRcblx0Ly8gXHRpZihpbnB1dC5maWxlcyEubGVuZ3RoID4gMCl7XG5cdC8vIFx0XHRjb25zdCBpbWdGaWxlID0gaW5wdXQuZmlsZXMhWzBdO1xuXHQvLyBcdFx0Y29uc3QgaXNJbWFnZVR5cGUgPSBpbWdGaWxlIS50eXBlLnN0YXJ0c1dpdGgoXCJpbWFnZVwiKTtcblx0Ly8gXHR9XG5cdFx0XG5cdC8vIH0pXG5cblx0YnRuU2F2ZSEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuXHRcdFx0XHRpZighaW5wdXQudmFsdWUpXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZW1wdHkgYXJlYSFcIik7XG5cdFx0XHRcdGRhdGFbaW5wdXQucGxhY2Vob2xkZXIuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIildID0gaW5wdXQudmFsdWU7XG5cdFx0XHR9KVxuXHRcdFx0dXNlckFQSS5wb3N0RGF0YXMoZGF0YSk7XG5cdFx0fVxuXHRcdGNhdGNoIChlcnJvcikge1xuXHRcdFx0YWxlcnQoZXJyb3IpXG5cdFx0fVxuXHR9KTtcblxufSIsImV4cG9ydCAqIGZyb20gXCIuL3JvdXRlc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9yb3V0ZVRvU29tZVBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbmF2aWdhdGlvblwiIiwiaW1wb3J0IHJ1blNQQSBmcm9tIFwiLi4vc3BhQXBwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVRvKHBhdGg6IHN0cmluZykge1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIlwiLCBwYXRoKTsgLy8gQ2hhbmdlIFVSTCB3aXRob3V0IHJlbG9hZFxuICAgIHJ1blNQQShwYXRoKTsgLy8gRHJhdyBuZXcgUGFnZVxufSIsImltcG9ydCB7IG5hdmlnYXRlVG8gfSBmcm9tIFwiLi9pbmRleFwiXG5cbmV4cG9ydCBmdW5jdGlvbiByb3V0ZVRvR2FtZSgpIHtcblx0bmF2aWdhdGVUbyhcIi9nYW1lXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91dGVUb0hvbWUoKSB7XG5cdG5hdmlnYXRlVG8oXCIvXCIpO1xufSIsImltcG9ydCB7IHBsYXlQYWdlLCBnYW1lUGFnZSwgcmVnaXN0cmF0aW9uUGFnZSwgbG9naW5QYWdlLCBob21lUGFnZSwgcHJvZmlsZVBhZ2UsIHNldHRpbmdzUGFnZSwgZXJyb3JQYWdlIH0gZnJvbSBcIi4uL0xheW91dC9pbmRleFwiXG5pbXBvcnQgeyBoYW5kbGVQbGF5UGFnZSB9IGZyb20gXCIuLi9wYWdlcy9wbGF5UGFnZVwiXG5pbXBvcnQgeyBoYW5kbGVHYW1lIH0gZnJvbSBcIi4uL3BhZ2VzL2dhbWVcIlxuaW1wb3J0IHsgaGFuZGxlUmVnaXN0cmF0aW9uIH0gZnJvbSBcIi4uL3BhZ2VzL3JlZ2lzdHJhdGlvblwiXG5pbXBvcnQgeyBoYW5kbGVMb2dpbiB9IGZyb20gXCIuLi9wYWdlcy9sb2dpblwiXG5pbXBvcnQgeyBoYW5kbGVIb21lUGFnZSB9IGZyb20gXCIuLi9wYWdlcy9ob21lXCJcbmltcG9ydCB7IGhhbmRsZVByb2ZpbGVQYWdlIH0gZnJvbSBcIi4uL3BhZ2VzL3Byb2ZpbGVcIlxuaW1wb3J0IHsgaGFuZGxlU2V0dGluZ3MgfSBmcm9tIFwiLi4vcGFnZXMvc2V0dGluZ3NQYWdlXCJcbmltcG9ydCB7IGhhbmRsZUVycm9yUGFnZSB9IGZyb20gXCIuLi9wYWdlcy9lcnJvclBhZ2VcIlxuXG5pbnRlcmZhY2UgaGFuZGxlRnVuY3Rpb25JIHtcbiAgICBsYXlvdXRDcmVhdGU6IChtYWluV3JhcHBlcj86IEhUTUxEaXZFbGVtZW50KSA9PiBzdHJpbmc7XG4gICAgaGFuZGxlRnVuYzogKG1haW5XcmFwcGVyPzogSFRNTERpdkVsZW1lbnQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJlY29yZDxzdHJpbmcsIGhhbmRsZUZ1bmN0aW9uST4gPSB7XG4gICAgXCIvXCI6IHsgbGF5b3V0Q3JlYXRlOiBob21lUGFnZSwgaGFuZGxlRnVuYzogaGFuZGxlSG9tZVBhZ2UgfSxcbiAgICBcIi9wbGF5XCI6IHsgbGF5b3V0Q3JlYXRlOiBwbGF5UGFnZSwgaGFuZGxlRnVuYzogaGFuZGxlUGxheVBhZ2UgfSxcbiAgICBcIi9nYW1lXCI6IHsgbGF5b3V0Q3JlYXRlOiBnYW1lUGFnZSwgaGFuZGxlRnVuYzogaGFuZGxlR2FtZSB9LFxuICAgIFwiL3Byb2ZpbGVcIjogeyBsYXlvdXRDcmVhdGU6IHByb2ZpbGVQYWdlLCBoYW5kbGVGdW5jOiBoYW5kbGVQcm9maWxlUGFnZSB9LFxuICAgIFwiL3JlZ2lzdHJhdGlvblwiOiB7IGxheW91dENyZWF0ZTogcmVnaXN0cmF0aW9uUGFnZSwgaGFuZGxlRnVuYzogaGFuZGxlUmVnaXN0cmF0aW9uIH0sXG4gICAgXCIvbG9naW5cIjogeyBsYXlvdXRDcmVhdGU6IGxvZ2luUGFnZSwgaGFuZGxlRnVuYzogaGFuZGxlTG9naW4gfSxcbiAgICBcIi9zZXR0aW5nc1wiOiB7bGF5b3V0Q3JlYXRlOiBzZXR0aW5nc1BhZ2UsIGhhbmRsZUZ1bmM6IGhhbmRsZVNldHRpbmdzfSxcbiAgICBcIi9lcnJvclwiOiB7bGF5b3V0Q3JlYXRlOiBlcnJvclBhZ2UsIGhhbmRsZUZ1bmM6IGhhbmRsZUVycm9yUGFnZX1cbn07IiwiZXhwb3J0ICogZnJvbSAnLi9wb3N0cyciLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbi8vIEZFVENIIFJFUVVFU1QgLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gXG5cbmV4cG9ydCBjb25zdCB1c2VyQVBJID0ge1xuXHRwb3N0RGF0YXM6IChkYXRhOiBPYmplY3QpID0+IHtcblx0XHQvL1x0Y2hhbmdlIGluIGZ1dHVyZSB1cmwgKHdoZW4gZGF0YWJhc2Ugd2lsbCBiZSByZWFkeSB0byB1c2UpIFxuXHRcdGxldCB1cmwgPSAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJztcblx0XHRmZXRjaCh1cmwsIHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04J1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG5cdFx0fSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHRcdC50aGVuKChyZXN1bHQpID0+IGNvbnNvbGUubG9nKFwiRGF0YSBzdWNjZXNzZnVsbHkgZGVsaXZlcmVkOlwiLCByZXN1bHQpKVxuXHRcdFx0LmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coXCJFcnJvciBwb3N0aW5nIGRhdGE6IFwiICsgZXJyb3IpKTtcblx0fSxcblxuXHRnZXREYXRhczogICgpID0+IHtcblx0XHQvL1x0Y2hhbmdlIGluIGZ1dHVyZSB1cmwgKHdoZW4gZGF0YWJhc2Ugd2lsbCBiZSByZWFkeSB0byB1c2UpIFxuXHRcdGxldCB1cmwgPSBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiO1xuXG5cdFx0IGZldGNoKHVybClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHRcdC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG5cdFx0XHQuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coJ0Vycm9yIGZldGNoaW5nIGRhdGE6ICcgKyBlcnJvcikpO1xuXHR9XG59XG5cblxuLy8gQVhJT1MgUkVRVUVTVCAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSBcbi8vIGNvbnNvbGUubG9nKFwiYXhpb3Mgd29ya3MgcHJvcGVybHlcIik7XG5cbi8vIGNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbi8vIFx0YmFzZVVSTDogXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIixcbi8vIH0pO1xuXG4vLyBleHBvcnQgY29uc3QgdXNlckFQSSA9IHtcbi8vIFx0Z2V0RGF0YXM6ICgpID0+IHtcbi8vIFx0XHQvL1x0Y2hhbmdlIGluIGZ1dHVyZSB1cmwgKHdoZW4gZGF0YWJhc2Ugd2lsbCBiZSByZWFkeSB0byB1c2UpIFxuLy8gXHRcdHJldHVybiBpbnN0YW5jZS5nZXQoXCJcIilcbi8vIFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpKVxuLy8gXHR9LFxuXG4vLyBcdHBvc3REYXRhczogKGRhdGE6IE9iamVjdCkgPT4ge1xuLy8gXHRcdC8vXHRjaGFuZ2UgaW4gZnV0dXJlIHVybCAod2hlbiBkYXRhYmFzZSB3aWxsIGJlIHJlYWR5IHRvIHVzZSkgXG4vLyBcdFx0aW5zdGFuY2UucG9zdChcIlwiLCBkYXRhKVxuLy8gXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKVxuLy8gXHRcdFx0LnRoZW4oKHJlc3VsdCkgPT4gY29uc29sZS5sb2coXCJEYXRhIHN1Y2Nlc3NmdWxseSBkZWxpdmVyZWQ6IHdpdGggYXhpb3NcIiwgcmVzdWx0KSlcbi8vIFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKFwiRXJyb3IgcG9zdGluZyBkYXRhOiBcIiArIGVycm9yKSk7XG4vLyBcdH0sXG4vLyB9XG4iLCJpbXBvcnQgeyBJVXNlckRhdGFSZWdpc3RyYXRpb25UeXBlIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHsgSVVzZXJEYXRhVHlwZUxvZ2luIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQgbGV0IHVzZXJEYXRhUmVnaXN0cmF0aW9uOiBJVXNlckRhdGFSZWdpc3RyYXRpb25UeXBlID0ge1xuXHR0ZXh0OiBudWxsLFxuXHRlbWFpbDogbnVsbCxcblx0cGFzc3dvcmQ6IG51bGxcbn07XG5cbmV4cG9ydCBsZXQgdXNlckRhdGFMb2dpbjogSVVzZXJEYXRhVHlwZUxvZ2luID0ge1xuXHRlbWFpbDogbnVsbCxcblx0cGFzc3dvcmQ6IG51bGxcbn07IiwiZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMnXG5leHBvcnQgKiBmcm9tICcuL2RhdGEnIiwiLy8gZG9uJ3QgbmVlZCBub3dcblxuZXhwb3J0IGNvbnN0IGVudW0gUGFnZUlkcyB7XG5cdE1haW5QYWdlID0gJ2hvbWUnLFxuXHRHYW1lUGFnZSA9ICdnYW1lJyxcblx0RGVmYXVsdFBhZ2UgPSAncmVnaXN0cicsXG5cdExvZ2luUGFnZSA9ICdsb2dpbicsXG5cdFJlZ2lzdHJhdGlvblBhZ2UgPSAncmVnaXN0cicsXG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIHRleHRWYWx1ZVJlZ2lzdHJhaW9uUGFnZXtcbiAgICBIRUFERVIgPSBcIlRyYW5zY2VuZGVuY2VcIixcbiAgICBURVhUX0RFU0NSSVBUSU9OID0gXCLQl9C00LXRgdGMINC80L7Qs9C70LAg0LHRiyDQsdGL0YLRjCDQstCw0YjQsCDRgNC10LrQu9Cw0LzQsC4uLlwiLFxuICAgIEJUTl9DT05URU5UID0gXCJSZWdpc3RyYXRpb25cIixcbiAgICBTSUdOX0lOID0gXCJTaWduIEluXCIsXG4gICAgUkVHSVNUUkFUSU9OID0gXCJSZWdpc3RyYXRpb25cIlxufVxuXG4iLCJpbXBvcnQgeyBtYWluV3JhcHBlciB9IGZyb20gJy4uL2VsZW1lbnRzJztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gXCIuLi9yb3V0aW5nL2luZGV4XCJcbmltcG9ydCB7IGVycm9yUGFnZSB9IGZyb20gXCIuLi9MYXlvdXQvaW5kZXhcIlxuaW1wb3J0IHsgaGFuZGxlRXJyb3JQYWdlIH0gZnJvbSAnLi4vcGFnZXMvZXJyb3JQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcnVuU1BBKHBhdGg/OiBzdHJpbmcpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChtYWluV3JhcHBlcik7XG5cbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgaW4gcm91dGVzKSB7XG4gICAgICAgIG1haW5XcmFwcGVyLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICAvLyBtYWluV3JhcHBlci5jbGFzc05hbWUgPSBcImZsZXggZmxleC1jb2wgaC1mdWxsIHctZnVsbFwiO1xuICAgICAgICBtYWluV3JhcHBlci5jbGFzc05hbWUgPSBcImNvbnRhaW5lciBteC1hdXRvIHB4LTQgaC1mdWxsIHctZnVsbFwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IFwiZm9udC1tb25vXCI7XG4gICAgICAgIG1haW5XcmFwcGVyLmlubmVySFRNTCA9IHJvdXRlc1tsb2NhdGlvbi5wYXRobmFtZV0ubGF5b3V0Q3JlYXRlKG1haW5XcmFwcGVyKTtcbiAgICAgICAgcm91dGVzW2xvY2F0aW9uLnBhdGhuYW1lXS5oYW5kbGVGdW5jKG1haW5XcmFwcGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtYWluV3JhcHBlci5pbm5lckhUTUwgPSByb3V0ZXNbJy9lcnJvciddLmxheW91dENyZWF0ZSgpO1xuICAgICAgICByb3V0ZXNbJy9lcnJvciddLmhhbmRsZUZ1bmMoKTtcbiAgICB9XG59XG5cblxuLy8gRm9yd2FyZC1CYWNrIGFycm93cyB3b3JraW5nIHByb3Blcmx5XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsICgpID0+IHtcbiAgICBydW5TUEEobG9jYXRpb24ucGF0aG5hbWUpO1xufSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9