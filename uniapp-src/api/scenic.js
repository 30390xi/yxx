/**
 * 景区业务相关接口 (Scenic Spot API)
 */
import request from "@/utils/request.js";

export default {
  // 获取景区详情 (包含图文、标签、开放状态等)
  getScenicDetail(scenicId) {
    return request.get(`base/app/v1/scenicSpot/getAppScenicSpotDetail?scenicId=${scenicId}`, {}, "加载景区数据...");
  },

  // 获取景区列表与标签筛选
  getScenicList(params) {
    return request.post("base/app/v1/scenicSpot/getAppScenicSpotList", params);
  },

  // 获取景区门票分类与可售票品列表
  getTicketListByScenic(scenicId) {
    return request.get(`product/app/v1/ticket/getTicketListByScenicId?scenicId=${scenicId}`);
  },

  // 景区实时人流与游览指南
  getScenicFlow(scenicId) {
    return request.get(`base/app/v1/scenicSpot/getRealTimeFlow?scenicId=${scenicId}`);
  }
};
