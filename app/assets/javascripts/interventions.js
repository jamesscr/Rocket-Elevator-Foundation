$( document ).ready(function() {
    
    // Sets the building selector
    $("select#cust-select").change(function(){
        console.log("Customer has changed");
        console.log($("select#cust-select").val());
        if ($("select#cust-select").val() === "") {
            $("select#build-select option").remove();
            var row = "<option value=\"" + "" + "\">" + "Building" + "</option>";
            $(row).appendTo("select#build-select");
        } else {
            var customerID = $(this).val();
            $.ajax({
                dataType: "json",
                cache: false,
                url: '/get_buildings_by_customer/' + customerID,
                timeout: 5000,
                error: function(XMLHttpRequest, errorTextStatus, error) {
                    alert("Failed to submit : " + errorTextStatus + " ;" + error);
                },
                success: function(data) {
                    // Clear all options from course select
                    $("select#build-select option").remove();
                    //put in a empty default line
                    var row = "<option value=\"" + "" + "\">" + "Building" + "</option>";
                    $(row).appendTo("select#build-select");
                    // Fill course select
                    $.each(data, function(i, j) {
                    row = "<option value=\"" + j.id + "\">" + j.admin_full_name + "</option>";
                    $(row).appendTo("select#build-select");
                    })
                }
            });
        }
    });

    // Sets the battery selector
    $("select#build-select").change(function(){
        console.log("Building has changed");
        console.log($("select#build-select").val());
        if ($("select#build-select").val() === "") {
            $("select#battery-select option").remove();
            var row = "<option value=\"" + "" + "\">" + "Battery" + "</option>";
            $(row).appendTo("select#battery-select");
        } else {
            var buildingID = $(this).val();
            $.ajax({
                dataType: "json",
                cache: false,
                url: '/get_batteries_by_building/' + buildingID,
                timeout: 5000,
                error: function(XMLHttpRequest, errorTextStatus, error) {
                    alert("Failed to submit : " + errorTextStatus + " ;" + error);
                },
                success: function(data) {
                    // Clear all options from course select
                    $("select#battery-select option").remove();
                    //put in a empty default line
                    var row = "<option value=\"" + "" + "\">" + "Battery" + "</option>";
                    $(row).appendTo("select#battery-select");
                    // Fill course select
                    $.each(data, function(i, j) {
                    row = "<option value=\"" + j.id + "\">" + j.id + " - " + j.status + "</option>";
                    $(row).appendTo("select#battery-select");
                    })
                }
            });
        }
    });

    // Sets the column selector
    $("select#battery-select").change(function(){
        console.log("Battery has changed");
        console.log($("select#battery-select").val());
        if ($("select#battery-select").val() === "") {
            $("select#col-select option").remove();
            var row = "<option value=\"" + "" + "\">" + "Column" + "</option>";
            $(row).appendTo("select#col-select");
        } else {
            var batteryID = $(this).val();
            $.ajax({
                dataType: "json",
                cache: false,
                url: '/get_columns_by_battery/' + batteryID,
                timeout: 5000,
                error: function(XMLHttpRequest, errorTextStatus, error) {
                    alert("Failed to submit : " + errorTextStatus + " ;" + error);
                },
                success: function(data) {
                    // Clear all options from course select
                    $("select#col-select option").remove();
                    //put in a empty default line
                    var row = "<option value=\"" + "" + "\">" + "Column" + "</option>";
                    $(row).appendTo("select#col-select");
                    // Fill course select
                    $.each(data, function(i, j) {
                    row = "<option value=\"" + j.id + "\">" + j.id + " - " + j.status + "</option>";
                    $(row).appendTo("select#col-select");
                    })
                }
            });
        }
    });

    // Sets the elevator selector
    $("select#col-select").change(function(){
        console.log("Column has changed");
        console.log($("select#col-select").val());
        if ($("select#col-select").val() === "") {
            $("select#elevator-select option").remove();
            var row = "<option value=\"" + "" + "\">" + "Elevator" + "</option>";
            $(row).appendTo("select#elevator-select");
        } else {
            var columnID = $(this).val();
            $.ajax({
                dataType: "json",
                cache: false,
                url: '/get_elevators_by_column/' + columnID,
                timeout: 5000,
                error: function(XMLHttpRequest, errorTextStatus, error) {
                    alert("Failed to submit : " + errorTextStatus + " ;" + error);
                },
                success: function(data) {
                    // Clear all options from course select
                    $("select#elevator-select option").remove();
                    //put in a empty default line
                    var row = "<option value=\"" + "" + "\">" + "Elevator" + "</option>";
                    $(row).appendTo("select#elevator-select");
                    // Fill course select
                    $.each(data, function(i, j) {
                    row = "<option value=\"" + j.id + "\">" + j.id + " - " + j.status + "</option>";
                    $(row).appendTo("select#elevator-select");
                    })
                }
            });
        }
    });
});