# scrollloading
when document scroll to bottom will load data,下拉加载

## Install
```shell
 npm install scrollloading --save
```
## Use
```javascript
import ScrollLoad from 'scrollloading'
ScrollLoad.onscroll(function(){
  console.log('已滚动到底部,have scroll to bottom');/**when scrollbar turn to bottom distance 50px 
                                                   will trigger this callback**/
});
```
