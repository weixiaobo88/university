//TODO: Please write code in this file.

function printDetail(inputs) {
    var title = '***<南哈蒙理工大学>学分明细***\n';
    var separator = '----------------------\n';
    var ending = '**********************';

    var achievedCredits =   '已修学分：\n' +
                            '必修：' + calculateCredits(inputs).achievedCompulsoryCredits + '\n' +
                            '选修：' + calculateCredits(inputs).achievedElectiveCredits + '\n';
    var socialPractice = '';

    var result = title + separator + achievedCredits + socialPractice + ending;

    console.log(result);
}

function calculateCredits(inputs) {
    var achievedCompulsoryCredits = 0;
    var achievedElectiveCredits = 0;
    var compulsoryCreditsNeedToGet = 40;
    var electiveCreditsNeedToGet = 20;
    var compulsoryCreditsLeft = 0;
    var electiveCreditsLeft = 0;
    var compulsoryCreditsConvention = 0;
    var electiveCreditsConvention = 0;


    var selectedCourses = assignDetailToInput(inputs);

    selectedCourses.forEach(function(selectedCourse) {
        if(isCourse(selectedCourse.code)) {
            achievedCompulsoryCredits += selectedCourse.type == '必修'? selectedCourse.credit : 0;
            achievedElectiveCredits += selectedCourse.type == '选修'? selectedCourse.credit : 0;
        }
        if (isSocialPractice(selectedCourse.code)) {
            compulsoryCreditsConvention += selectedCourse.credit;
            electiveCreditsConvention += selectedCourse.credit;
        }
    });

    compulsoryCreditsLeft = compulsoryCreditsNeedToGet - achievedCompulsoryCredits;
    electiveCreditsLeft = electiveCreditsNeedToGet - achievedElectiveCredits;

    return {
        achievedCompulsoryCredits: achievedCompulsoryCredits,
        achievedElectiveCredits: achievedElectiveCredits
    }
}

function assignDetailToInput(inputs) {
    var allCourses = loadAllCourses();
    var inputsWithDetail = [];

    inputs.forEach(function(input) {
        var courseCode = input.split(':')[0];
        var courseScore = input.split(':')[1];
        allCourses.forEach(function(course) {
            if(course.code === courseCode) {
                course.score = courseScore;
                inputsWithDetail.push(course);
            }
        });
    });
    return inputsWithDetail;
}

function isCourse(input) {
    var course = false;
    if(input.indexOf('COURSE') === 0) {
        course = true;
    }
    return course;
}

function isSocialPractice(input) {
    var socialPractice = false;
    if(input.indexOf('PRACTICE') === 0) {
        socialPractice = true;
    }
    return socialPractice;
}
