///////////////////////////////////HELPER FUNCTIONS/////////////////////////////////////////////////////////////////////
function id(id){
  return document.getElementById(id);
}

function qs(selector){
  return document.querySelector(selector);
}

function qsa(selector){
  return document.querySelectorAll(selector);
}

/////////////////////////////////////////////////// GLOBAL VARIABLES//////////////////////////////////////////////////////////
compAnsw = [];
userAnsw = [];


///////////////////////////////////////////////// SUDOKU PUZZLE ARRAY AND ANSERS /////////////////////////////////////////////////
///////////////////////////////////////////////////////////	EASY  ////////////////////////////////////////////////////////////////
const easy01p = [
{image: "kat.jpg"},{image: "red.jpg"},{image: "bai.jpg"},{image: "dev.jpg"},{image: ""},{image: ""},
{image: ""},{image: ""},{image: ""},{image: "bai.jpg"},{image: ""},{image: ""},
{image: "bai.jpg"},{image: ""},{image: ""},{image: "nan.jpg"},{image: "dev.jpg"},{image: ""},
{image: ""},{image: ""},{image: "dev.jpg"},{image: ""},{image: "bai.jpg"},{image: ""},
{image: ""},{image: "bai.jpg"},{image: "gul.jpg"},{image: "red.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},
{image: "red.jpg"},{image: ""},{image: ""},{image: "gul.jpg"},{image: "nan.jpg"},{image: "bai.jpg"},
];

const easy01a = [
  {image: "kat.jpg"},{image: "red.jpg"},{image: "bai.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},
  {image: "dev.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "kat.jpg"},
  {image: "bai.jpg"},{image: "kat.jpg"},{image: "red.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},
  {image: "gul.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},{image: "kat.jpg"},{image: "bai.jpg"},{image: "red.jpg"},
  {image: "nan.jpg"},{image: "bai.jpg"},{image: "gul.jpg"},{image: "red.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},
  {image: "red.jpg"},{image: "dev.jpg"},{image: "kat.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},{image: "bai.jpg"},
];

const easy02p = [
{image: ""},{image: "bai.jpg"},{image: "kat.jpg"},{image: ""},{image: "nan.jpg"},{image: ""},
{image: "dev.jpg"},{image: ""},{image: "gul.jpg"},{image: "kat.jpg"},{image: ""},{image: ""},
{image: ""},{image: ""},{image: ""},{image: ""},{image: "gul.jpg"},{image: "kat.jpg"},
{image: "kat.jpg"},{image: ""},{image: "nan.jpg"},{image: ""},{image: "dev.jpg"},{image: "bai.jpg"},
{image: ""},{image: ""},{image: "dev.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "nan.jpg"},
{image: "nan.jpg"},{image: "red.jpg"},{image: ""},{image: "dev.jpg"},{image: ""},{image: ""}
];

const easy02a = [
{image: 'red.jpg'},{image: 'bai.jpg'},{image: 'kat.jpg'},{image: 'gul.jpg'},{image: 'nan.jpg'},{image: 'dev.jpg'},
{image: 'dev.jpg'},{image: 'nan.jpg'},{image: 'gul.jpg'},{image: 'kat.jpg'},{image: 'bai.jpg'},{image: 'red.jpg'},
{image: 'bai.jpg'},{image: 'dev.jpg'},{image: 'red.jpg'},{image: 'nan.jpg'},{image: 'gul.jpg'},{image: 'kat.jpg'},
{image: 'kat.jpg'},{image: 'gul.jpg'},{image: 'nan.jpg'},{image: 'red.jpg'},{image: 'dev.jpg'},{image: 'bai.jpg'},
{image: 'gul.jpg'},{image: 'kat.jpg'},{image: 'dev.jpg'},{image: 'bai.jpg'},{image: 'red.jpg'},{image: 'nan.jpg'},
{image: 'nan.jpg'},{image: 'red.jpg'},{image: 'bai.jpg'},{image: 'dev.jpg'},{image: 'kat.jpg'},{image: 'gul.jpg'}
];

const easy03p = [
{image: "dev.jpg"},{image: "nan.jpg"},{image: "red.jpg"},{image: "kat.jpg"},{image: ""},{image: "gul.jpg"},
{image: "kat.jpg"},{image: ""},{image: ""},{image: "nan.jpg"},{image: ""},{image: ""},
{image: ""},{image: ""},{image: ""},{image: ""},{image: ""},{image: ""},
{image: "gul.jpg"},{image: ""},{image: "bai.jpg"},{image: ""},{image: "kat.jpg"},{image: "nan.jpg"},
{image: ""},{image: "gul.jpg"},{image: "dev.jpg"},{image: ""},{image: "red.jpg"},{image: "kat.jpg"},
{image: "bai.jpg"},{image: ""},{image: "kat.jpg"},{image: "gul.jpg"},{image: ""},{image: "dev.jpg"},
];

const easy03a = [
{image: "dev.jpg"},{image: "nan.jpg"},{image: "red.jpg"},{image: "kat.jpg"},{image: "bai.jpg"},{image: "gul.jpg"},
{image: "kat.jpg"},{image: "bai.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},{image: "red.jpg"},
{image: "red.jpg"},{image: "kat.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},{image: "bai.jpg"},
{image: "gul.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "kat.jpg"},{image: "nan.jpg"},
{image: "nan.jpg"},{image: "gul.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "kat.jpg"},
{image: "bai.jpg"},{image: "red.jpg"},{image: "kat.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},
];

const easy04p = [
{image: "nan.jpg"},{image: ""},{image: "kat.jpg"},{image: ""},{image: ""},{image: ""},
{image: "red.jpg"},{image: ""},{image: ""},{image: "nan.jpg"},{image: ""},{image: ""},
{image: "gul.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},{image: ""},{image: "nan.jpg"},{image: ""},
{image: "bai.jpg"},{image: ""},{image: ""},{image: ""},{image: "kat.jpg"},{image: "gul.jpg"},
{image: ""},{image: "nan.jpg"},{image: "red.jpg"},{image: "gul.jpg"},{image: ""},{image: "bai.jpg"},
{image: "dev.jpg"},{image: "bai.jpg"},{image: ""},{image: ""},{image: "red.jpg"},{image: "nan.jpg"},
];

const easy04a = [
{image: "nan.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},{image: "red.jpg"},{image: "bai.jpg"},{image: "dev.jpg"},
{image: "red.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},{image: "nan.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},
{image: "gul.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},{image: "nan.jpg"},{image: "red.jpg"},
{image: "bai.jpg"},{image: "red.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},{image: "kat.jpg"},{image: "gul.jpg"},
{image: "kat.jpg"},{image: "nan.jpg"},{image: "red.jpg"},{image: "gul.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},
{image: "dev.jpg"},{image: "bai.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},{image: "red.jpg"},{image: "nan.jpg"},

];

const easy05p = [
{image: "dev.jpg"},{image: ""},{image: ""},{image: ""},{image: ""},{image: "gul.jpg"},
{image: "bai.jpg"},{image: ""},{image: ""},{image: "kat.jpg"},{image: "dev.jpg"},{image: "nan.jpg"},
{image: ""},{image: "dev.jpg"},{image: ""},{image: "red.jpg"},{image: ""},{image: "kat.jpg"},
{image: "kat.jpg"},{image: "gul.jpg"},{image: "red.jpg"},{image: "dev.jpg"},{image: ""},{image: "bai.jpg"},
{image: ""},{image: ""},{image: ""},{image: ""},{image: ""},{image: "red.jpg"},
{image: "red.jpg"},{image: "kat.jpg"},{image: "nan.jpg"},{image: ""},{image: "bai.jpg"},{image: ""},
];

const easy05a = [
{image: "dev.jpg"},{image: "nan.jpg"},{image: "kat.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "gul.jpg"},
{image: "bai.jpg"},{image: "red.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},{image: "nan.jpg"},
{image: "nan.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},
{image: "kat.jpg"},{image: "gul.jpg"},{image: "red.jpg"},{image: "dev.jpg"},{image: "nan.jpg"},{image: "bai.jpg"},
{image: "gul.jpg"},{image: "bai.jpg"},{image: "dev.jpg"},{image: "nan.jpg"},{image: "kat.jpg"},{image: "red.jpg"},
{image: "red.jpg"},{image: "kat.jpg"},{image: "nan.jpg"},{image: "gul.jpg"},{image: "bai.jpg"},{image: "dev.jpg"},
];

const easy06p = [
{image: "nan.jpg"},{image: "red.jpg"},{image: "bai.jpg"},{image: ""},{image: "kat.jpg"},{image: ""},
{image: "kat.jpg"},{image: ""},{image: ""},{image: ""},{image: ""},{image: ""},
{image: "gul.jpg"},{image: "dev.jpg"},{image: ""},{image: "red.jpg"},{image: ""},{image: "kat.jpg"},
{image: ""},{image: "kat.jpg"},{image: "red.jpg"},{image: ""},{image: ""},{image: ""},
{image: "dev.jpg"},{image: "bai.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},{image: "nan.jpg"},{image: "red.jpg"},
{image: ""},{image: ""},{image: ""},{image: "dev.jpg"},{image: "gul.jpg"},{image: ""},
];

const easy06a = [
{image: "nan.jpg"},{image: "red.jpg"},{image: "bai.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},
{image: "kat.jpg"},{image: "gul.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "nan.jpg"},
{image: "gul.jpg"},{image: "dev.jpg"},{image: "nan.jpg"},{image: "red.jpg"},{image: "bai.jpg"},{image: "kat.jpg"},
{image: "bai.jpg"},{image: "kat.jpg"},{image: "red.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},
{image: "dev.jpg"},{image: "bai.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},{image: "nan.jpg"},{image: "red.jpg"},
{image: "red.jpg"},{image: "nan.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},{image: "bai.jpg"},
];



/////////////////////////////////////////////////////////////	INTERMEDIATE ////////////////////////////////////////////////////////

const int01p = [
{image: ""},{image: ""},{image: ""},{image: "gul.jpg"},{image: "nan.jpg"},{image: ""},
{image: "red.jpg"},{image: ""},{image: ""},{image: "dev.jpg"},{image: ""},{image: "kat.jpg"},
{image: ""},{image: ""},{image: ""},{image: "kat.jpg"},{image: ""},{image: "bai.jpg"},
{image: ""},{image: ""},{image: "bai.jpg"},{image: ""},{image: ""},{image: ""},
{image: ""},{image: "kat.jpg"},{image: ""},{image: "nan.jpg"},{image: "red.jpg"},{image: ""},
{image: ""},{image: "nan.jpg"},{image: "red.jpg"},{image: ""},{image: ""},{image: "dev.jpg"},
];

const int01a = [
{image: "dev.jpg"},{image: "bai.jpg"},{image: "kat.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},{image: "red.jpg"},
{image: "red.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},{image: "kat.jpg"},
{image: "nan.jpg"},{image: "red.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},
{image: "kat.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},
{image: "bai.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},{image: "nan.jpg"},{image: "red.jpg"},{image: "gul.jpg"},
{image: "gul.jpg"},{image: "nan.jpg"},{image: "red.jpg"},{image: "bai.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},
];

const int02p = [
{image: ""},{image: "nan.jpg"},{image: ""},{image: "gul.jpg"},{image: ""},{image: "red.jpg"},
{image: ""},{image: ""},{image: ""},{image: ""},{image: "bai.jpg"},{image: "nan.jpg"},
{image: ""},{image: ""},{image: ""},{image: ""},{image: ""},{image: ""},
{image: "dev.jpg"},{image: "gul.jpg"},{image: ""},{image: "kat.jpg"},{image: "red.jpg"},{image: ""},
{image: "gul.jpg"},{image: "dev.jpg"},{image: ""},{image: ""},{image: ""},{image: ""},
{image: "nan.jpg"},{image: "red.jpg"},{image: ""},{image: ""},{image: "dev.jpg"},{image: ""},
];

const int02a = [
{image: "bai.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},{image: "red.jpg"},
{image: "red.jpg"},{image: "kat.jpg"},{image: "gul.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},{image: "nan.jpg"},
{image: "kat.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "nan.jpg"},{image: "gul.jpg"},{image: "dev.jpg"},
{image: "dev.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},{image: "kat.jpg"},{image: "red.jpg"},{image: "bai.jpg"},
{image: "gul.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "nan.jpg"},{image: "kat.jpg"},
{image: "nan.jpg"},{image: "red.jpg"},{image: "kat.jpg"},{image: "bai.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},
];

const int03p = [
{image: "red.jpg"},{image: ""},{image: ""},{image: ""},{image: "nan.jpg"},{image: ""},
{image: "gul.jpg"},{image: ""},{image: ""},{image: "red.jpg"},{image: ""},{image: "bai.jpg"},
{image: "bai.jpg"},{image: "nan.jpg"},{image: ""},{image: "dev.jpg"},{image: ""},{image: ""},
{image: "kat.jpg"},{image: "gul.jpg"},{image: ""},{image: ""},{image: ""},{image: ""},
{image: "dev.jpg"},{image: ""},{image: ""},{image: "nan.jpg"},{image: "bai.jpg"},{image: ""},
{image: ""},{image: ""},{image: ""},{image: ""},{image: ""},{image: "gul.jpg"},
];

const int03a = [
{image: "red.jpg"},{image: "bai.jpg"},{image: "kat.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},
{image: "gul.jpg"},{image: "dev.jpg"},{image: "nan.jpg"},{image: "red.jpg"},{image: "kat.jpg"},{image: "bai.jpg"},
{image: "bai.jpg"},{image: "nan.jpg"},{image: "red.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},
{image: "kat.jpg"},{image: "gul.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "nan.jpg"},
{image: "dev.jpg"},{image: "kat.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},{image: "bai.jpg"},{image: "red.jpg"},
{image: "nan.jpg"},{image: "red.jpg"},{image: "bai.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},
];

const int04p = [
{image: ""},{image: ""},{image: "bai.jpg"},{image: "red.jpg"},{image: ""},{image: "nan.jpg"},
{image: ""},{image: ""},{image: ""},{image: ""},{image: "bai.jpg"},{image: ""},
{image: ""},{image: "kat.jpg"},{image: ""},{image: ""},{image: ""},{image: "red.jpg"},
{image: ""},{image: "red.jpg"},{image: "dev.jpg"},{image: ""},{image: ""},{image: ""},
{image: ""},{image: "bai.jpg"},{image: "red.jpg"},{image: ""},{image: "dev.jpg"},{image: "gul.jpg"},
{image: "gul.jpg"},{image: ""},{image: ""},{image: ""},{image: ""},{image: "bai.jpg"},
];

const int04a = [
{image: "dev.jpg"},{image: "gul.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "kat.jpg"},{image: "nan.jpg"},
{image: "red.jpg"},{image: "nan.jpg"},{image: "kat.jpg"},{image: "gul.jpg"},{image: "bai.jpg"},{image: "dev.jpg"},
{image: "bai.jpg"},{image: "kat.jpg"},{image: "gul.jpg"},{image: "dev.jpg"},{image: "nan.jpg"},{image: "red.jpg"},
{image: "nan.jpg"},{image: "red.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},
{image: "kat.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},
{image: "gul.jpg"},{image: "dev.jpg"},{image: "nan.jpg"},{image: "kat.jpg"},{image: "red.jpg"},{image: "bai.jpg"},
];

const int05p = [
{image: ""},{image: ""},{image: ""},{image: "dev.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},
{image: ""},{image: ""},{image: ""},{image: "red.jpg"},{image: "bai.jpg"},{image: ""},
{image: "gul.jpg"},{image: "dev.jpg"},{image: ""},{image: "nan.jpg"},{image: ""},{image: ""},
{image: ""},{image: ""},{image: "nan.jpg"},{image: ""},{image: ""},{image: "red.jpg"},
{image: ""},{image: ""},{image: "dev.jpg"},{image: "kat.jpg"},{image: ""},{image: ""},
{image: ""},{image: "gul.jpg"},{image: ""},{image: ""},{image: "red.jpg"},{image: ""},
];

const int05a = [
{image: "red.jpg"},{image: "nan.jpg"},{image: "bai.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},
{image: "dev.jpg"},{image: "kat.jpg"},{image: "gul.jpg"},{image: "red.jpg"},{image: "bai.jpg"},{image: "nan.jpg"},
{image: "gul.jpg"},{image: "dev.jpg"},{image: "red.jpg"},{image: "nan.jpg"},{image: "kat.jpg"},{image: "bai.jpg"},
{image: "kat.jpg"},{image: "bai.jpg"},{image: "nan.jpg"},{image: "gul.jpg"},{image: "dev.jpg"},{image: "red.jpg"},
{image: "bai.jpg"},{image: "red.jpg"},{image: "dev.jpg"},{image: "kat.jpg"},{image: "nan.jpg"},{image: "gul.jpg"},
{image: "nan.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "dev.jpg"},
];

const int06p = [
{image: ""},{image: ""},{image: "bai.jpg"},{image: ""},{image: ""},{image: "dev.jpg"},
{image: ""},{image: ""},{image: "kat.jpg"},{image: ""},{image: "gul.jpg"},{image: ""},
{image: ""},{image: ""},{image: ""},{image: ""},{image: "kat.jpg"},{image: "bai.jpg"},
{image: ""},{image: ""},{image: ""},{image: ""},{image: ""},{image: "gul.jpg"},
{image: "gul.jpg"},{image: "dev.jpg"},{image: "nan.jpg"},{image: "red.jpg"},{image: ""},{image: ""},
{image: ""},{image: "kat.jpg"},{image: "red.jpg"},{image: "gul.jpg"},{image: ""},{image: ""},
];

const int06a = [
{image: "red.jpg"},{image: "gul.jpg"},{image: "bai.jpg"},{image: "kat.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},
{image: "dev.jpg"},{image: "nan.jpg"},{image: "kat.jpg"},{image: "bai.jpg"},{image: "gul.jpg"},{image: "red.jpg"},
{image: "nan.jpg"},{image: "red.jpg"},{image: "gul.jpg"},{image: "dev.jpg"},{image: "kat.jpg"},{image: "bai.jpg"},
{image: "kat.jpg"},{image: "bai.jpg"},{image: "dev.jpg"},{image: "nan.jpg"},{image: "red.jpg"},{image: "gul.jpg"},
{image: "gul.jpg"},{image: "dev.jpg"},{image: "nan.jpg"},{image: "red.jpg"},{image: "bai.jpg"},{image: "kat.jpg"},
{image: "bai.jpg"},{image: "kat.jpg"},{image: "red.jpg"},{image: "gul.jpg"},{image: "dev.jpg"},{image: "nan.jpg"},
];


////////////////////////////////////////////////////	HARD ////////////////////////////////////////////////////////////////

const hard01p = [
{image: "kat.jpg"},{image: ""},{image: "nan.jpg"},{image: ""},{image: ""},{image: ""},
{image: "dev.jpg"},{image: ""},{image: ""},{image: ""},{image: ""},{image: "gul.jpg"},
{image: ""},{image: ""},{image: ""},{image: ""},{image: ""},{image: "bai.jpg"},
{image: "gul.jpg"},{image: ""},{image: "red.jpg"},{image: "kat.jpg"},{image: ""},{image: ""},
{image: ""},{image: ""},{image: ""},{image: "gul.jpg"},{image: ""},{image: ""},
{image: ""},{image: "dev.jpg"},{image: ""},{image: ""},{image: ""},{image: ""},
];

const hard01a = [
{image: "kat.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},{image: "red.jpg"},
{image: "dev.jpg"},{image: "red.jpg"},{image: "bai.jpg"},{image: "nan.jpg"},{image: "kat.jpg"},{image: "gul.jpg"},
{image: "nan.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},{image: "red.jpg"},{image: "gul.jpg"},{image: "bai.jpg"},
{image: "gul.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},{image: "nan.jpg"},
{image: "bai.jpg"},{image: "nan.jpg"},{image: "kat.jpg"},{image: "gul.jpg"},{image: "red.jpg"},{image: "dev.jpg"},
{image: "red.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},{image: "bai.jpg"},{image: "nan.jpg"},{image: "kat.jpg"},
];

const hard02p = [
{image: ""},{image: "kat.jpg"},{image: "nan.jpg"},{image: "bai.jpg"},{image: ""},{image: ""},
{image: ""},{image: ""},{image: ""},{image: ""},{image: ""},{image: ""},
{image: ""},{image: "bai.jpg"},{image: "red.jpg"},{image: "gul.jpg"},{image: ""},{image: ""},
{image: ""},{image: ""},{image: ""},{image: ""},{image: "dev.jpg"},{image: "bai.jpg"},
{image: ""},{image: ""},{image: "bai.jpg"},{image: ""},{image: ""},{image: "nan.jpg"},
{image: ""},{image: "nan.jpg"},{image: ""},{image: ""},{image: ""},{image: ""},
];

const hard02a = [
{image: "gul.jpg"},{image: "kat.jpg"},{image: "nan.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "dev.jpg"},
{image: "bai.jpg"},{image: "red.jpg"},{image: "finger.pjpg"},{image: "nan.jpg"},{image: "kat.jpg"},{image: "gul.jpg"},
{image: "dev.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},{image: "kat.jpg"},
{image: "nan.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},{image: "red.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},
{image: "red.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},{image: "kat.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},
{image: "kat.jpg"},{image: "nan.jpg"},{image: "gul.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},{image: "red.jpg"},
];

const hard03p = [
{image: ""},{image: "bai.jpg"},{image: ""},{image: ""},{image: ""},{image: ""},
{image: ""},{image: "dev.jpg"},{image: ""},{image: ""},{image: "nan.jpg"},{image: ""},
{image: "nan.jpg"},{image: ""},{image: ""},{image: ""},{image: "kat.jpg"},{image: ""},
{image: ""},{image: ""},{image: ""},{image: ""},{image: ""},{image: "nan.jpg"},
{image: ""},{image: ""},{image: ""},{image: "dev.jpg"},{image: ""},{image: ""},
{image: ""},{image: "gul.jpg"},{image: "kat.jpg"},{image: ""},{image: "red.jpg"},{image: ""},
];


const hard03a = [
{image: "red.jpg"},{image: "bai.jpg"},{image: "nan.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},
{image: "kat.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},{image: "bai.jpg"},{image: "nan.jpg"},{image: "red.jpg"},
{image: "nan.jpg"},{image: "red.jpg"},{image: "bai.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},
{image: "gul.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},{image: "red.jpg"},{image: "bai.jpg"},{image: "nan.jpg"},
{image: "bai.jpg"},{image: "nan.jpg"},{image: "red.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},
{image: "dev.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},{image: "nan.jpg"},{image: "red.jpg"},{image: "bai.jpg"},
];

const hard04p = [
{image: ""},{image: ""},{image: ""},{image: ""},{image: "nan.jpg"},{image: "kat.jpg"},
{image: "kat.jpg"},{image: ""},{image: ""},{image: ""},{image: ""},{image: ""},
{image: ""},{image: ""},{image: ""},{image: ""},{image: ""},{image: "bai.jpg"},
{image: ""},{image: "nan.jpg"},{image: ""},{image: ""},{image: ""},{image: "dev.jpg"},
{image: ""},{image: ""},{image: "gul.jpg"},{image: ""},{image: ""},{image: ""},
{image: "red.jpg"},{image: "dev.jpg"},{image: ""},{image: "bai.jpg"},{image: ""},{image: ""},
];

const hard04a = [
{image: "dev.jpg"},{image: "gul.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "nan.jpg"},{image: "kat.jpg"},
{image: "kat.jpg"},{image: "red.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},{image: "gul.jpg"},
{image: "gul.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},{image: "nan.jpg"},{image: "red.jpg"},{image: "bai.jpg"},
{image: "bai.jpg"},{image: "nan.jpg"},{image: "red.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},
{image: "nan.jpg"},{image: "bai.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},{image: "dev.jpg"},{image: "red.jpg"},
{image: "red.jpg"},{image: "dev.jpg"},{image: "kat.jpg"},{image: "bai.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},
];

const hard05p = [
{image: "gul.jpg"},{image: ""},{image: "kat.jpg"},{image: ""},{image: ""},{image: ""},
{image: ""},{image: ""},{image: ""},{image: ""},{image: "red.jpg"},{image: ""},
{image: ""},{image: ""},{image: ""},{image: "kat.jpg"},{image: "nan.jpg"},{image: ""},
{image: ""},{image: ""},{image: "dev.jpg"},{image: ""},{image: ""},{image: ""},
{image: ""},{image: ""},{image: "nan.jpg"},{image: ""},{image: ""},{image: ""},
{image: ""},{image: "kat.jpg"},{image: ""},{image: "bai.jpg"},{image: ""},{image: ""},
];

const hard05a = [
{image: "gul.jpg"},{image: "red.jpg"},{image: "kat.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},
{image: "nan.jpg"},{image: "dev.jpg"},{image: "bai.jpg"},{image: "gul.jpg"},{image: "red.jpg"},{image: "kat.jpg"},
{image: "red.jpg"},{image: "bai.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},
{image: "kat.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},{image: "red.jpg"},{image: "bai.jpg"},{image: "gul.jpg"},
{image: "bai.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},{image: "kat.jpg"},{image: "red.jpg"},
{image: "dev.jpg"},{image: "kat.jpg"},{image: "red.jpg"},{image: "bai.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},
];

const hard06p = [
{image: ""},{image: "kat.jpg"},{image: ""},{image: "dev.jpg"},{image: ""},{image: ""},
{image: ""},{image: "dev.jpg"},{image: ""},{image: ""},{image: ""},{image: "red.jpg"},
{image: ""},{image: ""},{image: "bai.jpg"},{image: ""},{image: ""},{image: ""},
{image: "gul.jpg"},{image: ""},{image: ""},{image: "nan.jpg"},{image: ""},{image: ""},
{image: "dev.jpg"},{image: ""},{image: "nan.jpg"},{image: ""},{image: ""},{image: ""},
{image: ""},{image: "gul.jpg"},{image: ""},{image: ""},{image: ""},{image: "dev.jpg"},
];

const hard06a = [
{image: "bai.jpg"},{image: "kat.jpg"},{image: "red.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},{image: "nan.jpg"},
{image: "nan.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},{image: "bai.jpg"},{image: "red.jpg"},
{image: "kat.jpg"},{image: "nan.jpg"},{image: "bai.jpg"},{image: "red.jpg"},{image: "dev.jpg"},{image: "gul.jpg"},
{image: "gul.jpg"},{image: "red.jpg"},{image: "dev.jpg"},{image: "nan.jpg"},{image: "kat.jpg"},{image: "bai.jpg"},
{image: "dev.jpg"},{image: "bai.jpg"},{image: "nan.jpg"},{image: "gul.jpg"},{image: "red.jpg"},{image: "kat.jpg"},
{image: "red.jpg"},{image: "gul.jpg"},{image: "kat.jpg"},{image: "bai.jpg"},{image: "nan.jpg"},{image: "dev.jpg"},
];

////////////////////////////////////////////// QUESTION ARRAY //////////////////////////////////////////////////////////////////
const easyPuzzle = [easy01p, easy02p, easy03p, easy04p, easy05p, easy06p];
const intPuzzle = [int01p, int02p, int03p, int04p, int05p, int06p];
const hardPuzzle = [hard01p, hard02p, hard03p, hard04p, hard05p, hard06p];

///////////////////////////////////////////// ANSWER ARRAY //////////////////////////////////////////////////////////////////////////
const easyAns = [easy01a, easy02a, easy03a, easy04a, easy05a, easy06a];
const intAns = [int01a, int02a, int03a, int04a, int05a, int06a];
const hardAns = [hard01a, hard02a, hard03a, hard04a, hard05a, hard06a];



////////////////////////////////////////////////////// TIMER //////////////////////////////////////////////////////////
var timeTaken=0;
//window.onload = start;
id("start").onclick = start;
id("stop").onclick = stop;
id("show-ans").onclick = showans;
id("game").style.visibility = "hidden";

/////////////////////////////////////////////////////PLAY BUTTON//////////////////////////////////////////////////////////////
function start() {
  num = Math.floor((Math.random() * 6));
  timer = setInterval(function(){
  id("start").style.display = "none";
  id("title-p").style.display = "none";
  id("tit-p").style.display = "none";
  id("choice-diff").style.display = "none";
  id("stop").style.display = "inline";
  id("show-ans").style.display = "inline";
  id("new-game").style.display = "inline";
  id("game").style.visibility = "visible";
  timeTaken++;
  id("time").innerHTML = timeConversion(timeTaken);
  },1000);
  if (document.getElementById("easy").checked) {
    choicesArray = easyPuzzle[num];
    ansCheck = easyAns[num];
  }
  else if (document.getElementById("int").checked){
    choicesArray = intPuzzle[num];
    ansCheck = intAns[num];
  }
  else if (document.getElementById("hard").checked){
    choicesArray = hardPuzzle[num];
    ansCheck = hardAns[num];
  }
  let board;
  compAnsw = ansCheck;
  board = choicesArray;
  generateBoard(board);
};


///////////////////////////////////////////////////I'M DONE BUTTON///////////////////////////////////////////////////////////////////////////
ans=[]
function stop(){
  clearInterval(timer);
  var fullTime = timeConversion(timeTaken);
  id("content").style.display = "none";
  let tiles = qsa(".tile");
  for (let i=0; i<tiles.length; i++){
      if (tiles[i].children.length != 0){
        for (let i=0; i<tiles.length; i++){
            if (tiles[i].innerHTML[10]=="="){
              ans.push({image: tiles[i].innerHTML.slice(98,105)});
            }
            else {
              ans.push({image: tiles[i].innerHTML.slice(10,17)});
            }
            }

              userAnsw = ans;
              if (JSON.stringify(userAnsw) === JSON.stringify(compAnsw)) {
                      id("display-time").innerHTML = "<h2> You finished this puzzle in " + fullTime + ".<br> You will be redirected to play a new game in 3 seconds. </h2>";
                      setTimeout(function () {
                          window.location.href = "game.html";
                          window.clearTimeout(tID);		// clear time out.
                      }, 3000);
                    } else {
                      id("display-time").innerHTML = "<h2> uh-oh, your answer is wrong! You will be redirected to play a new game in 3 seconds.</h2>";

                      setTimeout(function () {
                          window.location.href = "game.html";
                          window.clearTimeout(tID);		// clear time out.
                      }, 3000);
                    }
  break;
        }
     else {
        id("display-time").innerHTML = "<h2> uh-oh, you've not completed the game. You will be redirected to play a new game in 3 seconds.</h2>";
        setTimeout(function () {
            window.location.href = "game.html";
            window.clearTimeout(tID);		// clear time out.
        }, 3000);
      }
    }
  }

//////////////////////////////////////////FUNCTION TO CHECK ANSWER////////////////////////////////////////////////////////////////

function checkAnswer(compA){compAnsw = compA;}




///////////////////////////////////////////////SHOW ANSWER BUTTON///////////////////////////////////////////////////////////

function showans(){
  id("stop").style.visibility = "hidden";
  id("show-ans").style.visibility = "hidden";
  id("board-ans").style.display = "flex";
  id("board").style.display = "none";
  if (document.getElementById("easy").checked) {
    choicesArray = easyAns[num];
  }
  else if (document.getElementById("int").checked) {
    choicesArray = intAns[num];
  }
  else if (document.getElementById("hard").checked){
    choicesArray = hardAns[num];
  }
  let board;
  board = choicesArray;
  generateBoardAns(board);
}

////////////////////////////////////////TIME CONVERSION FUNCTION///////////////////////////////////////////////////////////////////////

function timeConversion(time){
  let minutes = Math.floor(time/60);
  if (minutes<10) minutes = "0" + minutes;
  let seconds = time % 60;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
}


var timer;

//////////////////////////////////////// GENERATE QUESTION BOARD /////////////////////////////////////////////////////////////////////////////
function generateBoard(board){
  let idCount = 0;
  for (let i=0; i<choicesArray.length; i++){
    var item = choicesArray[i];
    let tile = document.createElement("p");
    if (item.image!=""){
      tile.innerHTML ='<img src="'+item.image+'">';
    } else {}
    tile.id = idCount;
    idCount++;
    tile.classList.add("tile");
    id("board").appendChild(tile);
  }
}

/////////////////////////////////////GENERATE ANSWER BOARD/////////////////////////////////////////////////////////////////////////////
function generateBoardAns(board){
  let idCount = 0;
  for (let i=0; i<choicesArray.length; i++){
    var item = choicesArray[i];
    let tile = document.createElement("p");
    if (item.image!=""){
      tile.innerHTML ='<img src="'+item.image+'">';
    } else {}
    tile.id = idCount;
    idCount++;
    tile.classList.add("tile");
    id("board-ans").appendChild(tile);
  }
}

///////////////////////////////// CHECKING TO SEE IF IMAGE IS SELCTED //////////////////////////////////////////////////////////
for (var i=0; i<qsa("img").length; i++){
qsa("img")[i].addEventListener("click", handleClickImage);
}
////////////////////////////////////// FUNCTION WHEN IMAGE IS SELECTED///////////////////////////////////////////////////////////////
function handleClickImage(){
  clearSelectedImage(); //deselects other images
  clearSelectedTile(); //deselects other tiles
  var alph = this.id;
  id(alph).classList.add("image-selected");
  imageSelected(alph);
  //tile to be selected
  let tiles = qsa(".tile");
  for (let i=0; i<tiles.length; i++){
      tiles[i].addEventListener("click", handleClickTile);
}
}

////////////////////////////////////////// PASSING THE IMAGE TO THE TILE FUNCTION /////////////////////////////////////////
function imageSelected(alpha){
  image = alpha;
}

/////////////////////////////////////// FUNCTION TO HANDLE TILE SELECTION///////////////////////////////////////////////////////////////
function handleClickTile(){
  clearSelectedTile();
  clearRedo();
  var beta = this.id;
  var imageURL = this.children.length;
  if (imageURL!= 1 && image !== "redo"){
      let element = id(beta);
    //checking if the element is correct or incorrect
      element.innerHTML ='<img class="choice-user" src="'+id(image).src+'">'; //image being transferred
      clearSelectedImage();
  id("redo").addEventListener("click", function(){
    id("redo").classList.add("image-selected");
    selectTileAndRemove();
});
} else {}
}

/////////////////////////////////////////// REMOVE THE SELECTED TILE (REDO OPTION)  ///////////////////////////////////////////////////////////////////////////
function selectTileAndRemove(){
  let tiles = qsa(".tile");
  let choices = qsa(".choice-user");
  for (let i=0; i<36; i++){
      choices[i].addEventListener("click", function(){
          //console.log(choices[i]);
          choices[i].remove();
          clearRedo();
          choices = "";
      });
    }
}

///////////////////////////////////////// CLEAR FUNCTIONS ////////////////////////////////////////////////////////////////////////
                                        ///// DESELCTS IMAGE/////
function clearSelectedImage(){
  for (i=0; i<id("image-container").children.length; i++){
  id("image-container").children[i].classList.remove("image-selected");
  }
  image = "";
}
                                      ///// DESELCTS TILEE/////
function clearSelectedTile(){
  for (i=0; i<qsa(".tile").length; i++){
  qsa(".tile")[i].classList.remove("image-selected");
  }
}
                                    ///// DESELCTS REDO OPTION/////
function clearRedo(){
    id("redo").classList.remove("image-selected");
}
