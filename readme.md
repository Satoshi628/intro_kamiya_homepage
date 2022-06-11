# 自己紹介ページ作成

html,css,javascriptの勉強のために自己紹介ページを作成する。
参考になったサイトや、使ったツールなどを紹介する。

## 使用したライブラリやツール

### [MDN web Docs](https://developer.mozilla.org/ja/docs/Web)
html,css,javascriptの要素や、関数などこれを見ればすべてわかるようになっているサイト

### unsplash
ランダムに画像を出力してくれるAPI
```
<img src="https://source.unsplash.com/random/150x150" alt="">
background-image: url("https://source.unsplash.com/random/1600x150");
```

### Grid
視覚的にわかりやすくレイアウトを編集できるライブラリ
```
body {
  display: grid;
  grid-template:
    "header header header header header" 150px
    "...... ...... ...... ...... ......" 10px
    "left   ...... center ...... right "
    "...... ...... ...... ...... ......" 50px
    "footer footer footer footer footer" 150px
    / 200px 10px 600px 10px 200px;
}
```
### [動くWebデザインアイディア帳](https://coco-factory.jp/ugokuweb/)
様々な動くレイアウトの書き方を紹介してくれるサイト

### [caniuse](https://caniuse.com/)
ライブラリがレスポンシブ対応しているか確認できるサイト

## モデルとして参考にしたサイト:

[OPTiM Multiple Object Trackingの手法・ライブラリ紹介 ](https://tech-blog.optim.co.jp/entry/2021/07/07/100000#MOT%E3%83%99%E3%83%B3%E3%83%81%E3%83%9E%E3%83%BC%E3%82%AF%E3%81%A7%E9%A1%95%E8%91%97%E3%81%AA%E6%88%90%E7%B8%BE%E3%82%92%E6%AE%8B%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%83%A2%E3%83%87%E3%83%AB%E3%81%9F%E3%81%A1)

[qiita.com](https://qiita.com/)
