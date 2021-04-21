$(document).ready(function() {
    $('#game').hide();
    $('.carousel-wrapper').hide();
    $('.choiceTheme').hide();
    $('#play').click(function() {
        $('#play').hide();
        $('.carousel-wrapper').show();
        $('.choiceTheme').show();
    });
    function hide(){
        $('#mainMenu').css('display', 'none');
    }
    function show(){
        $('#game').show();
    }



    // $('#containerEnfant5').html("15");
    // var seconds = 15;

    // console.log(seconds);
    // function timer(){
    //     seconds--;
    //     $('#containerEnfant5').html(seconds);
    //     if (seconds == 0) {
    //             clearInterval(timer);
    //             $('#containerEnfant5').html("0");
    //             }
    // };
    // var timer = window.setInterval(timer, 1000);
    

    $('#start').click(function(){
        $('#game').addClass("animate__animated animate__fadeIn");
        setTimeout(show, 300);
        setTimeout(hide, 500);
    })

    // Ajout de la partie game
        $("#redFist").draggable();
        $("#redPaper").draggable();
        $("#redCisors").draggable();

        $("#containerEnfant4").html("0");
        $("#containerEnfant6").html("0");
        $("#containerEnfant1").html("0");
        $("#containerEnfant3").html("0");
        $('#containerEnfant2').html("ROUND </br> 1")
        var roundPlayer = 0;
        var roundComputer = 0;
        var scorePlayer = 0;
        var scorePlayerTotal = 0;
        var scoreComputer = 0;
        var countPlay = 0; 
        var round = 1;

        $(".checkImage1").droppable({ // Définit l'id dans lequel je veux mettre des choses
            drop: function drop(event, ui) { // Déclenche la fonction "drop", (event, ui) permet de faire comprendre que j'utilise jQuery UI
            var randomnumber = Math.floor(Math.random() * 3);
                $(this).css("background-color", "#FEF200"); // "this" évite de réecrire ".checkImage1"
                switch (ui.draggable.attr('id')) { // Préviens que les ID des draggable ne seront pas toujours les mêmes.
                    case "redFist": // Dans le cas où l'id déposé est "redFist", alors...
                        $("#redFist").draggable("option", "disabled", true);
                        $("#redPaper").draggable("option", "disabled", true);
                        $("#redCisors").draggable("option", "disabled", true);
                        $("#redFist").css({"top": "100%", "left": "100%"});
                        break; // break sert à terminer la "condition"
                    case "redPaper": // Dans le cas où l'id déposé est "redPaper", alors...
                        $("#redFist").draggable("option", "disabled", true);
                        $("#redPaper").draggable("option", "disabled", true);
                        $("#redCisors").draggable("option", "disabled", true);
                        $("#redPaper").css({"top": "0", "left": "100%"});
                        break; // break sert à terminer la "condition"
                    case "redCisors": // Dans le cas où l'id déposé est "redCisors", alors...
                        $("#redFist").draggable("option", "disabled", true);
                        $("#redPaper").draggable("option", "disabled", true);
                        $("#redCisors").draggable("option", "disabled", true);
                        $("#redCisors").css({"top": "-100%", "left": "100%"});
                        break; // break sert à terminer la "condition"
                }





                function computer(){ // Cette fonction existe, mais je ne dis pas comment elle se lance pour le moment. (pas de $())
                    if (randomnumber == 0) {
                        $("#blueFist").css({"position": "relative", "top": "100%", "left": "-100%"});
                        $(".checkImage2").css("background-color", "#FEF200");
                        }
                    else if (randomnumber == 1) {
                        $("#bluePaper").css({"position": "relative", "top": "0", "left": "-100%"});
                        $(".checkImage2").css("background-color", "#FEF200");
                        }
                    else {
                        $("#blueCisors").css({"position": "relative", "top": "-100%", "left": "-100%"});
                        $(".checkImage2").css("background-color", "#FEF200");
                    }
                }
               

    



                function result(){
                    switch (ui.draggable.attr('id') + "|" + randomnumber) { // Concatène la valeur du "draggable" (le joueur) avec la valeur du nombre aléatoire (l'ordinateur)
                        case "redFist|0": // Dans le cas où le draggable a pour id "redFist" (donc que le joueur fait Pierre) et que le randomnumber vaut 0 (donc que l'ordinateur fait Pierre)
                        case "redPaper|1": // ET Dans le cas où le draggable a pour id "redPaper" (donc que le joueur fait Feuille) et que le randomnumber vaut 1 (donc que l'ordinateur fait Feuille)
                        case "redCisors|2":// ET Dans le cas où le draggable a pour id "redCisors" (donc que le joueur fait Ciseaux) et que le randomnumber vaut 2 (donc que l'ordinateur fait Ciseaux)
                            $('#result').show();    
                            $('#result').css('text-shadow', 'black 0.1em 0.1em 0.2em')
                            $('#result').css('color', 'white');
                            $('#result').html('Égalité !'); // ALORS on affiche une alert ('égalité')
                            break; // Fin de la première condition.
                        case "redFist|1":
                        case "redPaper|2":
                        case "redCisors|0":
                            $('#result').show();
                            $('#result').css('text-shadow', 'white 0.1em 0.1em 0.2em')
                            $('#result').css('color', 'red');
                            $('#result').html('Aïe !');
                            scoreComputer++;
                            countPlay++;
                            $("#containerEnfant6").html(scoreComputer);
                            break;
                        case "redFist|2":
                        case "redPaper|0":
                        case "redCisors|1":
                            $('#result').show();
                            $('#result').css('text-shadow', 'white 0.1em 0.1em 0.2em')
                            $('#result').css('color', 'green');
                            $('#result').html('Prends-ça !');
                            scorePlayer++;
                            scorePlayerTotal++;
                            countPlay++;
                            $("#containerEnfant4").html(scorePlayer);
                            // $('#containerEnfant2').html('ROUND </br>' + round)
                            break;
                    }
                }
                setTimeout(computer, 2000); // Là, la fonction computer va se lancer, et uniquement au bout de 2000ms (2s). Rappel : Elle fait partie de la fonction "drop"

                setTimeout(result, 2500);

                function newRound(){
                    if (scorePlayer == 3) {
                        round++;
                        scorePlayer = 0;
                        scoreComputer = 0;
                        roundPlayer++;
                        if (roundPlayer == 2) {
                            $("#sound").attr('src', 'assets/sounds/applause.mp3');
                            $("#sound")[0].play();
                            var winAverage = Math.floor((scorePlayerTotal / countPlay) * 100);
                            alert('Tu as gagné ' + 2 + " - " + roundComputer + "\n" + "Pourcentage de victoire : " + winAverage + "%");
                            scorePlayer = scoreComputer = roundPlayer = roundComputer = scorePlayerTotal = countPlay = 0;
                            round = 1;
                        }
                    }
                    else if (scoreComputer == 3) {
                        round++;
                        scorePlayer = 0;
                        scoreComputer = 0;
                        roundComputer++;
                        if (roundComputer == 2) {
                            var winAverage = Math.floor((scorePlayerTotal / countPlay) * 100);
                            alert('Dommage, tu as perdu...' + '\n' + 'Score : ' + roundPlayer + " - " + 2 + "\n" + "Pourcentage de victoire : " + winAverage + "%");
                            scorePlayer = scoreComputer = roundPlayer = roundComputer = scorePlayerTotal = countPlay = 0;
                            round = 1;
                        }
                    }
                    $('#containerEnfant2').html("ROUND </br>" + round)
                    $("#containerEnfant6").html(scoreComputer);
                    $("#containerEnfant4").html(scorePlayer);
                    $("#containerEnfant1").html(roundPlayer);
                    $("#containerEnfant3").html(roundComputer);

                }
                
                setTimeout(newRound, 2500);

                function reset(){
                    $("#blueFist, #bluePaper, #blueCisors, #redFist, #redPaper, #redCisors").css({"top": "0", "left": "0"});
                    $("#redFist, #redPaper, #redCisors").draggable("option", "disabled", false);
                    $(".checkImage1, .checkImage2").css("background-color", "#c2c2c2a8");
                    $('#result').hide();
                }

                setTimeout(reset, 4000);

            }
            
        });
});
  