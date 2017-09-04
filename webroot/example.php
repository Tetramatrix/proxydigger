<?php
require 'class.IP2Proxy.php';
require "proxies.php";

if( !ini_get('safe_mode') )
{
    ini_set("max_execution_time","0");
    ini_set("memory_limit","800M");
}
set_time_limit(0);

$db = new \IP2Proxy\Database();
$db->open('./databases/IP2PROXY-LITE-PX4.BIN', \IP2Proxy\Database::FILE_IO);

$countryCode = $db->getCountryShort('1.0.241.135');
echo '<p><strong>Country Code: </strong>' . $countryCode . '</p>';

$countryName = $db->getCountryLong('1.0.241.135');
echo '<p><strong>Country: </strong>' . $countryName . '</p>';

$regionName = $db->getRegion('1.0.241.135');
echo '<p><strong>Region: </strong>' . $regionName . '</p>';

$cityName = $db->getCity('1.0.241.135');
echo '<p><strong>City: </strong>' . $cityName . '</p>';

$isp = $db->getISP('1.0.241.135');
echo '<p><strong>ISP: </strong>' . $isp . '</p>';

$proxyType = $db->getProxyType('1.0.241.135');
echo '<p><strong>Proxy Type: </strong>' . $proxyType . '</p>';

$isProxy = $db->isProxy('1.0.241.135');
echo '<p><strong>Is Proxy: </strong>' . $isProxy . '</p>';

$records = $db->getAll('1.0.241.135');
echo '<pre>';
print_r($records);
echo '</pre>';

$records = $db->getAll(long2ip(84410368));
echo '<pre>';
print_r($records);
echo '</pre>';

foreach ($proxies as $key => $value) {
	
	$records = $db->getAll(long2ip($value));
	echo $records["ipAddress"].",";
//	echo "$key,";
}

die();

$e=sprintf('%u', ip2long("255.255.255.255"));
foreach (range(0,$e,256) as $long) {	
	$records = $db->getAll(long2ip($long));
	if ($records["isProxy"]==1) {
		echo($records["ipNumber"]).",";
	}
}


	


$db->close();