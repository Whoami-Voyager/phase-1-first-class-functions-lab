const Drivers = (['Antonia', 'Nuru', 'Amari', 'Mo'])

function returnFirstTwoDrivers() {
    return [Drivers[0], Drivers[1]]
}

function returnLastTwoDrivers() {
    return [Drivers[2], Drivers[3]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function fareQuintupler(num) {
        return num * 5
    };
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(drivers, driversToReturn) {
    return driversToReturn(drivers)
}