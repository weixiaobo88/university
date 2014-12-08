function loadAllCourses() {
    return [
        new Course('COURSE000001', '高等数学', '必修', 4, 60),
        new Course('COURSE000002', '计算机基础', '必修', 2, 60),
        new Course('COURSE000003', '软件工程', '必修', 4, 70),
        new Course('COURSE000004', '社交礼仪', '选修', 2, 60),
        new Course('COURSE000005', 'Java', '必修', 4, 60),
        new Course('COURSE000006', 'IOS', '选修', 2, 60)
    ];
}

function loadSocialPractices() {
    return [
        new SocialPractice('PRACTICE-Java开发实践', ['COURSE000005'], 80),
        new SocialPractice('PRACTICE-IOS开发实践', ['COURSE000006'], 80),
        new SocialPractice('PRACTICE-暑期三下乡实践', [], 60)
    ]
}
