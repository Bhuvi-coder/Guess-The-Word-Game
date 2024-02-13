player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn : "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn : "+player2_name;

function send()
{
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);

    c1=word.charAt(1);
    console.log(c1);
    l=Math.floor(word.length/2);
    c2=word.charAt(l);
    console.log(c2);
    lm=word.lenght-1;
    c3=word.charAt(lm);
    console.log(c3);

    r1=word.replace(c1,"_");
    r2=r1.replace(c2,"_");
    r3=r2.replace(c3,"_");
    console.log(r3);

    qw="<h4 id='word_display'> Question : "+r3+"</h4>";
    ib="<br> Answer : <input type='text' id='input_check_box'>";
    cb="<br><br> <button class='btn btn-info' onclick='check()'>Check </button>";
    row=qw+ib+cb;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

answer_turn= "player2";
question_turn="player1";

function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log(answer);

    if (answer==word)
    {
        if (answer_turn=="player1")
        {
            player1_score=player1_score+1;
document.getElementById("player1_score").innerHTML=player1_score;
        }
        else
        {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if (question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn : "+player2_name;
    }
    else
    {
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn : "+player1_name;
    }

    if (answer_turn=="player1")
    {
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn : "+player2_name;
    }
    else
    {
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn : "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}