/*  This is an algorithm given as an interview question for a software dev position at 
    Google that a previous student showed me
              >___0___<                                            >___0___<
....___________|_____|______________________________________________|_____|______________________....
                  P                                                    P
Scientists at NASA have opened a portal to another dimension. In this dimension, the plane of existence
is just an infinitely long line. To take readings, the scientists have sent 2 robots through the portal.
The two robots parachute down, but the trip through the portal sent them to entirely different locations.
Physics is also weird in this dimension, so when they parachute down, they also land directly on top of their
parachutes.
The key problem is that both robots have the SAME program written to power them. Given the following functions,
what code can you write to guarantee that eventually, the two robots will meet each other. You are not STRICTLY limited
to these functions, so you can use additional variables, while loops, conditionals and such in combination with 
these functions.
**** Predefined functions, you do not need to write anything. These are just the methods available for use **** */
function moveLeft() {
    // This function takes one unit of time, and moves the robot to the left one unit of distance.
}

function moveRight() {
    // This function takes one unit of time, and moves the robot to the right one unit of distance.
}

function wait() {
    // This function involves no movement of the robot and takes one unit of time.
}

function parachuteCheck() {
    // This function returns a boolean based on whether or not the robot is currently situated on top of a parachute
}

function robotCheck() {
    // This function returns a boolean based on whether or not the robot has met another robot
}

// *******************************************************************************************************

function robotCode() {
    
    while (robotCheck==false) {
        var i = 0
        while (parachuteCheck==false) {
            moveLeft()
            i++
            // move back each time
            // if one doesn't end up back at the original position (parachutecheck==true), then break while loop and apply second while loop 
        }


        
        while (parachuteCheck==false) {
            moveRight()
            j++
        }
        // i is distance between two robots
    }
}


function robotCodeSol1() {
    let chuteFound = false;
    do {
        moveLeft();
        if(parachuteCheck())
            chuteFound = true;
        if(chuteFound) {
            moveLeft();
        }
        else {
            wait();
        }
    }
    while(!robotCheck())
    return true;
}

function robotCodeSol2() {
    moveRight();
    let stepCount = 2;
    let chuteCount = 0;

    while(!robotCheck()){
        for(let i = 0; i < stepCount; i++) {
            moveLeft();
            if(parachuteCheck()){
                chuteCount++;
                if(chuteCount == 2)
                    break;
            }
            if(robotCheck()){
                return true;
            }
        }
        if(chuteCount == 2){
            break;
        }
        chuteCount = 0;
        stepCount++;
        for(let i = 0; i < stepCount; i++) {
            moveRight();
            if(parachuteCheck()){
                chuteCount++;
                if(chuteCount == 2)
                    break;
            }
            if(robotCheck()) {
                return true;
            }
        }
        stepcount++;
        chuteCount = 0;
    }

    while(!robotCheck()){
        wait();
    }
    return
}