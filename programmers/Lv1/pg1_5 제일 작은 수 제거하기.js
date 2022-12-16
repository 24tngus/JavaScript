// 5. 제일 작은 수 제거하기
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.

function solution(arr) {
    var answer = [];
    
    if (arr.length === 1){
        answer = [-1];
    }
    else{
        arr.splice(arr.indexOf(Math.min(...arr)),1);
        answer = arr;
    }
    return answer;
}