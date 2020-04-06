// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
    // Initialize a hash map or empty arry
    let hash =[];
    for (const element of strings){
      hash[element] = (hash[element] || 0)+1;
    }
    console.log(hash)//

    return result = queries.map(index => (hash[index] || 0));

}

    const string1 = ['aba', 'baba','aba','xzxb'];
    const string2 = ['aba','xzxb', 'ab'];
    
    console.log(matchingStrings(string1, string2))