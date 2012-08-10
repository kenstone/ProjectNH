<?php
	global $sidebar;
	if( $sidebar == "right-sidebar" ){
		
		global $right_sidebar;
		echo "<div class='five columns mt0 gdl-right-sidebar'>";
		echo "<a href='https://twitter.com/kenstone' class='twitter-follow-button'";
		echo " data-show-count='false' data-size='large'>Follow @kenstone</a>";
		echo "<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='//platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','twitter-wjs');</script>";
		echo "<div class='right-sidebar-wrapper gdl-divider'>";
		dynamic_sidebar( $right_sidebar );
		echo "<div class='pt30'></div>";
		echo "</div>";
		echo "</div>";
	
	}else if( $sidebar == "both-sidebar" ){
		
		global $right_sidebar;
		echo "<div class='four columns mt0 gdl-right-sidebar'>";
		echo "<div class='right-sidebar-wrapper gdl-divider'>";
		dynamic_sidebar( $right_sidebar );
		echo "<div class='pt30'></div>";	
		echo "</div>";			
		echo "</div>";				
	
	}

?>