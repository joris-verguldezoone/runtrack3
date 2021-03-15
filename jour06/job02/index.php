<!-- Créez un fichier index.php contenant les balises html de base (doctype,
html, head, body). Créez un fichier style.css et ajouter des propriétés
permettant à votre body d’avoir une couleur de background #88c1d0.
A l’aide des media queries, cette couleur doit évoluer de la façon suivante :

- #ffca4b lorsque la résolution est comprise entre 1680 et 1920
- #275fa0 lorsque la résolution est comprise entre 1280 et 1680
- #ffffff lorsque la résolution est inférieure à 1280 -->
<!DOCTYPE html>
<html class="html" lang="en">
<head>
    <meta name="viewpoint" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <link rel="stylesheet" media="screen and (min-width: )" href="style1.css" />
    <link rel="stylesheet" media="screen and (min-width: 1680px) and (max-width: 1920px)" href="style2.css" />
    <link rel="stylesheet" media="screen and (min-width: 1280px) and (max-width: 1680px)" href="style3.css" />
    <link rel="stylesheet" media="screen and (max-width1920px: 1280px)" href="style4.css" />
</head>


<body>
    
</body>
    <!-- <script type='text/javascript'>

function redimensionnement()
{
    if("matchMedia" in window)
    {
        if(window.matchMedia("(min-width:1680px) and (max-height:1920px)").matches)
        {
            $('head').append("<link rel='stylesheet' href='style2.css'>")
        }
        else if(window.matchMedia("(min-width:1280px) and (max-height:1680px)").matches)
        {
            $('head').append("<link rel='stylesheet' href='style3.css'>")
        }
        else if(window.matchMedia("(max-height:1280px)").matches)
        {
            $('head').append("<link rel='stylesheet' href='style4.css'>")
        }
        else
        {
            $('head').append("<link rel='stylesheet' href='style1.css'>")
        }
    }
}

window.addEventListener('resize', redimensionnement, true);

    </script> -->
</html>

