// es6情况下计算字符串的长度
const gainRealLength = (text) => {
    let realLen = 0;
    for(let i = 0, len = text.length; i < len; i++){
        if(text.codePointAt(i) > 0xFFFF){
            continue;
        }

        realLen += 1;
    }

    return realLen;
}

// 测试包含BMP字符串和包含非BMP字符串时
let text="𠮷a";
console.log("真正长度", gainRealLength(text));