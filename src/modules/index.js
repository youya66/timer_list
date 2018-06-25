/*
{
    "name": "whiterabbit",
    "version": "1.0.0"
}
*/
import alpha from "./lib/alpha";
import check_past from "./lib/check_past";
import concatenate_time_to_clock from "./lib/concatenateTimeToClock";
import convert_clock_to_time from "./lib/convertClockToTime";
import convert_milli_to_time from "./lib/convertMilliToTime";
import convert_str_to_milli from "./lib/convertStrToMilli";
import convert_time_to_milli from "./lib/convertTimeToMilli";
import display from "./lib/display";
import exist_units from "./lib/existUnits";
import flat_units from "./lib/flatUnits";
import generate_date_millis from "./lib/generateDateMillis";
import get_diff_date_millis from "./lib/getDiffDateMillis";
import is_numeric from "./lib/isNumeric";
import is_time from "./lib/isTime";
import is_clock from "./lib/isClock";
import normalize_name_follow_time from "./lib/normalizeNameFollowTime";
import normalize_units from "./lib/normalizeUnits";
import pad_units from "./lib/padUnits";
import pad_zero from "./lib/padZero";
import pad_zero_specific from "./lib/padZeroSpecific";
import put_time_base_time from "./lib/putTimeBaseTime";
import put_time_base_ten from "./lib/putTimeBaseTen";
import shift_time_to_input from "./lib/shiftTimeToInput";
import slice_clock from "./lib/sliceClock";
import undisplay from "./lib/undisplay";

import calc_base_ten from "./utils/calcBaseTen";
import calc_base_time from "./utils/calcBaseTime";
import get_count from "./utils/getCount";
import get_date from "./utils/getDate";

const whiterabbit = {
    alpha,
    check_past,
    concatenate_time_to_clock,
    convert_clock_to_time,
    convert_milli_to_time,
    convert_time_to_milli,
    convert_str_to_milli,
    display,
    exist_units,
    flat_units,
    generate_date_millis,
    get_diff_date_millis,
    is_numeric,
    is_time,
    is_clock,
    normalize_name_follow_time,
    normalize_units,
    pad_units,
    pad_zero,
    pad_zero_specific,
    put_time_base_time,
    put_time_base_ten,
    shift_time_to_input,
    slice_clock,
    undisplay,

    // units
    calc_base_ten,
    calc_base_time,
    get_count,
    get_date,
}

export default whiterabbit;

// clock -> "0000"
// time -> {} or [];
// units -> ["hours", "minutes","seconds","millis"];
// date -> new Date().getTime(). date mills or dms;
// millis -> millis or dms