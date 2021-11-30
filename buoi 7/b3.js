const case1 = "    hOang Bui   ";
const case2 = " hOANG      BUI   hOang     ";
const case3 = "23traN    dUOng23     ";


function run(test) {
    var temp = test.trim();
    temp = temp.replace(/\s+/g, ' ');
    var s, j;
    for(var i = 0; i < temp.length; i++) {
        if(!Number(temp.charAt(i))) {
            s = temp.charAt(i).toUpperCase();
            j = i+1;
            break;
        }
    }
    for(var i = j; i < temp.length; i++) {
        if(!Number(temp.charAt(i))) {
          if((temp[i] != " " && temp[i-1] == " ") || (temp[i] != " " && Number(temp[i-1]))) {      
            s += temp.charAt(i).toUpperCase();
          }
          else {
            s += temp.charAt(i).toLowerCase();
          }
        }
      }
    console.log(s);
}

run(case1);
run(case2);
run(case3); 