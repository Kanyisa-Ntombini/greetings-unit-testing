describe('Greetings function:' , 
    function() {
        it ('should check if a name is entered', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.setName('');
                assert.deepEqual(false, testGreeting.checkName());

                let testGreeting2 = GreetMe();
                testGreeting2.setName('Grapes');
                assert.deepEqual(true, testGreeting2.checkName());
            }
        );

        it ('should check if a number is entered', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.setName(23);

                assert.deepEqual(true, testGreeting.checkNumber());
            }
        );

        it ('should check if a language was selected', 
        function () {
            let testGreeting = GreetMe();
            testGreeting.setLang('samoa');
            assert.deepEqual(true, testGreeting.checkLanguage());

            let testGreeting2 = GreetMe();
            testGreeting2.setLang();
            assert.deepEqual(false, testGreeting2.checkLanguage());
        }
    );

        it ('should ensure only the first letter is in uppercase', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.setName('banaNA'.toLocaleLowerCase());
            
                assert.deepEqual('Banana', testGreeting.getName());
            }
        );

        /*it ('should check if a greeting is made', 
        function () {
            let testGreeting = GreetMe();
            testGreeting.setName('PEacheS'.toLocaleLowerCase());

            testGreeting.setLang('samoa');
            testGreeting.checkLanguage();
            testGreeting.langErrorMessage();
            testGreeting.getLangError();
            testGreeting.getLanguage();
            testGreeting.getName();

            assert.deepEqual('Talofa, Peaches', testGreeting.showGreeting());

            
        }
    );*/

        //Test for greeting
        //Test for counter
        it ('should check how many times a person is greeted', 
            function () {
                localStorage.clear();
                let testGreeting = GreetMe();
                testGreeting.greetingsCounter();
                testGreeting.greetingsCounter();
                testGreeting.greetingsCounter();
            
                assert.deepEqual('3', testGreeting.getCounter());
            }
        );
    }
);