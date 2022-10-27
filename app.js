

var game = 0;
var turn = 1;
var moves = ["","","","","","","","","",""];
var move_count = 0;

if (game < 1){

    var win = document.getElementById('win');
    function btn_test_1(){
        document.getElementById("b1").disabled = true;
        console.log('button 1');
        if (turn < 1){
            document.getElementById('s1').src = "image/x.png";
            turn += 1;
            moves[1] = "o";
            win_check();
        }else {
            document.getElementById('s1').src = "image/circle.png";
            turn = 0;
            moves[1] = "x";
            win_check();
        }
        document.getElementById('s1').style.display = 'block';
        move_count ++; 
    }
    
    function btn_test_2(){
        console.log('button 2');
        document.getElementById("b2").disabled = true;
        if (turn < 1){
            document.getElementById('s2').src = "image/x.png";
            turn += 1;
            moves[2] = "o";
        }else {
            document.getElementById('s2').src = "image/circle.png";
            turn = 0;
            moves[2] = "x";
        }
        win_check();
        document.getElementById('s2').style.display = 'block';
        move_count ++;
    }

    function btn_test_3(){
        console.log('button 3');
        document.getElementById("b3").disabled = true;
        if (turn < 1){
            document.getElementById('s3').src = "image/x.png";
            turn += 1;
            moves[3] = "o";
        }else {
            document.getElementById('s3').src = "image/circle.png";
            turn = 0;
            moves[3] = "x";
        }
        win_check();
        document.getElementById('s3').style.display = 'block';
        move_count ++; 
    }

    function btn_test_4(){
        console.log('button 4');
        document.getElementById("b4").disabled = true;
        if (turn < 1){
            document.getElementById('s4').src = "image/x.png";
            turn += 1;
            moves[4] = "o";
        }else {
            document.getElementById('s4').src = "image/circle.png";
            turn = 0;
            moves[4] = "x";
        }
        win_check();
        document.getElementById('s4').style.display = 'block';
        move_count ++;
    }
    
    function btn_test_5(){
        console.log('button 5');
        document.getElementById("b5").disabled = true;
        if (turn < 1){
            document.getElementById('s5').src = "image/x.png";
            turn += 1;
            moves[5] = "o";
        }else {
            document.getElementById('s5').src = "image/circle.png";
            turn = 0;
            moves[5] = "x";
        }
        win_check();
        document.getElementById('s5').style.display = 'block';
        move_count ++; 
    }

    function btn_test_6(){
        console.log('button 6');
        document.getElementById("b6").disabled = true;
        if (turn < 1){
            document.getElementById('s6').src = "image/x.png";
            turn += 1;
            moves[6] = "o";
        }else {
            document.getElementById('s6').src = "image/circle.png";
            turn = 0;
            moves[6] = "x";
        }
        win_check();
        document.getElementById('s6').style.display = 'block';
        move_count ++;
    }

    function btn_test_7(){
        console.log('button 7');
        document.getElementById("b7").disabled = true;
        if (turn < 1){
            document.getElementById('s7').src = "image/x.png";
            turn += 1;
            moves[7] = "o";
        }else {
            document.getElementById('s7').src = "image/circle.png";
            turn = 0;
            moves[7] = "x";
        }
        win_check();
        document.getElementById('s7').style.display = 'block';
        move_count ++;
    }
    
    function btn_test_8(){
        console.log('button 8');
        document.getElementById("b8").disabled = true;
        if (turn < 1){
            document.getElementById('s8').src = "image/x.png";
            turn += 1;
            moves[8] = "o";
        }else {
            document.getElementById('s8').src = "image/circle.png";
            turn = 0;
            moves[8] = "x";
        }
        win_check();
        document.getElementById('s8').style.display = 'block';
        move_count ++; 
    }

    function btn_test_9(){
        console.log('button 9');
        document.getElementById("b9").disabled = true;
        if (turn < 1){
            document.getElementById('s9').src = "image/x.png";
            turn += 1;
            moves[9] = "o";
        }else {
            document.getElementById('s9').src = "image/circle.png";
            turn = 0;
            moves[9] = "x";
            
            
        }
        win_check();
        document.getElementById('s9').style.display = 'block';
        move_count ++;
    }

    function btn_reset(){
        console.log(moves);
        console.log("move num = "+ move_count);
        draw_moves = ["1"];
        moves = ["","","","","","","","","",""];
        move_count = 0;
        turn = 1;
         /* to hide all tiles */
        document.getElementById('s1').style.display = 'none';
        document.getElementById('s2').style.display = 'none';
        document.getElementById('s3').style.display = 'none';
        document.getElementById('s4').style.display = 'none';
        document.getElementById('s5').style.display = 'none';
        document.getElementById('s6').style.display = 'none';
        document.getElementById('s7').style.display = 'none';
        document.getElementById('s8').style.display = 'none';
        document.getElementById('s9').style.display = 'none';
        /* to enable buttons */
        document.getElementById("b1").disabled = false;
        document.getElementById("b2").disabled = false;
        document.getElementById("b3").disabled = false;
        document.getElementById("b4").disabled = false;
        document.getElementById("b5").disabled = false;
        document.getElementById("b6").disabled = false;
        document.getElementById("b7").disabled = false;
        document.getElementById("b8").disabled = false;
        document.getElementById("b9").disabled = false;
        /* disables the win message */
        document.getElementById("win").style.display = 'none';
    }

    function win_circle (){
        var win = document.getElementById("win");
        win.innerHTML = "X has won the game! Cick the reset button";
        win.style.display = 'block';
        win.style.top = "150px";
    }

    function win_x (){
        var win = document.getElementById("win");
        win.innerHTML = "Circle has won the game! Cick the reset button";
        win.style.display = 'block';
        win.style.top = "150px";
        
    }


    function draw(){
        var win = document.getElementById("win");
        win.innerHTML = "Its a draw ! Cick the reset button";
        win.style.display = 'block';
        win.style.top = "150px";

    }

    function disable_btn (){
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }

    function win_check(){
        if(move_count == 8){
            draw();
            console.log("its a draw")
        }
        if (moves[1] != "" && moves[1]==moves[2] && moves[2]==moves[3]){
            if (moves[3]== "o"){
                win_circle();
            }else{
                win_x();
            }
            disable_btn ();
        }
        if (moves[4] != "" && moves[4]==moves[5] && moves[5]==moves[6]){
            if (moves[6]== "o"){
                win_circle();
            }else{
                win_x();
            }
            disable_btn ();
        }
        if (moves[7] != "" && moves[7]==moves[8] && moves[8]==moves[9]){
            if (moves[3]== "9"){
                win_circle();
            }else{
                win_x();
            }
            disable_btn ();
        }
        if (moves[1] != "" && moves[1]==moves[4] && moves[4]==moves[7]){
            if (moves[7]== "o"){
                win_circle();
            }else{
                win_x();
            }
            disable_btn ();
        }         
        if (moves[2] != "" && moves[2]==moves[5] && moves[5]==moves[8]){
            if (moves[8]== "o"){
                win_circle();
            }else{
                win_x();
            }
            disable_btn ();
        }
        if (moves[3] != "" && moves[3]==moves[6] && moves[6]==moves[9]){
            if (moves[9]== "o"){
                win_circle();
            }else{
                win_x();
            }
            disable_btn ();
        }
        if (moves[1] != "" && moves[1]==moves[5] && moves[5]==moves[9]){
            if (moves[9]== "o"){
                win_circle();
            }else{
                win_x();
            }
            disable_btn ();
        }  
        if (moves[3] != "" && moves[3]==moves[5] && moves[5]==moves[7]){
            if (moves[7]== "o"){
                win_circle();
            }else{
                win_x();
            }
            disable_btn ();
        }
    }
}




