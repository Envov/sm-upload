module.exports = {
	'parser':'@typescript-eslint/parser',  //ESLint的解析器换成 @typescript-eslint/parser 用于解析ts文件
	'extends': ['plugin:@typescript-eslint/recommended'], // 让ESLint继承 @typescript-eslint/recommended 定义的规则
	'env': {'node': true}
}
