import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from "i18next-http-backend";

const resources = {
    ja: {
        translation: {
            "BP 계산": "BP計算",
            "대전 상대 레벨": "対戦相手レベル",
            "OD 수치": "OD数値",
            "1.25 또는 1.2": "1.25もしくは1.2",
        }
    },
    ko: {
        translation: {
            "BP 계산": "BP 계산",
            "대전 상대 레벨": "대전 상대 레벨",
            "OD 수치": "OD 수치",
            "1.25 또는 1.2": "1.25 또는 1.2",
        }
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'ko',
    });

export default i18n;