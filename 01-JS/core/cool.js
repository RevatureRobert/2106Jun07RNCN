/*
Found this on Code gaming, it is used to change how a sentence is formatted
import sys
import math

// Auto-generated code below aims at helping you parse
// the standard input according to the problem statement.

n = int(input())
y = input().split()
l=[i for i in y[1:]if i[0].isupper()]
// Write an answer using print
// To debug: print("Debug messages...", file=sys.stderr, flush=True)
r=y[n:]+y[:n]
t=[]
for i in r:
    if i==r[0] or i in l:
        t+=[i.capitalize()]
    else: t+=[i.lower()]
t=" ".join(t)
print(t)
*/



/**
 * For the Thor game
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/
 var inputs = readline().split(' ');
 var lightX = parseInt(inputs[0]); // the X position of the light of power
 var lightY = parseInt(inputs[1]); // the Y position of the light of power
 var initialTX = parseInt(inputs[2]); // Thor's starting X position
 var initialTY = parseInt(inputs[3]); // Thor's starting Y position
 
 var thorX = initialTX;
 var thorY = initialTY;
 
 // game loop
 while (true) {
     var remainingTurns = parseInt(readline());
 
     var directionX = "";
     var directionY = "";
     
     if (thorX > lightX) {
         directionX = "W";
         thorX--;
     } else if (thorX < lightX) {
         directionX = "E";
         thorX++;
     }
 
     if (thorY > lightY) {
         directionY = "N";
         thorY--;
     } else if (thorY < lightY){
         directionY = "S";
         thorY++;
     }  
 
     print(directionY + directionX);
    }