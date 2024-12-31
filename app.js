let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let updateValue = (value) => {
    if(input.value=='0'){
        input.value = value;
    }else{
        input.value+=value;
    }
} 

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        let buttonValue = button.innerText;
        if(buttonValue=="AC"){
            input.value="0";
        }else if(buttonValue=="DEL"){
            input.value=input.value.slice(0,-1);
        }else if(buttonValue=="="){
            calculate();
        }
        else{
            updateValue(buttonValue);
        }
    });
});
let calculate = ()=>{
    try{
        input.value=eval(input.value);
    }catch (e){
        input.value='Error';
    }
}
document.addEventListener('keydown',(event)=>{
    if(event.key=="Enter"){
        calculate();
    }
})