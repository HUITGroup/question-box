# question-box

HUIT の Discord チャンネルに匿名で質問を送るための静的サイトです。
firebase などで手軽に作れます。

# 使い方

sample.env に Discord Webhook URL を設定し、.env にリネームします

```.env

REACT_APP_DISCORD_WEBHOOK=https://discord.com/webhook/url

```

その後 firebase などにデプロイすれば使えます。