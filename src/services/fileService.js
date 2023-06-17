const path = require('path')

const uploadSingleFile = async (fileObject) => {
//ý tưởng l a.png thfi ta chèn hàm Date.now() và giữa a và png để khi ta lưu 1 ảnh giống ảnh cũ
// thì ta có hàm thời gian ở giữa thì nó sẽ khác nhau
//đường dẫn tới chỗ lưu ảnh
    let uploadPath = path.resolve(__dirname, "../public/images/upload");
//tên đuôi của ảnh/ sau dấu chấm
    let extName = path.extname(fileObject.name)
    // lấy thằng trước dấu chấm
    let basename = path.basename(fileObject.name, extName)

    let finalname = `${basename}-${Date.now()}${extName}`;
    let finalpath = `${uploadPath}/${finalname}`
    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObject.mv(finalpath);
        return ({
            status: 'ok',
            path: finalname,
        })
    } catch (error) {
        console.log('chek error', error)
        return ({
            status: 'failed',
            path: null,
            error: JSON.stringify(error)
        });
    }
}
const uploadMultiFile = async (multiFiles) => {

    multiFiles.map(async (item) => {
        let uploadPath = path.resolve(__dirname, "../public/images/upload");
//tên đuôi của ảnh/ sau dấu chấm
    let extName = path.extname(item.name)
    // lấy thằng trước dấu chấm
    let basename = path.basename(item.name, extName)

    let finalname = `${basename}-${Date.now()}${extName}`;
    let finalpath = `${uploadPath}/${finalname}`
        try {
            await item.mv(finalpath);
            return ({
                status: 'ok'
            })
        } catch (error) {
            console.log('check err:', error);
        }
    })
}
module.exports = { uploadMultiFile, uploadSingleFile }