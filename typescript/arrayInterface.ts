const number: number[] | Array<number> = [1, 2, 1, 1];

const names: string[] | Array<number | string> = ["raja", 1, "mitesh", "tanuj"];

interface Profile {
    name: string;
    hobbies: string[];
    phone: number;
}

type ProfileV2 = {
    name: string;
    hobbies: string[];
    phone: number;
    getName: () => string;
};

const profile: ProfileV2 = {
    name: "ankit",
    hobbies: ["music", "biking"],
    phone: 9977092455,
    getName: () => {
        return "Ankit";
    },
};
