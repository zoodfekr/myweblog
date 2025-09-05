import React from 'react';
import jalaali from 'jalaali-js';

const convertToJalali = (props : string) => {
    try {
        const date = new Date(props);
        if (isNaN(date.getTime())) {
            return '';
        }
        const jalaliDate = jalaali.toJalaali(date.getFullYear(), date.getMonth() + 1, date.getDate());
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${jalaliDate.jy}/${jalaliDate.jm}/${jalaliDate.jd} - ${hours}:${minutes}:${seconds}`;
    } catch (e) {
        return '';
    }
} 

export default convertToJalali;
