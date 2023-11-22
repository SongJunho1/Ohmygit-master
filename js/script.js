function paragraph_onmouseover(){
  yourstyle.style.display="";
}

function paragraph_onmouseout(){
  yourstyle.style.display="none";
}
function paragraph1_onmouseover(){
  yourstyle1.style.display="";
}

function paragraph1_onmouseout(){
  yourstyle1.style.display="none";
}
function paragraph2_onmouseover(){
  yourstyle2.style.display="";
}

function paragraph2_onmouseout(){
  yourstyle2.style.display="none";
}
function paragraph3_onmouseover(){
  yourstyle3.style.display="";
}

function paragraph3_onmouseout(){
  yourstyle3.style.display="none";
}

function paragraph4_onmouseover(){
  yourstyle4.style.display="";
}

function paragraph4_onmouseout(){
  yourstyle4.style.display="none";
}
function paragraph5_onmouseover(){
  yourstyle5.style.display="";
}

function paragraph5_onmouseout(){
  yourstyle5.style.display="none";
}
function login() {
  var id = document.querySelector('#id');
  var pw = document.querySelector('#pw');
  if(id.value == "" || pw.value == ""){
    alert("로그인을 할 수 없습니다.")
  }
  else{
    location.href = 'index.html';
  }
}
function back(){
  history.go(-1);
}
function create_id(){
  var id = document.querySelector('#id');
  var pw = document.querySelector('#pw');
  var r_pw = document.querySelector('#r_pw');

  if(id.value == "" || pw.value == "" || r_pw.value == ""){
    alert("회원가입을 할 수 없습니다.")
  }
else{
  if(pw.value !== r_pw.value){
    alert("비밀번호를 확인해주세요.")
  }
  else{
    location.href = 'login.html';
  }
}
}



