// description: https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Beats 100.00%

function letterCombinations(digits: string): string[] {

    const keyboard = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
    }

    let res:string[] = [];

    for(let left=0; left < digits.length; left++){

        let letters = keyboard[digits[left]];
        
        const ln = (res.length)?res.length*letters.length:letters.length
        const prev_ln = res.length;
        // expand exist array
        if(prev_ln){
            for(let j=0; j<ln;j+=letters.length){
                for(let l=0;l < letters.length - 1;l++){
                   res.splice(j+l, 0, res[j]);          
                }
            }
        }
        // fill it
        for(let i=0;i<ln;i++){
           res[i] = ((res[i])?res[i]:'') + letters[i%letters.length];
        }
    }
    return res;
};