var dev;
document.getElementById("choosen").addEventListener("click", function(){
    console.log("button");
    init_data_bar();
    init_data_line();

    setInterval(getData_line, 1000);
    setInterval(getData_bar, 1000);
    setInterval(removeData, 5000);
});