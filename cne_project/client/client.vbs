Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "cmd /c start /B serve -s dist", 0, True
Set WshShell = Nothing