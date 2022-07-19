function toCamelCase(str) {
    return str.split('_') 
              //把字串用 _ 進行分割
              .map( (words, index) => {
                    if ( index !== 0 ) {
                        const firstVacb = words.split('')[0];
                        //將非首位的字串們，分割，取出第一個字                     
                        return words.replace(firstVacb, firstVacb.toUpperCase());
                        //取代掉開頭小寫字母
                    } else {
                        return words;
                    }
                  })
              .join('');
              //合併
}