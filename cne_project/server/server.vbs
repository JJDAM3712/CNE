Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "cmd /c start /B node src/index.js", 0, True
Set WshShell = Nothing