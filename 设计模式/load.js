var getUploadObj = function(){
        try{
            return new ActiveXObject("TXFTNActiveX.FTNUpload"); // IE 上传控件
        }catch(e){
            if ( supportFlash() ){ // supportFlash 函数未提供
                var str = '<object type="application/x-shockwave-flash"></object>';
                return $( str ).appendTo( $('body') );
            }else{
                var str = '<input name="file" type="file"/>'; // 表单上传
                return $( str ).appendTo( $('body') );
            }
        }
}



var getActiveUploadObj = function(){
    try{
        return new ActiveXObject( "TXFTNActiveX.FTNUpload" ); // IE 上传控件
    }catch(e){
        return false;
    }
};
var getFlashUploadObj = function(){
    if ( supportFlash() ){ // supportFlash 函数未提供
        var str = '<object type="application/x-shockwave-flash"></object>';
        return $( str ).appendTo( $('body') );
    }
    return false;
};
var getFormUpladObj = function(){
    var str = '<input name="file" type="file" class="ui-file"/>'; // 表单上传
    return $( str ).appendTo( $('body') );
};