let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
let blackList = ['jsfunc@mail.ru', 'goodday@day.ru']

function filter(whiteList, blackList) {
    let result = whiteList.filter(email => !blackList.includes(email));
    return result;
}

let result = filter(whiteList, blackList);
console.log(result);