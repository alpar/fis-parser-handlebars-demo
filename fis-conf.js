//插件与配置
fis.config.merge({
    modules : {
        parser : {
            //.tmpl后缀的文件使用fis-parser-utc插件编译
            tmpl : 'handlebars'
        }
    },
    settings : {
        parser : {
            handlebars : {
                useData: true
            }
        }
    }
});

//目录规范

fis.config.merge({
    roadmap : {
        path : [
            {
                //前端模板
                reg : '**.tmpl',
                //当做类js文件处理，可以识别__inline, __uri等资源定位标识
                isJsLike : true,
                //只是内嵌，不用发布
                release : false
            }
        ]
    }
});