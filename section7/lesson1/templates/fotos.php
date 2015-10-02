<?php
for ($i = 1; $i < 100; $i++){
	//echo "<img src='http://api.randomuser.me/portraits/men/$i.jpg' whidth='100' height='100' /><br />";
	echo "http://api.randomuser.me/portraits/men/$i.jpg <br />";
	if ($i < 97) {
		//echo "<img src='http://api.randomuser.me/portraits/women/$i.jpg' whidth='100' height='100' /><br />";
		echo "http://api.randomuser.me/portraits/women/$i.jpg <br />";
	}
	
}
?>