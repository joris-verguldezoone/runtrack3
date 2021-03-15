<!-- Créez un fichier index.php contenant les balises html de base (doctype,
html, head, body). Créez un fichier style.css qui contiendra le style de cette
page. Dans votre body, créez 4 sections ayant comme classe “section”.
Mettez la couleur #88c1d0 en background de vos .section. Ajoutez des
medias queries de sorte à respecter le schéma suivant -->

<!DOCTYPE html>
<html class="html" lang="en">
<head>
    <meta name="viewpoint" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <link rel="stylesheet" href="style1.css" />
  
</head>


<body>
<section class="section">1</section>
<section class="section">2</section>
<section class="section">3</section>
<section class="section">4</section>
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

