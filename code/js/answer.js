jQuery(document).ready(function(){

    // 選択したテキストの表示エリアをオブジェクト化
    var obj = document.getElementById("selectShowText");
    
    // 選択したテキストをセッションストレージから取得
    var selectText =  sessionStorage.getItem("selectText");
    
    // 選択したテキストをエリアに表示する
    obj.innerHTML = selectText;


});