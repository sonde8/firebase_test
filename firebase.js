const firebaseConfig = {
    apiKey: "AIzaSyCCrGQj0XbfLWxOqrjtSaBd1tREiyaGtYk",
    authDomain: "project-sj-377e1.firebaseapp.com",
    databaseURL: "https://project-sj-377e1-default-rtdb.firebaseio.com",
    projectId: "project-sj-377e1",
    storageBucket: "project-sj-377e1.appspot.com",
    messagingSenderId: "139333615090",
    appId: "1:139333615090:web:f3b33f5f70f875ada4bf6b",
    measurementId: "G-4X36J3HD07"
};

// 파이어베이스 앱 초기화
const app = firebase.initializeApp(firebaseConfig);

// 파이어베이스 실시간 데이터베이스 생성
const database = firebase.database();

// 데이터 저장 실습
function writeUserData(userId, email, nick) 
{
    database.ref("users/"+userId).set({
        email : email,
        nick : nick
    });
}

// 데이터 읽기 실습
// 1. 전체 조회된 결과 결과
//  - 테이블 태그 or 목록 태그를 활용해서 출력

// 2. 특정 사용자 조회
//  - id값 입력 받은 후 해당 사용자의 email, nick
function readUserData(){
    database.ref("users/").on('value', (snapshot)=>{
        // 실시간 데이터베이스 값 접근
        console.log(snapshot.val());
        
        let data = snapshot.val();
        let keys = Object.keys(data)

        console.log(Object.keys(data)); 
        console.log(data[0]);
        console.log(keys[0]);

        const result = document.getElementById("result");

        // 데이터베이스 웹 페이지 출력
        result.innerText =`${data[keys[0]].email} / ${data[keys[0]].nick}`;



    })
}

//////////////////////////////////////////////////////////////////////////////////////

const sub1 = document.frm.sub1;
const readBtn = document.getElementById("readBtn");

readBtn.addEventListener("click", ()=>{
    readUserData();
});


sub1.addEventListener("click", (event) => {
    event.preventDefault();

    const id = document.frm.id.value
    const email = document.frm.email.value
    const nick = document.frm.nick.value

    console.log(id, email, nick);

    writeUserData(id, email, nick)
})