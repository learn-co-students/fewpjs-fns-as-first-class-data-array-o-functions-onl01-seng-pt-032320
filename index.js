function wakeDog(dogName, dogBreed){
    console.log(`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName, dogBreed){
    console.log(`Wake ${dogName} the ${dogBreed}`);
}

function walkToPark(dogName, dogBreed){
    console.log(`Wake ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName, dogBreed){
    console.log(`Wake ${dogName} the ${dogBreed}`);
}

function walkHome(dogName, dogBreed){
    console.log(`Wake ${dogName} the ${dogBreed}`);
}

function unleashDog(dogName, dogBreed){
    console.log(`Wake ${dogName} the ${dogBreed}`);
}


let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];


function exerciseDog(routine) {
    newArr = []
    for (let i = 0; i < routine.length; i++) {
        newArr.push(routine);
    }
    return newArr;
}
//  exerciseDog(sam, puggle);