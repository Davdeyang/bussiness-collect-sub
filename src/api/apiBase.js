const api = '/api';
const config = '/config';
export default {
    LOGIN:api + '/logonact/login.jspx',
	LOADS:api + '/system/loads.jspx',
	CURRENT_USER:api + '//portal.php?resid=user.get_current_user',
	PLAINS:api + '/system/plains.jspx',
	QUERY:api + '/selectact/query.jspx',
	OPTIONS:api + '/comboxact/options.jspx',
	COMXACT_LOAD:api + '/comxact/load.jspx',  //详情
	MSLOADS:api + '/comxact/msloads.jspx',
	COMXACT_COMBINE:api + '/comxact/combine.jspx',
	COMXACT_SAVE:api + '/comxact/save.jspx',
	TREEACT:api + '/treeact/load.jspx',
	COMXACT_REMOVE:api + '/comxact/remove.jspx',
	UPLOADER:api + '/portal.php?resid=upload.photo',
	COMXACT_BATCH:api + '/comxact/batchx.jspx',
	SYSTEM_CHECK:api + '/system/check.jspx',
	APPENDIX_LOADS:api + '/appendix/loads.jspx',
	//config:api + '/weixin/work/jssdk_config.jspx',
	WXLOGIN:api + '/portal.php?resid=wwuser.login',
	VIDEODETAIL: api + '/appendix/preview/4cc9fa5c1f87425bb65e18185073bcb4.jspx'
}
