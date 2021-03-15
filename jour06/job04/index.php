<!-- Reprenez vos fichiers index.php et style.css. Ajoutez en haut de la page,
un header qui contient une liste de trois liens : Accueil, Présentation,
Contact. Lorsque la résolution est inférieure ou égale à 767. Les liens
disparaissent pour laisser place à un hamburger button. Lorsque l’on clique
sur celui-ci, les liens apparaissent. Si on re-clique, les liens disparaissent. -->
<!-- 
<!DOCTYPE html>
<html class="html" lang="en">
<head>
    <meta name="viewpoint" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <link rel="stylesheet" href="style1.css" />
    <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous">
    </script>
</head>


<body>
    <header>
    
        <script >
                const mediaQueryComputer =  window.matchMedia('(min-width: 769px)')
                const mediaQuery = window.matchMedia('(max-width: 768px)')
                var header = $('header').html('');

                var nav2 = "<nav><ul> <li>Acceuil</li> <li>Presentation</li>  <li>Contact</li></ul></nav>";
                var nav = '<nav role="navigation"><input type="checkbox" /><span></span><span></span><span></span><ul id="menu"><a href="#"><li>Home</li></a><a href="#"><li>About</li></a><a href="#"><li>Info</li></a>      <a href="#"><li>Contact</li></a>     <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a></ul>   </div> </nav>';



function handleTabletChange(e, nav) {
  // Check if the media query is true
  if (e.matches) {
    //   header.contents().remove();
      // Then log the following message to the console
      header.append(nav);             
      console.log('Media Query Matched to lower !')
    }
}
function handleComputerChange(c, nav2) {
    // Check if the media query is true
    if (c.matches) {
        // header.contents().remove();
        // Then log the following message to the console
        header.append(nav2);
        console.log(nav2);
        console.log('Media Query Matched to higher!')
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery, nav)

mediaQueryComputer.addListener(handleComputerChange)

// Initial check
handleComputerChange(mediaQueryComputer, nav2)





                 // Call listener function at run time
                // x.addListener(myFunction) //

            
            </script>         


            
        
    </header>
        <main>

            <article>
                <section class="section">1</section>
                <section class="section">2</section>
                <section class="section">3</section>
                <section class="section">4</section>
            </article>
        </main>
        <p>sans flex:40%; c'est responsive avec taille fixe mais ça peut en mettre 3 au dessus 1 en dessous</p>
</body>
     <script type='text/javascript'>

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
<!-- </html>
 -->
 <!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Job04</title>
    <link rel="stylesheet" media="screen" href="style1.css">
</head>
<body>
    <header class="header">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
            <li><a href='index.php'>Accueil</a></li>
            <li><a href='index.php'>Présentation</a></li>
            <li><a href='index.php'>Contact</a></li>
        </ul>
    </header>
</body>
</html>