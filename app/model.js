export function changePage(pageID){
    console.log(pageID);
    $.get(`pages/${pageID}.html`, function(data){
        $("#app").html(data);
    }).fail((error) => {
        console.log("error ", error.status);
        if(error.status == "404"){
            alert("Page cannot be found. Please check your url.");
        }
    });
}