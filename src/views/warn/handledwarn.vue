<template>
  <div class="container">
    <div class="sectionTitle">
      <div class="ant-breadcrumb">
        <span>
          <span class="ant-breadcrumb-link"> 首页 </span>
          <span class="ant-breadcrumb-separator">/</span>
        </span>
        <span>
          <span class="ant-breadcrumb-link">报警管理</span>
          <span class="ant-breadcrumb-separator">/</span>
        </span>
        <span>
          <span class="ant-breadcrumb-link">
            <span>当前报警</span>
          </span>
          <span class="ant-breadcrumb-separator">/</span>
        </span>
      </div>
    </div>
    <div class="sectionBody">
      <div class="operate">
        <form class="ant-form ant-form-inline ant-form-hide-required-mark">
          <div class="ant-row" style="margin-left: -9px">
            <div>
              <div
                class="ant-col-sm-24 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 ant-col-xxl-5"
              >
                <div class="ant-row ant-form-item">
                  <div class="ant-col-6 ant-form-item-label">
                    <label for="railway_line_id" class="" title="铁路线"
                      >铁路线</label
                    >
                  </div>
                  <div class="ant-col-12 ant-form-item-control-wrapper">
                    <div class="ant-form-item-control">
                      <span class="ant-form-item-children">
                        <div
                          id="railway_line_id"
                          class="ant-select ant-select-enabled"
                          style="width: 210px"
                        >
                          <div
                            class="ant-select-selection ant-select-selection--single"
                            role="combobox"
                            aria-autocomplete="list"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-__meta="[object Object]"
                            data-__field="[object Object]"
                            tabindex="0"
                          >
                            <div class="ant-select-selection__rendered">
                              <div
                                unselectable="on"
                                class="ant-select-selection__placeholder"
                                style="display: block; user-select: none"
                              >
                                请选择铁路线
                              </div>
                            </div>
                            <span
                              class="ant-select-arrow"
                              unselectable="on"
                              style="user-select: none"
                            >
                              <i
                                class="anticon anticon-down ant-select-arrow-icon"
                              >
                                <svg
                                  viewBox="64 64 896 896"
                                  class=""
                                  data-icon="down"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                                  ></path></svg></i
                            ></span>
                          </div></div
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="ant-col-sm-24 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 ant-col-xxl-5"
              >
                <div class="ant-row ant-form-item">
                  <div class="ant-col-6 ant-form-item-label">
                    <label for="station_id" class="" title="探测站"
                      >探测站</label
                    >
                  </div>
                  <div class="ant-col-12 ant-form-item-control-wrapper">
                    <div class="ant-form-item-control">
                      <span class="ant-form-item-children"
                        ><div
                          id="station_id"
                          class="ant-select ant-select-enabled"
                          style="width: 180px"
                        >
                          <div
                            class="ant-select-selection ant-select-selection--single"
                            role="combobox"
                            aria-autocomplete="list"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-__meta="[object Object]"
                            data-__field="[object Object]"
                            tabindex="0"
                          >
                            <div class="ant-select-selection__rendered">
                              <div
                                unselectable="on"
                                class="ant-select-selection__placeholder"
                                style="display: block; user-select: none"
                              >
                                请选择探测站
                              </div>
                            </div>
                            <span
                              class="ant-select-arrow"
                              unselectable="on"
                              style="user-select: none"
                              ><i
                                class="anticon anticon-down ant-select-arrow-icon"
                                ><svg
                                  viewBox="64 64 896 896"
                                  class=""
                                  data-icon="down"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                                  ></path></svg></i
                            ></span>
                          </div></div
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ant-col-sm-24 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 ant-col-xxl-6"
            >
              <div class="ant-row ant-form-item">
                <div class="ant-form-item-label">
                  <label for="keep_time" class="" title="持续时间"
                    >持续时间</label
                  >
                </div>
                <div class="ant-form-item-control-wrapper">
                  <div class="ant-form-item-control has-success">
                    <span class="ant-form-item-children"
                      ><div
                        id="keep_time"
                        class="ant-select ant-select-enabled"
                        style="width: 180px"
                      >
                        <div
                          class="ant-select-selection ant-select-selection--single"
                          role="combobox"
                          aria-autocomplete="list"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-__meta="[object Object]"
                          data-__field="[object Object]"
                          tabindex="0"
                        >
                          <div class="ant-select-selection__rendered">
                            <div
                              class="ant-select-selection-selected-value"
                              title=">5分钟"
                              style="display: block; opacity: 1"
                            >
                              &gt;5分钟
                            </div>
                          </div>
                          <span
                            class="ant-select-arrow"
                            unselectable="on"
                            style="user-select: none"
                            ><i
                              class="anticon anticon-down ant-select-arrow-icon"
                              ><svg
                                viewBox="64 64 896 896"
                                class=""
                                data-icon="down"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                                ></path></svg></i
                          ></span>
                        </div></div
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ant-col-sm-24 ant-col-md-12 ant-col-lg-2 ant-col-xl-3 ant-col-xxl-2"
              style="margin-top: 4px"
            >
              <button type="submit" class="ant-btn ant-btn-primary">
                <span>查 询</span>
              </button>
            </div>
          </div>
          <div class="ant-row-flex ant-row-flex-end">
            <div
              class="ant-col-sm-24 ant-col-md-12 ant-col-lg-4 ant-col-xl-3 ant-col-xxl-2"
              style="margin-top: 4px"
            >
              <button type="button" class="ant-btn ant-btn-primary">
                <span>关闭语音报警</span>
              </button>
            </div>
            <div
              class="ant-col-sm-24 ant-col-md-12 ant-col-lg-8 ant-col-xl-3 ant-col-xxl-6"
              style="margin-top: 4px"
            >
              <button type="button" class="ant-btn ant-btn-primary">
                <span>恢复语音报警</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="tableDiv">
        <h3 class="searchAndOperate">
          <i class="anticon anticon-info-circle ant-alert-icon"></i
          >当前报警记录列表共1个
        </h3>
        <div class="ant-table-wrapper">
          <div class="ant-spin-nested-loading">
            <div class="ant-spin-container">
              <div
                class="ant-table ant-table-small ant-table-bordered ant-table-scroll-position-left"
              >
                <div class="ant-table-content">
                  <div class="ant-table-body">
                    <table class="">
                      <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                      </colgroup>
                      <thead class="ant-table-thead">
                        <tr>
                          <th class="ant-table-selection-column">
                            <span
                              ><div class="ant-table-selection">
                                <label class="ant-checkbox-wrapper"
                                  ><span class="ant-checkbox"
                                    ><input
                                      type="checkbox"
                                      class="ant-checkbox-input"
                                      value=""
                                    />
                                    <span
                                      class="ant-checkbox-inner"
                                    ></span> </span
                                ></label></div
                            ></span>
                          </th>
                          <th class="" style="text-align: center">
                            <span>序号</span>
                          </th>
                          <th class="" style="text-align: center">
                            <span>铁路线</span>
                          </th>
                          <th class="" style="text-align: center">
                            <span>探测站</span>
                          </th>
                          <th class="" style="text-align: center">
                            <span>报警类型</span>
                          </th>
                          <th class="" style="text-align: center">
                            <span>故障原因</span>
                          </th>
                          <th class="" style="text-align: center">
                            <span>报警时间</span>
                          </th>
                          <th class="" style="text-align: center">
                            <span>持续时间</span>
                          </th>
                          <th class="" style="text-align: center">
                            <span>语音报警状态</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody class="ant-table-tbody">
                        <tr
                          class="ant-table-row ant-table-row-level-0"
                          data-row-key="0"
                        >
                          <td class="ant-table-selection-column">
                            <span
                              ><label class="ant-checkbox-wrapper"
                                ><span class="ant-checkbox"
                                  ><input
                                    type="checkbox"
                                    class="ant-checkbox-input"
                                    value=""
                                  />
                                  <span class="ant-checkbox-inner"> </span>
                                </span> </label
                            ></span>
                          </td>
                          <td class="" style="text-align: center">
                            <span
                              class="ant-table-row-indent indent-level-0"
                              style="padding-left: 0px"
                            ></span
                            >1
                          </td>
                          <td class="" style="text-align: center">乌西线</td>
                          <td class="" style="text-align: center">喀什</td>
                          <td class="" style="text-align: center">环境报警</td>
                          <td class="" style="text-align: center">
                            湿度异常报警
                          </td>
                          <td class="" style="text-align: center">
                            2021-03-04 11:21:12
                          </td>
                          <td class="" style="text-align: center">
                            82天5小时39分钟
                          </td>
                          <td class="" style="text-align: center">开启</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <ul
                class="ant-pagination ant-table-pagination mini"
                unselectable="unselectable"
              >
                <li
                  title="上一页"
                  class="ant-pagination-disabled ant-pagination-prev"
                  aria-disabled="true"
                >
                  <a class="ant-pagination-item-link"
                    ><i class="anticon anticon-left"
                      ><svg
                        viewBox="64 64 896 896"
                        class=""
                        data-icon="left"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                        ></path></svg></i
                  ></a>
                </li>
                <li
                  title="1"
                  class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"
                  tabindex="0"
                >
                  <a>1</a>
                </li>
                <li
                  title="下一页"
                  class="ant-pagination-disabled ant-pagination-next"
                  aria-disabled="true"
                >
                  <a class="ant-pagination-item-link"
                    ><i class="anticon anticon-right"
                      ><svg
                        viewBox="64 64 896 896"
                        class=""
                        data-icon="right"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"
                        ></path></svg></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>