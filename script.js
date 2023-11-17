// /*dody div{
//   function googleTranslateElementInit() {
//     new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
//   }}*/
//   function f(){
//     var tatol=parseInt(document.getElementById("tatalval").value);
//     var sale1=parseInt(document.getElementById("sale").value);
//     // to make sure that they are numbers
//     if(!total){ tatol=0;}
//     if(!sale1){sale1=0;}
//     var ans=document.getElementById("remainingaMal");
//     ans.value=total-sale1;
//   }
function autominus()
{
    //**************auto minus (oldmal-sel= bakimal) ****************** 
    var PichlaBaki = document.getElementById("PichlaBaki").value;
    var Bikri = document.getElementById("Bikri").value;
    var KulMal = parseFloat(PichlaBaki)-parseFloat(Bikri);
    document.getElementById("KulMal").value = KulMal;
    // **********************auto mutiplication(sel*90=kimat) ****************** 
    var Kimat = parseFloat(Bikri)*parseFloat(90);
    document.getElementById("Kimat").value = Kimat ;
    //-------------------------FOR SECOUND LINE CALCULATION ---------------------
    // ****************** auto minus(sel*70=kimat ) of ***************
   
    var PichlaBaki1 = document.getElementById("PichlaBaki1").value;
    var Bikri1 = document.getElementById("Bikri1").value;
    var KulMal1 = parseFloat(PichlaBaki1)-parseFloat(Bikri1);
    document.getElementById("KulMal1").value = KulMal1;
    //************************ multiplication  of 70 *****************************/
    var Kimat1 = parseFloat(Bikri1)*parseFloat(70);
     document.getElementById("Kimat1").value = Kimat1 ;
     //************** TOTAL COST ************************* */
    /* if(Kimat===NAN){
        Kimat=0;
     }
     if(Kimat1===NAN){
        Kimat1=0;
     }
     ***************** NOT WORKING NAN = 0****************
     */
     var Kimatall = parseFloat(Kimat)+parseFloat(Kimat1);
    document.getElementById("Kimatall").value = Kimatall ;

    //****************************** CASH EXPLANATION ****************** */
    // var s11 = document.getElementById("s11").value;
    // var s12 = parseFloat(s11)*parseFloat(2000);
    // document.getElementById("s12").value = s12;
    //notes off by goverment
    //-----------------for 500 ------------------
    var s21 = document.getElementById("s21").value;
    var s22 = parseFloat(s21)*parseFloat(500);
    document.getElementById("s22").value = s22;

    // ------------ for 200 --------------
    var s31 = document.getElementById("s31").value;
    var s32 = parseFloat(s31)*parseFloat(200);
    document.getElementById("s32").value = s32;
//--------------------------- for 100 --------------------
var s41 = document.getElementById("s41").value;
    var s42 = parseFloat(s41)*parseFloat(100);
    document.getElementById("s42").value = s42;
    //--------------for 50 -----------------------
    var s51 = document.getElementById("s51").value;
    var s52 = parseFloat(s51)*parseFloat(50);
    document.getElementById("s52").value = s52;

    //--------------------------- for 20 ----------------
    var s61 = document.getElementById("s61").value;
    var s62 = parseFloat(s61)*parseFloat(20);
    document.getElementById("s62").value = s62;

    //------------------------- for 10 -----------------
    var s71 = document.getElementById("s71").value;
    var s72 = parseFloat(s71)*parseFloat(10);
    document.getElementById("s72").value = s72;

    //-------------------- TOTAL SUM OF MONEY---------
    var s81 = parseFloat(s22)+parseFloat(s32)+parseFloat(s42)+parseFloat(s52)+parseFloat(s62)+parseFloat(s72);
    document.getElementById("s81").value = s81;


// *********************************************************
//------------------------ KHRACHO KATNI KI BAD KI RAJAM------------------
    var sf1 = document.getElementById("sf1").value;
    var sf2 = parseFloat(Kimatall)-parseFloat(sf1);
    document.getElementById("sf2").value = sf2;

//****************************************** YOUR PROFIT ********************************** */
var totalpeti = document.getElementById("pmal1").value;
var totalpua = document.getElementById("pmal2").value;
var totalmal=parseFloat(totalpeti)*parseFloat(45)+parseFloat(totalpua);
var odlstock = document.getElementById("pmal3").value;
var totalsal= parseFloat(odlstock)-parseFloat(totalmal);
var salmoney =parseFloat(totalsal)*parseFloat(70);
var salcash = document.getElementById("pmal4").value;
var yourbachat= parseFloat(salcash)-parseFloat(salmoney);
document.getElementById("pmal5").value = yourbachat;

}
