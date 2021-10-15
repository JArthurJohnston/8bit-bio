import {readable} from 'svelte/store'

const eduData = [
    {
        name: "Oakland Community College",
        year: 2008,
        degrees: [
            {
                type: "Associates",
                major: "Liberal Arts",
                minor: "",
            },
        ],
    },

    {
        name: "Eastern Michigan University",
        year: 2015,
        degrees: [
            {
                type: "Bachelors of Science",
                major: "Psychology",
                minor: "Computer Science",
            },
        ],
    },
];

export const education = readable(eduData)