let answer1 = document.getElementById("answer1"); 
let answer2 = document.getElementById("answer2"); 
let answer3 = document.getElementById("answer3");  
let array1=[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let arrayInput1 = document.getElementById("arrayInput1"); 
let arrayLabel1 = document.getElementById("arrayLabel1");
let array2=[1,2,3];
let arrayInput2 = document.getElementById("arrayInput2"); 
let arrayLabel2 = document.getElementById("arrayLabel2");
function add(a,i,l){
   a.push(parseInt(i.value));
    l.textContent = `[${a}]`;
}

function empty(a,l){
    for ( x=a.length; x>0; x-- ) {
        a.pop();
        console.log(x+"-"+a.length);
    };  
    a=[];
    l.textContent =`[${a}]`;
}

function pop(a,l){
    a.pop();
    l.textContent =`[${a}]`;
}

function question1() {
    let txt="";
    console.log(array1);
    array1.forEach(function(x,i){//i-index, x-value of index
        for ( n=i+1; n<array1.length; n++ ) { 
            //the loop is running so that it will compare the index with higher indexes in the array with the rest of the array... if both index values are the same then it makes an array within the current index(i) and changes the value of the matching index(n) to the value of the last index, deletes the last index and sets the loop (n) back one so that it will check the next item against the current one, ensuring not to miss an item... if the current index value is greater then it stores the value, makes it the value of the lesser index, changes the other index value to the stored value and resets the loop ... nothing happens if the current item is lower in value /the loop just continues
            let currentValue = array1[i];
            if (typeof(array1[i])==='object'){
                currentValue=array1[i][0];
            }
            let compareValue = array1[n];
            if (typeof(array1[n])==='object'){
                compareValue=array1[n][0];
            }
            if (currentValue===compareValue){ 
                if (typeof(array1[i])==='object'){
                    array1[i].push(array1[n]);
                } else {
                   array1[i]=[array1[i],array1[n]]; 
                } 
                array1[n]=array1[array1.length-1];
                array1.pop();
                n--;
            }else if (currentValue>compareValue){
                
                let s = array1[i];
                array1[i]=array1[n];
                array1[n]=s;
                n=i;
            }
            //console.log(array1);
        };

        if (i===array1.length-1){
            if (typeof(array1[i])==='object'){
                txt+="["+array1[i]+"]";
            } else {
                txt+=array1[i];
            } 
        }else{
            if (typeof(array1[i])==='object'){
                txt+="["+array1[i]+"], ";
            } else {
                txt+=array1[i]+", ";
            }  
        }    
        
    });  
    answer1.textContent = txt;
}

function question2() { /**Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: `answer([1,2,3], 4)` should return `[1,3]` */
    let numInput = parseInt(document.getElementById("numInput").value); 
    answer2.style.whiteSpace = "pre";
    let txt="";
    array2.forEach(function(x,i){//i-index, x-value of index
       console.log("x="+x);
        for (v=i+1; v<array2.length; v++){
            x=parseInt(array2[i]);
            y=parseInt(array2[v]);
        
            if (x+y===numInput){
                txt += `${x}+${y}=${numInput}\n`
                console.log(txt);
                break;
            }
            console.log ('y='+y);
        }
    });
    
    answer2.textContent = txt ;
}

function question3(){
    let colorInput = document.getElementById("colorInput").value; 
    answer3.textContent = colorInput;
}