function janken(myHand){
    let handArray =['グー','チョキ','パー'];

    console.log('プレイヤーの手は' + handArray[myHand]);

    // コンピューターの手をランダムに決める
    // Math.random()は、0以上1未満の疑似乱数分布から1つ値を返す
    let rand =Math.random() * 100;
    console.log(rand);

    // Math.floor()は、与えられた因数以下の最大の整数を表す
    let randInt = Math.floor(rand);
    console.log(randInt);

    // 生成したランダムな値を3でわったあまりをコンピューターの手とする
    let computerHand = randInt % 3 ;
    console.log('コンピューターの手は.' + handArray[computerHand]);

    // 勝ち負けの変数
    let result = 0;
    
    // 結果の文字列を格納する配列
    let resultText = ['アイコです.','あなたの負けです.','あなたの勝ちです.'];


    // 勝ち負けの判定
    // if(myHand === 0){
    //     if (computerHand === 0){
    //         result=0;
    //     }else if(computerHand === 1){
    //         result=2;   
    //     }else if(computerHand === 2){
    //         result=1;
    //     }
    // }else if(myHand === 1){
    //     if (computerHand === 0){
    //         result=1;
    //     }else if(computerHand === 1){
    //         result=0;   
    //     }else if(computerHand === 2){
    //         result=2;
    //     }      
    // }else if(myHand === 2){
    //     if (computerHand === 0){
    //         result=2;
    //     }else if(computerHand === 1){
    //         result=1;   
    //     }else if(computerHand === 2){
    //         result=0;
    //     }
    // }
    
    // if文を書かなくてもジャンケンは実装できる
    result = (myHand - computerHand + 3) % 3;

    // 勝敗をコンソールに表示する
    console.log(resultText[result]);

    // HTMLに勝敗を表示する
    // const result_p = document.querySelector('#janken-result');
    // result_p.textContent = resultText[result];
 
    $('#janken-result').text('あなたの手は' + handArray[myHand] + '.コンピューターの手は' + handArray[computerHand]);

    
}