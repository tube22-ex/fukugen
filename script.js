
// DAGの作成、keygraph.jsを読み込むとkeygraph変数が使えるようになります。
/*
必要なデータ
0秒
5秒　めるととけてしまいそう
10秒　すきだなんてぜったいにいえない    */
let count = 0;   
let kashi = ["めると","とけてしまいそう"]
let time = [1000,6000]    

function test2(){
    function test1(){
        keygraph.build(kashi[count]);
        count++
        disp();
        test2();
    }
    setTimeout(test1,time[count])
}
test2();
    /* 一応表示されるが、これだと3回目の何もないのにsetTimeoutをしようとしているためif文かなにかで分岐しないと3回目にエラーがでる */

// これから打つキー、すでに打ったキーを表示、 ... は適宜変更してください。
const disp = ()=>{
    // タイプし終わったキーの取得
    document.getElementById("owatta_roma").innerText = keygraph.key_done();

    // これからタイプしなければいけないキーの取得
    document.getElementById("korekara_roma").innerText = keygraph.key_candidate();

        
    // 打ち終わった ひらがな の取得
    document.getElementById("owatta_hiragana").innerText = keygraph.seq_done();

    // これから打つ ひらがな の取得
    document.getElementById("korekara_hiragana").innerText = keygraph.seq_candidates();
}

// keydownのイベント処理
document.body.addEventListener("keydown", e => {
    if (keygraph.next(e.key)) {
        // 入力がタイピングするキーと一致している場合
    }
    if (keygraph.is_finished()) {

    document.getElementById("owatta_roma").style.color = 'green'
    document.getElementById("owatta_hiragana").style.color = 'green'
        // すべての文字をタイプし終わったとき
    }
    disp();
});
disp();
