/*dody div{
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }}*/
  function f(){
    var tatol=parseInt(document.getElementById("tatalval").value);
    var sale1=parseInt(document.getElementById("sale").value);
    // to make sure that they are numbers
    if(!total){ tatol=0;}
    if(!sale1){sale1=0;}
    var ans=document.getElementById("remainingaMal");
    ans.value=total-sale1;
  }
