let language_id = 0;
let difficulty_id = 2;


function load_game() {
    language_refresh(language_id);
}


function language_refresh() {
    if (language_id == 0) {
        list_strings = ["JOGAR", "CONFIGURAÇÕES", "PORTUGUÊS", "VOLTAR", "VERIFICAR"];
        difficulty_strings = ["MUITO FÁCIL", "FÁCIL", "NORMAL", "DIFÍCIL", "MUITO DIFÍCIL"];
    } else if (language_id == 1) {
        list_strings = ["PLAY", "CONFIGURATIONS", "ENGLISH", "BACK", "CHECK"];
        difficulty_strings = ["VERY EASY", "EASY", "NORMAL", "HARD", "VERY HARD"];
    } else {
        list_strings = ["JUGAR", "AJUTES", "SPANISH", "REGRESAR", "COMPROBAR"];
        difficulty_strings = ["MUY FÁCIL", "FÁCIL", "NORMAL", "DIFÍCIL", "MUY DIFÍCIL"];
    }

    list_of_ids = ["play_string", "config_string", "language_string", "back_string", "checker_string"];

    for (index in list_of_ids) {
        document.getElementById(list_of_ids[index]).innerHTML = list_strings[index];
    }

    document.getElementById("difficulty_string").innerHTML = difficulty_strings[difficulty_id];
}


function show_menu() {
    document.getElementById("config").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("game").style.display = "none";
}


function show_game() {
    document.getElementById("config").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";

    generator(difficulty_id);
}


function show_config() {
    document.getElementById("config").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "none";
}


function show_hints() {
    document.getElementById("hints").style.display = "block";
}


function switch_language() {
    language_id = (language_id + 1) % 3;

    language_refresh();
}


function switch_difficulty() {
    difficulty_id = (difficulty_id + 1) % 5;

    language_refresh();
}