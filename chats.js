const URL= "JOKE_API LINK";

const news_api = "API_KEY";
const newsLink = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${news_api}`;



function speak(text) {
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";  // set language
  utterance.rate = 1;        // speed (0.5 = slow, 2 = fast)
  utterance.pitch = 1;       // voice pitch
  window.speechSynthesis.speak(utterance);
}

let toSpeak_str = "savagebaba05";

// let newsFunc = async () => {
//   try{
//     let responce = await fetch(newsLink);
//     if(!responce.ok){
//       throw new Error("ERROR: "+responce.status);
//     }
//     console.log(responce.status);

//     let data = await responce.json();
//     console.log(data);

//     data.articles.forEach(article => {
//     // data.results.forEach(article => {
//       // speak(article.title + ". " + article.description);
//       speak(article.title+". ");
//     });
//   }
//   catch(error){
//     console.log("ERROR! :"+error);
//   }
// }


let tamanna = () =>{
  let newMessage = document.createElement("div");
  newMessage.setAttribute("class","chat_block");
  newMessage.innerHTML=`<img class="chat_img" src="images/tamanna.jpg">
  <div class="message_info">
    <div class="message_name message_name2">
      Tamanna Bhatia
    </div>
    <div class="message_text message_text2">
      Atleast Reply!<span class="time_ago">. now</span>
    </div>
  </div>`
  newMessage.addEventListener("click",toTamanna);
  let newParaEle = document.querySelector(".bellow_message_div");
  
  let deleteChile = newParaEle.children[4];
  if(deleteChile){
    newParaEle.removeChild(deleteChile);
  }

  if (newParaEle.children.length > 0) {
    newParaEle.insertBefore(newMessage, newParaEle.children[1]);
  } else {
    newParaEle.append(newMessage);
  }

  

  toSpeak_str = 'tamnna';
}

let mrunal = ()=>{
  let newMessage = document.createElement("div");
  newMessage.setAttribute("class","chat_block");
  newMessage.innerHTML=`<img class="chat_img" src="images/mrunal.jpg">
  <div class="message_info">
    <div class="message_name message_name2">
      Mrunal Thakur
    </div>
    <div class="message_text message_text2">
      Want to be a hero in my new movie?<span class="time_ago">. now</span>
    </div>
  </div>`
  newMessage.addEventListener("click",toMrunal);
  let newParaEle = document.querySelector(".bellow_message_div");
  if (newParaEle.children.length > 0) {
    newParaEle.insertBefore(newMessage, newParaEle.children[1]);
  } else {
    newParaEle.append(newMessage);
  }
}

let shikhar = ()=>{
  let newMessage = document.createElement("div");
  newMessage.setAttribute("class","chat_block");
  newMessage.innerHTML=`<img class="chat_img" src="images/savagebaba05.jpg" onclick="toShikhar()">
  <div class="message_info">
    <div class="message_name">
      Shikhar Dutta
    </div>
    <div class="message_text">
      you: tell me a joke<span class="time_ago">. now</span>
    </div>
  </div>`
  newMessage.addEventListener("click",toShikhar);
  let newParaEle = document.querySelector(".bellow_message_div");
  if (newParaEle.children.length > 0) {
    newParaEle.insertBefore(newMessage, newParaEle.children[1]);
  } else {
    newParaEle.append(newMessage);
  }
  
}

let goku = ()=>{
  toSpeak_str = 'goku';
  let newMessage = document.createElement("div");
  newMessage.setAttribute("class","chat_block");
  newMessage.innerHTML=`<img class="chat_img" src="images/goku.jpg">
  <div class="message_info">
    <div class="message_name message_name2">
      Son Goku
    </div>
    <div class="message_text message_text2">
      I heard you are strong?<span class="time_ago">. now</span>
    </div>
  </div>`
  newMessage.addEventListener("click",toGoku);
  let newParaEle = document.querySelector(".bellow_message_div");
  if (newParaEle.children.length > 0) {
    newParaEle.insertBefore(newMessage, newParaEle.children[1]);
  } else {
    // if no children, just append
    newParaEle.append(newMessage);
  }
}

let joke ="";
let messageText1 = (lol1) => {

  let containerEle = document.querySelector(".chat_container");
  let newText2 = document.createElement("div");
  newText2.setAttribute("class","person_chat_div");
  let newPara2 = document.createElement("p");
  newPara2.innerText = lol1;
  newPara2.setAttribute("class","person_chat");
  newText2.append(newPara2);
  containerEle.append(newText2);
  let speakImg = document.createElement("div");
  speakImg.setAttribute("class","speakImg_class_div");
  speakImg.innerHTML=`<img class="speakImg_class2" src="logo/speaker.svg">`;
  newText2.append(speakImg);
  
  let speaker_image = document.querySelector(".speakImg_class2");
  speaker_image.addEventListener("click",()=>speak(lol2));
}

let messageText2 = (lol2) => {
  let containerEle = document.querySelector(".chat_container");
  let newText3 = document.createElement("div");
  newText3.setAttribute("class","person_chat_div");
  let newPara3 = document.createElement("p");
  newPara3.innerText = lol2;
  newPara3.setAttribute("class","person_chat");
  newText3.append(newPara3);
  containerEle.append(newText3);
  let speakImg = document.createElement("div");
  speakImg.setAttribute("class","speakImg_class_div");
  speakImg.innerHTML=`<img class="speakImg_class" src="logo/speaker.svg">`;
  newText3.append(speakImg);

  let person_text = document.querySelector(".person_chat").value;

  let speaker_image = document.querySelector(".speakImg_class");
  speaker_image.addEventListener("click",()=>speak(lol2));
  
}

let no = 0;
let func = async () =>{
  // let textEle = document.querySelector(".input_message").value;
  // if(textEle === ""){
  //   console.log("no message");
  // }
  // else{
  //   console.log("geting API...");
  //   let responce = await fetch(URL);
  //   console.log(responce.status);
  //   let data = await responce.json();
  //   let lol1 = `${data.setup}`;
  //   let lol2 = `${data.punchline}`;
    
  //   console.log(textEle);
  //   let newText = document.createElement("div");
  //   newText.setAttribute("class","user_chat_div");
  //   let newPara = document.createElement("p");
  //   newPara.innerText = textEle;
  //   newPara.setAttribute("class","user_chat");
  //   let containerEle = document.querySelector(".chat_container");
  //   newText.append(newPara);
  //   containerEle.append(newText);
  //   // messageText1(lol1);
  //   // messageText2(lol2);
    // setTimeout(() => messageText1(lol1), 2000);

    // setTimeout(() => messageText2(lol2), 4000);
// }

  let textEle = document.querySelector(".input_message").value;
  if(textEle === ""){
    console.log("no message sent");
  }
  else{
    let newText = document.createElement("div");
    newText.setAttribute("class","user_chat_div");
    let newPara = document.createElement("p");
    newPara.innerText = textEle;
    newPara.setAttribute("class","user_chat");
    let containerEle = document.querySelector(".chat_container");
    newText.append(newPara);
    containerEle.append(newText);
    if(toSpeak_str ==='savagebaba05'){
      if(textEle.includes('not') || textEle.includes('no') || textEle.includes('dont')){
        lol1 = "as you wish brother";
        lol2 = "just tell me whenever you want to hear a joke"
      }
      else if(textEle.includes('joke')){
        console.log("geting API...");
        let responce = await fetch(URL);
        console.log(responce.status);
        let data = await responce.json();
        lol1 = `${data.setup}`;
        lol2 = `${data.punchline}`;
        // lol1 = "nice meeting you bro!";
        // lol2 = "all the best"
      }
      else{
        lol1 = "helo bro, it's nice meeting you again!";
        lol2 = "want to listen a joke?";
      }
    }
    else if(toSpeak_str === 'tamanna'){
      if(textEle === 'no'){
        lol1 = "why?"
        lol2 = "let's go together na?"
      }
      else{
        lol1 = "Fantastic!"
        lol2 = "want to go out for a movie?"
      }
    }
    else if(toSpeak_str === 'goku'){
      lol1 = "Hey! it's me, Goku"
      lol2 = "All the best for your project buddy!";
    }
    else if(toSpeak_str === 'arnab'){
      if(textEle.includes('news')){
        lol1 = "Wait, geting news."
        try{
          let responce = await fetch(newsLink);
          if(!responce.ok){
            throw new Error("ERROR: "+responce.status);
          }
          console.log(responce.status);

          let data = await responce.json();
          console.log(data);

          lol2 ="";
          // data.results.forEach(article => {
          data.articles.forEach(article => {
            // speak(article.title + ". " + article.description);
            console.log(`${article.title}+". "`);
            lol2 += article.title+". ";
          });
        }
        catch(error){
          console.log("ERROR! :"+error);
        }
      }
      else{
        lol1 = "I am here only to tell news, not for other requests\nIf you have another request you may find another chat bot usefull.";
        lol2 = "By the way all the best for you model buddy!"
      }
        // lol2 = "Today's news gose like this..."

    }
    else if(toSpeak_str === 'anu'){
      lol1 = "Muja nahi pata tu Mumbai aa raha ha?";
      lol2 = "Aur all the best!";
    }
    else if(toSpeak_str === 'batman'){
      lol1 = "all the best, batman!"
      lol2 = "Whenever you need somthing, just give me a call anytime?"
    }
    else if(toSpeak_str == 'raja'){
      if(textEle === 'no'){
        lol1 = " Aai Aai Aai!\nBhaubali 3 sa jada badi opportunity hai kya tera project?";
        lol2 = "by the way, all the best\nWin this."
      }
      else{
        lol1 = "no problem take your time!"
        lol2 = "all the best"
      }
    }
    setTimeout(() => messageText1(lol1), 1000);

    setTimeout(() => messageText2(lol2), 3000);
    if(no===0){
      setTimeout(() => shikhar(),0);
      setTimeout(() => mrunal(),6000)
      setTimeout(() => goku(),12000)
    }
  }
  no++;

}


let toHome = ()=>{
  window.location.href="insta.html";
};

let  no2 = 0;
let toArnab = ()=>{
  let chat_img = document.querySelector(".upper_left_chat_div");
  chat_img.innerHTML =`<img class="chat_profile_photo" src="images/arnab.jpg">`;
  let chat_info = document.querySelector(".upper_middle_chat_div");
  chat_info.innerHTML = `
          <p class="chat_acc_name">
            Arnav Gowswami
          </p>
          <p class="chat_acc_id_name">
            arnab.gowswami1<img class="blue_tick_class" src="logo/blue_tick.svg">
          </p>`;
  let chat_container = document.querySelector(".chat_container");
  chat_container.innerHTML=``;
  if(no2===0){
    setTimeout(() => tamanna(),5000);
  }
  no2++;
}

let toAnu = () =>{
  let chat_img = document.querySelector(".upper_left_chat_div");
  chat_img.innerHTML =`<img class="chat_profile_photo" src="images/anu.jpg">`;
  let chat_info = document.querySelector(".upper_middle_chat_div");
  chat_info.innerHTML = `
          <p class="chat_acc_name">
            Anu Malik
          </p>
          <p class="chat_acc_id_name">
            anumalikmusic<img class="blue_tick_class" src="logo/blue_tick.svg">
          </p>`;
  let chat_container = document.querySelector(".chat_container");
  chat_container.innerHTML=`
          <div class="person_chat_div">
            <p class="person_chat">
              Tu Mumbai aa raha ha!!
            </p>
          </div>`;
}
let toBatman = () =>{
  let chat_img = document.querySelector(".upper_left_chat_div");
  chat_img.innerHTML =`<img class="chat_profile_photo" src="images/batman.jpg">`;
  let chat_info = document.querySelector(".upper_middle_chat_div");
  chat_info.innerHTML = `
          <p class="chat_acc_name">
            Batman
          </p>
          <p class="chat_acc_id_name">
            dcofficial<img class="blue_tick_class" src="logo/blue_tick.svg">
          </p>`;
  let chat_container = document.querySelector(".chat_container");
  chat_container.innerHTML=`
          <div class="person_chat_div">
            <p class="person_chat">
              Ghotam needs you, Batnam!
            </p>
          </div>`;
}
let toRaja = () =>{
  let chat_img = document.querySelector(".upper_left_chat_div");
  chat_img.innerHTML =`<img class="chat_profile_photo" src="images/raja.jpg">`;
  let chat_info = document.querySelector(".upper_middle_chat_div");
  chat_info.innerHTML = `
          <p class="chat_acc_name">
            S S Rajamouli
          </p>
          <p class="chat_acc_id_name">
            ssrajamouli<img class="blue_tick_class" src="logo/blue_tick.svg">
          </p>`;
  let chat_container = document.querySelector(".chat_container");
  chat_container.innerHTML=`
          <div class="person_chat_div">
            <p class="person_chat">
              Bahubali 3 ma kaam karoge?
            </p>
          </div>`;
}
let toTamanna = () =>{
  let chat_img = document.querySelector(".upper_left_chat_div");
  chat_img.innerHTML =`<img class="chat_profile_photo" src="images/tamanna.jpg">`;
  let chat_info = document.querySelector(".upper_middle_chat_div");
  chat_info.innerHTML = `
          <p class="chat_acc_name">
            Tamanna Bhatia
          </p>
          <p class="chat_acc_id_name">
            tamannaahspeaks<img class="blue_tick_class" src="logo/blue_tick.svg">
          </p>`;
  let chat_container = document.querySelector(".chat_container");
  chat_container.innerHTML=`
          <div class="person_chat_div">
            <p class="person_chat">
              hey, How are you?
            </p>
          </div>
  `;
}

let toGoku = () =>{
  let chat_img = document.querySelector(".upper_left_chat_div");
  chat_img.innerHTML =`<img class="chat_profile_photo" src="images/goku.jpg">`;
  let chat_info = document.querySelector(".upper_middle_chat_div");
  chat_info.innerHTML = `
          <p class="chat_acc_name">
            Son Goku
          </p>
          <p class="chat_acc_id_name">
            songoku<img class="blue_tick_class" src="logo/blue_tick.svg">
          </p>`;
  let chat_container = document.querySelector(".chat_container");
  chat_container.innerHTML=`
          <div class="person_chat_div">
            <p class="person_chat">
              I heard you are strong?<br>Wanna fight?
            </p>
          </div>`;
}

let toShikhar = () =>{
  let chat_img = document.querySelector(".upper_left_chat_div");
  chat_img.innerHTML =`<img class="chat_profile_photo" src="images/savagebaba05.jpg">`;
  let chat_info = document.querySelector(".upper_middle_chat_div");
  chat_info.innerHTML = `
          <p class="chat_acc_name">
            Shikar Dutta
          </p>
          <p class="chat_acc_id_name">
            savagebaba05
          </p>`;
  let chat_container = document.querySelector(".chat_container");
  chat_container.innerHTML=`
    <div class="person_chat_div">
      <p class="person_chat">
        hii
      </p>
    </div>
    <div class="user_chat_div">
      <p class="user_chat">
        hii
      </p>
    </div>
    <div class="person_chat_div">
      <p class="person_chat">
        What's up brother<br> want to listen a joke?
      </p>
    </div>
  `;
  toSpeak_str = "savagebaba05";
}

let toMrunal = () =>{
  let chat_img = document.querySelector(".upper_left_chat_div");
  chat_img.innerHTML =`<img class="chat_profile_photo" src="images/mrunal.jpg">`;
  let chat_info = document.querySelector(".upper_middle_chat_div");
  chat_info.innerHTML = `
          <p class="chat_acc_name">
            Mrunal Thakur
          </p>
          <p class="chat_acc_id_name">
            mrunalthakur<img class="blue_tick_class" src="logo/blue_tick.svg">
          </p>`;
  let chat_container = document.querySelector(".chat_container");
  chat_container.innerHTML=`
          <div class="person_chat_div">
            <p class="person_chat">
              Want to be a hero in my new movie?
            </p>
          </div>`;
}

