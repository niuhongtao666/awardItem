var award1_storage = window.localStorage.getItem('award_1');
var award1_datas = JSON.parse(award1_storage);
var award2_storage = window.localStorage.getItem('award_2');
var award2_datas = JSON.parse(award2_storage);
var award3_storage = window.localStorage.getItem('award_3');
var award3_datas = JSON.parse(award3_storage);
var award4_storage = window.localStorage.getItem('award_4');
var award4_datas = JSON.parse(award4_storage);
var lottery_initial_datas=[];
for(var i=0;i<300;i++){
    var num1=Math.floor(Math.random()*2)+'';//0-1;
    var num2=Math.floor(Math.random()*10)+'';//0-10;
    var num3=Math.floor(Math.random()*10)+'';//0-10;
    var obj={};
    obj['nameen']='avatar'+i;
    obj['namezh']=num1+num2+num3;
    lottery_initial_datas.push(obj);
}
console.log(lottery_initial_datas)
var obj={};
lottery_initial_datas=lottery_initial_datas.reduce((cur,next) => {
    obj[next.namezh] ? "" : obj[next.namezh] = true && cur.push(next);
    return cur;
},[]);
var newArr=[];
for(var i=0;i<lottery_initial_datas.length;i++){
    newArr[i]=lottery_initial_datas[i]
}
console.log(newArr);
console.log(lottery_initial_datas);
if(award1_datas&&award1_datas.length!=0){
    console.log(award1_datas);
    for(var i=0;i<award1_datas.length;i++){
        for(var j=0;j<lottery_initial_datas.length;j++){
        // console.log(j);
            if(lottery_initial_datas[j]['namezh']===award1_datas[i]['namezh']){
                console.log(lottery_initial_datas[j]['namezh']);
                console.log(j);
                lottery_initial_datas.splice(j,1);
            }
        }
    }
}
if(award2_datas&&award2_datas.length!=0){
    console.log(award2_datas);
    for(var i=0;i<award2_datas.length;i++){
        for(var j=0;j<lottery_initial_datas.length;j++){
            if(lottery_initial_datas[j]['namezh']===award2_datas[i]['namezh']){
                console.log(lottery_initial_datas[j]['namezh']);
                console.log(j);
                lottery_initial_datas.splice(j,1);
            }
        }
    }
}
if(award3_datas&&award3_datas.length!=0){
    console.log(award3_datas);
    for(var i=0;i<award3_datas.length;i++){
        for(var j=0;j<lottery_initial_datas.length;j++){
            if(lottery_initial_datas[j]['namezh']===award3_datas[i]['namezh']){
                console.log(lottery_initial_datas[j]['namezh']);
                console.log(j);
                lottery_initial_datas.splice(j,1);
            }
        }
    }
}
if(award4_datas&&award4_datas.length!=0){
    console.log(award4_datas);
    for(var i=0;i<award4_datas.length;i++){
        for(var j=0;j<lottery_initial_datas.length;j++){
            if(lottery_initial_datas[j]['namezh']===award4_datas[i]['namezh']){
                console.log(lottery_initial_datas[j]['namezh']);
                console.log(j);
                lottery_initial_datas.splice(j,1);
            }
        }
    }
}
console.log(lottery_initial_datas);

var award_config = {
    "award01": 1,
    "award02": 3,
    "award03": 6,
    "award04": 200//抽奖次数
};

// 初始化数据
//初始化抽奖号
if (!localStorage.getItem('lottery_initial')) {
    var data_str = JSON.stringify(lottery_initial_datas);
    localStorage.setItem('lottery_initial', data_str);
}else{
    // console.log(localStorage.getItem('lottery_initial'));
    var data_str = JSON.stringify(lottery_initial_datas);
    localStorage.setItem('lottery_initial', data_str);
}
//初始化抽奖次数
if (!localStorage.getItem('award_initial')) {
    var award_str = JSON.stringify(award_config);
    localStorage.setItem('award_initial', award_str);
}else{
    var award_str = JSON.stringify(award_config);
    localStorage.setItem('award_initial', award_str);
}