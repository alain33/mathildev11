var exec = require('child_process').exec;
var Request = require('Request').exec;

// le nom du pc
var os = require('os')
a=os.hostname()


exports.init = function(SARAH) {

request = require('request');
 cheerio = require('cheerio');
fs   = require('fs'); 


//création du dossier sarah/memoire
//Si existe...else create
try{
var path = require('path');
var dir = path.resolve('%CD%', './plugins/mémoiredemathilde').replace('\\%CD%', '');
console.log('existe ou non'+fs.statSync(dir))
}
catch(err){//fs.mkdirSync(dir)}
console.log('je renomme le dossier mémoiredemathilde_sauvegarde')
fs.renameSync(path.resolve('%CD%', './plugins/mémoiredemathilde_sauvegarde').replace('\\%CD%', ''),dir)}

//Le nom de sarah est:


function nomappeldesarah(){ 
content = fs.readFileSync("custom.ini",'utf8');
emplacement=content.search("name=")
contente20=""
for (i=0;i<20;i++){contente20=contente20+content[emplacement+5+i]}
jsoncontent20=JSON.stringify(contente20)
emplacement1=contente20.search(";")
jsoncontent = jsoncontent20.replace(/[^a-zA-Z0-9']/gi,'')
emplacement2=jsoncontent.search('rn')
nomappel=''
for(i=0;i<emplacement2;i++){nomappel=nomappel+jsoncontent[i]}
console.log('enfin le nom : '+nomappel)
}
//fin fnct nomappeldesarah
nomappeldesarah()




//on met à zero pour enlever les anciens plugs

var nircmd ='%CD%/plugins/infomathilde/nircmd/nircmd.exe'
var path = require('path');
var dir = path.resolve('%CD%', './plugins/').replace('\\%CD%', '');
//console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'+dir)
var process=nircmd + ' filldelete "' + dir + '\\demarrage\\item\\*.*"'﻿
var exec = require('child_process').exec;
                            
exec(process)


////mise en memoire du nom des plug
fs = require('fs');
  xml2js = require('../modules/xml2js') ;   parser = new xml2js.Parser({trim: true});
  path = require('path');
  nomplugin="" ;   nombreplugin=0

//le nom des plugins
  config=SARAH.ConfigManager.getConfig()//;console.log('config'+JSON.stringify(config))

data1='{"nompluguine":[]}'
  file=Object.keys(config.modules).forEach(function(plugin) {

nombreplugin=nombreplugin+1 ; nomplugin=nomplugin+", "+plugin

//dans un json nom pluguine
 objet = JSON.parse(data1);   jsonStr = JSON.stringify(objet); // transforme l'objet en texte
  jsonStr1 = JSON.stringify(plugin)// la valeur de l'item.

try {
jsonStr1=jsonStr1.replace(/"/g,'');//on met au bon format
//console.log("  le nom des plug         "+jsonStr1+" nombre "+nombreplugin)
     }
catch (Exception) {console.log("   erreur       ");}



//on pousse en memoire
objet.nompluguine.push(jsonStr1); new_jsonStr = JSON.stringify(objet);
data1=new_jsonStr


                                                              });


for ( j = 0; j<nombreplugin; j++){



console.log(objet.nompluguine[j])
///mise en fichier des items

data2='{"nompluguine":[]}'


var fs = require('fs');
var parse = require('../modules/xml-parser');
pathname = './plugins/'+objet.nompluguine[j]+'/'+objet.nompluguine[j]+'.xml'
try{
var xml = fs.readFileSync(pathname,'utf8').toString('utf8');
//console.log(xml)
var obj = parse(xml);
var DOMParser = require('../modules/xmldom').DOMParser;
var doc = new DOMParser().parseFromString(xml,'utf8');

txt="a"
for ( i = 0; txt!=="" ; i++){

try{txt = doc.getElementsByTagName("item")[i].childNodes[0].nodeValue;


 objet1 = JSON.parse(data2);   jsonStr1 = JSON.stringify(objet1); // transforme l'objet en texte
  jsonStr1 = JSON.stringify(txt)// la valeur de l'item.
jsonStr1=jsonStr1.replace(/"/g,'');

objet1.nompluguine.push(jsonStr1); new_jsonStr1 = JSON.stringify(objet1);
data2=new_jsonStr1
}//fin try

catch (Exception) {//console.log('fin item');
txt="";}

}//fin try

}//fin for i
catch (Exception) {//console.log('fin item');
console.log('pas de xml pour : '+objet.nompluguine[j])}

pathname = './plugins/demarrage/item/'+objet.nompluguine[j]+'item.json';


fs.writeFile(pathname, data2, function (err) { // ecrit dans le fichier courses l'objet + la nouvelle valeur
   if (err) throw err;})
}


pathname='./plugins/demarrage/item/plugins.json'
console.log(pathname)
pathname1='%CD%/plugins/demarrage/item/plugins.json'
console.log(pathname)
    fs.writeFile(pathname, data1, function (err) { // ecrit dans le fichier courses l'objet + la nouvelle valeur
   if (err) throw err;})

														  
														};

                        