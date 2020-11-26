package cn.com.szhtkj.os.common.intercepter;

import cn.com.szhtkj.common.service.ICommonService;
import cn.com.szhtkj.os.common.util.ServletUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class InterceptorForUserLog extends HandlerInterceptorAdapter {
	
	private Logger logger = LoggerFactory.getLogger(getClass());
	@Autowired
	private ICommonService commonService;
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		String requestUri = request.getRequestURI();
		String contextPath = request.getContextPath();
		String url = requestUri.substring(contextPath.length());
		String type = request.getHeader("X-Requested-With");
		String ipAddr = ServletUtils.getIpAddr();
		//ajax请求不记录
		if("XMLHttpRequest".equals(type)){
			return true;
		}
		//持久化访问记录
		commonService.createLog(requestUri,type,ipAddr);
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {

	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
	}


}
