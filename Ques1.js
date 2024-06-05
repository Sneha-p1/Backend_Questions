function fun1(val1,ch){
    console.log(val1);
    ch("you are in second function", fun3);

}
    function fun2(val2,ch2)
    {
        console.log(val2);
        ch2("you are in third function",fun4);
       
    }
   
        function fun3(val3,ch3)
        {
            console.log(val3);
            ch3("you are in fourth function",fun5);
        }

            function fun4(val4,ch4)
            {
                console.log(val4);
                ch4();
            }
                function fun5(){
                    console.log("end of program..")
                }

fun1( "you are in first function",fun2)