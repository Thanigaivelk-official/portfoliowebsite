$env:Path = "C:\Users\vijay\AppData\Local\Programs\nodejs;" + $env:Path
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Starting Thanigaivel Portfolio on http://localhost:3000" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan
npm run dev
