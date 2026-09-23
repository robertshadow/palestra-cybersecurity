# Demonstração de Engenharia Social — QR Code

## Objetivo
Landing page estática para uma dinâmica educacional de engenharia social.
Não há backend, formulário funcional, analytics ou código de coleta de dados.

## Fluxo
1. Material da palestra
2. Revelação do teste
3. Simulação de solicitação de e-mail (campo bloqueado/read-only)
4. Segunda revelação
5. Checklist "Pare → Observe → Verifique"
6. Link para o material real

## Antes de publicar
Abra `script.js` e substitua:
`https://example.org/material-real`
pela URL do material verdadeiro.

## Publicação
Pode ser hospedado como site estático em GitHub Pages, Cloudflare Pages,
Netlify ou servidor web institucional. Publique os três arquivos na mesma pasta:
- index.html
- style.css
- script.js

## Privacidade
O código fornecido não contém:
- analytics;
- cookies próprios;
- formulários enviados;
- captura de e-mail;
- captura de senha;
- fingerprint;
- chamadas fetch/XHR;
- backend.

Observação: o provedor de hospedagem pode manter logs técnicos próprios (por exemplo,
IP e user-agent) conforme a política dele. Se a exigência for não haver logs de
terceiros, hospede na infraestrutura aprovada pela universidade.

## QR Code
Gere o QR Code SOMENTE depois de conhecer a URL pública definitiva.
Antes da palestra, teste em Android e iPhone, em 4G/5G e Wi-Fi da instituição.

## Ensaio recomendado
- Deixe o QR Code na tela por 30–60 segundos.
- Pergunte "Quem conseguiu acessar?"
- Faça a primeira revelação.
- Não identifique participantes individualmente.
- Use a segunda simulação apenas como reflexão, sem pedir dado real.
