# Mapeamento de nomes antigos para novos
$mapping = @{
    'imagem-1.jpeg' = 'projeto-marca-premium.jpg'
    'imagem-2.jpeg' = 'campanha-digital.jpg'
    'imagem-3.jpeg' = 'conteudo-social-media.jpg'
    'WhatsApp Image 2026-04-03 at 14.28.45.jpeg' = 'fotografia-comercial.jpg'
    'WhatsApp Image 2026-04-03 at 14.30.10.jpeg' = 'design-editorial.jpg'
    'WhatsApp Image 2026-04-03 at 14.30.102.jpeg' = 'branding-completo.jpg'
    'WhatsApp Image 2026-04-03 at 14.30.11.jpeg' = 'producao-video.jpg'
    'WhatsApp Image 2026-04-03 at 14.30.116.jpeg' = 'layout-digital.jpg'
    'WhatsApp Image 2026-04-03 at 14.30.120.4jpeg.jpeg' = 'embalagem-premium.jpg'
    'WhatsApp Image 2026-04-03 at 14.30.120.jpeg' = 'estrategia-conteudo.jpg'
    'WhatsApp Image 2026-04-03 at 14.30.181.jpeg' = 'fotografia-eventos.jpg'
    'WhatsApp Image 2026-04-03 at 14.30.191.jpeg' = 'criativo-publicidade.jpg'
    'WhatsApp Image 2026-04-03 at 14.30.210.jpeg' = 'catalogo-digital.jpg'
    'WhatsApp Image 2026-04-03 at 14.301.10.jpeg' = 'motion-graphics.jpg'
    'WhatsApp Image 2026-04-03 at 14.306.10.jpeg' = 'instagram-reels.jpg'
    'WhatsApp Image 2026-04-03 at 14.33.230.jpeg' = 'ilustracao-digital.jpg'
    'WhatsApp Image 2026-04-03 at 14.33.233.jpeg' = 'webdesign-responsivo.jpg'
    'WhatsApp Image 2026-04-03 at 14.33.239.jpeg' = 'apresentacao-corporativa.jpg'
    'WhatsApp Image 2026-04-03 at 14.33.623.jpeg' = 'fotografia-produto.jpg'
    'WhatsApp Image 2026-04-03 at 14.337.23.jpeg' = 'gestao-redes.jpg'
    'WhatsApp Image 2026-04-03 at 14.40.170.jpeg' = 'consultoria-marca.jpg'
}

$path = 'C:\Users\igorl\Desktop\projeto-site-pedro\src\imagens\fotos-portifolio'

foreach ($oldName in $mapping.Keys) {
    $oldPath = Join-Path $path $oldName
    $newPath = Join-Path $path $mapping[$oldName]
    
    if (Test-Path $oldPath) {
        Rename-Item -Path $oldPath -NewName $mapping[$oldName]
        Write-Host "✓ Renomeado: $oldName -> $($mapping[$oldName])"
    } else {
        Write-Host "✗ Arquivo não encontrado: $oldName"
    }
}

Write-Host "`n✅ Renomeação concluída!"
