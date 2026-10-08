$env:Path = "C:\Users\vijay\AppData\Local\Programs\Git\cmd;" + $env:Path
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Pushing to https://github.com/Thanigaivelk-official/portfoliowebsite" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan
git push -u origin main
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Push Completed!" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan
