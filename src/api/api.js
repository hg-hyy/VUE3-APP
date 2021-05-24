import Http from '../utils/request';

// Log in to the new interface
const login = (data) => {
    return Http.post('/d_sysop/v1.0/login', data)
};

//Interface export
export {
    login
}

export function getTemplate() {
    return new Promise((resolve, reject) => {
        resolve({
            data: [{
                template_table_name: "日报",
                template_description: "asgvabsadbsd"
            }]
        })
    })
}
export function getTemplateHeader() {
    return new Promise((resolve, reject) => {
        resolve({
            data: {
                data: [{
                        attribute_name: "组名称"
                    },
                    {
                        attribute_name: "上机组"
                    },
                    {
                        attribute_name: "组领导"
                    },
                    {
                        attribute_name: "销售目标"
                    },
                    {
                        attribute_name: "是否启用"
                    },
                ],
                need_save_pictures: false,

            }
        })
    })
}
export function saveExcel() {
    return new Promise((resolve, reject) => {
        resolve({
            data: {
                data: [{
                    attribute_name: "aa"
                }],
                need_save_pictures: false,

            }
        })
    })
}
export function uploadPicToQn() {
    return new Promise((resolve, reject) => {
        resolve({
            data: {
                data: [{
                    attribute_name: "aa"
                }],
                need_save_pictures: false,

            }
        })
    })
}
export function getFailData() {
    return new Promise((resolve, reject) => {
        resolve({
            data: {
                data: [{
                    attribute_name: "aa"
                }],
                need_save_pictures: false,

            }
        })
    })
}