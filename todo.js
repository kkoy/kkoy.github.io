const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
// document.querySelector("#todo-form input") 과 동일
//1. toDoInput을 전체 document(전체 html)에서 찾아보기
//2. toDoInput을 toDoForm안에서만 찾아보기 (우리가 이미 toDoForm을 찾아놔서'')
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //array만들기

function saveToDos(){ //이 함수는 ToDos array의 내용을 localStorage에 넣는 것을 함.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify() : js object나 array나 어떤 것이든 string으로 바꿔주는 기능이다.
    //array 모양으로 저장됨!!["a","b","c"]
    //JSON.parse : string을 js object(ex)배열?)로 만들어주기
}


function deleteToDO(event){
    const li = event.target.parentElement; //target은 클릭된 html element //이게 우리가 삭제하고 싶은 li다.
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //li.id type is string. toDo.id type is number. 그래서 문자열을 숫자로 바꿔주기
    saveToDos();
}

function paintToDo (newTodo){ //newTodo=텍스트 //newTodo를 object로 바꾸기
    //console.log("i will paint", newTodo); //html <li>랑 같음. 즉, list item을 만들어서 그것을 ul에 추가할것 
    const li = document.createElement("li"); //("li")여기의 li만 무조건 li 여야함.
    li.id = newTodo.id;
    //li  내부에 span을 만들고 싶다. 왜냐면 todo 를 지우고 싶어서?
    const span = document.createElement("span");
    span.innerText = newTodo.text; //46줄
    const button = document.createElement("button"); //버튼만들기
    button.innerText = "✔️"; //버튼 이모지

    button.addEventListener("click", deleteToDO)

    li.appendChild(span); //li는 span이라는 자식을 갖게 됨. 즉 li 안에 span이 있다?
    li.appendChild(button); //span추가 다음 버튼추가
    toDoList.appendChild(li); //append는 늘 맨 마지막에 놓기
}

function handleToDoSubmit(event){
    event.preventDefault(); //작동x
    const newTodo = toDoInput.value; //input value 를 비우기 전에 값저장
    toDoInput.value ="";
    //입력값넣으면 사라지기. ""=empty. 하지만 newtodo에는 영향이 없음.
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    //paintToDo가 그려질때마다 그 텍스트를 array에 push -> array를 localStorage에 넣기. 근데? array는 못넣음 only text넣을 수 있음.
    paintToDo(newTodoObj); //오직 text인 newTodo만 가지고 있음. //newTodo를 object로 바꾸기
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
//local storage에 아무것도 없으면 null이 나옴.

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo); //array라서 foreach 가짐. js는 array에 있는 각각의 item에 대해 function을 실행하게 해줌.
    //parsedToDos.forEach((item) => console.log("this is the turn of", item)); 함수를 짧게 쓰는 법//parsed~에 있는 각각의 item에 대해서 콘솔로그할거라는 것.
    //=> :arrow function 화살표 함수
    //forEach는 paintToDo를 parsedToDos배열의 요소마다 실행. 각각의 item을 줘. item이 object가 되는 것이다.
}

//item을 제거하는게 아니라 item 을 제외하고 새 array를 만드는 것임. 


