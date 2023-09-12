# 學習筆記


其實我認為這門實體課可以直接單從 JS 語法開始講，當遇到真的要控制網頁內容的時候再來講解 HTML 與 CSS，這樣比較會有帶入感，而且老師也沒有深入使用，只是照本宣科的感覺，加上部分同學是沒有相關背景的，所以我認為其實可以專注在 JS 跟基本的程式設計上會比較好。

*同學表示: HTML?CSS? 我不是來學 JavaScript 的? (當然我知道他們關係密不可分，但就發發牢騷。)*


## HTML 概念

HTML 是屬於標籤語言而非程式語言，主要的語法為分為**標籤**和**屬性**。

- 標籤 (Tags) : HTML標籤是一個字串符號,可以用來標示文字內容套用的編排格式， 開頭及結尾個有一個標籤，並將內容包覆其中。

    ```html
    <p> 這是一個測試網頁 </p>
    ```

- 屬性 (Attributes) : 在每一個標籤可以透過一些屬性來定義細部編排,例如在\<img>標籤中就有 src、width、height 等屬性,可以指定顯示的圖形和尺寸的寬和高,
如下所示:
    ```html
    <img src="sample.jpg" width="20" height="30" />
    ```

### HTML 的架構


```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="utf-8">
<title>網頁標題文字</title>
</head>
<body>
    網頁內容
</body>
</html>
```

- `<!DOCTYPE html>`
    - 用來宣告 HTML 的版本，這個宣告方式也是從 HTML5 才開始，相較過去的簡化許多，
    - 因為是宣告用的所以不需要結尾標籤。
- `<html>`
    - 是 HTML的根元素，包含 head 和 body 兩個子標籤。
    - 可以透過增加 `lang="zh-TW"` 屬性告知瀏覽器網頁使用的語言。

- `<head>`
    - 內容是一些標題元素,如 `<title>`、`<meta>`、`<script>`和`<style>`等子標籤。
    - 也可以在這邊引入 CSS & JS 檔案的網址。
- `<body>`
    - 所有實際在瀏覽器顯示的網頁內容、網頁元素都放在這裡。

- 其他詳細的補充可以看這 [HTML - tag 基礎標籤介紹](https://yakimhsu.com/project/project_w6_HTML_tag.html)

## JavaScript 基礎
- 