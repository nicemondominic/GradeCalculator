const defaultGradingScale = {
    A: 90,
    B: 80,
    C: 70,
    D: 60,
    F: 0
};
function calculateGrade(scores, gradingScale = defaultGradingScale) {
    const total = scores.reduce((acc, score) => acc + score, 0);
    const average = total / scores.length;
    if (average >= gradingScale.A) {
        return 'A';
    } else if (average >= gradingScale.B) {
        return 'B';
    } else if (average >= gradingScale.C) {
        return 'C';
    } else if (average >= gradingScale.D) {
        return 'D';
    } else {
        return 'F';
    }
}
const scores = [85, 90, 78, 92, 88];
const finalGrade = calculateGrade(scores);
console.log(`Final Grade: ${finalGrade}`);
const customGradingScale = {
    A: 85,
    B: 75,
    C: 65,
    D: 50,
    F: 0
};
const finalGradeWithCustomScale = calculateGrade(scores, customGradingScale);
console.log(`Final Grade with Custom Scale: ${finalGradeWithCustomScale}`);
