var leashDog = function(dogName= "Bryon", dogBreed= "poodle"){
    console.log('Leash ${dogName} the ${dogBreed}');
    return 'Leash ${dogName} the ${dogBreed}'
}

var walkToPark = function(dogName= "Bryon", dogBreed= "poodle"){
    console.log('Walk to the park with ${dogName} the ${dogBreed}');
    return 'walk to the park with ${dogName} the ${dogBreed}'
}

var wakeDog = function(dogName= "Bryon", dogBreed= "poodle"){
    console.log('Wake ${dogName} the ${dogBreed}');
    return 'Wake ${dogName} the ${dogBreed}'
}

var throwFrisbee = function(dogName= "Bryon", dogBreed= "poodle"){
    console.log('Throw the frisbee for ${dogName} the ${dogBreed}');
    return 'Thow the frisbee for ${dogName} the ${dogBreed}'
}

var walkHome = function(dogName= "Bryon", dogBreed= "poodle"){
    console.log('Walk home with ${dogName} the ${dogBreed}');
    return 'Walk home with ${dogName} the ${dogBreed}'
}

var unleashDog = function(dogName= "Bryon", dogBreed= "poodle"){
    console.log('Unleash ${dogName} the ${dogBreed}');
    return 'Unleash  ${dogName} the ${dogBreed}'
}


const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dog, breed){
    return routnine.map(fn =>(dog, breed))
}