// Thêm bất kỳ mã JavaScript nào bạn cần để xử lý form hoặc tương tác người dùng
// Ví dụ: Mã để hiển thị một thông báo khi form được gửi
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('anniversaryForm');
    form.addEventListener('submit', (event) => {
        alert('Form đã được gửi. Cảm ơn bạn đã lựa chọn!');
    });
});
