Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "cmd /c start /B npm run dev", 0, True
Set WshShell = Nothing