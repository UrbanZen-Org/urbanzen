<?php
error_reporting(0);
$api_key = '8f145ec349879f2f11b3768076c7edf1-us2';
$dc = substr($api_key, strpos($api_key, "-") + 1);
$list_id = '1e92fa25d8';
$email = $_REQUEST['email'];
$params = json_encode(array("email_address" => $email, "status" => "subscribed"));
$ch = curl_init();
curl_setopt($ch, CURLOPT_POST, true );
curl_setopt($ch, CURLOPT_URL, "https://$dc.api.mailchimp.com/3.0/lists/$list_id/members");
curl_setopt($ch, CURLOPT_USERPWD, "api:$api_key");
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
curl_exec($ch);