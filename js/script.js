$(document).ready(function() {

    // Get Information when id of random is clicked
    $("#random").click(function() {
        // Set Up Variable
        let txt = "";
        // Get the List Items
        const listItems = $("li");
        // Get the Number of List Items
        const listItemsLength = listItems.length;
        // Create a new Array
        const listItemsArray = Array(listItemsLength).fill("").map((_,i) => listItems[i].innerHTML);
        // Get the Random Index
        const randomIndex = Math.floor(Math.random() * listItemsLength);
        // Get the Random Celebrity
        const celebrity = listItems[randomIndex].innerHTML;
        // Build the Information
        txt += `There are ${listItemsLength} celebrities.<p>`;
        txt += `The celebrities are ${listItemsArray}.<p>`;
        txt += `${celebrity} is selected at random.`;
        // Display Information in the Browser
        $("#displayinfo").html(txt);
        // Change the Colour of the List Item
        $("li:eq(" + randomIndex + ")").css("color","#D2386C");
    });

    // Reset Information when id of reset is clicked
    $("#reset").click(function() {
        $("displayinfo").html(``);
        $("li").css("color","black");
    });
});