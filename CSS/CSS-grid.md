# 栅格布局
- 与 flexbox 的一维布局系统不同，CSS Grid 布局是一个二维布局系统，也就意味着它可以同时处理列和行。通过将 CSS 规则应用于 父元素 (成为 Grid Container 网格容器)和其 子元素（成为 Grid Items 网格项）
- CSS Grid 布局由两个核心组成部分是 wrapper（父元素）和 items（子元素）。 wrapper 是实际的 grid(网格)，items 是 grid(网格) 内的内容
  
# 重要术语
## 网格容器（Grid Container）
应用 display: grid 的元素。这是所有网格项（Grid Items）的直接父级元素。在这个例子中，container 就是 网格容器(Grid Container)
## 网格项（Grid Item）
网格容器（Grid Container）的子元素（例如直接子元素）。这里 item 元素就是网格项(Grid Item)，但是 sub-item 不是
### 网格容器（Grid Container）属性

1. dispay
2. grid-template-columns
3. grid-template-rows
4. grid-template
5. grid-column-gap
6. grid-row-gap
7. grid-gap
8. justify-content
9. align-content
10. justify-items
11. align-items
12. grid-auto-columns
13. grid-auto-rows
14. grid-auto-flow
15. grid

### 网格项（Grid Items）属性
1. grid-column-start
2. grid-column-end
3. grid-row-start
4. grid-row-end
5. grid-column
6. grid-row
7. grid-area
8. justify-self
9. align-self