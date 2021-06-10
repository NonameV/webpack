const regExpDic = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    desc: /([A-z])/
}

export function isValid(el){
    const regExpName = el.dataset.required;
    if(!regExpDic[regExpName]) return true;
    return regExpDic[regExpName].test(el.value);
    
}