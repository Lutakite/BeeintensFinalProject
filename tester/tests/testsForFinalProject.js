let chai = require('chai');
let expect = chai.expect;



describe('Beeline final project', function() {
    before(function() {
        browser.url('http://localhost:8080/');
        let title = browser.getTitle();
        expect(title).to.equal('BeeInterns');
    });

    beforeEach(function() {
        browser.pause(3000);
    });

    it('Перейти на вкладку "Личный кабинет"', function() {
        $('//a[text()=\'Личный кабинет\']').click();
        let studentName = $('//h3[contains(text(), \'\')]');
        expect((studentName).getText()).to.equal('Дмитриев Светлан Михайа');
    });

    it('Перейти на вкладку "Лекции"', function() {
        $('//a[text()=\'Лекции\']').click();
        let professorName = $$('//div[@class=\"LessonsList_lessonProfessor_3D69\"]');
        expect(professorName[0].getText()).to.contains("Пав Уколов");
    });

    it('Перейти на вкладку "Преподаватели"', function() {
        $('//a[text()=\'Преподаватели\']').click();
        let professorName = $$('//div[@class=\"ProfessorsList_professor_HHFS\"]');
        expect(professorName[0].getText()).to.contains("Пав Уколов");
    });

    it('Перейти на вкладку "О программе"', function() {
        $('//a[text()=\'О программе\']').click();
        title = browser.getTitle();
        expect(title).to.equal('BeeInterns');
    });



});