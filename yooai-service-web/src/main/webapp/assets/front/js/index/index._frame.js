/*
 * 初始化上传插件
 */
function initUpload(){
	$("#uploadify").uploadify({
		debug: false,
		swf: 'js/uploadify.swf', //swf文件路径
		method: 'post', // 提交方式
		uploader: 'say/send', // 服务器端处理该上传请求的程序(servlet, struts2-Action)
		preventCaching: true, // 加随机数到URL后,防止缓存
		buttonCursor: 'hand', // 上传按钮Hover时的鼠标形状
		buttonText: '上传图片', //按钮上显示的文字，默认”SELECTFILES”
		height: 30, // 30 px
		width: 120, // 120 px
		fileObjName: 'filedata', //文件对象名称, 即属性名
		fileSizeLimit: 1024*1024*6, // 文件大小限制, 100 KB
		fileTypeDesc: 'any', //文件类型说明 any(*.*)
		fileTypeExts: '*.jpg;*.png；*.zip', // 允许的文件类型,分号分隔
		formData: {
			'id': '1',
			'name': 'myFile'
		}, //指定上传文件附带的其他数据。也动态设置。可通过getParameter()获取
		multi: true, // 多文件上传
		progressData: 'speed', // 进度显示, speed-上传速度,percentage-百分比	
		queueID: 'fileQueue', //上传队列的DOM元素的ID号
		queueSizeLimit: 99, // 队列长度
		removeCompleted: false, // 上传完成后是否删除队列中的对应元素
		removeTimeout: 2, //上传完成后多少秒后删除队列中的进度条, 
		requeueErrors: true, // 上传失败后重新加入队列
		uploadLimit: 20, // 最多上传文件数量
		successTimeout: 30, //表示文件上传完成后等待服务器响应的时间。超过该时间，那么将认为上传成功。
		// 打开文件对话框 关闭时触发
		onDialogClose: function(queueData) {
		},
		// 选择文件对话框打开时触发
		onDialogOpen: function() { /*alert( 'please select files' ) */ },
		// 没有兼容的FLASH时触发
		onFallback: function() {
			alert('Flash was not detected!')
		},
		onUploadError: function(file, errorCode, errorMsg, errorString) {
			 alert(
                            file.name + ' upload failed! ' + 
                            'errorCode: ' + errorCode +
                            'errorMsg:' + errorMsg +
                            'errorString:' + errorString
                        );
		},
		// 在每一个文件上传成功后触发
		onUploadSuccess: function(file, data, response) {
			//上传成功后，把上传队列的第一个删除
		//	$('#uploadify').uploadify('cancel','*');
		}
	});
}




