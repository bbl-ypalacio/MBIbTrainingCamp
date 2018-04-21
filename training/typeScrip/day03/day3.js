//console.log('\n<-----[template]------->');

//object method
console.log('\n<-----[object method]------->');



console.log('\n<-----[prototype]------->');
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit say'${line}'`);
    }    
}

let happyRabbit = Object.create(protoRabbit);

happyRabbit.type = "crazy";
happyRabbit.speak("Hi there");




console.log('\n<-----[Exercise-1-2(The Reading List)]------->');
var books = [
    {
        title: 'the big man',
        author: 'LOL',
        alreadyRead : true
    },
    {
        title: 'the big man 1',
        author: 'LOL 1',
        alreadyRead : false
    }
];

for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + ' by "' + book.author+'"';

    if (book.alreadyRead) {
        console.log('You already read ' + book.title + ' by "' + book.author + '"');
    } else {
        console.log('You still need to read ' + book.title + ' by "' + book.author + '"');
    }
}


console.log('\n<-----[Exercise-1-1(The Recipe Card)]------->');
//array of objects
var recipe = {
                title: 'Mole',
                servings : 4, 
                ingredients: ['cinnamon', 'cumin','cocoa'] 
            };

console.log('title: '+recipe.title);
console.log('servings:'+recipe.servings);

for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log('ingredients:'+recipe.ingredients[i]);
}


//objects as argument(needs to be completed)
console.log('\n<-----[objects as arguments]------->');
//var lizzeTheCat
//describecat(lizzieTheCat);


//changing objects
console.log('\n<-----[Lession 2-changing objects]------->');
var myCats = [
    { name: "Lizzie", age: 18 },
    { name: "Daemon", age: 1 }
];

for (var i = 0; i < myCats.length; i++) {
    var myCat = myCats[i];
    console.log(myCat.name + ' is ' + myCat.age + ' years old.')
}


//objects
console.log('\n<-----[Lession 1- objects]------->');
var rabbit = {
    age: 3,
    speak: function () {
        console.log('The rabbit says hi');
    }
};

rabbit.speak();
rabbit.age = 10;
helloa = rabbit.age;
console.log('The rabbit is: ' + helloa);

