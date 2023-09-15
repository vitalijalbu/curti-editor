import {getSession} from "@/lib/api";
import * as dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/it"; // Import the Italian locale
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
import advancedFormat from "dayjs/plugin/advancedFormat"; // Import the advancedFormat plugin
dayjs.extend(relativeTime);
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("it"); // Set the locale to Italian


//convert to currency
const currencyFormatter = (number, currency) => {
    currency = currency || 'EUR';
    const formatter = new Intl.NumberFormat('it-IT', { style: 'currency', currency: currency });
    return formatter.format(number);
};
  
//round number
const numberFormatter = (value) => {
    const number = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(number)) {
        return 'Chiedi info';
    }
    return Math.round((value * 10000)) / 10000; //max 4 digits
};



const dateStringToDate = (value) => {
    return value ? dayjs(value).format("YYYY-MM-DD") : null;
}; 

const dateTimeFormatter = (value) => {
    return value ? dayjs(value).format("YYYY-MM-DD HH:mm") : null;
};

const dateFormatter = (value) => {
    if (value) {
      const date = dayjs(value);
      const now = dayjs();
      const diffInDays = now.diff(date, "day");
  
      if (diffInDays <= 30) {
        return date.fromNow();
      } else {
        return date.format("YYYY-MM-DD");
      }
    }
    return null;
  };

  
  export { currencyFormatter, numberFormatter, dateFormatter, dateTimeFormatter, dateStringToDate };
  