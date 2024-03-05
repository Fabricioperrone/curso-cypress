const { resolve } = require("cypress/types/bluebird");

it('sem testes ainda', () => { })

//método
// const getSomething = () => 10;
//  const getSomething = () => {
//     setTimeout(() => {
//         return 11;
//     }, 1000)
//  }
// const getSomething = (callback) => {
//     setTimeout(() => {
//         callback(12);
//     }, 1000)
//  }
const getSomething = () => {
    return new Promise((resolve, reject)  => {
        setTimeout(() => {
            resolve(13);
        }, 1000)
    })
}


// const system = () => {
//     console.log('init');
//     const something = getSomething();
//     console.log(`Something is ${something}`)
//     console.log('end')
// }
// const system = () => {
//     console.log('init');
//     getSomething(some => console.log(`Something is ${some}`));
//     console.log('end')
// }
const system = async () => {
    console.log('init');
    const some = await getSomething()
    console.log(`Something is ${some}`)
    console.log('end')
}
system();