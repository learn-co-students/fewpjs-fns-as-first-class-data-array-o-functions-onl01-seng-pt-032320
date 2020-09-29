function wakeDog(dogName, dogBreed) {
  let wakeString = `Wake ${dogName} the ${dogBreed}`;
  console.log(wakeString);
  return wakeString;
}

function leashDog(dogName, dogBreed) {
    let leashString = `Leash ${dogName} the ${dogBreed}`;
    console.log(leashString);
    return leashString;
}

function walkToPark(dogName, dogBreed) {
    let walkString = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(walkString);
    return walkString;
}

function throwFrisbee(dogName, dogBreed) {
    let throwString = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(throwString);
    return throwString;
}

function walkHome(dogName, dogBreed) {
    let walkString = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(walkString);
    return walkString;
}

function unleashDog(dogName, dogBreed) {
    let unleashString = `Unleash ${dogName} the ${dogBreed}`;
    console.log(unleashString);
    return unleashString;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    let dogArray = [];
    for (let i = 0; i < routine.length; i++) {
        dogArray.push(routine[i](dogName, dogBreed));
    }
    return dogArray;
}