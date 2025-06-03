# ローカルにZolaをインストールする [ここ](https://www.getzola.org/documentation/getting-started/installation/)


# クイックスタート

## ソースレポジトリをダウンロードする
バッシュ
git clone https://github.com/spacecubics/www.git
cd www
```
## サイトをビルドし、ローカルでテストできるようにする
```bash
zola serve
```

## 🚧建設中です。

このサイトの一部はまだ進行中です：

- お問い合わせフォーム
- **モバイル最適化**


## クレジット
Zolaと[Duckquill](https://www.getzola.org/themes/duckquill/)テンプレートにインスパイアされた。

# Install Zola locally [here](https://www.getzola.org/documentation/getting-started/installation/)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
English Version
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# Simple local test:

## Downlaod the source repo
```bash
git clone https://github.com/spacecubics/www.git
cd www
```
## Build site and serve for local testing
```bash
zola serve
```

## 🚧 Under Construction 🚧

Some parts of this site are still in progress:

- **Contact Form**
- **Mobile Optimization**

# Local test with wrangler (for testing cloudflare environment, webhooks, etc.):

```bash
zola build && wrangler pages dev public
```

## Credits
Inspired by Zola and the [Duckquill](https://www.getzola.org/themes/duckquill/) template.
