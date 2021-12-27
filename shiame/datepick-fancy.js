for (item in CalArray){
    // alert(`${CalArray[item]}`)
    $(`${CalArray[item]}`).datepicker({
        showOn: "button",
        buttonImageOnly: true,
        buttonImage: "calendar.gif",
        showButtonPanel: true,
        altField: `${CalArray[item]}`,
        altFormat: "dd/mm/yy",
        dayNamesMin:[ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ] 
    });
};
