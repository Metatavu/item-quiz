(function () {
  'use strict';

  var LOCKED = false;

  var QueryString = function () {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = decodeURIComponent(pair[1]);
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
        query_string[pair[0]] = arr;
      } else {
        query_string[pair[0]].push(decodeURIComponent(pair[1]));
      }
    }
    return query_string;
  } ();

  var itemData = {
    'patahanko': {
      title: 'Patahanko (pottihaarukka, uhvatta, uhvakka)',
      img: 'img/items/patahanko.jpg',
      text: 'Pitkävartinen rautahaarukka, jolla nostellaan saviruukkuja uuniin ja uunista pois',
    },
    'harkin': {
      title: 'Härkin (hierin)',
      img: 'img/items/harkin.jpg',
      text: 'Nuoresta männystä valmistettu haarapäinen sekoitin, jonka päässä on 4–7 oksahaaraa.',
    },
    'varpuvispila': {
      title: 'Varpuvispilä',
      img: 'img/items/varpuvispila.jpg',
      text: 'Ohuista monihaaraisista oksista (esim. koivu)  valmistettu sekoitin',
    },
    'pare': {
      title: 'Päre pärepihdissä',
      img: 'img/items/parepihti.jpg',
      text: 'Päre on mäntypuusta kiskottu ohut lastu. Valaisinpäre oli usein hieman tanakampi kuin esimerkiksi pärekorien valmistuksessa käytetyt päreet. Yksi päre palaa noin viisitoista minuuttia ja usein tarvittiin palamassa muutamia yhtä aikaisesti. Koko pitkän talven varalle päreitä olikin valmistettava melkoinen määrä: erään laskelman mukaan yli 20 000 kappaletta yhden vuoden tarpeisiin. Päre asetettiin pärepihtiin.  Palavan päreen alle asetettiin vesisaavi paloturvallisuuden takaamiseksi (kuten kuvassa).',
    },
    'huosain': {
      title: 'Huosiain ( huosain, huosia, huosio)',
      img: 'img/items/huosain.jpg',
      text: 'Käytettiin patojen, pannujen,  lankkulattioiden ja lauteiden pesuun. (Huosia = hangata, hieroa, kaapia). Saunan lämmössä ja kosteudessa huosiain pehmeni niin, että se sopi myös ihoa kuorivaksi pesusieneksi.',
    },
    'kangaspuut': {
      title: 'Kangaspuut',
      img: 'img/items/kangaspuut.jpg',
      text: 'Kankaiden kudonnassa käytettävä laite.',
    },
    'kehto': {
      title: 'Kehto (kätkyt)',
      img: 'img/items/kehto.jpg',
      text: 'Keinutettava lapsen vuode',
    },
    'rukki': {
      title: 'Rukki',
      img: 'img/items/rukki.jpg',
      text: 'Laite, jolla karstatusta tai kammatusta kuidusta, kuten villasta tai puuvillasta kehrätään eli valmistetaan lankaa',
    },
    'saapasrenki': {
      title: 'Kenkärenki',
      img: 'img/items/kenkarenki.jpg',
      text: 'Saappaan poisottoon tarkoitettu apuväline',
    },
    'kapioarkku': {
      title: 'Kapioarkku ( Kapiot, morsiusarkku)',
      img: 'img/items/kapioarkku.jpg',
      text: 'Kapiot ovat vaatetavaroita, joita sekä talonpoikais- että säätyläismorsiamen piti tuoda mukanaan naimisiin mennessään osana myötäjäisiä. Myötäjäiset olivat eräänlaista ennakkoperintöä. Nuoresta asti talontyttö valmisti äitinsä avustamana aittansa orsille tai kapiokirstuunsa näitä vaatetavaroita. Kapioihin kuuluivat mm. lakanat ja tyynynliinat ja vuodepeitot, tarvittavat pyyhkeet sekä peseytymiseen että keittiökäyttöön ja muut keittiötekstiilit, kuten pannulaput ja leipomaliinat. Arvostetuin materiaali oli pellava. Kaikki tekstiilit pyrittiin nimikoimaan morsiamen tulevilla nimikirjaimilla. Kapioiden laatu kertoi morsiamen käsityötaidosta. Arkkua, jossa kapioita säilytetään, kutsutaan kapioarkuksi (morsiusarkku) ja sen valmisti tytölle usein isä, eno tai setä.',
    },
    'hoylat': {
      title: 'Höylä',
      img: 'img/items/hoylat.jpg',
      text: 'Työväline, jolla työstetään puuta, höyläystä käytetään pintojen viimeistelyyn, kappaleen ohentamisessa (höylääminen) yms. ',
    },
    'karstat': {
      title: 'Karstat, karstaaminen',
      img: 'img/items/karstat.jpg',
      text: 'Villan ja puuvillan puhdistukseen ja valmistukseen kehruuta varten käytetty työkalu, jossa on toiselta puolelta tiheäpiikkinen lapa ja lyhyt varsi. Lampaiden villat kerittiin 2-3 kertaa vuodessa ja keritty villa pestiin, jonka jälkeen villa karstattiin. Karstaus oli naisten työtä. Karstoilla villa pehmitettiin ja puhdistettiin, villan paakut saatiin pois ja kuidut asettuivat samansuuntaisiksi.',
    },
    'oljylamppu': {
      title: 'Öljylamppu',
      img: 'img/items/oljylamppu.jpg',
      text: 'Suomeen öljylamppu levisi 1800-luvun puolessa välissä. 1900-luvun alkuun mennessä se yleistyi joka kodin valonlähteeksi.  Polttoaineena valopetroli tai muut öljymäiset polttoaineet kasviperäisiä kasvisöljyt esim. naurisöljy  tai eläinperäisiä rasvat ',
    },
    'oljylamppu2': {
      title: 'Öljylamppu',
      img: 'img/items/oljylamppu.jpg',
      text: 'Suomeen öljylamppu levisi 1800-luvun puolessa välissä. 1900-luvun alkuun mennessä se yleistyi joka kodin valonlähteeksi.  Polttoaineena valopetroli tai muut öljymäiset polttoaineet kasviperäisiä kasvisöljyt esim. naurisöljy  tai eläinperäisiä rasvat ',
    },
    'himmeli': {
      title: 'Himmeli',
      img: 'img/items/himmeli.jpg',
      text: 'Oljista valmistettu näyttävä joulukoriste.  Oljilla oli myös symbolista merkitystä. Niiden katsottiin edustavan tulevan vuoden viljasatoa. Himmeli pidettiinkin usein  tuvan katossa aina seuraavan vuoden juhannukseen saakka, jotta saataisiin suuri sato. ',
    },
    'viskuri': {
      title: 'Viskuri',
      img: 'img/items/viskuri.jpg',
      text: 'Puinnissa viljan puhdistamiseen käytetty mekaaninen viljanpuhdistin.  Kammesta pyörittämällä viskurin eli tuultajan sisällä oleva tuuletin pöllyttää akanat ja pölyn irti jyvistä',
    },
    'varsta': {
      title: 'Varsta',
      img: 'img/items/varsta.jpg',
      text: 'Varsta, puintiväline, jolla jyvät irrotetaan tähkäpäistä, joko yhdestä puusta valmistettu oksavarsta. Kaksiosaisissa vastoissa varsi ja terä on yhdistetty toisiinsa eri tekniikoilla, jolloin puhutaan mm. sarana, solmu, vaarna, silmukkavarstoista. Eri puolella Suomea varstoilla on eri nimityksiä mm. vartta, klupu, riusa, kepakko, maakko.',
    },
    'sirppi': {
      title: 'Sirppi',
      img: 'img/items/sirppi_viikate.jpg',
      text: 'Viljan leikkuuseen eli elonkorjuuseen suunniteltu käsityökalu. Siinä on lyhyt kahva, johon on kiinnitetty leikkuuterä. Terä on yleensä kaareva. Itäsuomalainen sirppi oli pieni ja siinä oli kapea ja ohut terä.',
    },
    'viikate': {
      title: 'Viikate (vikate, viitake)',
      img: 'img/items/sirppi_viikate.jpg',
      text: 'Viikate on maataloustyökalu,(niittoväline), jolla niitetään heinää, viljaa tai kortetta yms. Viikate koostuu varresta, johon on kiinnitetty teräniittoväline heinän niittämiseen.',
    },
    'riihihanko': {
      title: 'Riihihanko',
      img: 'img/items/riihihanko_harava.jpg',
      text: 'Haarakas varrellinen työkalu (myös  elo- ja heinähanko)',
    },
    'haratva': {
      title: 'Harava',
      img: 'img/items/riihihanko_harava.jpg',
      text: 'Heinän kokoamisväline, varsi tehdään tavallisesti haavasta, lapa koivusta ja piikit pihlajasta. Entisaikaan heinäpellolla tai luonnonniityllä heinää leikkaavien viikatemiesten perässä kulkivat haravilla varustautuneet naiset ja varttuneemmat lapset.',
    },
    'kappa': {
      title: 'Kappa',
      img: 'img/items/kappa_ryykilauta.jpg',
      text: 'Viljan mittaamiseen käytetty puinen mitta-astia, myös  tilavuusmitta, viljamitta. Kapan päällä kuvassa tasauskapula (ryykilauta), jolla ylimääräiset viljat poistettiin kapasta.',
    },
    'kappa2': {
      title: 'Kappa',
      img: 'img/items/kappa_ryykilauta.jpg',
      text: 'Viljan mittaamiseen käytetty puinen mitta-astia, myös  tilavuusmitta, viljamitta. Kapan päällä kuvassa tasauskapula (ryykilauta), jolla ylimääräiset viljat poistettiin kapasta.',
    },
    'tasauslauta': {
      title: 'Ryykilauta, tasauskapula',
      img: 'img/items/kappa_ryykilauta.jpg',
      text: 'Tasauskapula (ryykilauta), jolla ylimääräiset viljat poistettiin kapasta',
    },
    'tasauslauta2': {
      title: 'Ryykilauta, tasauskapula',
      img: 'img/items/kappa_ryykilauta.jpg',
      text: 'Tasauskapula (ryykilauta), jolla ylimääräiset viljat poistettiin kapasta',
    },
    'pohdin': {
      title: 'Pohdin',
      img: 'img/items/pohdin.jpg',
      text: 'Soikea usein toiselta puolen loivasyrjäinen astia,  jolla puidusta viljasta erotettiin roskat.  Usein haapalaudasta tehty kehä ja ohuista  tuohisäleistä tai pajun vitsoista tehty pohja.',
    },
    'kasikivet': {
      title: 'Käsikivet',
      img: 'img/items/kasikivet.jpg',
      text: 'Käsikäyttöiset jauhinkivet, joita käytettiin jauhojen valmistuksessa.  Kiviä pyöritetään vipuvarrella, jonka alaosa on kiinnitetty puuvanteeseen. Jauhot valuvat kiviltä laudoille, joten kivenlaudat on ympäröity reunoilla. ',
    },
    'kaantoaura': {
      title: 'Aura,  kääntöaura',
      img: 'img/items/kaantoaura.jpg',
      text: 'Maataloutta mullistava yksisiipinen hevosvedettävä aura.  Teollinen auranvalmistus alkoi Suomessa Fiskarsissa 1800-luvun puolivälissä. Fiskarsissa valmistettiin kymmeniä erilaisia auramalleja.',
    },
    'lapiot': {
      title: 'Lapio',
      img: 'img/items/lapio.jpg',
      text: 'Ojankaivuuta varten. puinen lapio, kärki rautaa.',
    },
    'kiesit': {
      title: 'Kiesit',
      img: 'img/items/karrit.jpg',
      text: 'Kahden ajettavat hevoskärryt.',
    },
    'piikkiaes': {
      title: 'Piikkiäes',
      img: 'img/items/piikkiaes.jpg',
      text: 'Käytettiin risukarhin tavoin. Kevyellä äkeellä peitettiin jyvät käsikylvön jälkeen tai poistettiin kesannolta rikkaruohoja.  Kesanto tarkoittaa viljelemätöntä tai mulloksella pidettävää peltoa. ',
    },
    'rotanloukku': {
      title: 'Rotanloukku',
      img: 'img/items/loukku.jpg',
      text: 'Rottien pyydystämiseen. Rotta on ollut harmillinen seuralainen ja tuhoeläin  esihistoriallisista ajoista lähtien. Kuten hiiriä, myös rottia on pyritty torjumaan erityisesti rakennuksissa loukuilla.',
    },
    'suokengat': {
      title: 'Hevosen suokengät',
      img: 'img/items/suokengat.jpg',
      text: 'Kiinnitetään hevosen jalkaan helpottamaan suolla kulkemista.',
    },
    'risukarhi': {
      title: 'Risukarhi',
      img: 'img/items/risukarhi.jpg',
      text: 'Maan möyhennyksen. Risukarhi tehtiin käsivarren vahvuisista tuoreista oksaisista kuusennäreistä, joita vitsastettiin puolen kymmentä rinnakkain parin poikkipuiden varaan.',
    },
    'nivelaes': {
      title: 'Niveläes',
      img: 'img/items/nivelaes.jpg',
      text: 'Niveläes koottiin noin 60 cm:n pituisista puukappaleista, jotka yhdistettiin toisiinsa puu- tai rautakaroilla. Puiset tapit korvattiin myöhemmin rautaisilla. Niveläkeen etu oli sen maanpinnan muotoja myötäilevä kulku.',
    }
  };

  var slideInfo = [
    '<b>Etsi kuvasta esineet:</b><br/>Kangaspuut, härkin, varpuvispilä, huosain, Uhvatta (patahanko), kehto, höylät, karstat, rukki, saapasrenki, kapioarkku, päre ja pärepihti, himmeli, öljylamppu',
    '<b>Etsi kuvasta esineet:</b><br/>Sirppi, viikate, riihihanko, harava, viskuri, pohdin, käsikivet, kappa ,ryykilauta (tasauslauta) ja varsta',
    '<b>Etsi kuvasta esineet:</b><br/>kiesit, lapio, risukarhi, piikkiäes, kääntöaura, nieveläes, rotanloukku, hevosen suokengät'
  ];

  var swiper = new Swiper('.swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect: 'coverflow',
    spaceBetween: 50,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1
    }
  });

  swiper.on('onSlideChangeEnd', function () {
    updateMaps();
    updateHelpText();
  });

  function updateHelpText() {
    $('.info-container-inner').html(slideInfo[swiper.activeIndex]);
  }

  function updateMaps() {
    $('img').mapster('unbind');
    var $slide = $(swiper.slides[swiper.activeIndex]);
    $slide.find('img').mapster({
      stroke: false,
      highlight: false,
      isSelectable: false,
      mapKey: 'id',
      onClick: function (e) {
        var item = e.key;
        //TODO: use template
        var data = itemData[item];
        if (data) {
          var html = '<h3>' + data.title + '<h3>';
          if (data.img && data.img.length > 0) {
            html += '<img class="modal-img" src="' + data.img + '" />'
          }
          html += '<p class="modal-text">' + data.text + '</p>';
          $('.info-container').hide();
          vex.dialog.alert({
            unsafeMessage: html,
            className: 'vex-theme-plain',
            callback: function () {
              $('.info-container').show();
            }
          });
        }
      }
    });
  }

  $(window).resize(function () {
    swiper.unlockSwipes();
    $('img').mapster('unbind');
    if (window.innerHeight == screen.height) {
      $('.fullscreen-btn').hide();
      $('.swiper-slide').css('width', '80%');
    } else {
      $('.fullscreen-btn').show();
      $('.swiper-slide').css('width', '65%');
    }
    swiper.update(true);
    if (LOCKED) {
      swiper.lockSwipes();
    }
    updateMaps();
  });

  $('.fullscreen-btn').click(function () {
    var elem = $('body')[0];
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  });

  $('.info-btn').click(function () {
    $('.info-container').hide();
    vex.dialog.alert({
      unsafeMessage: slideInfo[swiper.activeIndex],
      className: 'vex-theme-top',
      callback: function () {
        $('.info-container').show();
      }
    });
  });

  if (typeof QueryString.slide !== 'undefined') {
    var slide = parseInt(QueryString.slide, 10);
    swiper.slideTo(slide, 0, true);
    swiper.lockSwipes();
    LOCKED = true;
    $('.swiper-button-next').hide();
    $('.swiper-button-prev').hide();
    $('.quiz-img').hide();
    $('.quiz-img[data-img-index="' + slide + '"]').show();
  }

  updateHelpText();
  updateMaps();

})();
