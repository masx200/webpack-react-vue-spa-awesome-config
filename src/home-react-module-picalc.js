import React from "react";
// import extendmytextarea from "./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/extendmytextarea.js";
import Mypidashujisuanbigint from "./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan-bigint.js"; // } //   关闭所有worker as 关闭所有worker1 // , {
import Mypidashujisuandecimal from "./圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架/mypidashujisuan-decimal.js"; // } //   关闭所有worker as 关闭所有worker2 //  {
// var React = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");
var { useEffect } = React;
/* 应该再卸载组件时关闭所有worker */
export default function Picalc() {
  useEffect(() => {
    document.title =
      "masx200的github主页-" +
      "圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架webworker输出useragent大数框架";
    // extendmytextarea();
    // mypidashujisuandecimal();
    // mypidashujisuanbigint();
    return () => {
      //   关闭所有worker1();
      //   关闭所有worker2();
    };
  }, []);
  return (
    <div>
      <div>
        <p />
        <div>
          <h3>计算运行速度排行:</h3>
          <br />
          <p>1.原生BigInt最快,</p>
          <br />
          <p>2.BigInteger.js中速,</p>
          <br />
          <p>3.Decimal.js最慢。</p>
        </div>

        <hr />

        <details>
          <summary class=" btn btn-outline-primary mui-btn mui-btn-outline-primary">
            {/* <button
                  class=" btn btn-outline-primary"
                  // type="button"
                  // data-toggle="collapse"
                  // data-target="#collapsiblecontainer1"
                > */}
            展开收起测试结果对比
            {/* </button> */}
          </summary>

          <br />
          <div id="collapsiblecontainer1" class="collapse row show">
            <div class="col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12">
              <h4>线程数为8 圆周率计算15000位测试结果</h4>
              <br />
              <p>chrome 62 测试 BigInteger.js 达到1倍速度</p>

              <br />
              <p>chrome 74 测试 原生BigInt 达到11.16倍速度</p>
            </div>
            <hr />
            <div class="col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12">
              <h4>线程数为4 圆周率计算6000位测试结果</h4>
              <br />
              <p>firefox 66 测试 decimal.js 达到1倍速度</p>

              <br />
              <p>firefox 66 测试 BigInteger.js 达到2.163倍速度</p>

              <br />
              <p>chrome 75 测试 decimal.js 达到3.4375倍速度</p>
              <br />

              <p>chrome 75 测试 原生BigInt 达到74.038倍速度</p>
            </div>
            <hr />
            <div class="col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12">
              <h4>线程数为4 圆周率计算10000位测试结果</h4>
              <br />
              <p>firefox 66 测试 decimal.js 达到1倍速度</p>
              <br />
              <p>firefox 66 测试 BigInteger.js 达到2.066倍速度</p>
              <br />
              <p>chrome 75 测试 decimal.js 达到3.688倍速度</p>
              <br />

              <p>chrome 75 测试 原生BigInt 达到100.773倍速度</p>
            </div>
            <hr />
            <div class="col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12">
              <h4>线程数为8 圆周率计算10000位测试结果</h4>

              <br />
              <p>firefox 66 测试 BigInteger.js 达到1倍速度</p>
              <br />
              <p>chrome 62 测试 BigInteger.js 达到6.688倍速度</p>
              <br />

              <p>chrome 74 测试 原生BigInt 达到49.710倍速度</p>
            </div>
            <hr />

            <p />
            <br />
          </div>
        </details>
      </div>
      <hr />
      <Mypidashujisuanbigint />
      <hr />
      <Mypidashujisuandecimal />
    </div>
  );
}
