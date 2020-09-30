function wakeDog(str, breed){
  return `Wake ${str} the ${breed}`;
}

function leashDog(str, breed){
    return `Leash ${str} the ${breed}`;
  }

  function walkToPark(str, breed){
    return `Walk to the park with ${str} the ${breed}`;
  }


  function throwFrisbee(str, breed){
    return `Throw the frisbee for ${str} the ${breed}`;
  }

  function walkHome(str, breed){
    return `Walk home with ${str} the ${breed}`;
  }

  function unleashDog(str, breed){
    return `Unleash ${str} the ${breed}`;
  }

  const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

  function exerciseDog(dogName, dogBreed){
        return routine.map(funct => funct(dogName, dogBreed))

  }

