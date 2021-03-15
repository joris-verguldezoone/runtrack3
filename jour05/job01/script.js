$('#register').click(function () {
    console.log('test1');

    // console.log($("#firstName").val()),
    $.ajax({
        url: "inscription.php",
        type: "post",
        data:
        {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            email: $("#email").val(),
            password: $("#password").val(),
            confirmPassword: $("#confirmPassword").val(),
            // register: 1 
        },
    }).done(function () {
        console.log($("#firstName").val());
        console.log($("#lastName").val());
        console.log($("#email").val());
        console.log($("#password").val());
        console.log($("#confirmPassword").val());
    }).fail(function () {
        console.log('fail');
    });

});
// afficher le formulaire inscription 
$('#inscription').click(function () {
    $.ajax({
        url: "inscription.php",
        type: "POST",
        dataType: "html",

    }).done(function (event) {

        $('#displayForm').append(event);
        $('#link').hide();
        $('#realreturn').show().click(() => {

            $('#link').show();
            $('#displayForm').empty();
            $('#realreturn').hide();
        });
    });

});


/* AFFICHAGE DU FORMULAIRE DE CONNEXION */
// $.ajax({
//     url: "connexion.php",
//     type: "POST",
//     dataType: "json",
//     data:
//     {
//         email: $("#email").val(),
//         password: $("#password").val()
//     },
//     success: function (data) {

//         $('#realreturn').hide();
//         $('#connexion').click(function () {

//             $('#displayForm').append(data);
//             $('#link').hide();
//             $('#realreturn').show().click(() => {

//                 $('#link').show();
//                 $('#displayForm').empty();
//                 $('#realreturn').hide();
//             });
//         });
//     }
// });