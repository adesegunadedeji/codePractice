function centuryFromYear(year) {
    if (year <= 0 ) {
        return "Year Does not Exist"
    }
    else if (year <= 100){
      return 1
    }
    else if (year % 100 === 0 ){
        return year/100
    }
    else {
    const remain = year%100;
        return (year - remain)/100 + 1
    }
    
    }
    console.log(centuryFromYear(2020))