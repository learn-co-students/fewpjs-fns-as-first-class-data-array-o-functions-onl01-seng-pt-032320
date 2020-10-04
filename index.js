function wakeDog(name, breed){
    const output =  `Wake ${name} the ${breed}`;
    console.log(output);
    return output;
}

function leashDog(name, breed){
    const output =  `Leash ${name} the ${breed}`;
    console.log(output);
    return output;
}

function walkToPark(name, breed){
    const output =  `Walk to the park with ${name} the ${breed}`;
    console.log(output);
    return output;
}

function throwFrisbee(name, breed){
    const output =  `Throw the frisbee for ${name} the ${breed}`;
    console.log(output);
    return output;
}

function walkHome(name, breed){
    const output =  `Walk home with ${name} the ${breed}`;
    console.log(output);
    return output;
}

function unleashDog(name, breed){
    const output =  `Unleash ${name} the ${breed}`;
    console.log(output);
    return output;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(name, breed){
    let output = [];
    for (let i = 0; i < routine.length; i++) {
        output.push(routine[i](name,breed));
    }
    return output;
}