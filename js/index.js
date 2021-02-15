function powerOfCond (height, width, length){
    if(height > 0 && width > 0 && length > 0){
        let square = width * length;
        let power;
        power = square * height * (35/1000);
        return power;
    }else{
        confirm('Не верное значение, попробуете еще раз?');
        main();
    }
}

function calcAmountOfPlinth(width, length) {
    let perimeter = (width + length) * 2;
    let amount = perimeter * 2;
    let amountOfPlinth;
    amountOfPlinth = amount/2;
    return amountOfPlinth;
}

function main(){
    let heightStr = prompt('Enter height of the room');
    let widthStr = prompt('Enter width of the room');
    let lengthStr = prompt('Enter length of the room');
    let height = +heightStr;
    let width = +widthStr;
    let length = +lengthStr;
    let ans = powerOfCond(height, width, length);
    let plinth = calcAmountOfPlinth(width, length);
    alert('Необходимая мощность кондиционера - ' + ans + 'кВт' + '\n' + 'Необходимо купить - ' + plinth + ' плинтуса(ов) по 2 метра' );
}
// main();
//======================================================================================================================
function sumIntNum (start, finish){
    if (start <= finish){
        return start + sumIntNum(start + 1, finish);
    } else {
        return false;
    }
}

function answer (){
    let startStr = prompt ('Enter num 1');
    let start = +startStr;
    let finishStr = prompt('Enter num 2');
    let finish = +finishStr;
    let ans = sumIntNum(start, finish);
    alert(ans);
}
// answer();
//======================================================================================================================
function power(num, degree){
    if (degree % 1 !== 0){
        return false;
    } else {
        let count = 1;
        let pow = 1;
        for (let i = degree; count <= i ; count++){
            pow *= num;
        }
        return pow;
    }
}

function ans(){
    let numStr = prompt('Enter number: ');
    let degreeStr = prompt('Enter degree: ');
    let num = +numStr;
    let degree = +degreeStr;
    alert(power (num, degree));
}

// ans();