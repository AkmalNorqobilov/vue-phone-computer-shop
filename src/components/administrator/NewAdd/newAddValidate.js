export  const  news = {
    data:()=>({
        required(name){
                return v => v&& v.length>0 || `${name} bo'sh bo'lmasin`
        },
        minLength(name, minLength){
            return v=>v&&v>0||`${name} ${minLength}dan katta bo'lsin!!! `
        }
    })
}