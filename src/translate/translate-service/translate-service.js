import { enJson } from "../assets/en"
import { faJson } from "../assets/fa"
export let currentLanguage = (localStorage.getItem('lang') && (localStorage.getItem('lang').indexOf('en') !== -1)) ? localStorage.getItem('lang') : 'fa'
export function t(translateString) {
    let currentJson = (currentLanguage === "fa") ? faJson : enJson;
    if (Boolean(currentLanguage)) {
        if (Boolean(currentJson[translateString])) {
            return currentJson[translateString];
        } else {

        }
    } else {

    }
}
export function changeCurrentLanguage(changeLanguageParam) {
    currentLanguage = Boolean(changeLanguageParam) ? changeLanguageParam : 'fa';
    localStorage.setItem('lang' , changeLanguageParam);
    document.title = t('header__websiteTitle');
    document.documentElement.setAttribute('dir' , (currentLanguage === "fa" ? "rtl" : "ltr"))
    document.documentElement.setAttribute('lang' , currentLanguage)
}
export function changeRoute(languageParam) {
    
}