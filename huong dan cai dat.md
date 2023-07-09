# Hướng dẫn cài đặt và chạy trên Server

## Build
- Build Web với lệnh:
```sh
mvn clean dependency:resolve install package
```
- Tìm package trong (web project)/target. Copy file .war và thư mục có cùng tên với file .war, sau đó nén lại thành `web.zip` để triển khai lên server

## Deploy
### Cài đặt các công cụ và thư viện cần thiết:
- Apache2: `sudo apt install apache2`
- OpenJDK 17 JRE: `sudo apt install openjdk-17-jre`
- MariaDB Server: `sudo apt install mariadb-server`
- Tomcat 10.1.7 [(Theo hướng dẫn sau)](https://tecadmin.net/how-to-install-tomcat-on-ubuntu-22-04/)

### Upload và quản lý file
- **Note:** Hướng dẫn này cho Server Ubuntu
- Upload file zip đến thư mục home (ví dụ: /home/{your_user_name}/).
    - Đặt tên file zip là `web.zip`, sau đó giải nén vào `web`

### Triển khai web lên tomcat
- Di chuyển tất cả các tệp trong thư mục `web` đến đường dẫn `/opt/tomcat/webapps`

### Nhập Database
- Đầu tiên, tạo database có tên `datn` :
    - Truy cập mariadb bằng lệnh:
    ```sh
    sudo mariadb
    ```
    - Tạo database mới bằng lệnh:
    ```sql
    CREATE DATABASE DATN;
    ```
    - Sau khi tạo database, thoát mariadb
    ```sql
    EXIT
    ```
- Nhập CSDL vào với lệnh: 
```sh
sudo mariadb -u root -p service < {tên file database}.sql
```
- Có thể cần thêm quyền cho root@localhost:
```sql
ALTER USER 'root'@'localhost' IDENTIFIED VIA mysql_native_password USING PASSWORD('');
```

### Cấu hình apache2
- Thay đổi thư mục vận hành thành /etc/apache2/sites-available.
```sh
cd /etc/apache2/sites-available
```
- Sao lưu các file mặc định (Có thể làm hoặc không):
```sh
sudo cp 000-default.conf 000-default.conf.bak
sudo cp default-ssl.conf default-ssl.conf.bak
```
- Sửa 2 file: `000-default.conf` và `default-ssl.conf`:
    - Mở file cho HTTP:
    ```sh
    sudo nano 000-default.conf
    ```
    - Comment 2 dòng:
    ```
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html

    Thành:
    // ServerAdmin webmaster@localhost
    // DocumentRoot /var/www/html
    ```
    - Thêm những dòng sau:
    ```conf
    ProxyPreserveHost Off
    ProxyPass / http://localhost:8080/
    ProxyPassReverse / http://localhost:8080/
    ```
    - (Ví dụ) Nội dung file sau khi chỉnh sửa:
    ```conf
    <VirtualHost *:80>
        ProxyPreserveHost Off
        ProxyPass / http://localhost:8080/
        ProxyPassReverse / http://localhost:8080/
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
    </VirtualHost>
    ```
    - Kích hoạt các mods và site bằng các lệnh:
    ```sh
    sudo a2ensite 000-default
    sudo a2ensite default-ssl
    sudo a2enmod proxy
    sudo a2enmod proxy_http
    sudo a2enmod proxy_balancer
    ```
    - Đối với HTTPS, cần cấu hình thủ công để thêm SSL vào apache2. Tham khảo tại https://www.digicert.com/kb/csr-ssl-installation/ubuntu-server-with-apache2-openssl.htm
    - Kiểm tra cú pháp các file trên bằng lệnh:
    ```sh
    sudo apache2ctl configtest
    ```
    - Lặp lại các bước trên cho HTTPS:
    ```sh
    sudo nano default-ssl.conf
    ```
    - Sau khi hoàn thành cấu hình, khởi động lại apache2 bằng lệnh sau:
    ```sh
    sudo systemctl restart apache2