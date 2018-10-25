jQuery(document).ready(function(){

	$cushion = 'cushion.html';

	function pickText($class) {
		return $($class).text();
	}

	function createDialog($id) {
		$text = pickText($id.selector+' p');
		if(!confirm("「"+ $text +"」\nでよろしいですか？")){
			// キャンセル
			return false;
		} else {
			sessionStorage.setItem("selectText", $text);
			// location.href = $cushion + "?" + "test=" + $text;
			location.href = $cushion;
		}
	}

	// 選択肢①の確認ダイアログ
	$('#wrapper #choices #choice1').click(function(){
		createDialog($('#wrapper #choices #choice1'));
	});
	// 選択肢②の確認ダイアログ
	$('#wrapper #choices #choice2').click(function(){
		createDialog($('#wrapper #choices #choice2'));
	});
	// 選択肢③の確認ダイアログ
	$('#wrapper #choices #choice3').click(function(){
		createDialog($('#wrapper #choices #choice3'));
	});
	// 選択肢④の確認ダイアログ	
	$('#wrapper #choices #choice4').click(function(){
		createDialog($('#wrapper #choices #choice4'));
	});


});