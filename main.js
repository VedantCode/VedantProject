quick_draw_data_set = ['tree', 'paper', 'fish', 'pot', 'cloud'];
timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

function updateCanvas(){
    background("white");
    random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
    console.log(quick_draw_data_set[random_number]);
    sketch = quick_draw_data_set[random_number];
    document.getElementById('sketch_name').innerHTML = 'Sketch_To_Be_Drawn:'+sketch;
    }

function draw(){
check_sketch();
if(drawn_sketch = sketch){
    answer_holder = "set";
    score = score + 1;
    document.getElementById('score').innerHTML = 'score: '+score;
}
}

function check_sketch(){
    timer_counter = timer_counter + 1;
    document.getElementById("timer").innerHTML = 'timer: '+timer_counter;
    console.log("timer_counter");
    if(timer_counter > 400){
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check = "completed"){
        timer_check = "";
        answer_holder = "";
        updateCanvas;
    }
}

function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}