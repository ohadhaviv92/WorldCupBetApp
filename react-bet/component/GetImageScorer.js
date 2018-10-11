

export default function GetImageScorer(PlayerName) {

    switch (PlayerName) {
       case "aguero": return require('../images/aguero.png');break ;
       case "andre_silva": return require('../images/andre_silva.png');break ;
       case "costa": return require('../images/costa.png');break ;
       case "coutinho": return require('../images/coutinho.png');break ;
       case "cavani": return require('../images/cavani.png');break ;
       case "dembele": return require('../images/dembele.png');break ;
       case "drio": return require('../images/drio.png');break ;
       case "dybala": return require('../images/dybala.png');break ;
       case "firimno": return require('../images/firimno.png');break ;
       case "grizman": return require('../images/grizman.png');break ;
       case "higuain": return require('../images/higuain.png');break ;
       case "hzard": return require('../images/hzard.png');break ;
       case "icardi": return require('../images/icardi.png');break ;
       case "jesus": return require('../images/jesus.png');break ;
       case "kaien": return require('../images/kaien.png');break ;
       case "lacazet": return require('../images/lacazet.png');break ;
       case "lukaku": return require('../images/lukaku.png');break ;
       case "mertens": return require('../images/mertens.png');break ;
       case "levandowski": return require('../images/levandowski.png');break ;
       case "ronaldo": return require('../images/ronaldo.png');break ;
       case "salah": return require('../images/salah.png');break ;
       case "vardi": return require('../images/vardi.png');break ;
       case "ziru": return require('../images/ziru.png');break ;
       case "warner": return require('../images/warner.png');break ;
       case "other": return require('../images/other.png');break ;
       case "messi": return require('../images/messi.png');break ;
      
   
    default: return require('../images/messi.png');
   
    }
   
   }