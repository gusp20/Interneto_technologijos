var str="Create Stunning Visual Media";
var str1="Here You can find all the basic information on how to get started on creating Your first website";
var str2="There are basics on how to get started with designs";
var lang;
var arrLang = {
    'en' : {
        'home' : 'HOME',
        'how to start' : 'HOW TO START',
        'table' : 'TABLE',
        'programs design' : 'PROGRAMS DESIGN',
        'design tutorials' : 'DESIGN TUTORIALS',
        'coding tutorials' : 'CODING TUTORIALS',
        'form' : 'FORM',
        'list' : 'LIST',
        'signin' : 'SIGN IN',
        'signup' : 'SIGN UP',
        'username' :'Username',
        'password' : 'Password',
        'p' : "Super simple tool to create trendy videos and pictures for your ads, social media, blogs and websites.",
        'p1' : "Make your project stand out!",
        'submit' : "SUBMIT",
        'h1' : "Create Stunning",
        'h1' : "Visual Media",
        'create design' : "CREATE DESIGN",
        'about us' : "ABOUT US",
        'products' : "PRODCUTS",
        'awards' : "AWARDS",
        'help' : "HELP",
        'contact' : "CONTACT",
        'copyright' : "© 2020 Copyright: Martynas Buivydas & Karolis Baranauskis",
        'login' : "login",
        'register' : 'register',
        'forgot password' : 'forgot password',
        'sign-in' : 'SIGN-IN',
        'sign-up' : 'SIGN-UP',
        'h2' : str1,
        'p2' : 'To begin on Yosur first basic website firstly we strongly suggest to put Your work on "Github", worlds most popular an open-source version control system where You can track progress, work in team etc.In addition, we advice to use "Github" app to make it more confortable to use it.One more thing You need is a code editing program. It is up to you what program to use, if You do not know, we recommend "Visaul Code."All of those programs are completely free!',
        'h3' : str2,
        'p3' : 'Of courese, pretty much everything can be found on the internet. However, a true professional should be able to create his own desings.In modern days, that is not a hard thing to do even if You are not really good in art, once You master the design programs, there shound not be any problem to make anything that is being asked to make.By far the most common program is "Photoshop". It can be tricky for begginer but with some effort and time spend anyone can make pretty amazing things with this program.Basic tutorial on how to get started can be found in other of our pages called "Design tutorials".',
        'photoshop tutorial' : "PHOTOSHOP TUTORIAL",
        'adobe tutorial' : "ADOBE TUTORIAL",
        'cs tutorial' : "CSS TUTORIAL",
        'bootstrap tutorial' : "BOOTSTRAP TUTORIAL",
        'html tutorial' : "HTML TUTORIAL",
        'product name' : "Product name",
        'creator' : "Creator",
        'price' : "Price",
        'rating' : "Rating",
        'table' : "TABLE",
        'free' : "Free",
        'courses' : "COURSES",
        'html courses' : "HTML COURSE",
        'css courses' : "CSS COURSE",
        'photoshop courses' : "PHOTOSHOP COURSE",
        'galery' : "GALERY",
        'submit your form' : "SUBMIT YOUR FORM!",
        'contact us' : "Contact us",
        'email' : "Enter email",
        'phone number' : "Enter phone number",
        'your message here' : "Your message here",
        'submit1' : "Submit",
        'close' : "Close",
        'username' : "Username",
        'safety' : "We'll never share your email with anyone else.",
        'send copy' : "Send message copy to email address",
        'confirm password' : "Confirm Password",
        'calculator' : "CALCUALTOR",
        'languages' : "LANGUAGES",
     
    },
    'lt' : {
        'home' : 'NAMAI',
        'how to start' : 'NUO KO PRADĖTI',
        'table' : 'LENTELĖ',
        'coding tutorials' : 'PROGRAMAVIMO PAMOKOS',
        'design tutorials' : 'DIZAINO PAMOKOS',
        'programs design' : 'PROGRAMOS DIZAINUI',
        'list' : 'SĄRRAŠAS',
        'form' : 'FORMA',
        'h1' : 'Sukurkite stulbinančią vizualią mediją',
        'signin' : 'PRISIJUNGTI',
        'signup' : 'UŽSIREGISTRUOTI',
        'username' :'Prisijungimo vardas',
        'password' : 'Slaptažodis',
        'modalsignin':'Prisijungti',
        'modalsignup':'Susikurti paskyrą',
        'p' : "Paprastas įrankis skirtas kurti vaizdo įrašus ir nuotraukas reklamoms, socialiniams tinklams, blogams ir tinklapiams.",
        'p1' : "Sukurkite išskirtinį projektą!",
        'submit' : "PATEIKTI",
        'create design' : "SUKURTI DIZAINĄ",
        'about us' : "APIE MUS",
        'products' : "PRODUKTAI",
        'awards' : "APDOVANOJIMAI",
        'help' : "PAGALBA",
        'contact' : "KONTAKTAI",
        'copyright' : "© 2020 AUTORIŲ TEISĖ: Martynas Buivydas & Karolis Baranauskis",
        'username' : "Vardas",
        'password' : "Slaptažodis",
        'login' : "Prisijungti",
        'register' : 'Registruotis',
        'forgot password' : 'Pamiršau slaptažodis',
        'sign-in' : 'PRISIJUNGTI',
        'sign-up' : 'REGISTRUOTIS',
        'h2' : 'Čia galite rasti visą pagrindinę informaciją apie tai, kaip pradėti kurti savo pirmąją svetainę',
        'p2' : 'Norėdami pradėti savo pirmąją pagrindinę svetainę, pirmiausia rekomenduojame pateikti savo darbą „Github“, pasaulyje populiariausioje atvirojo kodo versijų kontrolės sistemoje, kurioje galite sekti pažangą, dirbti komandoje ir kt. Be to, mes patariame naudoti „Github“. programą, kad būtų patogiau ja naudotis. Dar vienas dalykas, ko jums reikia, yra kodo redagavimo programa. Jums priklauso, kurią programą naudoti, jei nežinote, mes rekomenduojame „Visaul Code“. Visos šios programos yra visiškai nemokamos!',
        'h3' : 'Yra pagrindai, kaip pradėti kurti',
        'p3' : 'Kalbant apie ugdymą, beveik viską galima rasti internete. Tačiau tikras profesionalas turėtų sugebėti susikurti savo norus. Šiuolaikiniu metu tai nėra sunkus dalykas, net jei menas tu iš tikrųjų geras, kai įvaldai projektavimo programas, nereikės kelti jokių problemų. padarykite viską, ko prašoma padaryti. Iki šiol labiausiai paplitusi programa yra „Photoshop“. Tai gali būti sudėtinga pradedantiesiems, tačiau šiek tiek pastangų ir laiko praleisdamas, kiekvienas gali padaryti gana nuostabių dalykų, naudodamasis šia programa. Pagrindinius vadovo vadovus, kaip pradėti, galite rasti kituose mūsų puslapiuose, vadinamuose „Dizaino vadovėliais“.',
        'photoshop tutorial' : 'PHOTOSHOP PAMOKOS',
        'adobe tutorial' : 'ADOBE PAMOKOS',    
        'css tutorial' : 'CSS PAMOKOS',
        'bootstrap tutorial' : 'BOOTSTRAP PAMOKOS',
        'html tutorial' : 'HTML PAMOKOS',
        'product name' : "Produkto pavadininas",
        'creator' : "Kūrėjas",
        'price' : "Kaina",
        'rating' : "Reitingas",
        'table' : "LENTELĖ",
        'free' : "Nemokamas",
        'courses' : "KURSAI",
        'html courses' : "HTML KURSAS",
        'css courses' : "CSS KURSAS",
        'photoshop courses' : "PHOTOSHOP KURSAS",
        'galery' : "GALERIJA",
        'submit your form' : "PATEIKTI FORMA!",
        'contact us' : "Susisiekti",
        'email' : "Įveskite el.paštą",
        'phone number' : "Įveskite telefono numerį",
        'your message here' : "Jūsų žinutė",
        'submit1' : "Pateikti",
        'close' : "Uždaryti",
        'safety' : "Niekada nebendrinsime jūsų el. Pašto adreso su niekuo kitu.",
        'send copy' : "Siųsti žinutės kopiją el. Pašto adresu",
        'confirm password' : "Patvirtinti slaptažodį",
        'username' : "Vartotojo vardas",
        'calculator' : "SKAIČIUOTUVAS",
        'languages' : "KALBA",
    }
};
$(function(){
    $('.dropdown-item').click(function(){
        localStorage.setItem(lang, $(this).attr('id'))
        window.location.reload()
    });
    $('.nav-link').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.button').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-footer button').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-footer button').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-16.col-lg-5 h1 span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-16.col-lg-5 p span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-16.col-lg-5 p1 span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.btn.btn-primary').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('[data-translate]').each(function (index, element) {
        $(this).attr('placeholder', arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-2.mb-3 h6 a').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.footer-copyright.text-center.py-3 a').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-body h4').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-footer button').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-16.col-lg-5 h2 span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-16.col-lg-5 p2 span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-16.col-lg-5 h3 span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-16.col-lg-5 p3 span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.carousel-inner h2').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.t.container h2').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.t.container th').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.t.container td').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.container h2').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.container a').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.btn.btn-third').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-header h5').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-body small').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.btn.btn-primary1').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.btn.btn-secondary').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.form-check-label').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
