describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); //Зашла на сайт

         cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввела верный пароль
         cy.get('#loginButton').click(); //Нажала Войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после авториз. есть текст
         cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
        })

        it('Забыли пароль', function () {
            cy.visit('https://login.qa.studio/'); //Зашла на сайт
            cy.get('#forgotEmailButton').click(); // Нажала Забыли пароль
            cy.get('#mailForgot').type('loretta@mail.ru'); // Ввела почту
            cy.get('#restoreEmailButton').click(); //Нажала Отправить код
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю, что после отправки почты есть текст
            cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
           })

           it('Верный логин и неверный пароль', function () {
            cy.visit('https://login.qa.studio/'); //Зашла на сайт
   
            cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
            cy.get('#pass').type('iLoveqastudio4'); //Ввела неверный пароль
            cy.get('#loginButton').click(); //Нажала Войти
   
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после авториз. есть текст
            cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
           })

           it('Неверный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio/'); //Зашла на сайт
   
            cy.get('#mail').type('german4@dolnikov.ru'); // Ввела неверный логин
            cy.get('#pass').type('iLoveqastudio1'); //Ввела верный пароль
            cy.get('#loginButton').click(); //Нажала Войти
   
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после авториз. есть текст
            cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
           })

           it('Логин без @ и верный пароль', function () {
            cy.visit('https://login.qa.studio/'); //Зашла на сайт
   
            cy.get('#mail').type('germandolnikov.ru'); // Ввела логин без @
            cy.get('#pass').type('iLoveqastudio1'); //Ввела верный пароль
            cy.get('#loginButton').click(); //Нажала Войти
   
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю, что после авториз. есть текст
            cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
           })

           it('Логин с разными регистрами и верный пароль', function () {
            cy.visit('https://login.qa.studio/'); //Зашла на сайт
   
            cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввела логин с разными регистрами
            cy.get('#pass').type('iLoveqastudio1'); //Ввела верный пароль
            cy.get('#loginButton').click(); //Нажала Войти
   
            cy.get('#messageHeader').contains('НАвторизация прошла успешно'); //Проверяю, что после авториз. есть текст
            cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
           })

    })
  