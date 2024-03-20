const returnFirstTwoDrivers = (list) => list.slice(0, 2)
const returnLastTwoDrivers = (list) => list.slice(-2)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(numb) {
    return function(numb){
        return numb * 5
    }
}

const fareDoubler = (numb) => numb * 2
const fareTripler = (numb) => numb * 3

const selectDifferentDrivers = function(list, selectedFunction) {
    if (selectedFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(list)
    }
    else return returnLastTwoDrivers(list)
}