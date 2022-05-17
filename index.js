function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`;
}


function wrapAdjective(highlight = '*') {
    return function encouragingPromptFunction(adjective = 'special') {
        return `You are ${highlight}${adjective}${highlight}!`
    }
}
wrapAdjective('%')('a dedicated programmer');