let students = [
    { name: 'ანა', score: 85 },
    { name: 'ნიკა', score: 42 },
    { name: 'მარიამი', score: 91 },
    { name: 'ლაშა', score: 38 }
];

for (let i of students) {
    if (i.score > 50) {
        console.log(i.name);
    };
};