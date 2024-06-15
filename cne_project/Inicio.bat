@echo off
cd client
start client.vbs
cd ..\server
start server.vbs
start http://localhost:5173/