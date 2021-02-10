"use strict";

let hoverIn = function () {
    $(this).toggleClass("toggleClass");
    // $(this).css({
    //     backgroundColor: "black",
    //     color: "white"
    // });
};

// let hoverOut = function () {
//     $(this).css({
//         backgroundColor: "",
//         color: ""
//     });
// };

$(".card").hover(hoverIn/*, hoverOut*/);

$(".card").click(function () {
    $(this).toggleClass("toggleClass");
});

$(".list-group > li").dblclick(function () {
    $(this).text("double clicked");
    $(this).click(function () {
        $(this).text("no double click");
    });
});

function getInputData() {
    let first = $("#first").val();
    let last = $("#last").val();
    let handleField = $("#handleField").val();

    return {
        id: 4,
        firstName:first,
        lastName: last,
        handleField: handleField
    };
}
$("#submitBtn").click(function () {
    // console.log(getInputData());
    let inputData = getInputData();
    let cellCount = $("tr").first().children().length;
    // console.log(cellCount);
    let tableRow = $("<tr></tr>");
    // console.log(tableRow);

    for (let i = 0; i <= cellCount; i += 1) {
        let td1 = $("<td></td>").text(inputData.id);
        let td2 = $("<td></td>").text(inputData.firstName);
        let td3 = $("<td></td>").text(inputData.lastName);
        let td4 = $("<td></td>").text(inputData.handleField);

        tableRow.append([td1, td2, td3, td4]);
        console.log(tableRow);

        tableRow.appendTo($("tbody"));
        // $("tbody").append(tableRow);
    }
});
