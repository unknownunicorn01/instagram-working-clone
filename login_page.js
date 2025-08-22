// const onj={
//   name:'someone',
//   class:12,
//   age: 19
// }

// const value = 'someone';
// const key = Object.keys(onj).find(key=>Object(key===value));

// console.log(key);


// let idPasswords= {
//   shikhar_dutta: 'testing123'
// } || JSON.parse(localStorage.getItem('updateIdPass'));

let idPasswords= JSON.parse(localStorage.getItem('updateIdPass')) || {};

function login(){
  let enteredPassword=document.querySelector('.input_password_class').value.trim();
  let enterId = document.querySelector('.input_id_class').value.trim();
  if(idPasswords[enterId] && idPasswords[enterId]===enteredPassword){
    window.location.href="insta.html";
  }
  else{
    alert('Either ID or password is incorrect');
  }
};
function createId(){
  window.location.href="create_id.html";
};

// let updatedIdPass={};
// const save=localStorage.getItem('updateIdPass');
// if(saved){
//   updatedIdPass=JSON.parse(saved);
// }

// let personalInfo={
  
// } || JSON.parse(localStorage.getItem('personalInfo'))

function signUp(){
  let inputNumberEle=document.querySelector('.number_input_class').value.trim();
  let inputPasswordEle=document.querySelector('.password_input_class').value.trim();
  let inputNameEle=document.querySelector('.name_input_class').value.trim();
  let inputUsernameEle=document.querySelector('.username_input_class').value.trim();
  if(inputNumberEle.length===10 && inputPasswordEle && inputNameEle && inputUsernameEle){
    // personalInfo[inputNameEle]=[inputUsernameEle,inputNumberEle,inputPasswordEle];
    idPasswords[inputUsernameEle]=inputPasswordEle;
    // localStorage.setItem('personalInfo',JSON.stringify(personalInfo));
    console.log(JSON.stringify(idPasswords,null,2));
    localStorage.setItem('updateIdPass',JSON.stringify(idPasswords));
    alert(`Account created Succesfully\nYourID:${inputUsernameEle}\nYour password: ${idPasswords[inputUsernameEle]}`)
    // console.log(personalInfo);
    // console.log(updatedIdPass);
  }else{
    alert('make sure you phone number is 10 digit');
  }
};

function forgotPassFun(){
  window.location.href="forgot_pass.html";
}

function backToLogin(){
  window.location.href="login_page.html";
}
function showPasswordFun(){
  let showPassEle=document.querySelector('.forgot_pass_input').value.trim();
  console.log(idPasswords[showPassEle]);
}


function switchAccountFun(){
  window.location.href="login_page.html";
}
// document.querySelector('.my-acc-username').innerText=`${document.querySelector('.username_input_class').value.trim()}`;
function gorilaFun(){
  window.location.href="gorila/privacy2.jpg";
}
function cookieFun(){
  window.location.href="gorila/privacy.jpg";
}
function termsFun(){
  window.location.href="gorila/gorila.jpg";
}
function notAvailable(){
  document.body.innerHTML="Sorry to inform you! Lil bro.<br>This feature is't available right now!!";
}