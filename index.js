// code your solution here https://learning.flatironschool.com/courses/4970/assignments/163619?module_item_id=352088 

//LAB: Implement a function called saturdayFun. It should return a string "This Saturday, I want to...!" where the ... is filled in with the activity that is passed in as the first parameter. If nothing is passed in, default to "roller-skate".

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun("adopt 20 cats"));

//in the saturdayFun function above ^^, the default value (roller-skate) is specified in the parameter.

//LAB: Implement a function expression called mondayWork. The function should return a string like "This Monday, I will... ." Fill the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "go to the office".

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};
console.log(mondayWork("wash my windows with a little bit of Windex"));

//LAB: Implement a function called wrapAdjective. It should return a function (inner function). The inner function should take a single parameter that should default to "special", and return a string "You are ..." where ... shuold be the adjective this function reveived in visual flair. The outer function should take string as parameter with default "*".
//Final outcome should be "You are *a dedicated programmer*!"

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;

    }
}
console.log(wrapAdjective("%")("a dedicated programmer"));