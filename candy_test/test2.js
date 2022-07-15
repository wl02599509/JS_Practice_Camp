const func = () => console.log("hi");
const times = 3;

Array.from({length: times}, () => func());
