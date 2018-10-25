jQuery(document).ready(function(){

    // 選択したテキストの表示エリアをオブジェクト化
    var obj = document.getElementById("selectShowText");
    var obj2 = document.getElementById("resultText");
    
    // 選択したテキストをセッションストレージから取得
    var selectText =  sessionStorage.getItem("selectText");
    
    // 選択したテキストをエリアに表示する
    obj.innerHTML = selectText;

    function pickAnswer($select) {
    	if ($select === '① 辛くて当然だからまだまだ頑張ろう') {
    		return "仕事は辛くて当然だという論を持っています。";
    	} else if ($select === '② これくらいどうってことない') {
    		return "これは出来て当然という論を持っています。";
    	} else if ($select === '③ もうすぐ頂上だからあと少し頑張れば出来る') {
    		return "とにかく頑張ればなんでも出来るという論を持っています。";
    	} else if ($select === '④ ここまでよく頑張れたな') {
    		return "まず労いの言葉をかけることが重要という論を持っています。";
    	}
    }

    obj2.innerHTML = pickAnswer(selectText);
});