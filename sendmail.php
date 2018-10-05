<?php
if($_POST){
	
	if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone'])){
		echo '<script>
			$(document).ready(function(){
				swal("Xin Lỗi !","Vui Lòng Điền Đầy Đủ Thông Tin!","warning");
			});
			</script>';
	}else{
		$name 		= ($_POST['name']);
		$email		= ($_POST['email']);
		$phone 	    = ($_POST['phone']);
		$message       = ($_POST['message']);
		$custommer 	= 'Khách Hàng';
		
		
		require_once('phpmailer/PHPMailer/class.phpmailer.php');

		$Email = new PHPMailer();
		$Email->SetLanguage("br");
		$Email->IsSMTP(); 
		$Email->SMTPAuth = true; 
		$Email->Host = 'smtp.gmail.com'; 
		$Email->Port = '587'; 
		$Email->SMTPSecure = 'tls';
		$Email->Username = 'sieuthisaffron@gmail.com'; 
		$Email->Password = 'SieuThiSaffron@'; 
	

		$Email->IsHTML(true); 
	
		$Email->From = $email;
		
		$Email->FromName = ("sieuthisaffron@gmail.com");
		
		$Email->AddReplyTo($email, $name);
		$Email->AddAddress("sieuthisaffron@gmail.com"); 
	
		$Email->Subject = utf8_decode($custommer);
		
		$Email->Body = "<br/>
						 <strong>Name:</strong> $name<br/>									
						 <strong> Email:</strong> $email<br/>
						 <strong> Phone :</strong> $phone <br/>
						 <strong> Phone :</strong> $message <br/>";	
	
		if(!$Email->Send()){				
			 echo'
			<script>
				$(document).ready(function(){
					swal("Ops '.($name).'...","Đã xãy ra lỗi, bạn vui lòng liên hệ với chúng tôi qua số điện thoại bên dưới!", "error");
				});
			</script>';

		}else{
			 echo'
		<script>
			$(document).ready(function(){
				swal("Xin Chào '.($name).'...", "Cảm ơn bạn đã liên hệ với chúng tôi. \n Chúng tôi sẽ hỗ trợ bạn sớm nhất có thể!", "success")
			});
		</script>';
			echo 'Chúng tôi sẽ liên hệ với '.($name).' sớm nhất có thể';
			include('index.html');
		}		
	}
}
