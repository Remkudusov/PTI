<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>PHP</title>
	<link href="./style.css" rel="stylesheet" />
	<style>
		div{
		    text-align: center;
		}
		p{
			color: blue;
			font-size: 80px;
		}
	</style>
</head>
<body>
	<?php
		$file = $_SERVER['DOCUMENT_ROOT']."/count.txt";
		$rez = 1;
		if (!file_exists($file)){
			file_put_contents($file, "1"); 
		} 
		else{
			$rez = file_get_contents($file);
			$rez++;
			file_put_contents($file, $rez); 
		}
		echo "
			<div>
				<p>Сайт был посещён $rez раз(а)</p>
			</div>
		";
	?>
</body>

</html>