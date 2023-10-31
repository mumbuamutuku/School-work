interface MajorCredits {
    credits: number;
    brand: "MajorCredits";
}
interface MinorCredits {
    credits: number;
    brand: "MinorCredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
    return {
        brand: "MajorCredits",
        credits: subject1.credits + subject2.credits,
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
    return {
        brand: "MinorCredits",
        credits: subject1.credits + subject2.credits,
    };
}
 