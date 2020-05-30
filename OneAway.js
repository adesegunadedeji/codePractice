

oneAway = (first, second)=>{
    if(first.length == second.length){
        return oneEditReplace(first, second);
    }
    else if(first.length + 1 == second.length){
        return oneEditInsert(first, second);
    }
    else if(first.length -1 == second.length){
        return oneEditInsert(second,first);
    }
    return false;
}

    function oneEditInsert(s1, s2){
        let index1 = 0;
        let index2 = 0;
        while(index1 < s1.length && index2 < s2.length){
            if(s1.charAt(index1) != s2.charAt(index2)){
                if(index1 != index2){
                    return false;
                }
                index2++;
            }
            else{
                index1++;
                index2++;
            }
        }
        return true;

    }

    //Write one Edit Away Function
    function oneEditReplace (s1, s2){
       let foundDifference = false;
       for (let index = 0; index < s1.length; index++) {
        if( s1.charAt(index) != s2.charAt(index)){
            if(foundDifference){
                return false;
            }
            foundDifference = true;
        }
       }
       return true;
    }


console.log(oneAway("pale", 'llle'))