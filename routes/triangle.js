exports.triangle_checker = function (a, b, c) {
    if(typeof a != 'number'){
        return '"a":'+a+' must be a number';
    }
    if(typeof b != 'number'){
        return '"b":'+b+' must be a number';
    }
    if(typeof c != 'number'){
        return '"c":'+c+' must be a number';
    }


    if(a <= 0){
        return '"a":'+a+' must greater than 0';
    }
    if(b <= 0){
        return '"b":'+b+' must greater than 0';
    }
    if(c <= 0){
        return '"c":'+c+' must greater than 0';
    }

    if(a+b <= c){
        return 'Not a Triangle';
    }
    if(a+c <= b){
        return 'Not a Triangle';
    }
    if(b+c <= a){
        return 'Not a Triangle';
    }

    var asq = a * a;
    var bsq = b * b;
    var csq = c * c;

    if(a==b && b==c){
        return 'Equilateral';
    }

    if(a==b || b==c || a==c){
        return 'Isosceles';
    }

    if(Math.sqrt(asq+bsq) == c){
        return 'Right Triangle';
    }
    if(Math.sqrt(asq+csq) == b){
        return 'Right Triangle';
    }
    if(Math.sqrt(bsq+csq) == a){
        return 'Right Triangle';
    }

    return 'Scalene'

  }
 
  