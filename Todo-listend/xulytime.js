//1. Hàm thêm số 0 vào đằng trước các só từ 1 -> 9
function addZero(number){
    if(number > 0 && number < 10 ){
        return '0' + number
    }
    return '' + number
}
