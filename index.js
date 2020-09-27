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

function arrayOFunctions() {
    let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
}

function exerciseDog(arrayOFunctions) {
    newArr = []
    for (let i = 0; i < arrayOFunctions.length; i++) {
        newArr.push(arrayOFunctions);
    }
    return newArr;
}
//  exerciseDog(sam, puggle);