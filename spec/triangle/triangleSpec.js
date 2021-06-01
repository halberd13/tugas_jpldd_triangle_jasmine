var app=require("../../routes/triangle.js");

describe("Addition",function(){
    it("[NormalCase] 1. A = 7, B = 7, C = 7 => Equilateral",function() {
        console.log('[NormalCase] 1. A = 7, B = 7, C = 7 => Equilateral');
        var value=app.triangle_checker(7,7,7);
        expect(value).toEqual("Equilateral");
    });
});

describe("Addition",function(){
    it("[NormalCase] 2. A = 7, B = 7, C = 10 => Isosceles",function() {
        console.log('[NormalCase] 2. A = 7, B = 7, C = 10 => Isosceles');
        var value=app.triangle_checker(7,7,10);
        expect(value).toEqual("Isosceles");
    });
});

describe("Addition",function(){
    it("[NormalCase] 3. A = 7, B = 10, C = 7 => Isosceles",function() {
        console.log('[NormalCase] 3. A = 7, B = 10, C = 7 => Isosceles');
        var value=app.triangle_checker(7,7,7);
        expect(value).toEqual("Equilateral");
    });
});

describe("Addition",function(){
    it("[NormalCase] 4. A = 10, B = 7, C = 7 => Isosceles",function() {
        console.log('[NormalCase] 4. A = 10, B = 7, C = 7 => Isosceles');
        var value=app.triangle_checker(10,7,7);
        expect(value).toEqual("Isosceles");
    });
});

describe("Addition",function(){
    it("[NormalCase] 5. A = 1.5, B = 2.5, C = 3 => Scalene",function() {
        console.log('[NormalCase] 5. A = 1.5, B = 2.5, C = 3 => Scalene');
        var value=app.triangle_checker(1.5,2.5,3);
        expect(value).toEqual("Scalene");
    });
});

describe("Addition",function(){
    it("[NormalCase] 6. A = 4.5, B = 7, C = 4.5 => Isosceles",function() {
        console.log('[NormalCase] 6. A = 4.5, B = 7, C = 4.5 => Isosceles');
        var value=app.triangle_checker(4.5,7,4.5);
        expect(value).toEqual("Isosceles");
    });
});

describe("Addition",function(){
    it("[NormalCase] 7. A = 7.8, B = 7.8, C = 7.8 => Equilateral",function() {
        console.log('[NormalCase] 7. A = 7.8, B = 7.8, C = 7.8 => Equilateral');
        var value=app.triangle_checker(7.8,7.8,7.8);
        expect(value).toEqual("Equilateral");
    });
});

describe("Addition",function(){
    it("[NormalCase] 8. A = 10.5, B = 4.9, C = 8.3 => Scalene",function() {
        console.log('[NormalCase] 8. A = 10.5, B = 4.9, C = 8.3 => Scalene');
        var value=app.triangle_checker(10.5,4.9,8.3);
        expect(value).toEqual("Scalene");
    });
});

describe("Addition",function(){
    it("[NormalCase] 9. A = 27/5, B = 10, C = 27/5 => Isosceles",function() {
        console.log('[NormalCase] 9. A = 27/5, B = 10, C = 27/5 => Isosceles');
        var value=app.triangle_checker(27/5,10,27/5);
        expect(value).toEqual("Isosceles");
    });
});

//Abnormal Case 
describe("Addition",function(){
    it('[AbnormalCase] 1. A = 0, B = 7, C = 7 => "a":0 must greater than 0',function() {
        console.log('[AbnormalCase] 1. A = 0, B = 7, C = 7 => "a":0 must greater than 0');
        var value=app.triangle_checker(0,7,7);
        expect(value).toEqual('"a":0 must greater than 0');
    });
});

describe("Addition",function(){
    it('[AbnormalCase] 2. A = "T", B = 10, C = 10 => "a":T must be a number',function() {
        console.log('[AbnormalCase] 2. A = "T", B = 10, C = 10 => "a":T must be a number');
        var value=app.triangle_checker('T',10,10);
        expect(value).toEqual('"a":T must be a number');
    });
});

describe("Addition",function(){
    it('[AbnormalCase] 3. A = -10, B = 9, C = 10 => "a":-10 must greater than 0',function() {
        console.log('[AbnormalCase] 3. A = -10, B = 9, C = 10 => "a":-10 must greater than 0');
        var value=app.triangle_checker(-10,9,10);
        expect(value).toEqual('"a":-10 must greater than 0');
    });
});

describe("Addition",function(){
    it("[AbnormalCase] 4. A = '1/8', B = 10, C = 1/8 => 'a':1/8 must be a number",function() {
        console.log("[AbnormalCase] 4. A = '1/8', B = 10, C = 1/8 => 'a':1/8 must be a number");
        var value=app.triangle_checker('1/8',10,1/8);
        expect(value).toEqual('"a":1/8 must be a number');
    });
});

describe("Addition",function(){
    it("[AbnormalCase] 5. A = 1/4, B = 0.25, C = 5/8 => Not a Triangle",function() {
        console.log("[AbnormalCase] 5. A = 1/4, B = 0.25, C = 5/8 => Not a Triangle");
        var value=app.triangle_checker(1/4,0.25,5/8);
        expect(value).toEqual("Not a Triangle");
    });
});

