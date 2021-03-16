export const register = {
    data: ()=> ({
        name: "",
        password: "",
        email: "",
        show2:false,
        valid: false,
        required(name){ 
            return v => v && v.length>0 ||`${name} bo'sh bo'lmasligi kerak !!!`
        },
        minLength(name, minLength){
            return v=> v && v.length>=minLength || `${name} kamida  ${minLength} ta belgidan iborat bo'lsin!!!`
        },

        maxLength(name, maxLength){
            return v=> v && v.length<=maxLength || `${name} ko'pi bilan  ${maxLength} ta belgidan iborat bo'lsin!!!`
        },
        emailRules:  v =>  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail ushbu ko\'rinishda bo\'lsin something@something.com'
    })
}