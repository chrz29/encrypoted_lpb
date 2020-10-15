<?php
/*   __________________________________________________
    |  Obfuscated by YAK Pro - Php Obfuscator  2.0.4   |
    |              on 2019-04-19 01:28:36              |
    |    GitHub: https://github.com/pk-fr/yakpro-po    |
    |__________________________________________________|
*/
 class env { public static $IP; public static $MAC; public function getIP() { env::$IP = $_SERVER["\x52\105\x4d\x4f\x54\x45\137\x41\x44\x44\x52"]; } public function getMAC($ip) { goto Afb89eaa6e7742dd915da03a12d1ace0; a765fd801b1b56a9952a5f8a536a646e: $mac = exec($macCommandString); goto a19da6e8470ff6b38f95bbbb592c47b4; Afb89eaa6e7742dd915da03a12d1ace0: $macCommandString = "\x61\162\160\x20{$ip}\x20\x7c\40\141\x77\x6b\40\47\102\105\x47\111\116\173\x20\x69\x3d\61\73\40\175\x20\x7b\x20\151\x2b\x2b\x3b\40\x69\146\50\151\75\x3d\x33\51\40\160\162\x69\x6e\164\40\44\63\40\175\x27"; goto a765fd801b1b56a9952a5f8a536a646e; a19da6e8470ff6b38f95bbbb592c47b4: env::$MAC = $mac; goto ffbabe49e4c99c2dd48ffdbe2767d47c; ffbabe49e4c99c2dd48ffdbe2767d47c: } function __construct() { $this->getIP(); $this->getMAC(env::$IP); } }
