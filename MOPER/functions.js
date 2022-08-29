function create_table(difficulty_id, list, operators_list) {
    html = `<div class="center"><img src="images/arrow.png" class="arrow reverse" id="arrow_0" onclick="select('arrow_0')"></div>`;
    qnt_squares = difficulty_id + 2 

    for (let index = 0; index < qnt_squares; index++) {
        html += `<div class="square" id="number_${index}" onclick="select('number_${index}')">${numbers_list[index]}</div>`;

        if (index != qnt_squares - 1) {
            html += `<div class="square" id="square_${index}" onclick="select('square_${index}')">${operators_list[index]}</div>`;
        } 
    }

    html += `<div class="center"><img src="images/arrow.png" class="arrow" onclick="select('arrow_1')"></div>`;

    document.querySelector("#table").innerHTML = html;


    html = '';
    operators = ["+", "-", "x", "/"];

    for (let index = 0; index < 4; index++) {
        html += `<div class="center"><div class="square" id="operator_${index}" onclick="select('operator_${index}')">${operators[index]}</div></div>`;
    }

    document.querySelector("#operators").innerHTML = html;


    for (let index = 0; index < difficulty_id + 2; index++) {
        numbers.push("number_" + toString(index));
    }

    for (let index = 0; index < difficulty_id + 1; index++) {
        empty.push("empty_" + index);
    }

    for (let index = 0; index < 2; index++) {
        arrows.push("arrow_" + index);
    }

    for (let index = 0; index < 4; index++) {
        operators.push("operator_" + index);
    }
}


function arrow(id) {
    if (id == "arrow_0") {
        value = numbers_list[numbers_list.length - 1];

        numbers_list.pop();
        numbers_list.unshift(value);
    }

    else {
        value = numbers_list[0];

        numbers_list.shift();
        numbers_list.push(value);
    }
    
    create_table(difficulty_id, numbers_list, operators_list);
}





async function select(id) {
    console.log(id);
    
    if (arrows.indexOf(id) != -1) {
        arrow(id);
    }

    else if (operators.indexOf(id) != -1) {
        console.log(document.getElementById(id).style.top);
    }

}