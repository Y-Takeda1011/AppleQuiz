jQuery(document).ready(function(){
	// 選択肢①の確認ダイアログ
	$('#wrapper #choices #choice1').click(function(){
		if(!confirm("「① 辛くて当然だからまだまだ頑張ろう」\nでよろしいですか？")){
			// キャンセル
			return false;
		} else {
			location.href = 'index.html';
		}
	});
	// 選択肢②の確認ダイアログ
	$('#wrapper #choices #choice2').click(function(){
		if(!confirm("「② これくらいどうってことない」\nでよろしいですか？")){
			// キャンセル
			return false;
		} else {
			location.href = 'index.html';
		}
	});
	// 選択肢③の確認ダイアログ
	$('#wrapper #choices #choice3').click(function(){
		if(!confirm("「③ もうすぐ頂上だからあと少し頑張れば出来る」\nでよろしいですか？")){
			// キャンセル
			return false;
		} else {
			location.href = 'index.html';
		}
	});
	// 選択肢④の確認ダイアログ	
	$('#wrapper #choices #choice4').click(function(){
		if(!confirm("「④ ここまでよく頑張れたな」\nでよろしいですか？")){
			// キャンセル
			return false;
		} else {
			location.href = 'index.html';
		}
	});
});