/**
 * 门票预订与订单支付接口 (Ticket & Order API)
 */
import request from "@/utils/request.js";

export default {
  // 门票详情
  getTicketDetail(ticketId) {
    return request.get(`product/app/v1/ticket/getTicketDetail?ticketId=${ticketId}`);
  },

  // 创建普通景区门票订单
  createTicketOrder(orderParams) {
    return request.post("order/app/v1/order/simpleTicketCreateOrder", orderParams, "正在生成订单...");
  },

  // 待支付订单换取支付参数
  getPayParams(orderNo) {
    return request.post("order/app/v1/order/waitPayToPay", { orderNo }, "获取支付中...");
  },

  // 发起微信支付
  requestWxPayment(payParams) {
    return new Promise((resolve, reject) => {
      uni.requestPayment({
        provider: "wxpay",
        timeStamp: String(payParams.timeStamp),
        nonceStr: payParams.nonceStr,
        package: payParams.packageValue || payParams.package,
        signType: payParams.signType || "MD5",
        paySign: payParams.paySign,
        success: resolve,
        fail: reject
      });
    });
  }
};
