describe('South Harmon Institute of Technology University', function () {
    var allCourses, allSocialPractices, inputs;

    beforeEach(function () {
        allCourses = loadAllCourses();
        allSocialPractices = loadSocialPractices();

        inputs = [
            'COURSE000001: 90',
            'COURSE000002: 70',
            'COURSE000003: 55',
            'COURSE000004: 60',
            'COURSE000005: 70',
            'PRACTICE-Java开发实践: 70',
            'PRACTICE-暑期三下乡实践: 80',
            'PRACTICE-IOS开发实践: 80'
        ];
    });

    it('should print correct text', function () {

        spyOn(console, 'log');

        printDetail(inputs);

        var expectText =
            '***<南哈蒙理工大学>学分明细***\n' +
            '----------------------\n' +
            '已修学分：\n' +
            '必修：14\n' +
            '选修：2\n' +
            '----------------------\n' +
            '社会实践：\n' +     //如果没参加，需要显示的是：需要参加社会实践
            '可折算成必修课的学分：4\n' +
            '可折算成选修课的学分：2\n' +
            '----------------------\n' +
            '离顺利毕业还差学分：\n' +
            '必修：26\n' +
            '选修：20\n' +
            '----------------------\n' +
            '顺利毕业的所有课程平均分基线：65\n' +
            '当前所有课程平均分：\n' +
            '**********************';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
