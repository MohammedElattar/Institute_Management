<?php
ob_start();
session_start();
require("../app/init.php");
$app = new App();
ob_end_flush();
