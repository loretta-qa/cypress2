describe('Покупка Аватара в ПОКЕМОНАХ', function () {

    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/'); //Зашла на сайт
         cy.get(':nth-child(1) > .auth__input').type('lorettamuhametkulova@yandex.ru'); //Вела верный логин
         cy.get('#password').type('123Qwerty'); //Ввела верный пароль
         cy.get('.auth__button').click(); // Нажала Войти

         cy.get('.header__btns > :nth-child(4)').click(); // Нажала Магазин
         cy.get('.available > button').first().click();  // Выбрала аватар и нажала Купить
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111'); //Ввела номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24'); // Ввела срок
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввела код
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Loretta'); // Ввела имя
         cy.get('.pay-btn').click(); // Нажала Оплатить
         cy.get('#cardnumber').type('56456'); // Ввела код из смс
         cy.get('.payment__submit-button').click(); // Нажала Отправить
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); //Проверка что покупка прошла успешно
         cy.get('.payment__font-for-success').should('be.visible'); // Проверка, что текст виден
        })
    })