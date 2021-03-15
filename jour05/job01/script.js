$('#tamere').click(function () {
    console.log('test1');

    // console.log($("#firstName").val()),
    $.ajax({
        url: "inscription.php",
        type: "post",
        // dataType: 'json', // what type of data do we expect back from the server
        // async: true, // ça marche sans , j'ai juste reload le js dans inscription
        data:
        {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            email: $("#email").val(),
            password: $("#password").val(),
            confirmPassword: $("#confirmPassword").val(),
            tamere: 1,
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
         
    }).done(function (event) {
        
        $('#displayForm').append(event);
        $('#link').hide();
        $('#realreturn').show().click(() => {
            
            $('#link').show();
            $('#displayForm').empty();
            $('#realreturn').hide();
            $('#register').show();

        });
    });

});


/* AFFICHAGE DU FORMULAIRE DE CONNEXION */
$.ajax({
    url: "connexion.php",
    type: "POST",
    // dataType: "json",
    data:
    {
        email: $("#email").val(),
        password: $("#password").val()
    },
    success: function (data) {

        $('#realreturn').hide();
        $('#connexion').click(function () {

            $('#displayForm').append(data);
            $('#link').hide();
            $('#realreturn').show().click(() => {

                $('#link').show();
                $('#displayForm').empty();
                $('#realreturn').hide();
            });
        });
    }
});

$('#tonpere').click(function () {
    console.log('test1');

    // console.log($("#firstName").val()),
    $.ajax({
        url: "inscription.php",
        type: "post",
        // dataType: 'json', // what type of data do we expect back from the server
        // async: true, // ça marche sans , j'ai juste reload le js dans inscription
        data:
        {
            email: $("#email").val(),
            password: $("#password").val(),
            tonpere: 1,
        },
    }).done(function () {
        
        console.log($("#email").val());
        console.log($("#password").val());
  
    }).fail(function () {
        console.log('fail');
    });

});