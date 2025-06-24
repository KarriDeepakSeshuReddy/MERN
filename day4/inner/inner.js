
// function formValidate(){
//     const fname=document.getElementsByName("First Name")[0].value;
//     const lname=document.getElementsByName("Last Name")[0].value;
//     const email=document.getElementsByName("Email")[0].value;
//     const pass=document.getElementsByName("Password")[0].value;


//     if(fname.length==0){
//         alert("First Name can not be empty");
//         return;
//     } 
    
//     if(lname.length==0) {
//         alert("Last Name can not be empty");
//         return;
        
//     }
    
//     check=false;
//     if(email.length==0){
//         alert("Email field can't be empty");
//         return;
        
//     }
//     else{
//         for(let i=0;i<email.length;i++){
//             if(email[i]=='@'){
//                 check=true;
//                 break;
//             }
//         }
//         if(!check) {
//             alert("Email must contain @");
//             return;
//         }
//         valid=true;
//     }

//     if(pass.length<8){
//         alert ("Password must be greater than 8 chars");
//         return;
//     }
    
//     let caps=false;
//     let nums=false;
//     for(let i=0;i<pass.length;i++){
//         if(pass[i]>='A' && pass[i]<='Z'){
//             caps=true;
//         }
//         if(!isNaN(pass[i])){
//             nums=true;
//         }
//     }
//     if(!caps){
//         alert("Password must contain atleast one Capital letter");
//         return;
//     }
//     if(!nums){
//         alert("Password must contain atleast one Number");
//         return;
//     }
//     console.log("first name is: ",fname);
//     console.log("password is :",pass);
//     function toggle() {
//         const form = document.getElementsByTagName("form")[0];
      
//         form.classList.toggle("form2");
//       }
      
// }


function formValidate() {
    const firstName = document.getElementsByName("First Name")[0].value;
    const lastName = document.getElementsByName("Last Name")[0].value;
    const email = document.getElementsByName("Email")[0].value;
    const pass = document.getElementsByName("Password")[0].value;
  
    if (!firstName.length || !lastName.length || !email.length || !pass.length) {
      alert("Some Fields are Empty!");
      return;
    }
  
    if (!email.includes("@")) {
      alert("Email is Invalid!");
      return;
    }
  
    if (!checkText(password)) {
      alert("Password not follows the rule!");
      return;
    }
  
    alert("Form Submitted Successfully!");
    return;
  }
  
  //style
  // const form = (document.getElementsByTagName("form")[0].style.backgroundColor = "green");
  
  //add class
  // document.getElementsByTagName("form")[0].classList.add("myform");
  
  //remove class
  // document.getElementsByTagName("form")[0].classList.remove("myForm2");
  
  //toggle class
  function toggle() {
    const form = document.getElementsByTagName("form")[0];
  
    form.classList.toggle("form2");
  }
  