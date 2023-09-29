const date = new Date("December 25, 1995 23:15:30")

const gigaseconds = 1e12;
const gigasecond = (date) => {
    return new Date(date.getTime() + gigaseconds);
};

console.log(gigasecond(date))