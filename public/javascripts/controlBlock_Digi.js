"use strict"

var frame,dev_id ,dev, block_name, block_index, pin_index, pin_val;

async function portBlockCommand_Digi() {

    block_index = document.getElementById("numBlock").innerHTML;
    block_name = document.getElementById("blockName").innerHTML;
    dev = document.getElementById(dev_id).innerHTML;

    frame = { dev: dev, port: block_index, maskport: block_name, pin: pin_index, value: pin_val };
    console.log(frame);
    let response = await fetch('https://iot-server-365.herokuapp.com/user/gui/blocks', {
        method: 'post',
        mode: 'cors',
        headers: {
            //'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(frame)
    });

    let datum = await response.json();
    console.log(datum.status);
}

$(document).ready(function () {

    $(".blocki_digi").change(function () {
        let id = $(this).attr("id");
        

        pin_index = parseInt(id.slice(1));
        dev_id = 'd'+pin_index;
        console.log(dev_id);
        if ($(this).prop('checked')) {
            pin_val = 1;
        }
        else {
            pin_val = 0;
        }
        portBlockCommand_Digi();
        console.log(pin_index + "is" + pin_val.toString());
    });
});
