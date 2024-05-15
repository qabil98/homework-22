// task 1  


function kokAltindanCixar(say) {
    if (say < 0) {
        console.log("Mənfi ədədlərin kvadrat kökü real ədəd deyil.");
        return;
    }
    
    let kok = Math.sqrt(say);
    if (Number.isInteger(kok)) {
        console.log(`${say} ədədinin tam kvadrat kökü: ${kok}`);
    } else {
        console.log(`${say} ədədinin tam kvadrat kökü yoxdur.`);
    }
}

let x =prompt("ededi daxil edin")
kokAltindanCixar(x);  







// task 2

function saitVeSamitSay(str){
let saitSay =0;
let samitSay =0;

let lowerStr=str.toLowerCase();

for (let i=0;i<lowerStr.length;i++){
    let char = lowerStr[i];

    switch(char){
        case 'a':
        case 'e':
        case 'i':
        case 'u':
         
          
            saitSay++;
            break

            case 'q':
            case 'w':
        
            case 'r':
            case 't':
            case 'p':
            case 's':
            case 'd':
            case 'f':
            case 'g':
            case 'h':
            case 'j':
            case 'k':
            case 'l':
            case 'z':
            case 'x':
            case 'c':
            case 'v':
            case 'b':
            case 'n':
            case 'm':
                samitSay++
                break;
                default:
                break;




    }
}

console.log(`Saitlərin sayı: ${saitSay}`);
    console.log(`Samitlərin sayı: ${samitSay}`);

}


let text=prompt("yazi daxil edin")

saitVeSamitSay(text);







// task 3\


function arrayiBirlesdir(arr) {
    
    return arr.join('');
}


let arr = [1, "test", 8, "any text"];
let netice = arrayiBirlesdir(arr);
console.log(netice); 






