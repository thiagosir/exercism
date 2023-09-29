const knightIsAwake = false;
const archerIsAwake = false;
const prisonerIsAwake = true;
const petDogIsPresent = false;

function canExecuteFastAttack(knightIsAwake) {
    if (knightIsAwake == true) {
        return false;
    }
    return true;
}

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if (knightIsAwake == true || archerIsAwake == true || prisonerIsAwake == true) {
        return true
    }
    return false
}

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    if (prisonerIsAwake == true) {
        if (prisonerIsAwake == true && archerIsAwake == true) {
            return false
        }
        return true
    }
    return false
}

function canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent,
) {
    if (petDogIsPresent == true && archerIsAwake == true) {
        return false
    } else if (petDogIsPresent == false && archerIsAwake == false && knightIsAwake == false && prisonerIsAwake == true) {
        return true
    } else if (petDogIsPresent == true && archerIsAwake == false && knightIsAwake == true) {
        return true
    } else if (petDogIsPresent == true && archerIsAwake == false && knightIsAwake == false && prisonerIsAwake == false) {
        return true
    } else if (petDogIsPresent == true && prisonerIsAwake == true) {
        return true
    }
    return false
}