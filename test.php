<?php 
function MyDate ($day, $month) {
    $arrayMonth = [
        1 => "января",
        2 => "февраля",
        3 => "марта",
        4 => "апреля",
        5 => "мая",
        6 => "июня",
        7 => "июля",
        8 => "августа",
        9 => "сентября",
        10 => "октября",
        11 => "ноября",
        12 => "декабря",
    ];
    echo "$day $arrayMonth[$month] \n";
}

MyDate(1, 1);
MyDate(9, 5);

function Profit ($sum, $months, $percent) {
    $deposit = 0;
    for ($i = 1; $i <= $months; $i++){
        $deposit += $sum * ($percent / 100) / $months;
    }
    return $deposit+$sum;
}

echo Profit(1000000, 12, 16), "\n";
    

?>
