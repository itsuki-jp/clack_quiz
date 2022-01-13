let quizs = [{
    question: "織田信長の誕生日",
    choice: ["1534", "2002", "1500", "1600"],
    answer: 0,
    num: 4
}];

let quiz = quizs[0];
let q_question = document.getElementById("question");

q_question.innerHTML = `<h2>${quiz.question}</h2>`;
let q_choice = document.getElementById("choice");

for (let i = 0; i < quiz.num; i++) {
    q_choice.innerHTML += `<input type="radio" name="choice" value="${i}" id="q${i}"><label for="q${i}">${quiz.choice[i]}</label>`;
}

const send_ans = document.getElementById("verify_btn");
send_ans.onclick = ev => {
    let user_input = -1;
    for (let i = 0; i < quiz.num; i++) {
        let current_num = "q" + i;
        let current_choice = document.getElementById(current_num);
        if (current_choice.checked) {
            user_input = i;
        }
    }
    let dis_TF = document.getElementById("display_TF");
    if (user_input == quiz.answer) {
        dis_TF.innerHTML = '<p>正解!!!<\p>';
    } else {
        dis_TF.innerHTML = '<p>不正解...<\p>';
    }
    console.log(user_input);
}