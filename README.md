# Wallet

Bản web tĩnh chuyển từ Sổ Chi Tiêu: HTML/CSS/JavaScript + Supabase Auth và Database.
Không cần Next.js, Node hay bước build để đưa lên GitHub Pages.

## Đăng lên GitHub Pages
1. Tải toàn bộ nội dung thư mục này vào gốc repository Wallet: index.html và các tệp khác nằm cạnh README.md; giữ thư mục icons.
2. Settings → Pages → Source: Deploy from a branch → Branch: main → Folder: /(root) → Save.
3. Khi GitHub báo xuất bản xong, mở URL do Pages cung cấp.
4. Supabase → Authentication → URL Configuration:
   - Site URL: https://nguyennhattan1808.github.io/Wallet/
   - Redirect URLs: thêm chính xác https://nguyennhattan1808.github.io/Wallet/
   Nếu GitHub cung cấp URL khác, dùng URL thực tế đó ở cả hai nơi.
5. Mở app, tạo tài khoản bằng email. Mở thư xác nhận rồi đăng nhập.
6. Kiểm tra bằng dữ liệu thử trước khi nhập sổ thật. Đăng nhập cùng tài khoản trên thiết bị thứ hai để kiểm tra đồng bộ.

## Supabase
Bảng public.wallet_data đã được tạo trong bước thiết lập. Mỗi user_id có một dòng, chứa sổ và tối đa 50 mục lịch sử cập nhật. Ba policy SELECT/INSERT/UPDATE giới hạn user_id = auth.uid().
File config.js chỉ chứa Project URL và Publishable key, được phép dùng trong trình duyệt. Không đưa Secret key, service_role, mật khẩu database hoặc bản sao lưu tài chính vào repository.
Các lần lưu dùng revision để từ chối ghi đè từ thiết bị đang giữ phiên bản cũ.

## Chuyển dữ liệu
Trong app Sites cũ: Cài đặt → Dữ liệu & sao lưu → Sao lưu JSON.
Trong Wallet mới: Cài đặt → Nhập bản sao lưu → xem trước → sao lưu sổ hiện tại nếu đã có dữ liệu → xác nhận.
Không tải JSON chứa dữ liệu cá nhân lên GitHub.

## Phạm vi
Giữ chức năng của app Sổ Chi Tiêu hiện tại: tổng quan, thu/chi, chuyển tiền, tài khoản, ngân sách tháng, lịch, tiết kiệm, báo cáo, danh mục với 60 icon đất sét, CSV, JSON và thùng rác.
Đây là bản chuyển từ Sổ Chi Tiêu, không phải dự án Chi tiêu nhà Nấm có mục vàng.
Cần mạng để tải thư viện đăng nhập, đăng nhập và đọc/lưu dữ liệu. Không có chế độ ghi giao dịch ngoại tuyến.
Email xác nhận/đặt lại mật khẩu phụ thuộc cấu hình gửi email và hạn mức Supabase; cấu hình SMTP riêng nếu cần dùng rộng rãi.

## Kiểm tra trước khi dùng thực tế
Đã kiểm tra cú pháp và các phép tính kế thừa. Cần kiểm tra thực tế đăng ký/xác nhận email, lưu và tải lại trên hai thiết bị và cách ly dữ liệu giữa hai tài khoản sau khi xuất bản.
