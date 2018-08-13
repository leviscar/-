# Flexbox布局（弹性盒子布局）
Flexbox 布局（国内很多人称为弹性布局）正式的全称为 CSS Flexible Box布局模块，它是CSS3新增的一种布局模式。它可以很方便地用来改善动态或未知大小的元素的对齐，方向和顺序等等。**flex容器的主要特性是它可以调整其子元素的宽度或高度去填充可用的空白区，以最优的方式达到兼容不同屏幕大小**

## 基础
flex布局由被称为 **flex container**（flex容器） 的父容器 和被称为 **flex item**（flex项）的直接子元素构成
## 使用
使用flexbox布局只要在父级HTML元素上设置`display`属性：
```css
.flex-container {
  display: -webkit-flex; /* Safari */
  display: flex;
}
```
或者如果你想将它像一个内联元素显示使用：
```css
.flex-container {
  display: -webkit-inline-flex; /* Safari */
  display: inline-flex;
}
```

**注意**：这是需要你在父容器上设置的唯一属性，并且其所有直接子元素将自动成为 flex item（flex项）

**我发现的了解 flexbox 选项的最简单的方法是将 flexbox 属性分成 flex container（flex容器）和 flex item（flex项） 两组。**

## Flexbox container 属性
### flex-direction

这个属性通过设置 flex container（flex容器） 的主轴方向，来指定 flex item（flex项） 在 flex container（flex容器） 中是如何布局的。flex item（flex项） 可以在两个主轴方向上排列布局，水平横向和垂直纵向两种
```css
.flex-container {
  -webkit-flex-direction: row; /* Safari */
  flex-direction:         row;
}
```
#### 属性值
- `row`(默认) 值为 row 方向，那么在ltr上下文中，所有 flex item（flex项） 从左到右排成一行
- 值为 row-reverse 方向，那么在ltr上下文中，所有 flex item（flex项） 从右到左排成一行。
- 值为 column 方向，那么所有 flex item（flex项） 从上到下排成一列。
- 值为 column-reverse 方向，那么所有 flex item（flex项） 从下到上排成一列

### flex-wrap
默认情况下，flexbox 理念是将容器中的所有子元素设置在一行中。flex-wrap属性可以控制 flex container（flex容器） 以单行还是多行布局其flex item（flex项），以及在新行上的排列方向
```css
.flex-container {
  -webkit-flex-wrap: nowrap; /* Safari */
  flex-wrap:         nowrap;
}

```
#### 属性值
- `nowrap`(默认) flex item（flex项） 会显示成一行，默认情况下，它们会自动伸缩，以适应 flex container（flex容器）的宽度。
- `wrap` flex item（flex项）会在flex container（flex容器）中， 按照从左到右，从上到下的顺序显示成多行

### flex-flow
这个属性是设置flex-direction和flex-wrap属性的速记写法
```css
.flex-container {
  -webkit-flex-flow:  || ; /* Safari */
  flex-flow:          || ;
}
```

### justify-content
justify-content属性用来指定 flex item（flex项）在当前 flex container（flex容器）主轴线（main axis）上的对齐方式。当所有flex item（flex项）都在同一行并且不可伸缩，或是可伸缩但已经达到它们最大尺寸的时候，它可以分配主轴线（main axis）上的剩余空间
```css
.flex-container {
  -webkit-justify-content: flex-start; /* Safari */
  justify-content:         flex-start;
}
```
- `flex-start`(默认) 在ltr上下文中， flex item（flex项）会在 flex container（flex容器）中靠左对齐
- `flex-end` 在ltr上下文中， flex item（flex项）会在 flex container（flex容器）中靠右对齐
- `center` 居中对齐
- `space-between` 两端对齐

### align-items
flex item（flex项）可以在 flex container（flex容器）的当前交叉轴（cross axis）上对齐方式，类似于`justify-content`，但是在垂直方向

```
justify-content是设置flex item（flex项）在主轴线（main axis）上的对齐方式；
align-items是设置flex item（flex项）在交叉轴（cross axis）上对齐方式
```

```css
.flex-container {
  -webkit-align-items: stretch; /* Safari */
  align-items:         stretch;
}
```

- `strech`(默认) flex item（flex项）会从cross start到cross end结束，填满整个 flex container（flex容器）的高度（或宽度）
- `flex-start` flex item（flex项）会以flex container（flex容器） 的交叉轴起始(cross start)线对齐
- `center` flex item（flex项）会以flex container（flex容器） 的交叉轴结尾（cross end）线对齐
- `baseline` flex item（flex项）会按照她们的文本基线（baseline）对齐


### flex container（flex容器）的注意点
- 所有的column-*属性在flex container（flex容器）上都不会有效果
- ::first-line 与 ::first-letter伪类在flex container（flex容器）上不会被应用

## flex item（flex项）的属性
### order
order属性用来控制 flex container（flex容器）中 flex item（flex项）的排列顺序。默认情况下，以它们被添加到 flex container（flex容器）中的顺序排序（愚人码头注：可以理解为以HTML结构的顺序排序）

```css
.flex-item {
  -webkit-order: ; /* Safari */
  order:         ;
}
```
#### 属性值
- flex item（flex项）可以使用这个简单的属性重新排序，而不需要重新修改HTML代码
  
### flex-grow
当 flex container（flex容器）存在剩余空间时，可以用flex-grow这个属性来确定 flex item（flex项）的拉伸比例
```css
.flex-item {
  -webkit-flex-grow: ; /* Safari */
  flex-grow:         ;
}
```

### flex-shrink
当 flex container（flex容器）空间不足时，可以用flex-shrink这个属性来确定 flex item（flex项）的收缩比例
```css
.flex-item {
  -webkit-flex-shrink: ; /* Safari */
  flex-shrink:         ;
}
```
### flex-basis
这个属性看作width和height属性相同的值，并在 flex 伸缩比例分配剩余空间之前，指定 flex item（flex项）的初始主要大小（愚人码头注： flex-grow 和 flex-shrink 伸缩比例分配剩余空间之前）
### flex
这个属性是flex-grow，flex-shrink和flex-basis属性的速记写法（简写或缩写）。 除了其他值，它也可以设置为auto(即：1 1 auto)和none(即：0 0 auto)