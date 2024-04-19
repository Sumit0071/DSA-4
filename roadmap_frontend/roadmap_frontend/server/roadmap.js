

const originalConsoleLog = console.log;
var consoleLogs = '';
console.log = function ( message ) {
    consoleLogs += message + '\n'; // Add a newline for each log
    originalConsoleLog.apply( console, arguments );
};
const inputData = process.argv[2];

const entry = inputData.split( '     ' );



if ( entry[102] >= 15 ) {
    var step = 1;
    if ( entry[0] == "Yes" && entry[1] == "No" ) {
        console.log( `Step  ${step} : Complete Assignment 1,2,3 and Coding Assignment 1 to 9. If you can't solve the questions, take a revision of the lectures taught in the C++ (I), C++ (II), and C++ (III) Section. Take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]` );

        step++;
    }
    else if ( entry[0] == "No" && entry[1] == "Yes" ) {
        console.log( `Step  ${step}  : Take a revision of the lectures taught in the C++ (I), C++ (II), and C++ (III) Section. Complete Assignment 1,2,3 and Coding Assignment 1 to 9. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]` );

        step++;
    }
    else if ( entry[0] == "No" && entry[1] == "No" ) {
        console.log( ` Step  ${step}  :     Take a revision of the lectures taught in the C++ (I), C++ (II), and C++ (III) Section. Complete Assignment 1,2,3 and Coding Assignment 1 to 9. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]` );

        step++;
    }
    var counter = 0;
    if ( entry[3] == "Yes" )
        counter++;
    if ( entry[4] == "Yes" )
        counter++;
    if ( entry[5] == "Yes" )
        counter++;
    if ( entry[2] == "No" ) {
        console.log( `Step  ${step}:  Take a revision of the lectures [Complete C++ STL, Complete C++ STL Syntax Resources, See all the syntax in action, Time & Space Complexity]. Complete Logic Building Assignment 1 to 25 and Coding Assignment 10 to 16. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 10 Days]` );

        step++;
    }
    else if ( entry[2] == "Yes" && counter == 0 ) {
        console.log( `Step  ${step}: Take a revision of the lectures [Complete C++ STL, Complete C++ STL Syntax Resources, See all the syntax in action, Time & Space Complexity]. Complete Logic Building Assignment 1 to 25 and Coding Assignment 10 to 16. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 10 Days]` );

        step++;
    }
    else if ( entry[2] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step  ${step}  :  Complete Logic Building Assignment 1 to 25 and Coding Assignment 10 to 16. (Take a revision of the lectures [Complete C++ STL, Complete C++ STL Syntax Resources, See all the syntax in action, Time & Space Complexity] if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 10 Days]` );

        step++;
    }
    var counter = 0;
    if ( entry[7] == "Yes" )
        counter++;
    if ( entry[8] == "Yes" )
        counter++;
    if ( entry[9] == "Yes" )
        counter++;
    if ( entry[6] == "No" ) {
        console.log( `Step ${step}  : Take a revision of the lectures taught in the Prefix Sum, Suffix Sum, 2 Pointers Section. Complete Coding Assignment 17 to 32. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]` );

        step++;
    }
    else if ( entry[6] == "Yes" && counter == 0 ) {
        console.log( `Step  ${step} :   Take a revision of the lectures taught in the Prefix Sum, Suffix Sum, 2 Pointers Section. Complete Coding Assignment 17 to 32. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]` );

        step++;
    }
    else if ( entry[6] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : Complete Coding Assignment 17 to 32. (Take a revision of the lectures taught in the Prefix Sum, Suffix Sum, 2 Pointers Section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 7 Days]` );

        step++;
    }
    var counter = 0;
    if ( entry[11] == "Yes" )
        counter++;
    if ( entry[12] == "Yes" )
        counter++;
    if ( entry[13] == "Yes" )
        counter++;
    if ( entry[10] == "No" ) {
        console.log( `Step ${step} : Take a revision of the lectures taught in the Binary Search, Binary Exponentiation Section. Complete Coding Assignment 33 to 49. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]` );

        step++;
    }
    else if ( entry[10] == "Yes" && counter == 0 ) {
        console.log( `Step  ${step}: 
            Take a revision of the lectures taught in the Binary Search, Binary Exponentiation Section. Complete Coding Assignment 33 to 49. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[10] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step  ${step} :   Complete Coding Assignment 33 to 49. (Take a revision of the lectures taught in the Binary Search, Binary Exponentiation section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 7 Days]` );

        step++;
    }
    var counter = 0;
    if ( entry[15] == "Yes" )
        counter++;
    if ( entry[16] == "Yes" )
        counter++;
    if ( entry[17] == "Yes" )
        counter++;
    if ( entry[14] == "No" ) {
        console.log( `Step  ${step}: Take a revision of the lectures taught in the Prime Numbers, Prime Sieve, Segmented Sieve, Prime Factorization Section. Complete Coding Assignment 50 to 59. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]` );

        step++;
    }
    else if ( entry[14] == "Yes" && counter == 0 ) {
        console.log( `Step  ${step} : Take a revision of the lectures taught in the Prime Numbers, Prime Sieve, Segmented Sieve, Prime Factorization Section. Complete Coding Assignment 50 to 59. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]` );

        step++;
    }
    else if ( entry[14] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 50 to 59. (Take a revision of the lectures taught in the Prime Numbers, Prime Sieve, Segmented Sieve, Prime Factorization Section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 7 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[19] == "Yes" )
        counter++;
    if ( entry[20] == "Yes" )
        counter++;
    if ( entry[21] == "Yes" )
        counter++;
    if ( entry[18] == "No" ) {
        console.log( `Step  ${step} : Take a revision of the lectures taught in the BIT Manipulation (Classic and Advanced Algorithms) section. Complete Coding Assignment 60 to 87. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]` );

        step++;
    }
    else if ( entry[18] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : Take a revision of the lectures taught in the BIT Manipulation (Classic and Advanced Algorithms) section. Complete Coding Assignment 60 to 87. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]` );

        step++;
    }
    else if ( entry[18] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step  ${step}: Complete Coding Assignment 60 to 87. (Take a revision of the lectures taught in the BIT Manipulation (Classic and Advanced Algorithms) section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 7 Days]` );

        step++;
    }
    var counter = 0;
    if ( entry[23] == "Yes" )
        counter++;
    if ( entry[24] == "Yes" )
        counter++;
    if ( entry[25] == "Yes" )
        counter++;
    if ( entry[22] == "No" ) {
        console.log( `Step ${step} :  Take a revision of the lectures taught in the Permutations & Combinations section. Complete Coding Assignment 88 to 94. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 3 Days]` );

        step++;
    }
    else if ( entry[22] == "Yes" && counter == 0 ) {
        console.log( `Step  ${step} : Take a revision of the lectures taught in the Permutations & Combinations section. Complete Coding Assignment 88 to 94. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 3 Days]` );

        step++;
    }
    else if ( entry[22] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : Complete Coding Assignment 88 to 94. (Take a revision of the lectures taught in the Permutations & Combinations section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 3 Days]` );

        step++;
    }
    var counter = 0;
    if ( entry[27] == "Yes" )
        counter++;
    if ( entry[28] == "Yes" )
        counter++;
    if ( entry[29] == "Yes" )
        counter++;
    if ( entry[26] == "No" ) {
        console.log( `Step ${step}  : Take a revision of the lectures taught in the Recursion (Classic & Advanced Algorithms) section. Complete Coding Assignment 95 to 107. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]` );

        step++;
    }
    else if ( entry[26] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : Take a revision of the lectures taught in the Recursion (Classic & Advanced Algorithms) section. Complete Coding Assignment 95 to 107. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days] ` );

        step++;
    }
    else if ( entry[26] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step  ${step} : Complete Coding Assignment 95 to 107. (Take a revision of the lectures taught in the Recursion (Classic & Advanced Algorithms) section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 7 Days]   ` );

        step++;
    }
    if ( entry[30] == "No" ) {
        console.log( `Step ${step}  : Take a revision of the lectures taught in the Divide & Conquer and (Divide & Conquer + BIT Manipulation (Advanced Algorithms)) section. Complete Coding Assignment 108. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 3 Days]` );

        step++;
    }
    var counter = 0;
    if ( entry[32] == "Yes" )
        counter++;
    if ( entry[33] == "Yes" )
        counter++;
    if ( entry[34] == "Yes" )
        counter++;
    if ( entry[31] == "No" ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Greedy Algorithms section. Complete Coding Assignment 109 to 112. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 2 Days]`);

        step++;
    }
    else if ( entry[31] == "Yes" && counter == 0 ) {
        console.log( `Step  ${step}  : 
            Take a revision of the lectures taught in the Greedy Algorithms section. Complete Coding Assignment 109 to 112. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 2 Days]`);

        step++;
    }
    else if ( entry[31] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 109 to 112. (Take a revision of the lectures taught in the Greedy Algorithms section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 2 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[36] == "Yes" )
        counter++;
    if ( entry[37] == "Yes" )
        counter++;
    if ( entry[38] == "Yes" )
        counter++;
    if ( entry[35] == "No" ) {
        console.log( `Step  ${step} : 
            Take a revision of the lectures taught in the Dynamic Programming (Classic & Advanced Algorithms) section. Complete Coding Assignment 113 to 192. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 20 Days]`);

        step++;
    }
    else if ( entry[35] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Dynamic Programming (Classic & Advanced Algorithms) section. Complete Coding Assignment 113 to 192. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 20 Days]`);

        step++;
    }
    else if ( entry[35] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step  ${step} : 
            Complete Coding Assignment 113 to 192. (Take a revision of the lectures taught in the Dynamic Programming (Classic & Advanced Algorithms) section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 20 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[40] == "Yes" )
        counter++;
    if ( entry[41] == "Yes" )
        counter++;
    if ( entry[42] == "Yes" )
        counter++;
    if ( entry[39] == "No" ) {
        console.log( `Step  ${step} : 
            Take a revision of the lectures taught in the Stack, Queue, Kadane and Priority Queue section. Complete Coding Assignment 193 to 205. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 10 Days]`);

        step++;
    }
    else if ( entry[39] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            "Take a revision of the lectures taught in the Stack, Queue, Kadane and Priority Queue section. Complete Coding Assignment 193 to 205. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 10 Days]`);

        step++;
    }
    else if ( entry[39] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 193 to 205. (Take a revision of the lectures taught in the Stack, Queue, Kadane and Priority Queue section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 10 Days]"();
            console.log`);
        step++;
    }
    var counter = 0;
    if ( entry[44] == "Yes" )
        counter++;
    if ( entry[45] == "Yes" )
        counter++;
    if ( entry[46] == "Yes" )
        counter++;
    if ( entry[43] == "No" ) {
        console.log( `Step  ${step} : 
            Take a revision of the lectures taught in the Trees section. Complete Coding Assignment 228 to 249. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[43] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Trees section. Complete Coding Assignment 228 to 249. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[43] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 228 to 249. (Take a revision of the lectures taught in the Trees section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 7 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[48] == "Yes" )
        counter++;
    if ( entry[49] == "Yes" )
        counter++;
    if ( entry[50] == "Yes" )
        counter++;
    if ( entry[47] == "No" ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Fenwick Trees section. Complete Coding Assignment 250 to 264. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 4 Days]`);

        step++;
    }
    else if ( entry[47] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Fenwick Trees section. Complete Coding Assignment 250 to 264. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 4 Days]`);

        step++;
    }
    else if ( entry[47] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 250 to 264. (Take a revision of the lectures taught in the Fenwick Trees section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 4 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[52] == "Yes" )
        counter++;
    if ( entry[53] == "Yes" )
        counter++;
    if ( entry[54] == "Yes" )
        counter++;
    if ( entry[51] == "No" ) {
        console.log( `Step ${step} ->
            Take a revision of the lectures taught in the Rolling Hash, Prefix Function, Rabin Karp, KMP section. Complete Coding Assignment 206 to 227. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[51] == "Yes" && counter == 0 ) {
        console.log( `Step  ${step} : 
            Take a revision of the lectures taught in the Rolling Hash, Prefix Function, Rabin Karp, KMP section. Complete Coding Assignment 206 to 227. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[51] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step  ${step}  : 
            Complete Coding Assignment 206 to 227. (Take a revision of the lectures taught in the Rolling Hash, Prefix Function, Rabin Karp, KMP section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 7 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[56] == "Yes" )
        counter++;
    if ( entry[57] == "Yes" )
        counter++;
    if ( entry[58] == "Yes" )
        counter++;
    if ( entry[55] == "No" ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Graph Algorithms section. Complete Coding Assignment 265 to 305. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 15 Days]`);

        step++;
    }
    else if ( entry[55] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Graph Algorithms section. Complete Coding Assignment 265 to 305. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 15 Days]`);

        step++;
    }
    else if ( entry[55] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 265 to 305. (Take a revision of the lectures taught in the Graph Algorithms section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 15 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[60] == "Yes" )
        counter++;
    if ( entry[61] == "Yes" )
        counter++;
    if ( entry[59] == "No" ) {
        console.log( `Step  ${step} : 
            Take a revision of the lectures taught in the Segment Trees section. Complete Coding Assignment 306 to 324. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[59] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Segment Trees section. Complete Coding Assignment 306 to 324. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[59] == "Yes" && counter > 0 && counter < 2 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 306 to 324. (Take a revision of the lectures taught in the Segment Trees section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 7 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[63] == "Yes" )
        counter++;
    if ( entry[64] == "Yes" )
        counter++;
    if ( entry[65] == "Yes" )
        counter++;
    if ( entry[62] == "No" ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Disjoint Set section. Complete Coding Assignment 325 to 339. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 5 Days]`);

        step++;
    }
    else if ( entry[62] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Disjoint Set section. Complete Coding Assignment 325 to 339. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 5 Days]`);

        step++;
    }
    else if ( entry[62] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 325 to 339. (Take a revision of the lectures taught in the Disjoint Set section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 5 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[67] == "Yes" )
        counter++;
    if ( entry[68] == "Yes" )
        counter++;
    if ( entry[69] == "Yes" )
        counter++;
    if ( entry[66] == "No" ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the SQRT Decomposition, MO’s Algorithm, Lazy Propagation section. Complete Coding Assignment 340 to 357. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 5 Days]`);

        step++;
    }
    else if ( entry[66] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the SQRT Decomposition, MO’s Algorithm, Lazy Propagation section. Complete Coding Assignment 340 to 357. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 5 Days]`);

        step++;
    }
    else if ( entry[66] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 340 to 357. (Take a revision of the lectures taught in the SQRT Decomposition, MO’s Algorithm, Lazy Propagation section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 5 Days]`);

        step++;
    }
    if ( entry[70] == "No" ) {
        console.log( `Step ${step} : 
            Revise Monoliths from the Course Dashboard`);

        step++;
    }
    if ( entry[71] == "No" ) {
        console.log( `Step ${step} : 
            Revise Microservices from the Course Dashboard`);

        step++;
    }
    if ( entry[72] == "No" ) {
        console.log( `Step ${step} : 
            Revise Horizontal & Vertical Scaling from the Course Dashboard`);

        step++;
    }
    if ( entry[73] == "No" ) {
        console.log( `Step ${step} : 
            Revise Load Balancing from the Course Dashboard`);

        step++;
    }
    if ( entry[75] == "No" ) {
        console.log( `Step ${step} : 
            Revise Distributed Systems from the Course Dashboard`);

        step++;
    }
    if ( entry[76] == "No" ) {
        console.log( `Step ${step} : 
            Revise Single Point of Failure from the Course Dashboard`);

        step++;
    }
    if ( entry[77] == "No" ) {
        console.log( `Step  ${step} : 
            Revise Sharding from the Course Dashboard`);

        step++;
    }
    if ( entry[78] == "No" ) {
        console.log( `Step ${step} : 
            Revise Service Discovery & Heartbeats from the Course Dashboard`);

        step++;
    }
    if ( entry[79] == "No" ) {
        console.log( `Step ${step} : 
            Revise Capacity Planning & Estimation from the Course Dashboard`);

        step++;
    }
    if ( entry[80] == "No" ) {
        console.log( `Step ${step} : 
            Revise Content Delivery Network from the Course Dashboard`);

        step++;
    }
    if ( entry[81] == "No" ) {
        console.log( `Step  ${step} : 
            Revise Messaging & Event Handling from the Course Dashboard`);

        step++;
    }
    if ( entry[82] == "No" ) {
        console.log( `Step ${step} : 
            Revise API Design from the Course Dashboard`);

        step++;
    }
    if ( entry[83] == "No" ) {
        console.log( `Step ${step} : 
            Revise Consistency & Availability from the Course Dashboard`);

        step++;
    }
    if ( entry[84] == "No" ) {
        console.log( `Step ${step} : 
            Revise Caching from the Course Dashboard"`);

        step++;
    }
    if ( entry[85] == "No" ) {
        console.log( `Step ${step} : 
            Revise NoSQL Database from the Course Dashboard`);

        step++;
    }
    if ( entry[86] == "No" ) {
        console.log( `Step  ${step} : 
            Revise Data Replication from the Course Dashboard`);

        step++;
    }
    if ( entry[87] == "No" ) {
        console.log( `Step ${step} : 
            Revise Location Based Databases from the Course Dashboard`);

        step++;
    }
    if ( entry[88] == "No" ) {
        console.log( `Step ${step} : 
            Revise Monoliths to Microservices Migration from the Course Dashboard`);

        step++;
    }
    if ( entry[89] == "No" ) {
        console.log( `Step ${step} : 
            Revise Containers from the Course Dashboard`);

        step++;
    }
    if ( entry[90] == "No" ) {
        console.log( `Step ${step} : 
            Revise High Level Design (HLD) of Platforms like WhatsApp, Tinder, Netflix, SPOJ, Shazam, Gmail, Chess, Hotstar Google Docs, Uber, Google Maps from the Course Dashboard`);

        step++;
    }
    if ( entry[91] == "No" ) {
        console.log( `Step ${step} : 
            Revise Anomaly Detection from the Course Dashboard`);

        step++;
    }
    if ( entry[92] == "No" ) {
        console.log( `Step ${step} : 
            Revise Distributed Rate Limiting from the Course Dashboard`);

        step++;
    }
    if ( entry[93] == "No" ) {
        console.log( `Step ${step} : 
            Revise Map Reduce from the Course Dashboard`);

        step++;
    }
    if ( entry[94] == "No" ) {
        console.log( `Step ${step} : 
            Revise Stream Processing from the Course Dashboard`);

        step++;
    }
    if ( entry[95] == "No" ) {
        console.log( `Step  ${step} :   Revise Low Level Design (LLD/Machine Coding) of Cache, Splitwise Design, Event Bus, Rate Limited from the Course Dashboard` );

        step++;
    }
    if ( entry[96] == "No" ) {
        console.log( `Step ${step} :   Revise Top Operating Systems Interview Questions from the Course Dashboard ` );

        step++;
    }
    if ( entry[97] == "No" ) {
        console.log( `Step ${step} :  Revise Top Database Management Systems Interview Questions from the Course Dashboard` );

        step++;
    }
    if ( entry[98] == "No" ) {
        console.log( `Step ${step} :  Revise Top Computer Networking Interview Questions from the Course Dashboard` );

        step++;
    }
    if ( entry[99] == "No" ) {
        console.log( `Step ${step} :  Revise Top Object Oriented Programming Interview Questions from the Course Dashboard` );

        step++;
    }
    if ( entry[100] == "No" ) {
        console.log( `Step ${step} : Revise SQL Queries from the Course Dashboard` );

        step++;
    }
    if ( entry[101] == "No" ) {
        console.log( `Step  ${step} :  Revise Behavioral Questions/HR Questions from the Course Dashboard` );

        step++;
    }
}
else {
    var step = 1;
    if ( entry[0] == "Yes" && entry[1] == "No" ) {
        console.log( `Step ${step} : 
            Complete Assignment 1,2,3 and Coding Assignment 1 to 9. If you can't solve the questions, take a revision of the lectures taught in the C++ (I), C++ (II), and C++ (III) Section. Take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[0] == "No" && entry[1] == "Yes" ) {
        console.log( `Step  ${step} : 
            Take a revision of the lectures taught in the C++ (I), C++ (II), and C++ (III) Section. Complete Assignment 1,2,3 and Coding Assignment 1 to 9. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[0] == "No" && entry[1] == "No" ) {
        console.log( `Step  ${step} : 
            Take a revision of the lectures taught in the C++ (I), C++ (II), and C++ (III) Section. Complete Assignment 1,2,3 and Coding Assignment 1 to 9. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[3] == "Yes" )
        counter++;
    if ( entry[4] == "Yes" )
        counter++;
    if ( entry[5] == "Yes" )
        counter++;
    if ( entry[2] == "No" ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures [Complete C++ STL, Complete C++ STL Syntax Resources, See all the syntax in action, Time & Space Complexity]. Complete Logic Building Assignment 1 to 25 and Coding Assignment 10 to 16. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 10 Days]`);

        step++;
    }
    else if ( entry[2] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures [Complete C++ STL, Complete C++ STL Syntax Resources, See all the syntax in action, Time & Space Complexity]. Complete Logic Building Assignment 1 to 25 and Coding Assignment 10 to 16. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 10 Days]`);

        step++;
    }
    else if ( entry[2] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Logic Building Assignment 1 to 25 and Coding Assignment 10 to 16. (Take a revision of the lectures [Complete C++ STL, Complete C++ STL Syntax Resources, See all the syntax in action, Time & Space Complexity] if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 10 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[7] == "Yes" )
        counter++;
    if ( entry[8] == "Yes" )
        counter++;
    if ( entry[9] == "Yes" )
        counter++;
    if ( entry[6] == "No" ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Prefix Sum, Suffix Sum, 2 Pointers Section. Complete Coding Assignment 17 to 25. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[6] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Prefix Sum, Suffix Sum, 2 Pointers Section. Complete Coding Assignment 17 to 25. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[6] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 17 to 25. (Take a revision of the lectures taught in the Prefix Sum, Suffix Sum, 2 Pointers Section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 7 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[11] == "Yes" )
        counter++;
    if ( entry[12] == "Yes" )
        counter++;
    if ( entry[13] == "Yes" )
        counter++;
    if ( entry[10] == "No" ) {
        console.log( `Step  ${step} : 
            Take a revision of the lectures taught in the Binary Search, Binary Exponentiation Section. Complete Coding Assignment 33 to 43. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[10] == "Yes" && counter == 0 ) {
        console.log( `Step  ${step} : 
            Take a revision of the lectures taught in the Binary Search, Binary Exponentiation Section. Complete Coding Assignment 33 to 43. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[10] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step  ${step}  : 
            "Complete Coding Assignment 33 to 43. (Take a revision of the lectures taught in the Binary Search, Binary Exponentiation section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 7 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[15] == "Yes" )
        counter++;
    if ( entry[16] == "Yes" )
        counter++;
    if ( entry[17] == "Yes" )
        counter++;
    if ( entry[14] == "No" ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Prime Numbers, Prime Sieve, Segmented Sieve, Prime Factorization Section. Complete Coding Assignment 50 to 54. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[14] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Prime Numbers, Prime Sieve, Segmented Sieve, Prime Factorization Section. Complete Coding Assignment 50 to 54. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[14] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 50 to 54. (Take a revision of the lectures taught in the Prime Numbers, Prime Sieve, Segmented Sieve, Prime Factorization Section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 7 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[19] == "Yes" )
        counter++;
    if ( entry[20] == "Yes" )
        counter++;
    if ( entry[21] == "Yes" )
        counter++;
    if ( entry[18] == "No" ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the BIT Manipulation (Classic and Advanced Algorithms) section. Complete Coding Assignment 60 to 82. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[18] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the BIT Manipulation (Classic and Advanced Algorithms) section. Complete Coding Assignment 60 to 82. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[18] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 60 to 82. (Take a revision of the lectures taught in the BIT Manipulation (Classic and Advanced Algorithms) section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 7 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[23] == "Yes" )
        counter++;
    if ( entry[24] == "Yes" )
        counter++;
    if ( entry[25] == "Yes" )
        counter++;
    if ( entry[22] == "No" ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Permutations & Combinations section. Complete Coding Assignment 88 to 94. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 3 Days]`);

        step++;
    }
    else if ( entry[22] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Permutations & Combinations section. Complete Coding Assignment 88 to 94. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 3 Days]`);

        step++;
    }
    else if ( entry[22] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step}  : 
            Complete Coding Assignment 88 to 94. (Take a revision of the lectures taught in the Permutations & Combinations section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 3 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[27] == "Yes" )
        counter++;
    if ( entry[28] == "Yes" )
        counter++;
    if ( entry[29] == "Yes" )
        counter++;
    if ( entry[26] == "No" ) {
        console.log( `Step  ${step}  : 
            Take a revision of the lectures taught in the Recursion (Classic & Advanced Algorithms) section. Complete Coding Assignment 95 to 107. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[26] == "Yes" && counter == 0 ) {
        console.log( `Step  ${step}  : 
            Take a revision of the lectures taught in the Recursion (Classic & Advanced Algorithms) section. Complete Coding Assignment 95 to 107. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[26] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 95 to 107. (Take a revision of the lectures taught in the Recursion (Classic & Advanced Algorithms) section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 7 Days]`);

        step++;
    }
    if ( entry[30] == "No" ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Divide & Conquer and (Divide & Conquer + BIT Manipulation (Advanced Algorithms)) section. Complete Coding Assignment 108. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 3 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[32] == "Yes" )
        counter++;
    if ( entry[33] == "Yes" )
        counter++;
    if ( entry[34] == "Yes" )
        counter++;
    if ( entry[31] == "No" ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Greedy Algorithms section. Complete Coding Assignment 109 to 112. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 2 Days]`);

        step++;
    }
    else if ( entry[31] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Greedy Algorithms section. Complete Coding Assignment 109 to 112. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 2 Days]`);

        step++;
    }
    else if ( entry[31] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 109 to 112. (Take a revision of the lectures taught in the Greedy Algorithms section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 2 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[36] == "Yes" )
        counter++;
    if ( entry[37] == "Yes" )
        counter++;
    if ( entry[38] == "Yes" )
        counter++;
    if ( entry[35] == "No" ) {
        console.log( `Step  ${step}  : 
            Take a revision of the lectures taught in the Dynamic Programming (Classic & Advanced Algorithms) section. Complete Coding Assignment 113 to 164. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 20 Days]`);

        step++;
    }
    else if ( entry[35] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Dynamic Programming (Classic & Advanced Algorithms) section. Complete Coding Assignment 113 to 164. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 20 Days]`);

        step++;
    }
    else if ( entry[35] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 113 to 164. (Take a revision of the lectures taught in the Dynamic Programming (Classic & Advanced Algorithms) section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 20 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[40] == "Yes" )
        counter++;
    if ( entry[41] == "Yes" )
        counter++;
    if ( entry[42] == "Yes" )
        counter++;
    if ( entry[39] == "No" ) {
        console.log( `Step  ${step}  : 
            Take a revision of the lectures taught in the Stack, Queue, Kadane and Priority Queue section. Complete Coding Assignment 193 to 199. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 10 Days]`);

        step++;
    }
    else if ( entry[39] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Stack, Queue, Kadane and Priority Queue section. Complete Coding Assignment 193 to 199. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 10 Days]`);

        step++;
    }
    else if ( entry[39] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 193 to 199. (Take a revision of the lectures taught in the Stack, Queue, Kadane and Priority Queue section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 10 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[44] == "Yes" )
        counter++;
    if ( entry[45] == "Yes" )
        counter++;
    if ( entry[46] == "Yes" )
        counter++;
    if ( entry[43] == "No" ) {
        console.log( `Step  ${step} : 
            Take a revision of the lectures taught in the Trees section. Complete Coding Assignment 228 to 239. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[43] == "Yes" && counter == 0 ) {
        console.log( `Step  ${step} : 
            Take a revision of the lectures taught in the Trees section. Complete Coding Assignment 228 to 239. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[43] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 228 to 239. (Take a revision of the lectures taught in the Trees section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 7 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[48] == "Yes" )
        counter++;
    if ( entry[49] == "Yes" )
        counter++;
    if ( entry[50] == "Yes" )
        counter++;
    if ( entry[47] == "No" ) {
        console.log( `Step  ${step} : 
            Take a revision of the lectures taught in the Fenwick Trees section. Complete Coding Assignment 250 to 257. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 4 Days]`);

        step++;
    }
    else if ( entry[47] == "Yes" && counter == 0 ) {
        console.log( `Step  ${step} : 
            Take a revision of the lectures taught in the Fenwick Trees section. Complete Coding Assignment 250 to 257. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 4 Days]`);

        step++;
    }
    else if ( entry[47] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step  ${step} : 
            Complete Coding Assignment 250 to 257. (Take a revision of the lectures taught in the Fenwick Trees section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 4 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[52] == "Yes" )
        counter++;
    if ( entry[53] == "Yes" )
        counter++;
    if ( entry[54] == "Yes" )
        counter++;
    if ( entry[51] == "No" ) {
        console.log( `Step  ${step} : 
            Take a revision of the lectures taught in the Rolling Hash, Prefix Function, Rabin Karp, KMP section. Complete Coding Assignment 206 to 216. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[51] == "Yes" && counter == 0 ) {
        console.log( `Step  ${step} : 
            Take a revision of the lectures taught in the Rolling Hash, Prefix Function, Rabin Karp, KMP section. Complete Coding Assignment 206 to 216. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[51] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step  ${step}  : 
            Complete Coding Assignment 206 to 216. (Take a revision of the lectures taught in the Rolling Hash, Prefix Function, Rabin Karp, KMP section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 7 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[56] == "Yes" )
        counter++;
    if ( entry[57] == "Yes" )
        counter++;
    if ( entry[58] == "Yes" )
        counter++;
    if ( entry[55] == "No" ) {
        console.log( `Step  ${step}  : 
            Take a revision of the lectures taught in the Graph Algorithms section. Complete Coding Assignment 265 to 296. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 15 Days]`);

        step++;
    }
    else if ( entry[55] == "Yes" && counter == 0 ) {
        console.log( `Step  ${step}  : 
            Take a revision of the lectures taught in the Graph Algorithms section. Complete Coding Assignment 265 to 296. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 15 Days]`);

        step++;
    }
    else if ( entry[55] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step  ${step}  : 
            Complete Coding Assignment 265 to 296. (Take a revision of the lectures taught in the Graph Algorithms section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 15 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[60] == "Yes" )
        counter++;
    if ( entry[61] == "Yes" )
        counter++;
    if ( entry[59] == "No" ) {
        console.log( `Step  ${step} : 
            Take a revision of the lectures taught in the Segment Trees section. Complete Coding Assignment 306 to 315. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[59] == "Yes" && counter == 0 ) {
        console.log( `Step  ${step} : 
            Take a revision of the lectures taught in the Segment Trees section. Complete Coding Assignment 306 to 315. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 7 Days]`);

        step++;
    }
    else if ( entry[59] == "Yes" && counter > 0 && counter < 2 ) {
        console.log( `Step  ${step} : 
            Complete Coding Assignment 306 to 315. (Take a revision of the lectures taught in the Segment Trees section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 7 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[63] == "Yes" )
        counter++;
    if ( entry[64] == "Yes" )
        counter++;
    if ( entry[65] == "Yes" )
        counter++;
    if ( entry[62] == "No" ) {
        console.log( `Step ${step}  : 
            Take a revision of the lectures taught in the Disjoint Set section. Complete Coding Assignment 325 to 333. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 5 Days]`);

        step++;
    }
    else if ( entry[62] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the Disjoint Set section. Complete Coding Assignment 325 to 333. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 5 Days]`);

        step++;
    }
    else if ( entry[62] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 325 to 333. (Take a revision of the lectures taught in the Disjoint Set section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 5 Days]`);

        step++;
    }
    var counter = 0;
    if ( entry[67] == "Yes" )
        counter++;
    if ( entry[68] == "Yes" )
        counter++;
    if ( entry[69] == "Yes" )
        counter++;
    if ( entry[66] == "No" ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the SQRT Decomposition, MO’s Algorithm, Lazy Propagation section. Complete Coding Assignment 340 to 349. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 5 Days]`);

        step++;
    }
    else if ( entry[66] == "Yes" && counter == 0 ) {
        console.log( `Step ${step} : 
            Take a revision of the lectures taught in the SQRT Decomposition, MO’s Algorithm, Lazy Propagation section. Complete Coding Assignment 340 to 349. If you can't solve the questions, take help from Teaching Assistants between 10am to 10pm everyday. [Duration - 5 Days]`);

        step++;
    }
    else if ( entry[66] == "Yes" && counter > 0 && counter < 3 ) {
        console.log( `Step ${step} : 
            Complete Coding Assignment 340 to 349. (Take a revision of the lectures taught in the SQRT Decomposition, MO’s Algorithm, Lazy Propagation section if you can't solve the questions. Also take help from Teaching Assistants between 10am to 10pm everyday). [Duration - 5 Days]`);

        step++;
    }
    if ( entry[70] == "No" ) {
        console.log( `Step ${step} : 
            Revise Monoliths from the Course Dashboard `);

        step++;
    }
    if ( entry[71] == "No" ) {
        console.log( `Step  ${step}  : 
            Revise Microservices from the Course Dashboard`);

        step++;
    }
    if ( entry[72] == "No" ) {
        console.log( `Step ${step} : 
            Revise Horizontal & Vertical Scaling from the Course Dashboard`);

        step++;
    }
    if ( entry[73] == "No" ) {
        console.log( `Step ${step} : 
            Revise Load Balancing from the Course Dashboard`);

        step++;
    }
    if ( entry[75] == "No" ) {
        console.log( `Step ${step} : 
            Revise Distributed Systems from the Course Dashboard`);

        step++;
    }
    if ( entry[76] == "No" ) {
        console.log( `Step ${step} : 
            Revise Single Point of Failure from the Course Dashboard`);

        step++;
    }
    if ( entry[77] == "No" ) {
        console.log( `Step ${step} : 
            Revise Sharding from the Course Dashboard`);

        step++;
    }
    if ( entry[78] == "No" ) {
        console.log( `Step ${step} : 
            Revise Service Discovery & Heartbeats from the Course Dashboard`);

        step++;
    }
    if ( entry[79] == "No" ) {
        console.log( `Step ${step} : 
            Revise Capacity Planning & Estimation from the Course Dashboard`);

        step++;
    }
    if ( entry[80] == "No" ) {
        console.log( `Step ${step} : 
            Revise Content Delivery Network from the Course Dashboard`);

        step++;
    }
    if ( entry[81] == "No" ) {
        console.log( `Step ${step} : 
            Revise Messaging & Event Handling from the Course Dashboard`);

        step++;
    }
    if ( entry[82] == "No" ) {
        console.log( `Step  ${step}: 
            Revise API Design from the Course Dashboard`);

        step++;
    }
    if ( entry[83] == "No" ) {
        console.log( `Step ${step} : 
            Revise Consistency & Availability from the Course Dashboard`);

        step++;
    }
    if ( entry[84] == "No" ) {
        console.log( `Step ${step} : 
            Revise Caching from the Course Dashboard`);

        step++;
    }
    if ( entry[85] == "No" ) {
        console.log( `Step ${step} : 
            Revise NoSQL Database from the Course Dashboard`);

        step++;
    }
    if ( entry[86] == "No" ) {
        console.log( `Step ${step} : 
            Revise Data Replication from the Course Dashboard`);

        step++;
    }
    if ( entry[87] == "No" ) {
        console.log( `Step ${step} : 
            Revise Location Based Databases from the Course Dashboard`);

        step++;
    }
    if ( entry[88] == "No" ) {
        console.log( `Step ${step} : 
            Revise Monoliths to Microservices Migration from the Course Dashboard`);

        step++;
    }
    if ( entry[89] == "No" ) {
        console.log( `Step ${step} : 
            Revise Containers from the Course Dashboard`);

        step++;
    }
    if ( entry[90] == "No" ) {
        console.log( `Step ${step} : 
            Revise High Level Design (HLD) of Platforms like WhatsApp, Tinder, Netflix, SPOJ, Shazam, Gmail, Chess, Hotstar, Google Docs, Uber, Google Maps from the Course Dashboard`);

        step++;
    }
    if ( entry[91] == "No" ) {
        console.log( `Step  ${step}: 
            Revise Anomaly Detection from the Course Dashboard `);

        step++;
    }
    if ( entry[92] == "No" ) {
        console.log( `Step ${step} : 
            Revise Distributed Rate Limiting from the Course Dashboard`);

        step++;
    }
    if ( entry[93] == "No" ) {
        console.log( `Step ${step} : 
            Revise Map Reduce from the Course Dashboard`);

        step++;
    }
    if ( entry[94] == "No" ) {
        console.log( `Step  ${step}: 
            Revise Stream Processing from the Course Dashboard`);

        step++;
    }
    if ( entry[95] == "No" ) {
        console.log( `Step ${step} : 
            Revise Low Level Design (LLD/Machine Coding) of Cache, Splitwise Design, Event Bus, Rate Limited from the Course Dashboard`);

        step++;
    }
    if ( entry[96] == "No" ) {
        console.log( `Step  ${step} : 
            Revise Top Operating Systems Interview Questions from the Course Dashboard`);

        step++;
    }
    if ( entry[97] == "No" ) {
        console.log( `Step  ${step} : 
            Revise Top Database Management Systems Interview Questions from the Course Dashboard`);

        step++;
    }
    if ( entry[98] == "No" ) {
        console.log( `Step ${step}: 
            Revise Top Computer Networking Interview Questions from the Course Dashboard`);

        step++;
    }
    if ( entry[99] == "No" ) {
        console.log( `Step ${step}  : 
            Revise Top Object Oriented Programming Interview Questions from the Course Dashboard`);

        step++;
    }
    if ( entry[100] == "No" ) {

        step++;
    }
    if ( entry[101] == "No" ) {
        console.log( `Step  ${step} : 
            Revise Behavioral Questions/HR Questions from the Course Dashboard`);

        step++;
    }
}
console.log( "Roadmap: ", consoleLogs );

