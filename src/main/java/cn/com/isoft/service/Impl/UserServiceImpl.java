package cn.com.isoft.service.Impl;

import cn.com.isoft.service.UseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserServiceImpl implements UseService {

	@Cacheable(value = "szhtCommonCache", key = "'UserServiceImpl.he'")
	@Override
	public String he() {
		log.info("-------------");
		return "1";
	}
}
