/*
Exercise JSINTRO-HOMEWORK-DAY01

Developer: Yserri R. Palacio 
Date issued    : Monday  , February 26, 2018
Date completed : Thursday, March 1, 2018 

Description: This assigment is comprised of six main functions:
			 The Calculator
			 DrEvil
			 MixUp
			 FixStart
			 Verbing
			 Not Bad
*/

//The Calculator
console.log('\nBegin---> The Calculator');
function squareNumber(a)
{ 
    var sq =a*a;
    console.log('The result of squaring the number ' +a+' is '+ sq);
}

function halfNumber(a)
{ 
    var b=a/2;
    console.log('Half of ' +a+' is '+ b);
}

function percentOf(a1, a2)
{ 
    var ans=(a1*100)/a2;
    console.log(a1+' is '+ ans+'% of '+ a2);
}

function areaOfCircle(rad)
{ 
    var ans=Math.PI*(Math.pow(rad, 2));
    var bans=ans.toFixed(2); //Round the result so there are only two digits   

    console.log('The area for a circle with radius ' +rad+' is '+ ans);
    console.log('The area for a circle with radius ' +rad+' is '+ bans);
}

function dFun(a)
{ 
    var half=a/2;
    var sq=half*half;
    var area=Math.PI*(sq*sq);
    var  percentage=(area*100)/sq;

    console.log('0. The number is : '+ a  );
    console.log('1. Take half of the number and store the result: '+ half  );
    console.log('2. Square the result of #1 and store that result: '  +sq);
    console.log('3. Calculate the area of a circle with the result of #2 as the radius: ' +area.toFixed(2));
    console.log('4. Calculate what percentage that area is of the squared result  (#3) :' + percentage.toFixed(2)+'%');
}

squareNumber(3); 
halfNumber(5);
percentOf(2,4);
areaOfCircle(2);
dFun(6);

console.log('End-----> The Calculator \n');


//DrEvil
console.log('\nBegin--->DrEvil');
function DrEvil(a){
	var ans;

	if (a ==1000000){ 
		ans=(a +' dollars (pinky)');
	}
	else {
		ans=(a +' dollars');
	}

	return ans;
}

console.log(DrEvil(10));
console.log(DrEvil(1000000));
console.log('End----->DrEvil \n');


//MixUp
console.log('\nBegin--->MixUp');
function mixUp(a1,a2){
ans =a2.slice(0, 2) +''+ a1.slice(2)+' '+a1.slice(0, 2) +''+ a2.slice(2);
return ans;
}

console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));
console.log('End----->MixUp \n');


//FixStart
console.log('\nBegin--->FixStart');
function fixStart(a) {
    var firstcharacter = a.charAt(0);
    // RegExp g = global match; find all matches rather than stopping after the first match
    var newversion=firstcharacter + a.slice(1).replace(new RegExp(firstcharacter, 'g'), '*'); 
    return newversion;
  }

  console.log(fixStart('babble'));
console.log('End----->FixStart \n');



//Verbing
console.log('\nBegin--->Verbing');
function verbing(a) {
var al=a.length;
var ans;

    if (al>=3)
    {
        if (a.slice(-3) == 'ing') ans=a + 'ly'; 
        else ans=a + 'ing';
    } 
    else ans=a;

return ans;
}

console.log(verbing('swim'));
console.log(verbing('wimming'));
console.log(verbing('go'));
console.log('End----->Verbing \n');


//Not Bad
console.log('\nBegin--->Not Bad');
function notBad(a) {
    var pofn=a.indexOf('not');
    var pofb=a.indexOf('bad');
    var ans;


//-1 is return by indexOf() when not found  
 if (pofn==-1||pofb==-1||pofb<pofn )
    ans =a;
 else 
    ans=a.slice(0, pofn) + 'good' + a.slice(pofb + 3)
 
    return ans;
  }

  console.log( notBad('This dinner is not that bad!')); 
  console.log( notBad('This movie is not so bad!')); 
  console.log( notBad('This dinner is bad!')); 
console.log('End----->Not Bad \n');
