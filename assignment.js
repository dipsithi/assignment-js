//feetToMile

function feetToMile (feet){
    var mile = feet / 5280;
    return mile;
}
    var babaMile = feetToMile (10560);
    console.log ("Baba's requested mile is: ",babaMile);

    var kakaMile = feetToMile (21120);
    console.log ("Kaka's requested mile is: ", kakaMile);

    var dadaMile = feetToMile (42240);
        console.log ("Dada's requested mile is: ",dadaMile);
    
//woodCalculator

function woodCalculator(chair, table, bed){
    var chairCount = chair * 25;
    var tableCount = table * 30;
    var bedCount = bed * 60;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
        }

        var woodResult = woodCalculator (8, 2, 1);
        console.log ("total Wood required CFT", woodResult);

//brickCalculator

        function brickCalculator (floor){
            if (floor > 20) {
                var first = floor - 20;
                var one = (first * 10 * 1000) + (10 * 12 * 1000) + (10 * 15 * 1000);
                return one;
            }

            if (floor > 10 && floor <= 20) {
                var second = floor - 20;
                var two = (second * 12 * 1000) + (10 * 15 * 1000);
                return two;
            }

            if (floor >0 && floor <= 10){
                var three = (floor * 15 * 1000);
                return three;
            }
        }

        var total = brickCalculator (30);
        console.log (total, "Bricks required to complete the Building",);
    


//tinyFriend

var name = ['Abul', 'Kabul', 'Pabu', 'Gabul', 'Labul',]
            var tinyFriend = name [0];
            for (var i = 0; i < name.length; i++) {
            var element = name [i];
            if (element > tinyFriend){
                tinyFriend = element;
            }
            }
       
                console.log ("Tiny Friend Name is: ", tinyFriend);


