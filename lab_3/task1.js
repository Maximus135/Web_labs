const ITMO_BORN_YEAR = 1990;
const ITMO_BORN_MONTH = 3;
const ITMO_BORN_DAY = 26;

let conver_number_string = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
};

let itmoBornDate = {
    mon: ITMO_BORN_MONTH,
    day: ITMO_BORN_DAY,
    year: ITMO_BORN_YEAR,
    toDateString: function() {
        for (let i = 1; i <= 12; i++) {
            if (this.mon == i) {
                return (
                    'Mon ' + conver_number_string[i] + ' ' + this.day + ' ' + this.year
                );
            }
        }
        return 0;
    },
};

console.log(itmoBornDate.toDateString()); // Mon Mar 26 1990